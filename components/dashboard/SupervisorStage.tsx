import React, { useState } from 'react';
import { Eye, Download, FileText } from 'lucide-react';
import { OversightFileData, FeedbackFileData, downloadPaper, readPaperFile } from '../../services/fileService';
import { ReviewOutputFiles } from './ReviewerStage';

interface SupervisorStageProps {
  currentRound: number;
  currentPaperVersion: number;
  lastFeedback: string;
  isProcessing: boolean;
  oversightData: OversightFileData | null;
  allOversight: OversightFileData[];
  onAction: (action: string, payload?: string) => void;
  // New: files passed explicitly from ReviewerStage
  reviewOutputFiles?: ReviewOutputFiles;
}

const SupervisorStage: React.FC<SupervisorStageProps> = ({
  currentRound,
  currentPaperVersion,
  lastFeedback,
  isProcessing,
  oversightData: propOversightData,
  allOversight,
  onAction,
  reviewOutputFiles
}) => {
  const [supervisorComment, setSupervisorComment] = useState("");
  const [showFullFeedback, setShowFullFeedback] = useState(false);
  const [showPaperPreview, setShowPaperPreview] = useState(false);
  const [showInputFiles, setShowInputFiles] = useState(false);

  // Use files from reviewOutputFiles if available (explicit handoff), otherwise fall back to props
  const oversightData = reviewOutputFiles?.oversight || propOversightData;
  const feedbackData = reviewOutputFiles?.feedback;

  const handleDownload = () => {
    downloadPaper(currentPaperVersion, 'icis_paper');
  };

  const paperContent = reviewOutputFiles?.paperContent || readPaperFile(currentPaperVersion, 'icis_paper');

  // Show which files are being used as input
  const inputSource = reviewOutputFiles ? 'Uploaded/Downloaded files' : 'Internal storage';

  // Calculate status based on thresholds from ICISsupervisor.txt
  const avgScore = oversightData?.averageScore || 0;
  const majorErrors = oversightData?.errorCounts.majorErrors || 0;
  const hasLowReviewScore = oversightData ? (
    oversightData.reviewScores.novelty < 4 ||
    oversightData.reviewScores.significance < 4 ||
    oversightData.reviewScores.methodologicalRigor < 4 ||
    oversightData.reviewScores.clarity < 4 ||
    oversightData.reviewScores.relevance < 4
  ) : false;
  const hasLowTrust = oversightData ? (
    oversightData.trustworthiness.reliability < 5 ||
    oversightData.trustworthiness.benevolence < 5 ||
    oversightData.trustworthiness.goalAlignment < 5
  ) : false;
  const hasCriticalAlerts = (oversightData?.criticalAlerts.length || 0) > 0;

  const isAttentionNeeded = hasLowReviewScore || hasLowTrust || majorErrors > 0 || hasCriticalAlerts;
  const isReadyToFinalize = !isAttentionNeeded && avgScore >= 4;

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto overflow-y-auto p-2">
      {/* Dashboard Header */}
      <div className="bg-slate-900 text-white p-4 rounded-t-lg font-mono text-sm mb-0">
        <div className="text-center">
          <div className="text-slate-400">{'='.repeat(70)}</div>
          <div className="text-lg font-bold my-2">SUPERVISOR DASHBOARD</div>
          <div className="text-slate-300">Revision Cycle: {currentRound}</div>
          <div className="text-slate-400">{'='.repeat(70)}</div>
        </div>
      </div>

      {/* Status Banner */}
      <div className={`p-4 font-mono text-sm ${isAttentionNeeded ? 'bg-red-100 border-red-300' : 'bg-green-100 border-green-300'} border-x border-b`}>
        <div className="font-bold">
          STATUS: {isAttentionNeeded ? '⚠️ ATTENTION NEEDED' : isReadyToFinalize ? '✅ READY TO FINALIZE' : '✓ ON TRACK'}
        </div>
      </div>

      {/* Convergence Assessment Banner */}
      {oversightData?.improvementPotential && (
        <div className={`p-4 font-mono text-sm border-x border-b ${
          oversightData.improvementPotential === 'exhausted' ? 'bg-blue-100 border-blue-300' :
          oversightData.improvementPotential === 'low' ? 'bg-yellow-100 border-yellow-300' :
          'bg-slate-100 border-slate-300'
        }`}>
          <div className="font-bold mb-1">
            IMPROVEMENT POTENTIAL: {
              oversightData.improvementPotential === 'exhausted' ? '🏁 EXHAUSTED - Paper has reached its potential' :
              oversightData.improvementPotential === 'low' ? '📉 LOW - Minor improvements only' :
              oversightData.improvementPotential === 'medium' ? '📊 MEDIUM - Moderate improvements possible' :
              '📈 HIGH - Significant improvements possible'
            }
          </div>
          {oversightData.convergenceReason && (
            <div className="text-xs mt-2 text-slate-700">
              <span className="font-semibold">Reason: </span>
              {oversightData.convergenceReason}
            </div>
          )}
          {(oversightData.improvementPotential === 'exhausted' || oversightData.canImprove === false) && (
            <div className="text-xs mt-2 text-blue-700 font-medium">
              ℹ️ The paper has reached its maximum quality given the available interview and data.
              You may finalize or provide additional source materials for further improvement.
            </div>
          )}
        </div>
      )}

      {/* Input Files Banner - shows what files are being used */}
      <div className="bg-slate-100 border border-slate-300 p-3 mt-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <FileText size={16} className="text-slate-600" />
            <span className="font-medium text-slate-700">Input Files:</span>
            <span className="text-slate-600">{inputSource}</span>
          </div>
          <button
            onClick={() => setShowInputFiles(!showInputFiles)}
            className="text-xs text-indigo-600 hover:underline"
          >
            {showInputFiles ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {showInputFiles && (
          <div className="mt-3 pt-3 border-t border-slate-200 text-xs font-mono">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-slate-700 mb-1">Oversight File:</p>
                <p className="text-slate-600">
                  oversight_v{oversightData?.version || currentRound}.json
                  {reviewOutputFiles?.oversight && <span className="text-emerald-600 ml-2">(user-provided)</span>}
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">Feedback File:</p>
                <p className="text-slate-600">
                  feedback_v{feedbackData?.version || currentRound}.json
                  {reviewOutputFiles?.feedback && <span className="text-emerald-600 ml-2">(user-provided)</span>}
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">Paper File:</p>
                <p className="text-slate-600">
                  icis_paper_v{reviewOutputFiles?.paperVersion || currentPaperVersion}.tex
                  {reviewOutputFiles?.paperContent && <span className="text-emerald-600 ml-2">(user-provided)</span>}
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">Source:</p>
                <p className={reviewOutputFiles ? 'text-emerald-600' : 'text-slate-600'}>
                  {reviewOutputFiles ? 'Explicit file handoff from Reviewer stage' : 'Internal localStorage'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* TABLE 1: Review Scores Progression */}
      <div className="bg-white border border-slate-300 p-4 mt-4 rounded-lg">
        <h3 className="font-bold text-slate-800 mb-3 font-mono">TABLE 1: REVIEW SCORES PROGRESSION</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left p-2 bg-slate-50">Criteria</th>
                {allOversight.map((o, i) => (
                  <th key={i} className="text-center p-2 bg-slate-50">v{o.version}</th>
                ))}
                <th className="text-left p-2 bg-slate-50">Latest Comment</th>
              </tr>
            </thead>
            <tbody>
              {['Novelty', 'Significance', 'Methodological Rigor', 'Clarity', 'Relevance'].map(criteria => {
                const mappedKey = criteria === 'Methodological Rigor' ? 'methodologicalRigor' : criteria.toLowerCase();
                return (
                  <tr key={criteria} className="border-b border-slate-200">
                    <td className="p-2 font-medium">{criteria}</td>
                    {allOversight.map((o, i) => {
                      const score = (o.reviewScores as Record<string, number>)[mappedKey] || 0;
                      return (
                        <td key={i} className={`text-center p-2 ${score < 4 ? 'text-red-600 font-bold' : ''}`}>
                          {score}
                        </td>
                      );
                    })}
                    <td className="p-2 text-slate-600 text-xs">
                      {oversightData?.reviewComments ?
                        ((oversightData.reviewComments as Record<string, string>)[mappedKey]?.substring(0, 30) + '...') : '-'}
                    </td>
                  </tr>
                );
              })}
              <tr className="border-t-2 border-slate-400 bg-slate-50 font-bold">
                <td className="p-2">AVERAGE</td>
                {allOversight.map((o, i) => (
                  <td key={i} className="text-center p-2">{o.averageScore.toFixed(1)}</td>
                ))}
                <td className="p-2 text-xs">
                  {allOversight.length > 1
                    ? (allOversight[allOversight.length - 1].averageScore > allOversight[0].averageScore ? '📈 Improving' : '📉 Declining')
                    : 'Initial review'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TABLE 2: Error Counts Progression */}
      <div className="bg-white border border-slate-300 p-4 mt-4 rounded-lg">
        <h3 className="font-bold text-slate-800 mb-3 font-mono">TABLE 2: ERROR COUNTS PROGRESSION</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left p-2 bg-slate-50">Category</th>
                {allOversight.map((o, i) => (
                  <th key={i} className="text-center p-2 bg-slate-50">v{o.version}</th>
                ))}
                <th className="text-left p-2 bg-slate-50">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-2 font-medium">Major Errors</td>
                {allOversight.map((o, i) => (
                  <td key={i} className={`text-center p-2 ${o.errorCounts.majorErrors > 0 ? 'text-red-600 font-bold' : ''}`}>
                    {o.errorCounts.majorErrors}
                  </td>
                ))}
                <td className="p-2 text-center font-bold text-red-600">
                  {oversightData?.errorCounts.majorErrors || 0}
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-2 font-medium">Minor Errors</td>
                {allOversight.map((o, i) => (
                  <td key={i} className="text-center p-2">{o.errorCounts.minorErrors}</td>
                ))}
                <td className="p-2 text-center">
                  {oversightData?.errorCounts.minorErrors || 0}
                </td>
              </tr>
              <tr className="border-t-2 border-slate-400 bg-slate-50 font-bold">
                <td className="p-2">TOTAL</td>
                {allOversight.map((o, i) => (
                  <td key={i} className="text-center p-2">{o.errorCounts.majorErrors + o.errorCounts.minorErrors}</td>
                ))}
                <td className="p-2 text-center">
                  {(oversightData?.errorCounts.majorErrors || 0) + (oversightData?.errorCounts.minorErrors || 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed Error List */}
        {oversightData && (oversightData.errorDetails.majorErrors.length > 0 || oversightData.errorDetails.minorErrors.length > 0) && (
          <div className="mt-4 border-t border-slate-200 pt-4">
            <h4 className="font-bold text-slate-700 mb-2 font-mono text-sm">DETAILED ERROR LIST:</h4>

            {/* Major Errors */}
            {oversightData.errorDetails.majorErrors.length > 0 && (
              <div className="mb-3">
                <h5 className="font-semibold text-red-700 text-sm mb-1">Major Errors ({oversightData.errorDetails.majorErrors.length}):</h5>
                <ul className="list-disc list-inside space-y-1">
                  {oversightData.errorDetails.majorErrors.map((error, i) => (
                    <li key={i} className="text-sm text-red-600 ml-2">{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Minor Errors */}
            {oversightData.errorDetails.minorErrors.length > 0 && (
              <div>
                <h5 className="font-semibold text-amber-700 text-sm mb-1">Minor Errors ({oversightData.errorDetails.minorErrors.length}):</h5>
                <ul className="list-disc list-inside space-y-1">
                  {oversightData.errorDetails.minorErrors.map((error, i) => (
                    <li key={i} className="text-sm text-amber-600 ml-2">{error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* TABLE 3: Trustworthiness Assessment */}
      <div className="bg-white border border-slate-300 p-4 mt-4 rounded-lg">
        <h3 className="font-bold text-slate-800 mb-3 font-mono">TABLE 3: TRUSTWORTHINESS ASSESSMENT (1-7 scale)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left p-2 bg-slate-50">Dimension</th>
                <th className="text-center p-2 bg-slate-50">Score</th>
                <th className="text-left p-2 bg-slate-50">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-2 font-medium">Reliability</td>
                <td className={`text-center p-2 ${(oversightData?.trustworthiness.reliability || 0) < 5 ? 'text-red-600 font-bold' : ''}`}>
                  {oversightData?.trustworthiness.reliability || '-'}
                </td>
                <td className="p-2 text-xs text-slate-600">{oversightData?.trustworthiness.reliabilityRationale || '-'}</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-2 font-medium">Benevolence</td>
                <td className={`text-center p-2 ${(oversightData?.trustworthiness.benevolence || 0) < 5 ? 'text-red-600 font-bold' : ''}`}>
                  {oversightData?.trustworthiness.benevolence || '-'}
                </td>
                <td className="p-2 text-xs text-slate-600">{oversightData?.trustworthiness.benevolenceRationale || '-'}</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-2 font-medium">Goal Alignment</td>
                <td className={`text-center p-2 ${(oversightData?.trustworthiness.goalAlignment || 0) < 5 ? 'text-red-600 font-bold' : ''}`}>
                  {oversightData?.trustworthiness.goalAlignment || '-'}
                </td>
                <td className="p-2 text-xs text-slate-600">{oversightData?.trustworthiness.goalAlignmentRationale || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Critical Alerts */}
      <div className={`border p-4 mt-4 rounded-lg ${hasCriticalAlerts ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-300'}`}>
        <h3 className="font-bold text-slate-800 mb-3 font-mono">CRITICAL ALERTS:</h3>
        {hasCriticalAlerts ? (
          <div className="space-y-3">
            {oversightData?.criticalAlerts.map((alert, i) => (
              <div key={i} className="bg-white p-3 rounded border border-red-200">
                <div className="font-bold text-red-700">CRITICAL ALERT {alert.number}: {alert.title} (BLOCKING ISSUE)</div>
                <div className="text-sm mt-2 space-y-1">
                  <div><span className="font-medium">Status:</span> {alert.status}</div>
                  <div><span className="font-medium">Impact:</span> {alert.impact}</div>
                  <div><span className="font-medium">Details:</span> {alert.details}</div>
                  <div><span className="font-medium">Action Required:</span> {alert.actionRequired}</div>
                  <div><span className="font-medium">Consequence:</span> {alert.consequence}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-green-700 font-mono">None - paper is progressing well</p>
        )}
      </div>

      {/* Latest Feedback Summary */}
      <div className="bg-white border border-slate-300 p-4 mt-4 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-slate-800 font-mono">LATEST FEEDBACK SUMMARY:</h3>
          <button
            onClick={() => setShowFullFeedback(!showFullFeedback)}
            className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
          >
            <Eye size={12} />
            {showFullFeedback ? 'Hide Full' : 'Show Full'}
          </button>
        </div>
        {showFullFeedback ? (
          <div className="text-sm text-slate-700 space-y-3">
            {feedbackData ? (
              <>
                <div>
                  <p className="font-medium">Overall Assessment:</p>
                  <p>{feedbackData.overallAssessment || 'No assessment available.'}</p>
                </div>
                <div>
                  <p className="font-medium">Research Question & Contribution:</p>
                  <p>{feedbackData.researchQuestion || 'No feedback available.'}</p>
                </div>
                <div>
                  <p className="font-medium">Method:</p>
                  <p>{feedbackData.method || 'No feedback available.'}</p>
                </div>
                <div>
                  <p className="font-medium">Potential Impact:</p>
                  <p>{feedbackData.potentialImpact || 'No feedback available.'}</p>
                </div>
                <div>
                  <p className="font-medium">Writing Quality:</p>
                  <p>{feedbackData.writing || 'No feedback available.'}</p>
                </div>
                {feedbackData.majorConcerns && feedbackData.majorConcerns.length > 0 && (
                  <div>
                    <p className="font-medium text-red-600">Major Concerns:</p>
                    <ul className="list-disc list-inside">
                      {feedbackData.majorConcerns.map((concern: string, i: number) => (
                        <li key={i}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {feedbackData.minorCorrections && feedbackData.minorCorrections.length > 0 && (
                  <div>
                    <p className="font-medium">Minor Corrections:</p>
                    <ul className="list-disc list-inside">
                      {feedbackData.minorCorrections.map((correction: string, i: number) => (
                        <li key={i}>{correction}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <p>{lastFeedback || "No feedback generated."}</p>
            )}
          </div>
        ) : (
          <p className="text-sm text-slate-700 line-clamp-3">
            {feedbackData?.overallAssessment || lastFeedback || "No feedback generated."}
          </p>
        )}
      </div>

      {/* Recommendation */}
      <div className={`border p-4 mt-4 rounded-lg ${isAttentionNeeded ? 'bg-amber-50 border-amber-300' : 'bg-green-50 border-green-300'}`}>
        <h3 className="font-bold text-slate-800 mb-2 font-mono">RECOMMENDATION:</h3>
        {isAttentionNeeded ? (
          <div>
            <p className="font-medium">Continue to revision cycle {currentRound + 1}</p>
            <p className="text-sm text-slate-600 mt-1">Reason: {
              hasLowReviewScore ? 'Review scores below threshold (< 4)' :
              majorErrors > 0 ? `${majorErrors} major error(s) remaining` :
              hasLowTrust ? 'Trustworthiness scores below threshold (< 5)' :
              'Critical alerts require attention'
            }</p>
            <div className="mt-2 text-sm">
              <p className="font-medium">Priority actions:</p>
              <ol className="list-decimal list-inside text-slate-600">
                {oversightData?.errorDetails.majorErrors.slice(0, 3).map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ol>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-medium text-green-700">Paper is ready for finalization</p>
            <p className="text-sm text-slate-600 mt-1">Reason: All quality thresholds met</p>
            <ul className="text-sm text-slate-600 mt-2 list-disc list-inside">
              <li>Average review score: {avgScore.toFixed(1)}/5</li>
              <li>All trustworthiness scores ≥ 5</li>
              <li>No major errors remaining</li>
              <li>No critical alerts</li>
            </ul>
          </div>
        )}
      </div>

      {/* Supervisor Decision Section */}
      <div className="bg-slate-900 text-white p-4 mt-4 rounded-lg font-mono text-sm">
        <div className="text-center mb-4">
          <div className="text-slate-400">{'='.repeat(70)}</div>
          <div className="text-lg font-bold my-2">SUPERVISOR DECISION</div>
          <div className="text-slate-400">{'='.repeat(70)}</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-800 p-3 rounded">
            <p className="font-bold text-amber-400">OPTION A: CONTINUE TO REVISION</p>
            <ul className="text-xs text-slate-300 mt-2 space-y-1">
              <li>• Sends paper to ICISreviser for another iteration</li>
              <li>• Current feedback will guide improvements</li>
              <li>• Add your directives below</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="font-bold text-green-400">OPTION B: FINALIZE PAPER</p>
            <ul className="text-xs text-slate-300 mt-2 space-y-1">
              <li>• Sends paper to ICISfinalize</li>
              <li>• Paper will be prepared for submission</li>
              <li>• No further revisions will be made</li>
            </ul>
          </div>
        </div>

        {/* Option C: Generate Synthetic Data - shown for experiment/survey without data */}
        <div className="bg-slate-800 p-3 rounded mb-4">
          <p className="font-bold text-orange-400">OPTION C: GENERATE SYNTHETIC DATA</p>
          <ul className="text-xs text-slate-300 mt-2 space-y-1">
            <li>• Generates synthetic data based on paper's research model</li>
            <li>• Updates Results section with statistical analysis</li>
            <li>• Use when data collection is planned but paper needs empirical demonstration</li>
          </ul>
        </div>
      </div>

      {/* Your Directives Input */}
      <div className="bg-white border border-slate-300 p-4 mt-4 rounded-lg">
        <h3 className="font-bold text-slate-800 mb-2 font-mono">YOUR DIRECTIVES (for Option A):</h3>
        <textarea
          className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm font-mono"
          rows={4}
          placeholder="Examples:
- Strengthen the theoretical contribution in Section 3
- Add more recent references to the literature review
- Clarify the methodology for the second experiment
- Expand the discussion of limitations"
          value={supervisorComment}
          onChange={(e) => setSupervisorComment(e.target.value)}
        />
      </div>

      {/* Decision Buttons */}
      <div className="bg-slate-100 border border-slate-300 p-4 mt-4 rounded-lg">
        <p className="font-mono text-sm text-center mb-4">YOUR DECISION:</p>
        <div className="flex gap-4">
          <button
            onClick={() => onAction('revise', supervisorComment)}
            disabled={isProcessing}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono"
          >
            [ ] CONTINUE TO REVISION
          </button>
          <button
            onClick={() => onAction('finalize')}
            disabled={isProcessing}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono"
          >
            [ ] FINALIZE PAPER
          </button>
        </div>
        {/* Generate Synthetic Data Button - half size */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => onAction('generateSyntheticData', supervisorComment)}
            disabled={isProcessing}
            className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 font-mono"
          >
            [ ] GENERATE SYNTHETIC DATA
          </button>
        </div>
      </div>

      {/* Paper Preview Link */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => setShowPaperPreview(!showPaperPreview)}
          className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1"
        >
          <Eye size={14} /> {showPaperPreview ? 'Hide' : 'View'} Paper Draft
        </button>
        <button
          onClick={handleDownload}
          className="text-sm text-slate-500 hover:text-indigo-600 flex items-center gap-1"
        >
          <Download size={14} /> Download (.tex)
        </button>
      </div>

      {/* Paper Preview Panel */}
      {showPaperPreview && paperContent && (
        <div className="bg-white border border-slate-300 p-4 mt-4 rounded-lg">
          <h3 className="font-bold text-slate-800 mb-3 font-mono">PAPER PREVIEW (v{currentPaperVersion}):</h3>
          <div className="max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap font-mono text-xs text-slate-700">
              {paperContent}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupervisorStage;
