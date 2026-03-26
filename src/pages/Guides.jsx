// src/pages/Guides.jsx
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Download, Search, Layout, ArrowUpRight, CheckCircle2, Award, Zap, Building2, Lightbulb, MousePointer2 } from 'lucide-react';

const categories = [
  { id: 'all', name: 'INSTITUTIONAL GUIDES', icon: <Building2 size={20} /> },
  { id: 'design', name: 'DESIGN HANDBOOKS', icon: <Layout size={20} /> },
  { id: 'tech', name: 'TECH MANUALS', icon: <MousePointer2 size={20} /> },
  { id: 'infra', name: 'INFRA STRATEGY', icon: <Lightbulb size={20} /> },
];

const guideItems = [
  { title: 'The NEP 2020 Compliance Guide', cat: 'Policy', size: '1.2 MB', img: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=600&q=80', badge: 'Must Read' },
  { title: 'Color Theory for Classrooms', cat: 'Design', size: '2.5 MB', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', badge: 'Latest' },
  { title: 'Smart Campus Cybersecurity', cat: 'Technology', size: '0.8 MB', img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&q=80', badge: 'Essential' },
  { title: 'Ergonomic Seating Standards', cat: 'Furniture', size: '3.1 MB', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
];

const Guides = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* REFINED KNOWLEDGE HERO - REMOVED CENTERED STARTING */}
        <section className="pt-8 pb-12 flex flex-col lg:flex-row gap-8 items-stretch">
           {/* STRATEGY BLOCK - LEFT */}
           <div className="flex-1 bg-white rounded-[30px] p-10 flex flex-col justify-center border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sm-blue/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-sm-blue/10 transition-colors" />
              <div className="px-3 py-1 bg-yellow-400 text-gray-900 font-black rounded-full text-[8px] uppercase tracking-[0.2em] mb-6 w-fit scale-90">
                 <BookOpen size={12} className="inline mr-2" /> Educational Resources
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight mb-6 tracking-tighter text-gray-900 uppercase">
                 Guides. <br/> <span className="text-sm-blue italic font-serif lowercase tracking-normal">Strategy.</span> <br/> Success.
              </h1>
              
              {/* Compact Search below title */}
              <div className="relative max-w-sm mt-4">
                 <input type="text" placeholder="Search handbooks..." className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-100 focus:border-sm-blue outline-none text-[10px] font-bold uppercase tracking-widest transition-all" />
                 <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
           </div>

           {/* COMPLIANCE FEATURE HUB - RIGHT (High Contrast Inspired) */}
           <div className="lg:w-[450px] grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#1A1A1A] rounded-[30px] p-8 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-sm-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed text-sm-blue">NEP 2020 <br/> Compliance <br/> Strategic Guide.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <button className="px-5 py-2 bg-sm-blue text-white font-black rounded-full text-[8px] uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95">Download PDF</button>
                    <ArrowUpRight className="text-white/20 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
              <div className="bg-white rounded-[30px] p-8 text-gray-900 flex flex-col justify-between group overflow-hidden relative border border-gray-100">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10 leading-relaxed">Certification <br/> & <br/> Standards.</h3>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <span className="text-[20px] font-black font-heading opacity-10 uppercase tracking-tighter">BIFMA</span>
                    <Award className="text-gray-300 group-hover:text-sm-blue transition-colors" size={24} />
                 </div>
              </div>
           </div>
        </section>

        {/* Compact Strip Menu — AS PER REFERENCE */}
        <section className="pb-12 px-2">
           <div className="flex overflow-x-auto gap-8 pb-4 hide-scrollbar justify-start border-b border-gray-100">
             {categories.map((cat) => (
               <button key={cat.id} className="flex items-center gap-3 group flex-none py-2 px-6 hover:bg-white rounded-full transition-all border border-transparent hover:border-gray-50 shadow-sm hover:shadow-gray-100">
                 <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sm-blue group-hover:text-white transition-all">
                   {cat.icon}
                 </div>
                 <span className="text-[8px] font-black text-gray-400 group-hover:text-gray-900 uppercase tracking-widest transition-colors">{cat.name}</span>
               </button>
             ))}
           </div>
        </section>

        {/* HIGH-DENSITY RESOURCE TILES (Screenshot 4 variation but for Guides) */}
        <section className="py-20 border-t border-gray-100">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guideItems.map((item, i) => (
                 <div key={i} className="bg-white p-4 rounded-[60px] border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-3xl hover:-translate-y-4 group cursor-pointer overflow-hidden flex flex-col relative">
                    <div className="relative h-60 rounded-[45px] overflow-hidden mb-6">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                       <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                       {item.badge && (
                          <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black tracking-widest uppercase shadow-lg text-sm-blue border border-blue-50">{item.badge}</div>
                       )}
                    </div>
                    <div className="px-6 pb-8 flex-1 flex flex-col">
                       <p className="text-sm-blue font-black text-[10px] uppercase tracking-widest mb-3">{item.cat} Handbook</p>
                       <h3 className="text-xl font-black text-gray-900 font-heading mb-6 tracking-tight leading-tight group-hover:text-sm-blue transition-colors flex-1">{item.title}</h3>
                       <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                          <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{item.size} PDF</span>
                          <button className="w-10 h-10 bg-gray-50 group-hover:bg-sm-blue group-hover:text-white rounded-2xl flex items-center justify-center text-gray-300 transition-all active:scale-95">
                             <Download size={18} />
                          </button>
                       </div>
                    </div>
                 </div>
              ))}

              {/* UNIQUE BENTO CALL-TO-ACTION FOR GUIDES */}
              <div className="lg:col-span-2 bg-[#1A1A1A] rounded-[70px] p-12 lg:p-16 text-white relative overflow-hidden group shadow-3xl flex flex-col lg:flex-row items-center gap-12 active:scale-[0.99] cursor-pointer">
                 <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sm-blue opacity-10 rounded-full blur-[80px] group-hover:opacity-30 transition-opacity" />
                 <div className="w-32 h-32 bg-sm-blue/20 backdrop-blur-md rounded-[50px] flex items-center justify-center text-sm-blue border border-sm-blue/30 shadow-2xl group-hover:rotate-12 transition-transform">
                    <Zap size={60} />
                 </div>
                 <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-3xl font-black font-heading mb-4 tracking-tight leading-tight uppercase">Request Custom Guide.</h4>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-loose mb-8">Can't find the specific compliance guide for your state? Our strategy team will curate one for you.</p>
                    <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-3xl hover:bg-sm-blue hover:text-white transition-all shadow-xl uppercase tracking-widest text-[10px]">Speak to Strategist</button>
                 </div>
              </div>
           </div>
        </section>

        {/* FEATURED ARTICLES (Screenshot 2 / Unique Element) */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative rounded-[70px] overflow-hidden shadow-2xl h-[700px] border-8 border-white group">
              <img src="https://images.unsplash.com/photo-1544640808-32ca72ac7f37?w=1000&q=80" alt="Guide Detail" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-16 left-16 right-16">
                 <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight mb-8 tracking-tighter text-white uppercase">The Smart <br/> Campus <span className="text-sm-blue italic lowercase font-serif border-b-4 border-sm-blue">Playbook.</span></h2>
                 <button className="px-10 py-4 bg-white text-gray-900 font-black rounded-full hover:bg-sm-blue hover:text-white transition-all shadow-xl uppercase tracking-widest text-[10px] flex items-center gap-3">
                    Read Online Case Study <ArrowUpRight size={18} />
                 </button>
              </div>
           </div>

           <div className="bg-white p-12 lg:p-20 rounded-[80px] shadow-3xl border border-gray-50 relative z-10 group overflow-hidden">
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10">
                 <h2 className="text-4xl font-black text-gray-900 font-heading mb-8 leading-tight tracking-tighter uppercase">Certification <br/> & <span className="text-sm-blue">Compliance.</span></h2>
                 <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
                    We ensure all your instructional resource procurement aligns with the latest national education policy and safety standards.
                 </p>
                 <div className="space-y-6">
                    {['BIFMA Certified Solutions', 'NEA Safety Manuals 2024', 'Sustainability Blueprints', 'IoT Implementation Handbooks'].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 rounded-[35px] bg-white shadow-xl border border-gray-100 transition-all cursor-pointer hover:border-sm-blue active:scale-[0.98]">
                          <div className="w-12 h-12 bg-blue-50 text-sm-blue group-hover:bg-sm-blue group-hover:text-white rounded-2xl flex items-center justify-center transition-all">
                             <CheckCircle2 size={24} />
                          </div>
                          <span className="text-[11px] font-black uppercase tracking-[0.2em]">{item}</span>
                          <div className="ml-auto opacity-20">
                             <Award size={20} />
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
};

export default Guides;
