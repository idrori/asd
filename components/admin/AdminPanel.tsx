/**
 * Admin Panel Component
 * Main container for Research Admin functionality
 * Switches between Dashboard and Participant List views
 */

import React, { useState } from 'react';
import ResearchDashboard from './ResearchDashboard';
import ParticipantList from './ParticipantList';

type AdminView = 'dashboard' | 'participants';

interface AdminPanelProps {
  onClose?: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [currentView, setCurrentView] = useState<AdminView>('dashboard');

  return (
    <div className="h-full w-full bg-slate-50 overflow-y-auto">
      {currentView === 'dashboard' ? (
        <ResearchDashboard onViewParticipants={() => setCurrentView('participants')} />
      ) : (
        <ParticipantList onBack={() => setCurrentView('dashboard')} />
      )}
    </div>
  );
};

export default AdminPanel;
