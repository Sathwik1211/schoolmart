// src/components/TopBar.jsx
import { Mail, Phone, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-[#0057A8] text-white py-1.5 px-4 border-b border-white/5 relative z-[70]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1">
        {/* Contact Strip - PACKED */}
        <div className="flex items-center gap-3 md:gap-6">
          <a href="mailto:info@schoolmart.in" className="flex items-center gap-1.5 hover:text-sm-yellow transition-all text-[10px] font-bold uppercase tracking-wider">
            <Mail size={10} className="text-sm-yellow" />
            <span className="hidden xs:inline">info@schoolmart.in</span>
          </a>
          <a href="tel:+919966109191" className="flex items-center gap-1.5 hover:text-sm-yellow transition-all text-[10px] font-bold uppercase tracking-wider">
            <Phone size={10} className="text-sm-yellow" />
            <span className="hidden sm:inline">+91 9966109191, +91 9866091111</span>
            <span className="sm:hidden">+91 9966109191</span>
          </a>
        </div>

        {/* Auth Strip - PACKED */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
            <Link to="/registration-new-form" className="hover:text-sm-yellow transition-all whitespace-nowrap">REGISTRATION</Link>
            <span className="text-white/20">|</span>
            <Link to="/my-account" className="hover:text-sm-yellow transition-all whitespace-nowrap">LOGIN</Link>
          </div>
          
          {/* Social icons */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-4">
            <a href="https://www.facebook.com/schoolmart.in" target="_blank" className="hover:text-sm-yellow transition-all"><Facebook size={12} /></a>
            <a href="https://twitter.com/schoolmarts" target="_blank" className="hover:text-sm-yellow transition-all"><Twitter size={12} /></a>
            <a href="https://www.instagram.com/schoolmart.in/" target="_blank" className="hover:text-sm-yellow transition-all"><Instagram size={12} /></a>
            <a href="https://www.linkedin.com/school/schoolmart-india/" target="_blank" className="hover:text-sm-yellow transition-all"><Linkedin size={12} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
