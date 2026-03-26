// src/pages/Architecture.jsx
import { Link } from 'react-router-dom';
import { Building2, PencilRuler, Compass, Map, Home, ArrowRight, Download, FileCheck, Layers } from 'lucide-react';

const categories = [
  { id: 'all', name: 'CAMPUS PLANNING', icon: <Building2 size={24} /> },
  { id: 'interior', name: 'INTERIOR DESIGN', icon: <PencilRuler size={24} /> },
  { id: 'blueprints', name: 'BLUEPRINTS', icon: <Compass size={24} /> },
  { id: 'landscape', name: 'LANDSCAPE', icon: <Map size={24} /> },
  { id: 'renovation', name: 'RENOVATION', icon: <Home size={24} /> },
];

const projects = [
  {
    title: 'Modern Central Wing',
    loc: 'Mumbai, MH',
    desc: 'A futuristic campus expansion featuring 40+ smart classrooms and a central atrium.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80',
    tags: ['NEP Ready', 'Solar Integrated']
  },
  {
    title: 'The Green Primary School',
    loc: 'Bangalore, KA',
    desc: 'Integrating nature into learning with open-air corridors and rooftop gardens.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80',
    tags: ['Sustainable', 'Daylight Optimized']
  },
];

const Architecture = () => {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white overflow-hidden pt-24">
      {/* OVERSIZE TYPOGRAPHY HERO (Unique for Architecture) */}
      <section className="px-4 py-20 relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -mr-96 -mt-96" />
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="flex flex-col lg:flex-row items-end gap-10 mb-20">
              <div className="flex-1">
                 <h1 className="text-[12vw] font-black leading-[0.85] tracking-tighter uppercase font-heading select-none opacity-20 absolute -top-10 left-0 pointer-events-none">Architecture</h1>
                 <h2 className="text-5xl md:text-8xl font-black font-heading leading-tight mb-8 relative">
                    Designing <br/><span className="text-sm-blue italic font-serif">Future Heritage.</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
                    We bridge the gap between educational philosophy and physical form. Our architectural services transform campuses into world-class landmarks of learning.
                 </p>
              </div>
              <div className="flex flex-col gap-4 min-w-[300px]">
                 <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                    <p className="text-[10px] font-black uppercase tracking-widest text-sm-blue mb-4">Service Capabilities</p>
                    <div className="space-y-3 text-sm font-bold text-gray-300">
                       <div className="flex items-center gap-2"><FileCheck size={16} className="text-emerald-500" /> Site Feasibility Studies</div>
                       <div className="flex items-center gap-2"><Layers size={16} className="text-emerald-500" /> NEP Compliance Audits</div>
                       <div className="flex items-center gap-2"><Download size={16} className="text-emerald-500" /> Digital Twin Planning</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Circular Categories (Maintain User Requirement but with Dark Theme) */}
           <div className="flex overflow-x-auto gap-12 pb-12 hide-scrollbar justify-start lg:justify-center">
             {categories.map((cat) => (
               <button key={cat.id} className="flex flex-col items-center gap-4 group flex-none">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white group-hover:border-sm-blue transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                   {cat.icon}
                 </div>
                 <span className="text-[9px] font-black text-white group-hover:text-sm-blue tracking-widest uppercase transition-colors">{cat.name}</span>
               </button>
             ))}
           </div>
        </div>
      </section>

      {/* HORIZONTAL SCROLL GALLERY (Unique for Architecture) */}
      <section className="py-24 px-4 bg-white text-gray-900 rounded-t-[80px]">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16 px-4">
               <div>
                  <h3 className="text-4xl font-black font-heading tracking-tight">Iconic Portfolios</h3>
                  <p className="text-gray-500 mt-2 font-medium">Selected works across the Indian heritage landscape.</p>
               </div>
               <button className="px-8 py-3 bg-gray-900 text-white font-black rounded-full hover:bg-sm-blue transition-all uppercase tracking-widest text-xs">View All Work</button>
            </div>

            <div className="space-y-32">
               {projects.map((proj, i) => (
                  <div key={i} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                     <div className="flex-1 group">
                        <div className="relative rounded-[60px] overflow-hidden shadow-2xl h-[600px] w-full">
                           <img src={proj.img} alt={proj.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                           <div className="absolute inset-0 bg-sm-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                           <div className="absolute top-10 right-10 flex gap-2">
                              {proj.tags.map(t => (
                                 <span key={t} className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm">{t}</span>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="max-w-md">
                        <span className="text-sm-blue font-black text-xs uppercase tracking-[0.3em] mb-4 block">Project {i + 1} // {proj.loc}</span>
                        <h4 className="text-4xl font-black font-heading mb-6 leading-tight">{proj.title}</h4>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">{proj.desc}</p>
                        <div className="flex items-center gap-10">
                           <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest group hover:text-sm-blue transition-colors">
                              Explore Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SIGNATURE COLLABORATION SECTION */}
      <section className="py-24 px-4 bg-gray-50">
         <div className="max-w-5xl mx-auto rounded-[60px] bg-sm-blue p-12 lg:p-20 text-center relative shadow-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            <h5 className="text-white text-3xl md:text-5xl font-black font-heading leading-tight mb-8">Ready to define <br/> school culture by design?</h5>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-12 py-5 bg-white text-gray-900 font-black rounded-3xl hover:bg-sm-gray transition-all shadow-xl uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                  Consult With Architects <PencilRuler size={18} />
               </button>
               <button className="px-12 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-3xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                  Review Portfolio
               </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default Architecture;
