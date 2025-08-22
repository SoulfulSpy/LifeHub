import React from 'react';
import { MapPin, Star, Coins, MessageCircle, Eye, Globe } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  location: string;
  languages: string[];
  avatar: string;
  offers: string[];
  wants: string[];
  rating: number;
  lifePoints: number;
}

interface ProfileCardProps {
  profile: Profile;
  onViewProfile: () => void;
  onConnect: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onViewProfile, onConnect }) => {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
          {profile.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
            {profile.name}
          </h3>
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin className="w-3 h-3 mr-1" />
            {profile.location}
          </div>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <Globe className="w-3 h-3 mr-1" />
            {profile.languages.join(', ')}
          </div>
        </div>
      </div>

      {/* Rating and LifePoints */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white font-semibold">{profile.rating}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Coins className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-semibold">{profile.lifePoints}</span>
          <span className="text-gray-400 text-sm">LP</span>
        </div>
      </div>

      {/* Offers */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
          Offers
        </h4>
        <div className="space-y-1">
          {profile.offers.slice(0, 2).map((offer, index) => (
            <div key={index} className="text-sm text-gray-300 bg-green-500/10 border border-green-400/20 rounded-lg px-3 py-1">
              {offer}
            </div>
          ))}
          {profile.offers.length > 2 && (
            <div className="text-xs text-gray-400">+{profile.offers.length - 2} more</div>
          )}
        </div>
      </div>

      {/* Wants */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
          Wants to Learn
        </h4>
        <div className="space-y-1">
          {profile.wants.slice(0, 2).map((want, index) => (
            <div key={index} className="text-sm text-gray-300 bg-blue-500/10 border border-blue-400/20 rounded-lg px-3 py-1">
              {want}
            </div>
          ))}
          {profile.wants.length > 2 && (
            <div className="text-xs text-gray-400">+{profile.wants.length - 2} more</div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={onConnect}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 text-sm font-medium"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect</span>
        </button>
        <button
          onClick={onViewProfile}
          className="flex items-center justify-center px-4 py-2 backdrop-blur-lg bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;