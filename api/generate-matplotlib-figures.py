"""
Vercel Serverless Function: Generate PNG Figures with Matplotlib

This works exactly like Claude Code generating figures locally:
1. Receives CSV data and chart specifications
2. Uses pandas to read the data
3. Uses matplotlib/seaborn to create publication-quality figures
4. Returns PNG images as base64

Endpoint: POST /api/generate-matplotlib-figures
"""

from http.server import BaseHTTPRequestHandler
import json
import io
import base64
import csv
from io import StringIO

# Import visualization libraries
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend for serverless
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np


class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        try:
            # Read request body
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode('utf-8'))

            csv_content = data.get('csvContent', '')
            chart_specs = data.get('chartSpecs', [])  # Optional: specific charts to generate

            if not csv_content:
                self.send_error_response('No CSV content provided')
                return

            # Read CSV into pandas DataFrame
            df = pd.read_csv(StringIO(csv_content))

            print(f"[Matplotlib] Loaded DataFrame: {df.shape[0]} rows, {df.shape[1]} columns")
            print(f"[Matplotlib] Columns: {list(df.columns)}")

            # Set up matplotlib style for publication-quality figures
            plt.style.use('seaborn-v0_8-whitegrid')
            plt.rcParams.update({
                'font.size': 11,
                'axes.titlesize': 12,
                'axes.labelsize': 11,
                'xtick.labelsize': 10,
                'ytick.labelsize': 10,
                'legend.fontsize': 10,
                'figure.titlesize': 13,
                'figure.dpi': 150,
                'savefig.dpi': 150,
                'savefig.bbox': 'tight',
                'savefig.pad_inches': 0.1
            })

            generated_figures = []

            # Identify numeric and categorical columns
            numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
            categorical_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()

            print(f"[Matplotlib] Numeric columns: {numeric_cols}")
            print(f"[Matplotlib] Categorical columns: {categorical_cols}")

            # Generate histograms for numeric columns (up to 10)
            for i, col in enumerate(numeric_cols[:10]):
                try:
                    fig, ax = plt.subplots(figsize=(8, 5))

                    # Get clean data (no NaN)
                    clean_data = df[col].dropna()

                    if len(clean_data) == 0:
                        plt.close(fig)
                        continue

                    # Create histogram with KDE
                    sns.histplot(clean_data, bins=20, kde=True, ax=ax, color='steelblue', alpha=0.7)

                    # Add mean line
                    mean_val = clean_data.mean()
                    ax.axvline(mean_val, color='red', linestyle='--', linewidth=2, label=f'Mean: {mean_val:.2f}')

                    # Labels and title
                    ax.set_xlabel(col.replace('_', ' ').title())
                    ax.set_ylabel('Frequency')
                    ax.set_title(f'Distribution of {col.replace("_", " ").title()}')
                    ax.legend()

                    # Add statistics annotation
                    stats_text = f'n={len(clean_data)}\nmean={mean_val:.2f}\nstd={clean_data.std():.2f}'
                    ax.text(0.95, 0.95, stats_text, transform=ax.transAxes,
                           verticalalignment='top', horizontalalignment='right',
                           bbox=dict(boxstyle='round', facecolor='white', alpha=0.8),
                           fontsize=9)

                    # Save to base64
                    buf = io.BytesIO()
                    fig.savefig(buf, format='png', dpi=150, bbox_inches='tight')
                    buf.seek(0)
                    png_base64 = base64.b64encode(buf.read()).decode('utf-8')
                    buf.close()
                    plt.close(fig)

                    safe_col = col.replace(' ', '_').replace('.', '_')
                    generated_figures.append({
                        'filename': f'fig{len(generated_figures)+1}_histogram_{safe_col}.png',
                        'type': 'histogram',
                        'column': col,
                        'base64': png_base64,
                        'description': f'Distribution of {col} (n={len(clean_data)}, mean={mean_val:.2f}, std={clean_data.std():.2f})'
                    })

                    print(f"[Matplotlib] Generated histogram for {col}")

                except Exception as e:
                    print(f"[Matplotlib] Error generating histogram for {col}: {e}")
                    continue

            # Generate bar charts for categorical columns (up to 5)
            for i, col in enumerate(categorical_cols[:5]):
                try:
                    fig, ax = plt.subplots(figsize=(8, 5))

                    # Get value counts
                    value_counts = df[col].value_counts().head(10)

                    if len(value_counts) == 0:
                        plt.close(fig)
                        continue

                    # Create bar chart
                    colors = sns.color_palette('husl', len(value_counts))
                    bars = ax.bar(range(len(value_counts)), value_counts.values, color=colors)

                    # Labels
                    ax.set_xticks(range(len(value_counts)))
                    labels = [str(x)[:15] for x in value_counts.index]  # Truncate long labels
                    ax.set_xticklabels(labels, rotation=45, ha='right')
                    ax.set_xlabel(col.replace('_', ' ').title())
                    ax.set_ylabel('Count')
                    ax.set_title(f'Distribution of {col.replace("_", " ").title()}')

                    # Add value labels on bars
                    for bar, val in zip(bars, value_counts.values):
                        ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.5,
                               str(val), ha='center', va='bottom', fontsize=9)

                    plt.tight_layout()

                    # Save to base64
                    buf = io.BytesIO()
                    fig.savefig(buf, format='png', dpi=150, bbox_inches='tight')
                    buf.seek(0)
                    png_base64 = base64.b64encode(buf.read()).decode('utf-8')
                    buf.close()
                    plt.close(fig)

                    safe_col = col.replace(' ', '_').replace('.', '_')
                    generated_figures.append({
                        'filename': f'fig{len(generated_figures)+1}_bar_{safe_col}.png',
                        'type': 'bar',
                        'column': col,
                        'base64': png_base64,
                        'description': f'Value distribution for {col}'
                    })

                    print(f"[Matplotlib] Generated bar chart for {col}")

                except Exception as e:
                    print(f"[Matplotlib] Error generating bar chart for {col}: {e}")
                    continue

            # Generate scatter plots for pairs of numeric columns (up to 3 pairs)
            if len(numeric_cols) >= 2:
                pairs_generated = 0
                for i in range(min(len(numeric_cols)-1, 3)):
                    for j in range(i+1, min(len(numeric_cols), i+2)):
                        if pairs_generated >= 3:
                            break

                        col1, col2 = numeric_cols[i], numeric_cols[j]

                        try:
                            fig, ax = plt.subplots(figsize=(8, 6))

                            # Get clean data
                            clean_df = df[[col1, col2]].dropna()

                            if len(clean_df) < 3:
                                plt.close(fig)
                                continue

                            # Create scatter plot with regression line
                            sns.regplot(x=col1, y=col2, data=clean_df, ax=ax,
                                       scatter_kws={'alpha': 0.6, 's': 50},
                                       line_kws={'color': 'red', 'linewidth': 2})

                            # Calculate correlation
                            corr = clean_df[col1].corr(clean_df[col2])

                            ax.set_xlabel(col1.replace('_', ' ').title())
                            ax.set_ylabel(col2.replace('_', ' ').title())
                            ax.set_title(f'{col1.replace("_", " ").title()} vs {col2.replace("_", " ").title()}')

                            # Add correlation annotation
                            ax.text(0.05, 0.95, f'r = {corr:.3f}', transform=ax.transAxes,
                                   verticalalignment='top', fontsize=11,
                                   bbox=dict(boxstyle='round', facecolor='white', alpha=0.8))

                            # Save to base64
                            buf = io.BytesIO()
                            fig.savefig(buf, format='png', dpi=150, bbox_inches='tight')
                            buf.seek(0)
                            png_base64 = base64.b64encode(buf.read()).decode('utf-8')
                            buf.close()
                            plt.close(fig)

                            safe_col1 = col1.replace(' ', '_').replace('.', '_')
                            safe_col2 = col2.replace(' ', '_').replace('.', '_')
                            generated_figures.append({
                                'filename': f'fig{len(generated_figures)+1}_scatter_{safe_col1}_{safe_col2}.png',
                                'type': 'scatter',
                                'columns': [col1, col2],
                                'base64': png_base64,
                                'description': f'Scatter plot of {col1} vs {col2} (Pearson r = {corr:.3f})'
                            })

                            pairs_generated += 1
                            print(f"[Matplotlib] Generated scatter plot for {col1} vs {col2}")

                        except Exception as e:
                            print(f"[Matplotlib] Error generating scatter for {col1} vs {col2}: {e}")
                            continue

            # Generate correlation heatmap if enough numeric columns
            if len(numeric_cols) >= 3:
                try:
                    fig, ax = plt.subplots(figsize=(10, 8))

                    # Select top numeric columns for heatmap
                    cols_for_heatmap = numeric_cols[:10]
                    corr_matrix = df[cols_for_heatmap].corr()

                    # Create heatmap
                    sns.heatmap(corr_matrix, annot=True, cmap='RdBu_r', center=0,
                               fmt='.2f', ax=ax, square=True,
                               linewidths=0.5, cbar_kws={'shrink': 0.8})

                    ax.set_title('Correlation Matrix')
                    plt.tight_layout()

                    # Save to base64
                    buf = io.BytesIO()
                    fig.savefig(buf, format='png', dpi=150, bbox_inches='tight')
                    buf.seek(0)
                    png_base64 = base64.b64encode(buf.read()).decode('utf-8')
                    buf.close()
                    plt.close(fig)

                    generated_figures.append({
                        'filename': f'fig{len(generated_figures)+1}_correlation_heatmap.png',
                        'type': 'heatmap',
                        'columns': cols_for_heatmap,
                        'base64': png_base64,
                        'description': f'Correlation matrix for {len(cols_for_heatmap)} numeric variables'
                    })

                    print("[Matplotlib] Generated correlation heatmap")

                except Exception as e:
                    print(f"[Matplotlib] Error generating heatmap: {e}")

            print(f"[Matplotlib] Total figures generated: {len(generated_figures)}")

            self.send_success_response({
                'success': True,
                'figures': generated_figures,
                'count': len(generated_figures),
                'dataShape': {'rows': df.shape[0], 'columns': df.shape[1]},
                'numericColumns': numeric_cols,
                'categoricalColumns': categorical_cols
            })

        except Exception as e:
            print(f"[Matplotlib] Error: {e}")
            import traceback
            traceback.print_exc()
            self.send_error_response(str(e))

    def send_success_response(self, data):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def send_error_response(self, error_message):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        response = {'success': False, 'error': error_message}
        self.wfile.write(json.dumps(response).encode('utf-8'))
