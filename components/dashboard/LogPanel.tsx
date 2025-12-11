import React, { useEffect, useRef } from 'react';

interface LogPanelProps {
  logs: string[];
  height?: string;
}

const LogPanel: React.FC<LogPanelProps> = ({ logs, height = "h-64" }) => {
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className={`bg-slate-950 rounded-lg p-4 ${height} overflow-y-auto font-mono text-xs text-green-400 border border-slate-800 shadow-inner mb-6`}>
      {logs.length === 0 ? (
        <div className="text-slate-500 italic">No logs yet...</div>
      ) : (
        logs.map((log, idx) => (
          <div key={idx} className="mb-1 border-b border-slate-900/50 pb-1">
            {log}
          </div>
        ))
      )}
      <div ref={logsEndRef} />
    </div>
  );
};

export default LogPanel;
