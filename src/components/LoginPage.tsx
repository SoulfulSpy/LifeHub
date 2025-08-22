import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for authentication logic
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // Add authentication logic here
    alert('Logged in!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Background orbs for glassmorphism effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl px-8 py-10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-200">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
