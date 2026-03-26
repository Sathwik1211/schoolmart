// src/pages/AboutUs.jsx
import { Link } from 'react-router-dom';
import { Target, Users, Rocket, Award, ShieldCheck, Heart, ArrowUpRight, CheckCircle2, LayoutGrid, Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* REFINED STORY HERO - REMOVED IMMEDIATE BENTO ENTRY */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* HERITAGE BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-blue-50 text-sm-blue font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90 border border-blue-100">
                 <Rocket size={12} className="inline mr-2" /> Since 2012
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Empowering <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">the</span> <br/> Future of Edu.
              </h1>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-xs leading-loose">
                 Designing learning environments that shape the future through innovation and ergonomics.
              </p>
           </div>

           {/* IMPACT FEATURE HUB - RIGHT (High Contrast Inspired) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-sm-blue rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">1500+ <br/> Schools <br/> Equipped.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-white text-sm-blue font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg active:scale-95">Our Impact</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-gray-900 rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative border border-gray-800">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Visionary <br/> Architecture <br/> Hub.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">Bespoke</span>
                    <Users className="text-gray-700 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* STORYTELLING BENTO GRID (Below the new Hero) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-6 gap-5 h-auto lg:h-[900px]">
           {/* REDESIGNED MAIN BENTO CARD */}
           <div className="lg:col-span-2 lg:row-span-3 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="w-12 h-1 bg-sm-blue mb-8 rounded-full" />
              <h3 className="text-2xl font-black text-gray-900 font-heading mb-6 uppercase tracking-tight">Our <span className="text-sm-blue">Philosophy.</span></h3>
              <p className="text-gray-500 text-[11px] leading-relaxed max-w-sm mb-10 font-bold uppercase tracking-widest">
                 We don't just supply furniture; we engineer productivity, safety, and curiosity into every square inch of your institution.
              </p>
           </div>

          {/* Impact Stats Card */}
          <div className="lg:col-span-1 lg:row-span-2 bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-xl transition-all">
             <div className="absolute inset-0 bg-blue-50/50 scale-0 group-hover:scale-100 rounded-full transition-transform duration-700" />
             <div className="relative z-10">
                <h3 className="text-4xl font-black text-sm-blue mb-2">1500+</h3>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-loose">Schools Equipped <br/> Across India</p>
             </div>
          </div>

          {/* Team Photo Card Layout (Screenshot 2 Inspired) */}
          <div className="lg:col-span-1 lg:row-span-3 rounded-[30px] overflow-hidden shadow-2xl relative group">
             <img src="https://images.unsplash.com/photo-1522071823907-b712ec46597a?w=800&q=80" alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
             <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-lg font-black font-heading mb-1 uppercase">Visionaries</h4>
                <p className="text-white/60 text-[8px] font-bold uppercase tracking-widest">Architects & Educators</p>
             </div>
          </div>

          {/* Mission Card */}
          <div className="lg:col-span-2 lg:row-span-3 bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 group hover:shadow-xl transition-all relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-sm-orange/10 text-sm-orange rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                   <Target size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 font-heading leading-tight mb-4 uppercase whitespace-pre-line">Our Mission to {"\n"}<span className="text-sm-orange">Elevate Quality.</span></h3>
                <p className="text-gray-500 text-[11px] leading-relaxed max-w-sm mb-10 font-bold uppercase tracking-widest">
                   To provide international-standard quality in every piece of equipment, from simple desks to complex laboratories.
                </p>
                <div className="mt-auto">
                   <Link to="/corporate" className="text-[9px] font-black text-gray-900 uppercase tracking-widest flex items-center gap-2 group-hover:text-sm-orange transition-colors">
                      Learn About Strategy <ArrowUpRight size={14} />
                   </Link>
                </div>
             </div>
          </div>

          {/* Core Values Bento Row */}
          <div className="lg:col-span-1 lg:row-span-2 bg-[#1A1A1A] rounded-[30px] p-8 text-white relative flex flex-col justify-end group shadow-2xl shadow-gray-200 overflow-hidden">
             <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
             <div className="relative z-10">
                <Rocket size={32} className="text-white/30 mb-6 group-hover:rotate-12 transition-transform" />
                <h4 className="text-xl font-black mb-2 uppercase">Innovation</h4>
                <p className="text-white/40 text-[9px] font-bold leading-relaxed uppercase tracking-widest">We reimagine <br/> what a classroom can be.</p>
             </div>
          </div>

          {/* Small Feature Grid Row */}
          <div className="lg:col-span-1 lg:row-span-1 bg-yellow-400 rounded-[24px] p-4 flex items-center justify-center gap-3 shadow-lg group hover:bg-white transition-all">
             <ShieldCheck size={20} className="text-gray-900" />
             <span className="text-[9px] font-black text-gray-900 uppercase tracking-[0.2em]">Safety Assured</span>
          </div>

          <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-[24px] p-4 flex items-center justify-center gap-3 shadow-sm border border-gray-100 group hover:bg-gray-900 hover:text-white transition-all">
             <Award size={20} className="text-sm-blue group-hover:text-white transition-colors" />
             <span className="text-[9px] font-black text-gray-900 group-hover:text-white uppercase tracking-[0.2em] transition-colors">Multi Awards</span>
          </div>

          {/* CTA / Final Word Bento */}
          <div className="lg:col-span-2 lg:row-span-1 bg-white rounded-[24px] shadow-sm border border-gray-100 flex items-center justify-between p-8 group overflow-hidden relative">
             <div className="relative z-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-gray-100">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
                     </div>
                   ))}
                </div>
                <h5 className="text-[9px] font-black text-gray-900 uppercase tracking-widest">Join our 20k+ network</h5>
             </div>
             <Link to="/contact-us" className="relative z-10 p-3 bg-gray-900 text-white rounded-xl hover:bg-sm-blue transition-all shadow-xl shadow-gray-200">
                <ArrowUpRight size={20} />
             </Link>
          </div>

        </div>

        {/* DETAILED TIMELINE / JOURNEY SECTION (Screenshot 3 Flow Inspired) */}
        <div className="mt-24 relative text-center">
           <div className="inline-block px-4 py-1.5 bg-blue-50 text-sm-blue font-black rounded-full mb-8 text-[9px] uppercase tracking-widest shadow-sm">Evolutionary Journey</div>
           <h2 className="text-3xl md:text-5xl font-black text-gray-900 font-heading mb-16 uppercase">A Decade of Shaping <br/> <span className="text-sm-blue italic font-serif">Brilliant Minds.</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative pb-16">
              <div className="absolute top-[30%] left-[10%] right-[10%] h-0.5 bg-gray-100 hidden md:block" />
              
              {[
                { y: '2012', t: 'Foundation', d: 'Started as a furniture provider in Maharashtra.', i: <CheckCircle2 /> },
                { y: '2017', t: 'Digital Era', d: 'Pioneered smart classrooms and interactive labs.', i: <LayoutGrid /> },
                { y: '2024', t: 'National Leader', d: 'Operating in 22 states with end-to-end capability.', i: <Award /> },
              ].map((step, i) => (
                 <div key={i} className="relative z-10 group bg-white shadow-xl shadow-gray-100/30 p-8 rounded-[30px] hover:-translate-y-2 transition-all duration-500 border border-gray-50/50">
                    <div className="w-16 h-16 bg-gray-50 text-gray-300 group-hover:bg-sm-blue group-hover:text-white rounded-full flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2 shadow-xl border-4 border-white transition-all duration-500">
                       <span className="text-xs font-black italic">{step.y.slice(2)}"</span>
                    </div>
                    <div className="text-sm-blue mb-3 group-hover:scale-110 transition-transform mt-8 flex justify-center">{step.i}</div>
                    <h4 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">{step.t}</h4>
                    <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest leading-loose">{step.d}</p>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
