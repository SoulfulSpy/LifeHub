import React from 'react';
import { ArrowRight, Sparkles, Users, BookOpen } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted, onExplore }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Hero Card */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 mb-8 hover:bg-white/15 transition-all duration-500 hover:scale-105">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Connecting Humanity Through Exchange</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connect. Learn.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Exchange. Grow.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A single platform where people give, receive, and exchange skills & knowledge — locally and globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={onGetStarted}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2 font-semibold text-lg shadow-lg hover:shadow-blue-500/25"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplore}
              className="px-8 py-4 backdrop-blur-lg bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              Explore Now
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Global Network</h3>
              <p className="text-gray-400 text-sm">Connect with people worldwide to share knowledge and skills</p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <BookOpen className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Knowledge Exchange</h3>
              <p className="text-gray-400 text-sm">Learn anything from guitar to coding, teach what you know</p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400 text-sm">Smart matching and personalized knowledge capsules</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-bold text-blue-400">10K+</div>
            <div className="text-gray-400 text-sm">Active Users</div>
          </div>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-bold text-purple-400">50K+</div>
            <div className="text-gray-400 text-sm">Exchanges</div>
          </div>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-bold text-cyan-400">100+</div>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300">
            <div className="text-2xl font-bold text-green-400">5K+</div>
            <div className="text-gray-400 text-sm">Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;