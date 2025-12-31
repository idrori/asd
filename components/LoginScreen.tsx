import React, { useState } from 'react';
import { Lock, User, AlertCircle } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

// Session token includes timestamp to prevent simple replay
function generateSessionToken(): string {
  const timestamp = Date.now();
  const randomArray = new Uint8Array(16);
  crypto.getRandomValues(randomArray);
  const randomHex = Array.from(randomArray).map(b => b.toString(16).padStart(2, '0')).join('');
  return `${timestamp}_${randomHex}`;
}

// Verify session token is recent (within 24 hours)
export function isValidSession(): boolean {
  const token = sessionStorage.getItem('icis_session_token');
  if (!token) return false;

  const parts = token.split('_');
  if (parts.length !== 2) return false;

  const timestamp = parseInt(parts[0], 10);
  if (isNaN(timestamp)) return false;

  const age = Date.now() - timestamp;
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours
  return age < maxAge;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Credentials must be configured via environment variables
    const expectedUser = import.meta.env.VITE_AUTH_USERNAME;
    const expectedPass = import.meta.env.VITE_AUTH_PASSWORD;

    setTimeout(() => {
      if (username === expectedUser && password === expectedPass) {
        // Generate session token with timestamp for expiry validation
        const token = generateSessionToken();
        sessionStorage.setItem('icis_session_token', token);
        sessionStorage.setItem('icis_authenticated', 'true');
        onLogin();
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-600/30">
            <span className="text-2xl font-bold text-white">ASD</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Automated Scientific Discovery</h1>
          <p className="text-slate-400">AI-Powered Research Paper Authoring</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter username"
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter password"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-xl">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Conference Paper Authoring System
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
