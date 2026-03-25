// src/components/TopBar.jsx
import { Mail, Phone, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-sm-blue text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left Side - Contact Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a 
            href="mailto:info@schoolmart.in" 
            className="flex items-center gap-1.5 hover:text-sm-yellow transition-colors duration-200"
          >
            <Mail size={14} />
            <span>info@schoolmart.in</span>
          </a>
          <a 
            href="tel:+919966109191" 
            className="flex items-center gap-1.5 hover:text-sm-yellow transition-colors duration-200"
          >
            <Phone size={14} />
            <span>+91 9966109191, +91 9866091111</span>
          </a>
        </div>

        {/* Right Side - Social + Auth */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-2">
            <a href="https://www.facebook.com/schoolmart.in" target="_blank" rel="noopener noreferrer" className="hover:text-sm-yellow transition-colors duration-200">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com/schoolmarts" target="_blank" rel="noopener noreferrer" className="hover:text-sm-yellow transition-colors duration-200">
              <Twitter size={16} />
            </a>
            <a href="https://www.youtube.com/channel/UCgKY_Kf8jH1hoP3p0I0tiRA" target="_blank" rel="noopener noreferrer" className="hover:text-sm-yellow transition-colors duration-200">
              <Youtube size={16} />
            </a>
            <a href="https://www.instagram.com/schoolmart.in/" target="_blank" rel="noopener noreferrer" className="hover:text-sm-yellow transition-colors duration-200">
              <Instagram size={16} />
            </a>
            <a href="https://www.linkedin.com/school/schoolmart-india/" target="_blank" rel="noopener noreferrer" className="hover:text-sm-yellow transition-colors duration-200">
              <Linkedin size={16} />
            </a>
          </div>

          {/* Auth Links */}
          <div className="flex items-center gap-3 text-sm font-medium">
            <Link to="/registration-new-form" className="hover:text-sm-yellow transition-colors duration-200 uppercase tracking-wide">
              Registration
            </Link>
            <span className="text-white/50">|</span>
            <Link to="/my-account" className="hover:text-sm-yellow transition-colors duration-200 uppercase tracking-wide">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
