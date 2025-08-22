import React, { useState } from 'react';
import { BookOpen, Play, Bookmark, Share2, Clock, Users, Globe2, Zap } from 'lucide-react';

const KnowledgeCapsules: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: '🌟' },
    { id: 'health', label: 'Health', icon: '💊' },
    { id: 'law', label: 'Law', icon: '⚖️' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'finance', label: 'Finance', icon: '💰' },
    { id: 'sustainability', label: 'Sustainability', icon: '🌱' }
  ];

  const capsules = [
    {
      id: 1,
      title: 'Understanding Mental Health Basics',
      category: 'health',
      summary: 'Learn the fundamentals of mental health, including common conditions, warning signs, and when to seek help. This capsule covers anxiety, depression, and stress management techniques.',
      duration: '15 min read',
      difficulty: 'Beginner',
      readers: 2341,
      rating: 4.8,
      tags: ['mental-health', 'wellness', 'self-care']
    },
    {
      id: 2,
      title: 'Basic Legal Rights Every Citizen Should Know',
      category: 'law',
      summary: 'Essential legal knowledge covering your fundamental rights, how to interact with law enforcement, and understanding basic contracts and legal documents.',
      duration: '20 min read',
      difficulty: 'Intermediate',
      readers: 1876,
      rating: 4.7,
      tags: ['legal-rights', 'citizenship', 'contracts']
    },
    {
      id: 3,
      title: 'Effective Study Techniques for Lifelong Learning',
      category: 'education',
      summary: 'Science-backed methods to improve your learning efficiency, including spaced repetition, active recall, and the Feynman technique for better retention.',
      duration: '12 min read',
      difficulty: 'Beginner',
      readers: 3102,
      rating: 4.9,
      tags: ['study-methods', 'learning', 'productivity']
    },
    {
      id: 4,
      title: 'Personal Finance 101: Budgeting and Saving',
      category: 'finance',
      summary: 'Master the basics of personal finance with practical budgeting strategies, emergency fund building, and smart saving techniques for financial security.',
      duration: '18 min read',
      difficulty: 'Beginner',
      readers: 2567,
      rating: 4.6,
      tags: ['budgeting', 'saving', 'financial-planning']
    },
    {
      id: 5,
      title: 'Sustainable Living: Small Changes, Big Impact',
      category: 'sustainability',
      summary: 'Practical tips for reducing your environmental footprint through conscious consumption, waste reduction, and sustainable lifestyle choices.',
      duration: '14 min read',
      difficulty: 'Beginner',
      readers: 1923,
      rating: 4.8,
      tags: ['sustainability', 'environment', 'lifestyle']
    },
    {
      id: 6,
      title: 'Investment Fundamentals for Beginners',
      category: 'finance',
      summary: 'Introduction to investing concepts including stocks, bonds, ETFs, and risk management. Learn how to start building wealth through smart investment strategies.',
      duration: '25 min read',
      difficulty: 'Intermediate',
      readers: 2134,
      rating: 4.7,
      tags: ['investing', 'wealth-building', 'financial-literacy']
    }
  ];

  const filteredCapsules = selectedCategory === 'all' 
    ? capsules 
    : capsules.filter(capsule => capsule.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20 border-green-400/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30';
      case 'Advanced': return 'text-red-400 bg-red-500/20 border-red-400/30';
      default: return 'text-blue-400 bg-blue-500/20 border-blue-400/30';
    }
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Knowledge Capsules</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bite-sized, AI-curated knowledge modules designed to empower you with essential life skills and practical wisdom.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Capsules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapsules.map((capsule) => (
            <div
              key={capsule.id}
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">
                    {categories.find(cat => cat.id === capsule.category)?.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-300 capitalize">
                    {capsule.category}
                  </span>
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs font-medium border ${getDifficultyColor(capsule.difficulty)}`}>
                  {capsule.difficulty}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                {capsule.title}
              </h3>

              {/* Summary */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                {capsule.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {capsule.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{capsule.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{capsule.readers.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-medium">{capsule.rating}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-sm font-medium">
                  <Play className="w-4 h-4" />
                  <span>Read More</span>
                </button>
                <button className="flex items-center justify-center px-4 py-3 backdrop-blur-lg bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Globe2 className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center px-4 py-3 backdrop-blur-lg bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Want to contribute?</h2>
            <p className="text-gray-300 mb-6">
              Share your expertise and help others learn by creating your own Knowledge Capsule
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 font-semibold">
              Create Capsule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCapsules;