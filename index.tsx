import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginScreen, { isValidSession } from './components/LoginScreen';

const AuthWrapper: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has valid session (not just flag, but also token expiry)
    const hasValidSession = isValidSession();
    const authStatus = sessionStorage.getItem('icis_authenticated');
    setIsAuthenticated(authStatus === 'true' && hasValidSession);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Show nothing while checking auth status
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Show main app if authenticated
  return <App />;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthWrapper />
  </React.StrictMode>
);
