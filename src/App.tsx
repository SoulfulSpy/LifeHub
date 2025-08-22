import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileForm from './components/ProfileForm';
import Dashboard from './components/Dashboard';
import ProfileView from './components/ProfileView';
import KnowledgeCapsules from './components/KnowledgeCapsules';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProfile, setSelectedProfile] = useState(null);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'profile-form':
        return <ProfileForm onBack={() => setCurrentView('home')} />;
      case 'dashboard':
        return <Dashboard onViewProfile={(profile) => {
          setSelectedProfile(profile);
          setCurrentView('profile-view');
        }} />;
      case 'profile-view':
        return <ProfileView 
          profile={selectedProfile} 
          onBack={() => setCurrentView('dashboard')} 
        />;
      case 'knowledge':
        return <KnowledgeCapsules />;
      default:
        return <Hero onGetStarted={() => setCurrentView('profile-form')} 
                    onExplore={() => setCurrentView('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Navbar currentView={currentView} onNavigate={setCurrentView} />
        {renderCurrentView()}
        <Footer />
      </div>
    </div>
  );
}

export default App;