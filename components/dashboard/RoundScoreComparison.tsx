/**
 * RoundScoreComparison Component
 *
 * Displays a comparison of review scores across multiple rounds
 * Shows improvement trends with visual indicators
 */

import React from 'react';
import { TrendingUp, TrendingDown, Minus, BarChart3 } from 'lucide-react';
import type { OversightFileData } from '../../services/fileService';

interface RoundScoreComparisonProps {
  allOversight: OversightFileData[];
  compact?: boolean; // For smaller display in ReviewerStage
}

const RoundScoreComparison: React.FC<RoundScoreComparisonProps> = ({
  allOversight,
  compact = false
}) => {
  if (allOversight.length === 0) {
    return null;
  }

  // Calculate trend between first and last round
  const getTrend = (first: number, last: number): 'up' | 'down' | 'same' => {
    if (last > first) return 'up';
    if (last < first) return 'down';
    return 'same';
  };

  const TrendIcon = ({ trend, size = 14 }: { trend: 'up' | 'down' | 'same'; size?: number }) => {
    if (trend === 'up') return <TrendingUp size={size} className="text-emerald-500" />;
    if (trend === 'down') return <TrendingDown size={size} className="text-red-500" />;
    return <Minus size={size} className="text-slate-400" />;
  };

  const getScoreColor = (score: number, threshold: number = 4) => {
    if (score >= threshold) return 'text-emerald-600';
    if (score >= threshold - 1) return 'text-amber-600';
    return 'text-red-600';
  };

  const criteria = [
    { key: 'novelty', label: 'Novelty' },
    { key: 'significance', label: 'Significance' },
    { key: 'methodologicalRigor', label: 'Method. Rigor' },
    { key: 'clarity', label: 'Clarity' },
    { key: 'relevance', label: 'Relevance' }
  ];

  const firstRound = allOversight[0];
  const lastRound = allOversight[allOversight.length - 1];
  const hasMultipleRounds = allOversight.length > 1;

  // Calculate overall improvement
  const overallImprovement = hasMultipleRounds
    ? ((lastRound.averageScore - firstRound.averageScore) / firstRound.averageScore * 100).toFixed(1)
    : '0';

  const errorReduction = hasMultipleRounds
    ? Math.round((1 - (lastRound.errorCounts.majorErrors + lastRound.errorCounts.minorErrors) /
        Math.max(1, firstRound.errorCounts.majorErrors + firstRound.errorCounts.minorErrors)) * 100)
    : 0;

  if (compact) {
    // Compact view for ReviewerStage
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 size={18} className="text-indigo-600" />
          <h4 className="font-semibold text-slate-800">Score Progression</h4>
          {hasMultipleRounds && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              parseFloat(overallImprovement) > 0
                ? 'bg-emerald-100 text-emerald-700'
                : parseFloat(overallImprovement) < 0
                  ? 'bg-red-100 text-red-700'
                  : 'bg-slate-100 text-slate-700'
            }`}>
              {parseFloat(overallImprovement) > 0 ? '+' : ''}{overallImprovement}% overall
            </span>
          )}
        </div>

        {/* Compact score grid */}
        <div className="grid grid-cols-5 gap-2 text-center text-xs">
          {criteria.map(({ key, label }) => {
            const firstScore = (firstRound.reviewScores as Record<string, number>)[key] || 0;
            const lastScore = (lastRound.reviewScores as Record<string, number>)[key] || 0;
            const trend = getTrend(firstScore, lastScore);

            return (
              <div key={key} className="bg-slate-50 rounded p-2">
                <div className="text-slate-500 truncate mb-1">{label}</div>
                <div className="flex items-center justify-center gap-1">
                  <span className={`font-bold ${getScoreColor(lastScore)}`}>
                    {lastScore}
                  </span>
                  {hasMultipleRounds && <TrendIcon trend={trend} size={12} />}
                </div>
                {hasMultipleRounds && firstScore !== lastScore && (
                  <div className="text-slate-400 text-[10px]">
                    was {firstScore}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary row */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Average:</span>
            <span className={`font-bold ${getScoreColor(lastRound.averageScore)}`}>
              {lastRound.averageScore.toFixed(1)}
            </span>
            {hasMultipleRounds && (
              <>
                <TrendIcon trend={getTrend(firstRound.averageScore, lastRound.averageScore)} />
                <span className="text-slate-400 text-xs">(was {firstRound.averageScore.toFixed(1)})</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Errors:</span>
            <span className={`font-bold ${lastRound.errorCounts.majorErrors > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
              {lastRound.errorCounts.majorErrors + lastRound.errorCounts.minorErrors}
            </span>
            {hasMultipleRounds && errorReduction !== 0 && (
              <span className={`text-xs ${errorReduction > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                ({errorReduction > 0 ? '-' : '+'}{Math.abs(errorReduction)}%)
              </span>
            )}
          </div>
        </div>

        {/* Round history if multiple rounds */}
        {hasMultipleRounds && (
          <div className="mt-3 pt-3 border-t border-slate-100">
            <div className="text-xs text-slate-500 mb-2">History ({allOversight.length} rounds):</div>
            <div className="flex gap-1">
              {allOversight.map((o, i) => (
                <div
                  key={i}
                  className={`flex-1 text-center py-1 rounded text-xs ${
                    i === allOversight.length - 1
                      ? 'bg-indigo-100 text-indigo-700 font-medium'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  R{o.version}: {o.averageScore.toFixed(1)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full view (for use in other contexts)
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 size={20} className="text-indigo-600" />
          <h3 className="font-bold text-slate-800">Review Score Progression</h3>
        </div>
        {hasMultipleRounds && (
          <div className="flex gap-2">
            <span className={`text-sm px-3 py-1 rounded-full ${
              parseFloat(overallImprovement) > 0
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {parseFloat(overallImprovement) > 0 ? '+' : ''}{overallImprovement}% score change
            </span>
            <span className={`text-sm px-3 py-1 rounded-full ${
              errorReduction > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
            }`}>
              {errorReduction > 0 ? '-' : '+'}{Math.abs(errorReduction)}% errors
            </span>
          </div>
        )}
      </div>

      {/* Full table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="text-left p-2 bg-slate-50">Criteria</th>
              {allOversight.map((o, i) => (
                <th key={i} className={`text-center p-2 ${
                  i === allOversight.length - 1 ? 'bg-indigo-50' : 'bg-slate-50'
                }`}>
                  Round {o.version}
                </th>
              ))}
              {hasMultipleRounds && (
                <th className="text-center p-2 bg-slate-50">Trend</th>
              )}
            </tr>
          </thead>
          <tbody>
            {criteria.map(({ key, label }) => {
              const scores = allOversight.map(o => (o.reviewScores as Record<string, number>)[key] || 0);
              const trend = hasMultipleRounds ? getTrend(scores[0], scores[scores.length - 1]) : 'same';

              return (
                <tr key={key} className="border-b border-slate-100">
                  <td className="p-2 font-medium">{label}</td>
                  {scores.map((score, i) => (
                    <td key={i} className={`text-center p-2 ${
                      i === scores.length - 1 ? 'bg-indigo-50/50' : ''
                    } ${getScoreColor(score)}`}>
                      {score}
                    </td>
                  ))}
                  {hasMultipleRounds && (
                    <td className="text-center p-2">
                      <div className="flex items-center justify-center gap-1">
                        <TrendIcon trend={trend} />
                        {trend === 'up' && <span className="text-emerald-600 text-xs">+{scores[scores.length - 1] - scores[0]}</span>}
                        {trend === 'down' && <span className="text-red-600 text-xs">{scores[scores.length - 1] - scores[0]}</span>}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
            <tr className="border-t-2 border-slate-200 bg-slate-50 font-bold">
              <td className="p-2">Average</td>
              {allOversight.map((o, i) => (
                <td key={i} className={`text-center p-2 ${
                  i === allOversight.length - 1 ? 'bg-indigo-100' : ''
                } ${getScoreColor(o.averageScore)}`}>
                  {o.averageScore.toFixed(1)}
                </td>
              ))}
              {hasMultipleRounds && (
                <td className="text-center p-2">
                  <div className="flex items-center justify-center gap-1">
                    <TrendIcon trend={getTrend(firstRound.averageScore, lastRound.averageScore)} />
                  </div>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Error counts section */}
      <div className="mt-4 pt-4 border-t border-slate-200">
        <h4 className="font-semibold text-slate-700 mb-2">Error Counts</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-slate-500 mb-1">Major Errors</div>
            <div className="flex items-center gap-2">
              {allOversight.map((o, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded text-sm ${
                    i === allOversight.length - 1
                      ? o.errorCounts.majorErrors > 0
                        ? 'bg-red-100 text-red-700 font-bold'
                        : 'bg-emerald-100 text-emerald-700 font-bold'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  R{o.version}: {o.errorCounts.majorErrors}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">Minor Errors</div>
            <div className="flex items-center gap-2">
              {allOversight.map((o, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 rounded text-sm ${
                    i === allOversight.length - 1
                      ? 'bg-indigo-100 text-indigo-700 font-bold'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  R{o.version}: {o.errorCounts.minorErrors}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundScoreComparison;
