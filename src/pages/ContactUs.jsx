// src/pages/ContactUs.jsx
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Send, Globe, Clock, MessageSquare, ArrowRight, Video, Calendar, Sparkles } from 'lucide-react';

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 overflow-hidden relative">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-100 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-orange-100 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* HERO SECTION - SPLIT HI-CONTRAST (Screenshot 2 Inspired) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
           <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-sm-blue font-black rounded-full mb-8 text-[11px] uppercase tracking-widest shadow-sm border border-blue-100"><MessageSquare size={16} className="inline mr-2" /> Connect with Experts</span>
              <h1 className="text-5xl md:text-8xl font-black text-gray-900 font-heading leading-[0.9] mb-8 tracking-tighter">Let's Build <br/> The Future <span className="text-sm-blue italic font-serif">Together.</span></h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-12 font-medium">
                 From architectural blueprints to ergonomic furniture installations, our team is ready to assist you in every step of your school project.
              </p>
              
              <div className="grid grid-cols-2 gap-8 text-left">
                 <div className="group border-l-4 border-gray-100 pl-6 py-2 hover:border-sm-blue transition-all">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Strategy</p>
                    <a href="mailto:info@schoolmart.in" className="text-xl font-bold text-gray-900 group-hover:text-sm-blue transition-colors">info@schoolmart.in</a>
                 </div>
                 <div className="group border-l-4 border-gray-100 pl-6 py-2 hover:border-sm-blue transition-all">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Hotline Call</p>
                    <a href="tel:+918884441234" className="text-xl font-bold text-gray-900 group-hover:text-sm-blue transition-colors">+91 888 444 1234</a>
                 </div>
              </div>
           </div>

           {/* GET A QUOTE HIGHLIGHT BOX (User Request Focused) */}
           <div className="w-full lg:w-[460px] relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[60px] blur-3xl opacity-10 animate-pulse" />
              <div className="bg-white rounded-[60px] p-10 lg:p-12 shadow-2xl relative border border-gray-100 overflow-hidden transform group hover:-rotate-1 transition-transform">
                 <div className="absolute top-0 left-0 right-0 h-4 bg-sm-blue" />
                 <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tight mb-2 uppercase tracking-widest">GET A QUOTE</h2>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Tailored Solutions for Your School</p>
                 </div>
                 
                 <form className="space-y-6">
                    <div className="relative group">
                       <input type="text" placeholder="Institutional Name" className="w-full bg-gray-50 px-6 py-4 rounded-3xl border border-gray-50 focus:border-sm-blue focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium text-sm" />
                       <Sparkles size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-200 group-focus-within:text-sm-blue transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="Contact Number" className="w-full bg-gray-50 px-6 py-4 rounded-3xl border border-gray-50 focus:border-sm-blue focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium text-sm" />
                       <input type="text" placeholder="Project City" className="w-full bg-gray-50 px-6 py-4 rounded-3xl border border-gray-50 focus:border-sm-blue focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium text-sm" />
                    </div>
                    <textarea rows="4" placeholder="How can we help your school flourish?" className="w-full bg-gray-50 px-6 py-4 rounded-[35px] border border-gray-50 focus:border-sm-blue focus:bg-white outline-none transition-all resize-none placeholder:text-gray-300 font-medium text-sm"></textarea>
                    
                    <button className="w-full py-5 bg-gray-900 text-white font-black rounded-[20px] shadow-xl hover:shadow-blue-100 hover:bg-sm-blue transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 active:scale-[0.98]">
                       Connect with Us <Send size={18} />
                    </button>
                 </form>
              </div>
           </div>
        </div>

        {/* INTERACTIVE ACCESS CARDS (Screenshot 3 / Grid Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {[
             { i: <Video size={32} />, t: 'Video Consultation', d: 'Schedule a virtual tour of our experience centres.', c: 'bg-emerald-50 text-emerald-600' },
             { i: <Calendar size={32} />, t: 'Site Visit', d: 'Invite our experts for a physical campus survey.', c: 'bg-orange-50 text-orange-600' },
             { i: <MapPin size={32} />, t: 'Registered Hub', d: 'Visit our flagship office in Bangalore, India.', c: 'bg-blue-50 text-blue-600' },
             { i: <Clock size={32} />, t: '24/7 Digital Support', d: 'Round the clock assistance via our portal.', c: 'bg-purple-50 text-purple-600' },
           ].map((card, i) => (
             <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-50 group hover:shadow-2xl transition-all hover:-translate-y-3 cursor-pointer">
                <div className={`w-20 h-20 ${card.c} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                   {card.i}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">{card.t}</h3>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{card.d}</p>
             </div>
           ))}
        </div>

        {/* OFFICE MAP AREA (Screenshot 2 / Unique Element) */}
        <div className="bg-[#1A1A1A] rounded-[60px] overflow-hidden p-12 lg:p-20 relative text-white">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl" />
           <div className="flex flex-col lg:flex-row gap-20 relative z-10 items-center">
              <div className="max-w-xl">
                 <h4 className="text-3xl font-black font-heading mb-6 tracking-tight">Our Hub in The Silicon Valley of India.</h4>
                 <div className="space-y-6 text-white/50 text-xs font-bold uppercase tracking-widest">
                    <div className="flex gap-4">
                       <MapPin className="text-sm-blue shrink-0" size={24} />
                       <p className="leading-relaxed">3rd Floor, Corporate Towers, MG Road, <br/> Bangalore, Karnataka - 560001</p>
                    </div>
                    <div className="flex gap-4">
                       <Globe className="text-sm-blue shrink-0" size={24} />
                       <p>Pan-India Service Network Across 22 States</p>
                    </div>
                 </div>
                 <div className="mt-12">
                    <button className="px-8 py-3 bg-white text-gray-900 font-black rounded-full hover:bg-sm-blue hover:text-white transition-all shadow-xl uppercase tracking-widest text-[10px] flex items-center gap-2">
                       Open in Maps <ArrowRight size={14} />
                    </button>
                 </div>
              </div>
              <div className="flex-1 w-full bg-white/5 rounded-[40px] p-2 border border-white/10 group overflow-hidden">
                 <div className="h-[400px] w-full rounded-[35px] bg-gray-800 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1524311582025-055996ea5533?w=1000&q=80" alt="Map View" className="w-full h-full object-cover grayscale brightness-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-sm-blue rounded-full animate-ping opacity-30" />
                       <div className="w-16 h-16 bg-sm-blue rounded-full flex items-center justify-center shadow-2xl relative z-10">
                          <MapPin size={32} className="text-white" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
