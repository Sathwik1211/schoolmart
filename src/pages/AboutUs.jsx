// src/pages/AboutUs.jsx
import { Link } from 'react-router-dom';
import { Target, Users, Rocket, Award, ShieldCheck, Heart, ArrowUpRight, CheckCircle2, LayoutGrid, Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* STORYTELLING BENTO GRID (Screenshot 2 / Bento Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-6 gap-6 h-auto lg:h-[1200px]">
          
          {/* Main Hero Card */}
          <div className="lg:col-span-2 lg:row-span-3 bg-sm-blue rounded-[50px] p-12 text-white relative overflow-hidden group shadow-2xl">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
             <div className="relative z-10 flex flex-col h-full">
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit border border-white/30"><Sparkles size={14} className="inline mr-2" /> Since 2012</span>
                <h1 className="text-4xl md:text-6xl font-black font-heading leading-tight mb-8">Empowering <br/> Educational <br/> Spaces.</h1>
                <p className="text-white/80 text-lg leading-relaxed max-w-md mb-auto font-medium">
                  At SchoolMart, we don't just supply furniture. We design learning environments that shape the future of education in India through innovation, ergonomics, and architectural excellence.
                </p>
                <div className="mt-12 flex gap-4 items-center">
                   <div className="w-16 h-1 bg-white/30 rounded-full" />
                   <span className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer">Explore Our Philosophy</span>
                </div>
             </div>
          </div>

          {/* Impact Stats Card */}
          <div className="lg:col-span-1 lg:row-span-2 bg-white rounded-[50px] p-10 shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-xl transition-all">
             <div className="absolute inset-0 bg-blue-50/50 scale-0 group-hover:scale-100 rounded-full transition-transform duration-700" />
             <div className="relative z-10">
                <h3 className="text-5xl font-black text-sm-blue mb-4">1500+</h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-loose">Schools Equipped <br/> Across India</p>
             </div>
          </div>

          {/* Team Photo Card Layout (Screenshot 2 Inspired) */}
          <div className="lg:col-span-1 lg:row-span-3 rounded-[50px] overflow-hidden shadow-2xl relative group">
             <img src="https://images.unsplash.com/photo-1522071823907-b712ec46597a?w=800&q=80" alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-white text-xl font-black font-heading mb-2">Our Visionaries</h4>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Architects, Designers & Educators</p>
             </div>
          </div>

          {/* Mission Card */}
          <div className="lg:col-span-2 lg:row-span-3 bg-white rounded-[50px] p-12 shadow-sm border border-gray-100 group hover:shadow-xl transition-all relative overflow-hidden">
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-sm-orange/10 text-sm-orange rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                   <Target size={32} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 font-heading leading-tight mb-6">Our Mission to <br/><span className="text-sm-orange">Elevate Quality.</span></h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-sm mb-12">
                   To provide international-standard quality in every piece of equipment, from a simple dual desk to a complex IoT-enabled science laboratory, ensuring every child in India has access to the best physical tools for learning.
                </p>
                <div className="mt-auto">
                   <Link to="/corporate" className="text-xs font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 group-hover:text-sm-orange transition-colors">
                      Learn About Strategy <ArrowUpRight size={18} />
                   </Link>
                </div>
             </div>
          </div>

          {/* Core Values Bento Row */}
          <div className="lg:col-span-1 lg:row-span-2 bg-[#1A1A1A] rounded-[50px] p-10 text-white relative flex flex-col justify-end group shadow-2xl shadow-gray-200 overflow-hidden">
             <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
             <div className="relative z-10">
                <Rocket size={40} className="text-white/30 mb-8 group-hover:rotate-12 transition-transform" />
                <h4 className="text-2xl font-black mb-4">Innovation First</h4>
                <p className="text-white/40 text-[10px] font-bold leading-relaxed uppercase tracking-widest">We never stop reimagining <br/> what a classroom can be.</p>
             </div>
          </div>

          {/* Small Feature Grid Row */}
          <div className="lg:col-span-1 lg:row-span-1 bg-yellow-400 rounded-[40px] p-6 flex items-center justify-center gap-4 shadow-lg group hover:bg-white transition-all">
             <ShieldCheck size={28} className="text-gray-900" />
             <span className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">Safety Assured</span>
          </div>

          <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-[40px] p-6 flex items-center justify-center gap-4 shadow-sm border border-gray-100 group hover:bg-gray-900 hover:text-white transition-all">
             <Award size={28} className="text-sm-blue group-hover:text-white transition-colors" />
             <span className="text-[11px] font-black text-gray-900 group-hover:text-white uppercase tracking-[0.2em] transition-colors">Multiple Awards</span>
          </div>

          {/* CTA / Final Word Bento */}
          <div className="lg:col-span-2 lg:row-span-1 bg-white rounded-[40px] shadow-sm border border-gray-100 flex items-center justify-between p-10 group overflow-hidden relative">
             <div className="relative z-10 flex items-center gap-10">
                <div className="flex -space-x-4">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-100">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
                     </div>
                   ))}
                </div>
                <h5 className="text-sm font-black text-gray-900 uppercase tracking-widest">Join our 20k+ network</h5>
             </div>
             <Link to="/contact-us" className="relative z-10 p-4 bg-gray-900 text-white rounded-2xl hover:bg-sm-blue transition-all shadow-xl shadow-gray-200">
                <ArrowUpRight size={24} />
             </Link>
          </div>

        </div>

        {/* DETAILED TIMELINE / JOURNEY SECTION (Screenshot 3 Flow Inspired) */}
        <div className="mt-32 relative text-center">
           <div className="inline-block px-5 py-2 bg-blue-50 text-sm-blue font-black rounded-full mb-10 text-[10px] uppercase tracking-widest shadow-sm">Our Evolutionary Journey</div>
           <h2 className="text-4xl md:text-6xl font-black text-gray-900 font-heading mb-20">A Decade of Shaping <br/> <span className="text-sm-blue italic font-serif">Brilliant Minds.</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative pb-20">
              <div className="absolute top-[30%] left-[10%] right-[10%] h-0.5 bg-gray-100 hidden md:block" />
              
              {[
                { y: '2012', t: 'The Foundation', d: 'Started as a small furniture provider for schools in Maharashtra.', i: <CheckCircle2 /> },
                { y: '2017', t: 'Digital Expansion', d: 'Pioneered smart classrooms and interactive labs for private institutions.', i: <LayoutGrid /> },
                { y: '2024', t: 'National Leader', d: 'Operating in 22 states with end-to-end campus design capability.', i: <Award /> },
              ].map((step, i) => (
                 <div key={i} className="relative z-10 group bg-white shadow-xl shadow-gray-100/30 p-10 rounded-[40px] hover:-translate-y-4 transition-all duration-500 border border-gray-50/50">
                    <div className="w-20 h-20 bg-gray-50 text-gray-300 group-hover:bg-sm-blue group-hover:text-white rounded-full flex items-center justify-center absolute -top-10 left-1/2 -translate-x-1/2 shadow-xl border-4 border-white transition-all duration-500">
                       <span className="text-sm font-black italic">{step.y.slice(2)}"</span>
                    </div>
                    <div className="text-sm-blue mb-4 group-hover:scale-125 transition-transform mt-10 flex justify-center">{step.i}</div>
                    <h4 className="text-2xl font-black text-gray-900 mb-4">{step.t}</h4>
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest leading-loose">{step.d}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
