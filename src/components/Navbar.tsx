import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Home, Compass, BookOpen, User, LogIn } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const navigate = useNavigate();
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Explore', icon: Compass },
    { id: 'knowledge', label: 'Knowledge Capsules', icon: BookOpen },
    { id: 'profile-form', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">LifeHub</h1>
                <p className="text-xs text-gray-300 hidden sm:block">A Global Resource Exchange Platform</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/20 ${
                      currentView === item.id ? 'bg-white/20 text-blue-300' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Login Button */}
            <div className="flex items-center space-x-4">
              <button
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/login')}
              >
                <LogIn className="w-4 h-4" />
                <span className="text-sm font-medium">Login</span>
              </button>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2 text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/20 ${
                      currentView === item.id ? 'bg-white/20 text-blue-300' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;