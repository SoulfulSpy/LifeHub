import React, { useState } from 'react';
import { Search, Filter, MapPin, MessageCircle, Eye, Guitar, Code, Camera, Palette, BookOpen, Heart } from 'lucide-react';
import ProfileCard from './ProfileCard';

interface DashboardProps {
  onViewProfile: (profile: any) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewProfile }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = ['all', 'music', 'tech', 'art', 'education', 'health', 'languages'];
  const locations = ['all', 'New York', 'London', 'Tokyo', 'Paris', 'Berlin', 'Remote'];

  // Sample data
  const profiles = [
    {
      id: 1,
      name: 'Alex Chen',
      location: 'San Francisco, CA',
      languages: ['English', 'Mandarin'],
      avatar: '🎸',
      offers: ['Guitar Lessons', 'Music Production'],
      wants: ['Photography Basics', 'Digital Marketing'],
      rating: 4.9,
      lifePoints: 1250,
      category: 'music'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      location: 'Barcelona, Spain',
      languages: ['Spanish', 'English', 'French'],
      avatar: '💻',
      offers: ['Web Development', 'React Tutoring'],
      wants: ['Guitar Lessons', 'Cooking Classes'],
      rating: 4.8,
      lifePoints: 980,
      category: 'tech'
    },
    {
      id: 3,
      name: 'David Kim',
      location: 'Seoul, South Korea',
      languages: ['Korean', 'English'],
      avatar: '📸',
      offers: ['Photography', 'Photo Editing'],
      wants: ['Korean Language Exchange', 'Meditation'],
      rating: 4.7,
      lifePoints: 850,
      category: 'art'
    },
    {
      id: 4,
      name: 'Sophie Turner',
      location: 'London, UK',
      languages: ['English', 'German'],
      avatar: '🎨',
      offers: ['Digital Art', 'UI/UX Design'],
      wants: ['3D Modeling', 'Animation'],
      rating: 4.9,
      lifePoints: 1100,
      category: 'art'
    },
    {
      id: 5,
      name: 'Carlos Rodriguez',
      location: 'Mexico City, Mexico',
      languages: ['Spanish', 'English'],
      avatar: '📚',
      offers: ['Spanish Tutoring', 'Mathematics'],
      wants: ['Programming', 'Chess Strategy'],
      rating: 4.8,
      lifePoints: 920,
      category: 'education'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      location: 'Melbourne, Australia',
      languages: ['English'],
      avatar: '💪',
      offers: ['Yoga Instructions', 'Mindfulness'],
      wants: ['Rock Climbing', 'Nutrition'],
      rating: 4.9,
      lifePoints: 1050,
      category: 'health'
    }
  ];

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.offers.some(offer => offer.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         profile.wants.some(want => want.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || profile.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || profile.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Explore LifeHub</h2>
          <p className="text-gray-300">Discover amazing people ready to share their knowledge and skills</p>
        </div>

        {/* Search and Filters */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search what you want to learn..."
                className="w-full pl-10 pr-4 py-3 backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="relative flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-4 py-3 w-full backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-gray-900 dark:text-white focus:border-blue-400/50 transition-all duration-300 appearance-none"
                style={{ colorScheme: 'light' }}
              >
                <option value="all">All Categories</option>
                <option value="music">Music</option>
                <option value="tech">Technology</option>
                <option value="art">Art & Design</option>
                <option value="education">Education</option>
                <option value="health">Health & Wellness</option>
                <option value="languages">Languages</option>
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="pl-10 pr-4 py-3 w-full backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-gray-900 dark:text-white focus:border-blue-400/50 transition-all duration-300 appearance-none"
                style={{ colorScheme: 'light' }}
              >
                <option value="all">All Locations</option>
                {locations.slice(1).map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-300">
            Found <span className="text-blue-400 font-semibold">{filteredProfiles.length}</span> amazing people
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onViewProfile={() => onViewProfile(profile)}
              onConnect={() => {/* Handle connect */}}
            />
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;