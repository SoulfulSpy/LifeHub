import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X, Save, MapPin, Globe, User } from 'lucide-react';
import ProfileView from './ProfileView';

interface ProfileFormProps {
  onBack: () => void;
}


const ProfileForm: React.FC<ProfileFormProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    languages: '',
    offers: [''],
    wants: ['']
  });
  const [error, setError] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  // Get userId from localStorage (set after login)
  const userId = localStorage.getItem('userId');

  // Redirect to login if not logged in
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn') || !userId) {
      navigate('/login');
    }
  }, [navigate, userId]);

  // Fetch profile data for the current user
  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn') || !userId) return;
    fetch(`http://localhost:5000/profile/${userId}`)
      .then(res => res.ok ? res.json() : Promise.reject('Profile not found'))
      .then(data => {
        const hasProfile = data && (data.name || data.location || data.languages || (data.offers && data.offers.length > 0));
        setFormData({
          name: data.name || '',
          location: data.location || '',
          languages: data.languages || '',
          offers: data.offers && data.offers.length ? data.offers : [''],
          wants: data.wants && data.wants.length ? data.wants : ['']
        });
        if (hasProfile) {
          setProfileData({
            id: userId,
            name: data.name,
            location: data.location,
            languages: typeof data.languages === 'string' ? data.languages.split(',').map((l: string) => l.trim()) : data.languages,
            avatar: data.name ? data.name[0].toUpperCase() : 'U',
            offers: data.offers || [],
            wants: data.wants || [],
            rating: 4.8, // Placeholder
            lifePoints: 50 // Placeholder
          });
          setShowProfile(true);
        }
      })
      .catch(() => {});
  }, [userId]);

  const addField = (field: 'offers' | 'wants') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeField = (field: 'offers' | 'wants', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const updateField = (field: 'offers' | 'wants', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  // Save profile handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/profile/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to save profile.');
      } else {
        // Prepare profile data for ProfileView
        setProfileData({
          id: userId,
          name: formData.name,
          location: formData.location,
          languages: formData.languages.split(',').map((l) => l.trim()),
          avatar: formData.name ? formData.name[0].toUpperCase() : 'U',
          offers: formData.offers.filter((o) => o.trim() !== ''),
          wants: formData.wants.filter((w) => w.trim() !== ''),
          rating: 4.8, // Placeholder, replace with real data if available
          lifePoints: 50 // Placeholder, replace with real data if available
        });
        setShowProfile(true);
      }
    } catch {
      setError('Could not connect to server.');
    }
  };

  if (showProfile && profileData) {
    return <ProfileView profile={profileData} onBack={() => setShowProfile(false)} onEdit={() => setShowProfile(false)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 mb-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <h2 className="text-3xl font-bold text-white mb-2">Create Your Profile</h2>
          <p className="text-gray-300">Tell the world what you can offer and what you want to learn</p>
        </div>

        {/* Form */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-400" />
                Basic Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-3 backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  Languages
                </label>
                <input
                  type="text"
                  value={formData.languages}
                  onChange={(e) => setFormData(prev => ({ ...prev, languages: e.target.value }))}
                  className="w-full px-4 py-3 backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  placeholder="e.g., English, Spanish, French"
                />
              </div>
            </div>

            {/* What You Offer */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">What You Can Offer</h3>
                <button
                  type="button"
                  onClick={() => addField('offers')}
                  className="flex items-center space-x-1 px-3 py-2 bg-green-500/20 border border-green-400/30 text-green-300 rounded-lg hover:bg-green-500/30 transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add Skill</span>
                </button>
              </div>

              {formData.offers.map((offer, index) => (
                <div key={index} className="flex space-x-2">
                  <input
                    type="text"
                    value={offer}
                    onChange={(e) => updateField('offers', index, e.target.value)}
                    className="flex-1 px-4 py-3 backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-green-400/50 focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                    placeholder="e.g., Guitar Lessons, Web Development, Language Tutoring"
                  />
                  {formData.offers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeField('offers', index)}
                      className="px-3 py-3 bg-red-500/20 border border-red-400/30 text-red-300 rounded-xl hover:bg-red-500/30 transition-all duration-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* What You Want */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">What You Want to Learn</h3>
                <button
                  type="button"
                  onClick={() => addField('wants')}
                  className="flex items-center space-x-1 px-3 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add Want</span>
                </button>
              </div>

              {formData.wants.map((want, index) => (
                <div key={index} className="flex space-x-2">
                  <input
                    type="text"
                    value={want}
                    onChange={(e) => updateField('wants', index, e.target.value)}
                    className="flex-1 px-4 py-3 backdrop-blur-lg bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="e.g., Photography, Cooking, Digital Marketing"
                  />
                  {formData.wants.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeField('wants', index)}
                      className="px-3 py-3 bg-red-500/20 border border-red-400/30 text-red-300 rounded-xl hover:bg-red-500/30 transition-all duration-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Save Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-blue-500/25"
              >
                <Save className="w-5 h-5" />
                <span>Save Profile</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;