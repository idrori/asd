/**
 * Vercel Serverless Function: Generate PNG Figures
 *
 * Creates publication-quality PNG figures from chart data
 * Uploads to Vercel Blob storage and returns URLs
 *
 * Uses QuickChart.io API (no server-side rendering required)
 *
 * Endpoint: POST /api/generate-figures
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';
import { randomBytes } from 'crypto';

export const config = {
  maxDuration: 60,
};

interface ChartData {
  type: 'histogram' | 'bar' | 'scatter' | 'heatmap';
  column?: string;
  columns?: string[];
  x_column?: string;
  y_column?: string;
  data: any;
  stats?: Record<string, any>;
  correlation?: number;
}

interface GenerateFiguresRequest {
  chartData: ChartData[];
  sessionId: string;  // To group figures by session
}

interface GeneratedFigure {
  filename: string;
  blobUrl: string;
  description: string;
  width?: number;
  height?: number;
}

// SECURITY: Use cryptographically secure random token generation
function generateSessionId(): string {
  return randomBytes(12).toString('base64url');
}

// Convert chart data to QuickChart configuration
function createQuickChartConfig(chart: ChartData, index: number): { config: any; description: string } {
  const columnName = chart.column || chart.x_column || `chart_${index}`;
  const safeColumnName = columnName.replace(/_/g, ' ');

  switch (chart.type) {
    case 'histogram': {
      const histData = chart.data as Array<{ bin_start: number; bin_end: number; count: number }>;
      const labels = histData.map(d => d.bin_start.toFixed(2));
      const values = histData.map(d => d.count);
      const meanValue = chart.stats?.mean;

      return {
        config: {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: safeColumnName,
              data: values,
              backgroundColor: 'rgba(59, 130, 246, 0.7)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: `Distribution of ${safeColumnName}${chart.stats ? ` (n=${chart.stats.count}, mean=${chart.stats.mean?.toFixed(2)}, std=${chart.stats.std?.toFixed(2)})` : ''}`,
                font: { size: 14 }
              },
              legend: { display: false },
              annotation: meanValue ? {
                annotations: {
                  meanLine: {
                    type: 'line',
                    xMin: labels.findIndex(l => parseFloat(l) >= meanValue),
                    xMax: labels.findIndex(l => parseFloat(l) >= meanValue),
                    borderColor: 'rgb(239, 68, 68)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    label: {
                      display: true,
                      content: `Mean: ${meanValue.toFixed(2)}`,
                      position: 'start'
                    }
                  }
                }
              } : undefined
            },
            scales: {
              x: {
                title: { display: true, text: safeColumnName },
                ticks: { maxRotation: 45 }
              },
              y: {
                title: { display: true, text: 'Frequency' },
                beginAtZero: true
              }
            }
          }
        },
        description: `Distribution of ${safeColumnName}${chart.stats ? ` (n=${chart.stats.count}, mean=${chart.stats.mean?.toFixed(2)}, std=${chart.stats.std?.toFixed(2)})` : ''}`
      };
    }

    case 'bar': {
      const barData = chart.data as Record<string, number>;
      const labels = Object.keys(barData).map(k => k.substring(0, 20));
      const values = Object.values(barData);

      return {
        config: {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: safeColumnName,
              data: values,
              backgroundColor: 'rgba(16, 185, 129, 0.7)',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: `Value Distribution for ${safeColumnName}`,
                font: { size: 14 }
              },
              legend: { display: false }
            },
            scales: {
              x: {
                title: { display: true, text: safeColumnName },
                ticks: { maxRotation: 45 }
              },
              y: {
                title: { display: true, text: 'Count' },
                beginAtZero: true
              }
            }
          }
        },
        description: `Value distribution for ${safeColumnName}`
      };
    }

    case 'scatter': {
      const scatterData = chart.data as Array<[number, number]>;
      const xCol = chart.x_column || 'X';
      const yCol = chart.y_column || 'Y';
      const safeXCol = xCol.replace(/_/g, ' ');
      const safeYCol = yCol.replace(/_/g, ' ');

      return {
        config: {
          type: 'scatter',
          data: {
            datasets: [{
              label: `${safeXCol} vs ${safeYCol}`,
              data: scatterData.map(([x, y]) => ({ x, y })),
              backgroundColor: 'rgba(139, 92, 246, 0.6)',
              borderColor: 'rgba(139, 92, 246, 1)',
              pointRadius: 4
            }]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: `${safeXCol} vs ${safeYCol}${chart.correlation !== undefined ? ` (r = ${chart.correlation.toFixed(3)})` : ''}`,
                font: { size: 14 }
              }
            },
            scales: {
              x: { title: { display: true, text: safeXCol } },
              y: { title: { display: true, text: safeYCol } }
            }
          }
        },
        description: `Scatter plot of ${safeXCol} vs ${safeYCol}${chart.correlation !== undefined ? ` (Pearson r = ${chart.correlation.toFixed(3)})` : ''}`
      };
    }

    case 'heatmap': {
      // For heatmap, create a simplified correlation matrix visualization
      const corrMatrix = chart.data as Record<string, Record<string, number | null>>;
      const cols = chart.columns || Object.keys(corrMatrix);

      // Create datasets for each row
      const datasets = cols.map((rowCol, rowIdx) => ({
        label: rowCol.substring(0, 15),
        data: cols.map((colCol) => {
          const val = corrMatrix[rowCol]?.[colCol];
          return val !== null ? val : 0;
        }),
        backgroundColor: cols.map((colCol) => {
          const val = corrMatrix[rowCol]?.[colCol] || 0;
          const intensity = Math.abs(val);
          if (val >= 0) {
            return `rgba(59, 130, 246, ${intensity})`;
          } else {
            return `rgba(239, 68, 68, ${intensity})`;
          }
        })
      }));

      return {
        config: {
          type: 'bar',
          data: {
            labels: cols.map(c => c.substring(0, 15)),
            datasets: [{
              label: 'Correlation',
              data: cols.map((_, i) => datasets[0]?.data[i] || 0),
              backgroundColor: 'rgba(59, 130, 246, 0.7)'
            }]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Correlation Overview',
                font: { size: 14 }
              }
            }
          }
        },
        description: 'Correlation matrix overview'
      };
    }

    default:
      return {
        config: { type: 'bar', data: { labels: [], datasets: [] } },
        description: 'Unknown chart type'
      };
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { chartData, sessionId: providedSessionId }: GenerateFiguresRequest = req.body;

    if (!chartData || !Array.isArray(chartData) || chartData.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No chart data provided'
      });
    }

    // Check if Blob storage is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('[Generate Figures] BLOB_READ_WRITE_TOKEN not configured');
      return res.status(503).json({
        success: false,
        error: 'Blob storage not configured. Add BLOB_READ_WRITE_TOKEN to Vercel environment.'
      });
    }

    const sessionId = providedSessionId || generateSessionId();
    const generatedFigures: GeneratedFigure[] = [];

    console.log(`[Generate Figures] Processing ${chartData.length} charts for session ${sessionId}`);

    // Process each chart
    for (let i = 0; i < chartData.length; i++) {
      const chart = chartData[i];
      const { config, description } = createQuickChartConfig(chart, i);

      try {
        // Use QuickChart.io to render the chart
        const quickChartUrl = 'https://quickchart.io/chart';
        const chartResponse = await fetch(quickChartUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chart: config,
            width: 800,
            height: 500,
            backgroundColor: 'white',
            format: 'png'
          })
        });

        if (!chartResponse.ok) {
          console.error(`[Generate Figures] QuickChart error for chart ${i}:`, await chartResponse.text());
          continue;
        }

        // Get PNG buffer
        const pngBuffer = await chartResponse.arrayBuffer();

        // Generate filename
        const columnName = chart.column || chart.x_column || `chart_${i}`;
        const safeColumnName = columnName.replace(/[^a-zA-Z0-9]/g, '_');
        const filename = `fig${i + 1}_${chart.type}_${safeColumnName}.png`;

        // Upload to Vercel Blob
        const blob = await put(`figures/${sessionId}/${filename}`, Buffer.from(pngBuffer), {
          access: 'public',
          contentType: 'image/png',
          addRandomSuffix: false
        });

        generatedFigures.push({
          filename,
          blobUrl: blob.url,
          description,
          width: 800,
          height: 500
        });

        console.log(`[Generate Figures] Created ${filename}: ${blob.url}`);
      } catch (chartError) {
        console.error(`[Generate Figures] Error generating chart ${i}:`, chartError);
        // Continue with other charts
      }
    }

    console.log(`[Generate Figures] Generated ${generatedFigures.length}/${chartData.length} figures`);

    return res.status(200).json({
      success: true,
      sessionId,
      figures: generatedFigures,
      count: generatedFigures.length
    });

  } catch (error) {
    console.error('[Generate Figures] Error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate figures'
    });
  }
}
