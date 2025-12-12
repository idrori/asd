/**
 * Participant List Component
 * Table view of all participants with filtering and actions
 */

import React, { useState, useEffect } from 'react';
import {
  RefreshCw,
  Search,
  Filter,
  ChevronDown,
  MoreVertical,
  Mail,
  Trash2,
  Edit2,
  ArrowLeft,
  Check,
  X
} from 'lucide-react';
import type { Participant, ParticipantStatus, GroupId } from '../../types/participant';
import { STATUS_LABELS, STATUS_COLORS, GROUP_LABELS } from '../../types/participant';
import {
  getParticipants,
  updateParticipant,
  deleteParticipant
} from '../../services/participantService';

interface StatusBadgeProps {
  status: ParticipantStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colorMap: Record<ParticipantStatus, string> = {
    registered: 'bg-gray-100 text-gray-700',
    confirmed_via_email: 'bg-blue-100 text-blue-700',
    interview_completed: 'bg-emerald-100 text-emerald-700',
    processing: 'bg-yellow-100 text-yellow-700',
    paper_link_sent: 'bg-purple-100 text-purple-700',
    survey_sent: 'bg-cyan-100 text-cyan-700',
    review_email_sent: 'bg-indigo-100 text-indigo-700',
    survey_completed: 'bg-green-100 text-green-700',
    dropped_out: 'bg-red-100 text-red-700'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorMap[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
};

interface GroupBadgeProps {
  groupId: GroupId;
}

const GroupBadge: React.FC<GroupBadgeProps> = ({ groupId }) => {
  if (groupId === null) {
    return <span className="text-xs text-slate-400">Unassigned</span>;
  }
  const color = groupId === 1 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700';
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
      {GROUP_LABELS[groupId]}
    </span>
  );
};

interface ParticipantListProps {
  onBack: () => void;
}

const ParticipantList: React.FC<ParticipantListProps> = ({ onBack }) => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ParticipantStatus | ''>('');
  const [groupFilter, setGroupFilter] = useState<GroupId | 'all'>('all');
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [editingParticipant, setEditingParticipant] = useState<Participant | null>(null);

  const loadParticipants = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getParticipants();
      setParticipants(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load participants');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadParticipants();
  }, []);

  // Filter participants
  const filteredParticipants = participants.filter((p) => {
    const matchesSearch =
      !searchTerm ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || p.status === statusFilter;
    const matchesGroup = groupFilter === 'all' || p.group_id === groupFilter;
    return matchesSearch && matchesStatus && matchesGroup;
  });

  // Handle status update
  const handleStatusChange = async (email: string, newStatus: ParticipantStatus) => {
    try {
      await updateParticipant({ email, status: newStatus });
      await loadParticipants();
      setMenuOpen(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update status');
    }
  };

  // Handle group change
  const handleGroupChange = async (email: string, newGroup: GroupId) => {
    try {
      await updateParticipant({ email, group_id: newGroup });
      await loadParticipants();
      setMenuOpen(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update group');
    }
  };

  // Handle delete
  const handleDelete = async (email: string) => {
    if (!confirm(`Are you sure you want to delete participant ${email}?`)) return;
    try {
      await deleteParticipant(email);
      await loadParticipants();
      setMenuOpen(null);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete participant');
    }
  };

  // Format date
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const allStatuses: ParticipantStatus[] = [
    'registered',
    'confirmed_via_email',
    'interview_completed',
    'processing',
    'paper_link_sent',
    'survey_sent',
    'review_email_sent',
    'survey_completed',
    'dropped_out'
  ];

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Participants</h2>
            <p className="text-slate-500 text-sm">
              {filteredParticipants.length} of {participants.length} participants
            </p>
          </div>
        </div>
        <button
          onClick={loadParticipants}
          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as ParticipantStatus | '')}
            className="appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">All Statuses</option>
            {allStatuses.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        {/* Group filter */}
        <div className="relative">
          <select
            value={groupFilter === null ? 'null' : groupFilter === 'all' ? 'all' : groupFilter}
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'all') setGroupFilter('all');
              else if (val === 'null') setGroupFilter(null);
              else setGroupFilter(parseInt(val) as GroupId);
            }}
            className="appearance-none pl-3 pr-8 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="all">All Groups</option>
            <option value="1">Group 1: With Oversight</option>
            <option value="2">Group 2: Control</option>
            <option value="null">Unassigned</option>
          </select>
          <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Name</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Email</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Status</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Group</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Registered</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Updated</th>
                <th className="text-right px-4 py-3 font-medium text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2" />
                    Loading...
                  </td>
                </tr>
              ) : filteredParticipants.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-slate-400">
                    No participants found
                  </td>
                </tr>
              ) : (
                filteredParticipants.map((p) => (
                  <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">
                      {p.name || <span className="text-slate-400 italic">No name</span>}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{p.email}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="px-4 py-3">
                      <GroupBadge groupId={p.group_id} />
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">
                      {formatDate(p.registered_at)}
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">
                      {formatDate(p.updated_at)}
                    </td>
                    <td className="px-4 py-3 text-right relative">
                      <button
                        onClick={() => setMenuOpen(menuOpen === p.id ? null : p.id)}
                        className="p-1 rounded hover:bg-slate-100"
                      >
                        <MoreVertical size={16} className="text-slate-400" />
                      </button>

                      {/* Dropdown menu */}
                      {menuOpen === p.id && (
                        <div className="absolute right-4 top-10 z-50 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[180px]">
                          {/* Status submenu */}
                          <div className="px-3 py-2 text-xs font-medium text-slate-400 uppercase">
                            Change Status
                          </div>
                          {allStatuses.map((status) => (
                            <button
                              key={status}
                              onClick={() => handleStatusChange(p.email, status)}
                              className={`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${
                                p.status === status ? 'text-blue-600 font-medium' : 'text-slate-700'
                              }`}
                            >
                              {p.status === status && <Check size={12} />}
                              <span className={p.status === status ? '' : 'ml-4'}>
                                {STATUS_LABELS[status]}
                              </span>
                            </button>
                          ))}

                          <div className="border-t border-slate-100 my-1" />

                          {/* Group submenu */}
                          <div className="px-3 py-2 text-xs font-medium text-slate-400 uppercase">
                            Change Group
                          </div>
                          {[1, 2].map((gid) => (
                            <button
                              key={gid}
                              onClick={() => handleGroupChange(p.email, gid as GroupId)}
                              className={`w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 flex items-center gap-2 ${
                                p.group_id === gid ? 'text-blue-600 font-medium' : 'text-slate-700'
                              }`}
                            >
                              {p.group_id === gid && <Check size={12} />}
                              <span className={p.group_id === gid ? '' : 'ml-4'}>
                                {GROUP_LABELS[gid]}
                              </span>
                            </button>
                          ))}

                          <div className="border-t border-slate-100 my-1" />

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(p.email)}
                            className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                          >
                            <Trash2 size={14} />
                            Delete Participant
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParticipantList;
