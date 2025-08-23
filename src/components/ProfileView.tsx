import React from 'react';
import { ArrowLeft, MapPin, Star, Coins, MessageCircle, Send, Globe, Award, Heart, User } from 'lucide-react';

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

interface ProfileViewProps {
  profile: Profile | null;
  onBack: () => void;
  onEdit?: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profile, onBack, onEdit }) => {
  if (!profile) return null;

  // onBack is required for type compatibility, but not used directly
  return (
    <div className="min-h-screen px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Back & Edit Buttons */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => window.location.href = '/explore'}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Explore</span>
          </button>
          {onEdit && (
            <button
              onClick={onEdit}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <User className="w-4 h-4 mr-1" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>

        {/* Profile Header */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center text-6xl shadow-lg">
              {profile.avatar}
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">{profile.name}</h1>
              
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 mb-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  {profile.location}
                </div>
                <div className="flex items-center text-gray-300">
                  <Globe className="w-4 h-4 mr-2" />
                  {(Array.isArray(profile.languages) ? profile.languages : []).join(', ')}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 mb-6">
                <div className="flex items-center space-x-1 bg-yellow-500/20 border border-yellow-400/30 rounded-lg px-3 py-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{profile.rating}</span>
                  <span className="text-gray-300 text-sm">Rating</span>
                </div>
                <div className="flex items-center space-x-1 bg-blue-500/20 border border-blue-400/30 rounded-lg px-3 py-1">
                  <Coins className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-semibold">{profile.lifePoints}</span>
                  <span className="text-gray-300 text-sm">LifePoints</span>
                </div>
                <div className="flex items-center space-x-1 bg-purple-500/20 border border-purple-400/30 rounded-lg px-3 py-1">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-semibold">Verified</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold">
                  <Send className="w-5 h-5" />
                  <span>Send Exchange Request</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 backdrop-blur-lg bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What They Offer */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              What {profile.name.split(' ')[0]} Offers
            </h2>
            
            <div className="space-y-4">
              {profile.offers.map((offer, index) => (
                <div key={index} className="bg-green-500/10 border border-green-400/20 rounded-xl p-4 hover:bg-green-500/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{offer}</h3>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Expert level • 50+ successful exchanges
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-1">
                      <Coins className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm font-medium">50 LP/hour</span>
                    </div>
                    <button className="px-3 py-1 bg-green-500/20 border border-green-400/30 text-green-300 rounded-lg text-sm hover:bg-green-500/30 transition-all duration-300">
                      Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What They Want */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              What {profile.name.split(' ')[0]} Wants
            </h2>
            
            <div className="space-y-4">
              {profile.wants.map((want, index) => (
                <div key={index} className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-4 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{want}</h3>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300 text-sm">High</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Beginner level • Looking for patient teacher
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-1">
                      <Coins className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm font-medium">30 LP/hour</span>
                    </div>
                    <button className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-all duration-300">
                      Offer Help
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Reviews</h2>
          
          <div className="space-y-4">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-white font-medium">Sarah Johnson</p>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">2 days ago</span>
                </div>
                <p className="text-gray-300 text-sm">
                  "Amazing guitar teacher! Very patient and explains concepts clearly. Highly recommend!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;