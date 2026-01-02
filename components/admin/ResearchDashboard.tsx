/**
 * Research Dashboard Component
 * Displays overview stats, funnel, group comparison, and alerts
 */

import React, { useState, useEffect } from 'react';
import {
  Users,
  CheckCircle2,
  Send,
  TrendingUp,
  AlertTriangle,
  RefreshCw,
  BarChart3,
  Activity
} from 'lucide-react';
import type { ResearchStats, Participant } from '../../types/participant';
import { getResearchStats, getParticipants } from '../../services/participantService';

interface StatCardProps {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
  subtext?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color, subtext }) => (
  <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
        {subtext && <p className="text-xs text-slate-400 mt-1">{subtext}</p>}
      </div>
      <div className={`p-2 rounded-lg ${color.replace('text-', 'bg-').replace('-600', '-100')}`}>
        {icon}
      </div>
    </div>
  </div>
);

interface FunnelBarProps {
  label: string;
  count: number;
  total: number;
  color: string;
}

const FunnelBar: React.FC<FunnelBarProps> = ({ label, count, total, color }) => {
  const percentage = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-600">{label}</span>
        <span className="text-slate-800 font-medium">{count}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${Math.max(percentage, 2)}%` }}
        />
      </div>
    </div>
  );
};

interface ResearchDashboardProps {
  onViewParticipants: () => void;
}

const ResearchDashboard: React.FC<ResearchDashboardProps> = ({ onViewParticipants }) => {
  const [stats, setStats] = useState<ResearchStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getResearchStats();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load stats');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 text-slate-400 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
        <div className="flex items-center gap-2 text-red-700">
          <AlertTriangle size={20} />
          <span>Error: {error}</span>
        </div>
        <button
          onClick={loadStats}
          className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!stats) return null;

  // Funnel stages match ICIScopilot research workflow
  const funnelData = [
    { label: '1. Registered', count: stats.funnel.registered || 0, color: 'bg-gray-500' },
    { label: '2. Interview Done', count: stats.funnel.interview_completed || 0, color: 'bg-blue-500' },
    { label: '3. Setup Done', count: stats.funnel.setup_completed || 0, color: 'bg-sky-500' },
    { label: '4. Paper Built', count: stats.funnel.builder_completed || 0, color: 'bg-amber-500' },
    { label: '5. Review Done', count: stats.funnel.reviewer_completed || 0, color: 'bg-orange-500' },
    { label: '6. Oversight Done', count: stats.funnel.supervisor_completed || 0, color: 'bg-purple-500', note: 'Group 1 only' },
    { label: '7. Revisions Done', count: stats.funnel.reviser_completed || 0, color: 'bg-indigo-500' },
    { label: '8. Finalized', count: stats.funnel.finalize_completed || 0, color: 'bg-teal-500' },
    { label: '9. Paper Sent', count: stats.funnel.paper_sent || 0, color: 'bg-cyan-500' },
    { label: '10. Survey Sent', count: stats.funnel.survey_sent || 0, color: 'bg-violet-500' },
    { label: '11. Completed', count: stats.funnel.survey_completed || 0, color: 'bg-green-500' },
    { label: 'Dropped Out', count: stats.funnel.dropped_out || 0, color: 'bg-red-500' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Research Dashboard</h2>
          <p className="text-slate-500 text-sm">ICIScopilot Study Participant Tracking</p>
        </div>
        <button
          onClick={loadStats}
          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50"
        >
          <RefreshCw size={16} />
          Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Participants"
          value={stats.total}
          icon={<Users size={24} className="text-blue-600" />}
          color="text-blue-600"
          subtext={`${stats.active} active`}
        />
        <StatCard
          label="Surveys Sent"
          value={stats.surveysSent}
          icon={<Send size={24} className="text-purple-600" />}
          color="text-purple-600"
        />
        <StatCard
          label="Surveys Completed"
          value={stats.surveysCompleted}
          icon={<CheckCircle2 size={24} className="text-emerald-600" />}
          color="text-emerald-600"
        />
        <StatCard
          label="Completion Rate"
          value={`${stats.completionRate}%`}
          icon={<TrendingUp size={24} className="text-amber-600" />}
          color="text-amber-600"
        />
      </div>

      {/* Alerts */}
      {stats.alerts && stats.alerts.length > 0 && (
        <div className="space-y-2">
          {stats.alerts.map((alert, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border flex items-start gap-3 ${
                alert.type === 'stuck'
                  ? 'bg-amber-50 border-amber-200'
                  : alert.type === 'pending_survey'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-slate-50 border-slate-200'
              }`}
            >
              <AlertTriangle
                size={18}
                className={
                  alert.type === 'stuck'
                    ? 'text-amber-500'
                    : alert.type === 'pending_survey'
                      ? 'text-blue-500'
                      : 'text-slate-500'
                }
              />
              <div>
                <p className="font-medium text-sm text-slate-800">{alert.message}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {alert.participantIds.slice(0, 3).join(', ')}
                  {alert.participantIds.length > 3 && ` +${alert.participantIds.length - 3} more`}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Funnel */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={20} className="text-slate-500" />
            <h3 className="font-semibold text-slate-800">Participant Funnel</h3>
          </div>
          <div className="space-y-1">
            {funnelData.map((item) => (
              <FunnelBar
                key={item.label}
                label={item.label}
                count={item.count}
                total={stats.total}
                color={item.color}
              />
            ))}
          </div>
        </div>

        {/* Group Comparison */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Activity size={20} className="text-slate-500" />
            <h3 className="font-semibold text-slate-800">Group Comparison</h3>
          </div>

          <div className="space-y-4">
            {/* Group 1: With Oversight */}
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-emerald-800">Group 1: With Oversight</span>
                <span className="text-lg font-bold text-emerald-600">{stats.groups.group1.total}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <p className="text-slate-500">Interview</p>
                  <p className="font-semibold text-emerald-700">{stats.groups.group1.interviewRate}%</p>
                </div>
                <div className="text-center">
                  <p className="text-slate-500">Completion</p>
                  <p className="font-semibold text-emerald-700">{stats.groups.group1.completionRate}%</p>
                </div>
                <div className="text-center">
                  <p className="text-slate-500">Drop Rate</p>
                  <p className="font-semibold text-red-600">{stats.groups.group1.dropRate}%</p>
                </div>
              </div>
            </div>

            {/* Group 2: Control */}
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-800">Group 2: Control (No Oversight)</span>
                <span className="text-lg font-bold text-blue-600">{stats.groups.group2.total}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <p className="text-slate-500">Interview</p>
                  <p className="font-semibold text-blue-700">{stats.groups.group2.interviewRate}%</p>
                </div>
                <div className="text-center">
                  <p className="text-slate-500">Completion</p>
                  <p className="font-semibold text-blue-700">{stats.groups.group2.completionRate}%</p>
                </div>
                <div className="text-center">
                  <p className="text-slate-500">Drop Rate</p>
                  <p className="font-semibold text-red-600">{stats.groups.group2.dropRate}%</p>
                </div>
              </div>
            </div>

            {/* Unassigned */}
            {stats.groups.unassigned > 0 && (
              <div className="p-2 bg-slate-100 rounded-lg text-center">
                <span className="text-sm text-slate-600">
                  {stats.groups.unassigned} unassigned participant(s)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* View All Participants Button */}
      <div className="text-center">
        <button
          onClick={onViewParticipants}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          View All Participants
        </button>
      </div>
    </div>
  );
};

export default ResearchDashboard;
