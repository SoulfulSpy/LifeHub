import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Eye, EyeOff } from 'lucide-react';


const cheekyTexts = [
  "Welcome back, legend!",
  "Ready to conquer the world again?",
  "Missed you! Let's get you in.",
  "Back for more? We love that.",
];

const cheekyRegisterTexts = [
  "New here? Let's make some magic!",
  "Sign up and join the cool club.",
  "Don't be shy, register now!",
  "Your journey starts here."
];

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [cheekyIndex, setCheekyIndex] = useState(Math.floor(Math.random() * 4));
  const [showPassword, setShowPassword] = useState(false);

  // Navbar navigation handler
  const [currentView, setCurrentView] = useState('login');
  const handleNavbarNavigate = (view: string) => {
    setCurrentView(view);
    if (view === 'home') navigate('/');
    else if (view === 'dashboard') navigate('/explore');
    else if (view === 'knowledge') navigate('/knowledge');
    else if (view === 'profile-form') navigate('/profile-form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister && (!name || !email || !password)) {
      setError('All fields are required!');
      return;
    }
    if (!isRegister && (!email || !password)) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    try {
      const response = await fetch(`http://localhost:5000/${isRegister ? 'register' : 'login'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isRegister ? { name, email, password } : { email, password })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'Something went wrong.');
      } else {
        setError('');
        localStorage.setItem('isLoggedIn', 'true');
        if (data.user_id) {
          localStorage.setItem('userId', data.user_id.toString());
        }
        alert(data.message || (isRegister ? 'Registered! 🎉' : 'Logged in!'));
        navigate('/profile-form');
      }
    } catch (err) {
      setError('Could not connect to server.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
  <Navbar currentView={currentView} onNavigate={handleNavbarNavigate} />
      <div className="flex items-center justify-center min-h-[80vh]">
      {/* Background orbs for glassmorphism effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
  <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md flex flex-col gap-6"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
      >
        <h2 className="text-3xl font-extrabold mb-2 text-center text-white tracking-tight">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <div className="text-center text-blue-200 text-base mb-4 font-medium animate-pulse">
          {isRegister ? cheekyRegisterTexts[cheekyIndex] : cheekyTexts[cheekyIndex]}
        </div>
        {error && <div className="mb-2 text-red-400 text-center text-sm">{error}</div>}
        {isRegister && (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={e => setName(e.target.value)}
              required={isRegister}
              placeholder="Enter your name"
            />
          </div>
        )}
        <div>
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
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-gray-200">Password</label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-3 py-2 border border-white/20 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 text-gray-300 hover:text-white focus:outline-none"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg"
        >
          {isRegister ? 'Register' : 'Login'}
        </button>
        <div className="text-center mt-2">
          {isRegister ? (
            <span className="text-gray-300 text-sm">Already have an account?{' '}
              <button
                type="button"
                className="text-blue-300 hover:underline font-semibold"
                onClick={() => { setIsRegister(false); setCheekyIndex(Math.floor(Math.random() * 4)); }}
              >
                Login here
              </button>
            </span>
          ) : (
            <span className="text-gray-300 text-sm">No account?{' '}
              <button
                type="button"
                className="text-blue-300 hover:underline font-semibold"
                onClick={() => { setIsRegister(true); setCheekyIndex(Math.floor(Math.random() * 4)); }}
              >
                Register now
              </button>
            </span>
          )}
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
