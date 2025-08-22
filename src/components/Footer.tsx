import React from 'react';
import { Globe, Heart, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'About LifeHub', href: '#' },
        { name: 'How It Works', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Community Guidelines', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Safety', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Report Issue', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Accessibility', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative z-10 mt-20">
      {/* Main Footer */}
      <div className="backdrop-blur-lg bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">LifeHub</h3>
                  <p className="text-sm text-gray-400">A Global Resource Exchange Platform</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Connecting humanity through knowledge exchange. Learn, teach, and grow with people from around the world in a supportive community-driven environment.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="border-t border-white/10 mt-12 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-400 text-sm">Active Members</div>
              </div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">50,000+</div>
                <div className="text-gray-400 text-sm">Successful Exchanges</div>
              </div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5,000+</div>
                <div className="text-gray-400 text-sm">Skills Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="backdrop-blur-lg bg-white/10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 LifeHub. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Powered by LifeHub</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>Connecting Humanity</span>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-400">Available in:</span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
                  🇺🇸 EN
                </button>
                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
                  🇪🇸 ES
                </button>
                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
                  🇫🇷 FR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;