import React from 'react';
import { Mail, Globe, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide8_Contact: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full bg-slate-950 text-white relative overflow-hidden flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        
        {/* Abstract Grid/Map Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="max-w-7xl w-full px-12 md:px-20 relative z-10 grid grid-cols-12 gap-12 items-center">
            
            {/* Left: Closing Pitch */}
            <div className="col-span-7 pr-8">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-xl font-bold tracking-wide uppercase mb-8">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span>Хөрөнгө оруулалтын боломж</span>
                </div>
                
                <h1 className="text-[67px] md:text-[84px] font-extrabold leading-tight mb-6">
                    Аюулгүй ирээдүйг <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        хамтдаа бүтээцгээе.
                    </span>
                </h1>
                
                <p className="text-[28px] text-slate-400 font-light leading-relaxed mb-10 max-w-xl">
                    
                </p>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-white font-bold text-[25px] mb-2 flex items-center">
                            <CheckCircle2 className="text-blue-500 mr-2" size={20} />
                            Томоохон зах зээл
                        </h4>
                        <p className="text-xl text-slate-400">Монгол улсын хэмжээнд 100,000 боломжит хэрэглэгч.</p>
                    </div>
                    <div>
                         <h4 className="text-white font-bold text-[25px] mb-2 flex items-center">
                            <CheckCircle2 className="text-blue-500 mr-2" size={20} />
                            Батлагдсан загвар
                        </h4>
                        <p className="text-xl text-slate-400">B2B болон B2C сувгуудаар туршигдсан.</p>
                    </div>
                </div>
            </div>

            {/* Right: The Ask & Contact Card */}
            <div className="col-span-5 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                    
                    {/* The Ask */}
                    <div className="border-b border-white/10 pb-8 mb-8">
                        <p className="text-slate-400 text-xl font-bold uppercase tracking-widest mb-1">Санхүүжилт (Series A)</p>
                        <div className="flex items-end space-x-2">
                             <span className="text-[67px] font-bold text-white">$2.5M</span>
                             <span className="text-slate-500 mb-1">USD</span>
                        </div>
                        <p className="text-slate-400 text-xl mt-4">
                            Үүнээс <span className="text-white font-bold">40%</span> нь техник хангамжийн нөөцөд, <span className="text-white font-bold">30%</span> нь R&D хөгжүүлэлтэд, <span className="text-white font-bold">30%</span> нь маркетинг борлуулалтад зарцуулагдана.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-[28px] font-bold text-white">
                                AM
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-[25px]">Б.Энхтайван</h3>
                                <p className="text-blue-400 text-xl">Үүсгэн байгуулагч & CEO</p>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            <a href="mailto:alex@safetouch.io" className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 group">
                                <Mail className="text-slate-400 group-hover:text-blue-400 transition-colors" size={20} />
                                <span className="text-slate-300 group-hover:text-white transition-colors">enkhtaivan@safetouch.io</span>
                            </a>
                            <a href="https://www.safetouch.io" className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 group">
                                <Globe className="text-slate-400 group-hover:text-blue-400 transition-colors" size={20} />
                                <span className="text-slate-300 group-hover:text-white transition-colors">www.safetouch.io</span>
                            </a>
                             <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-transparent">
                                <MapPin className="text-slate-400" size={20} />
                                <span className="text-slate-300">Ulaanbaatar, Mongolia</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div className="absolute bottom-8 text-center w-full">
            <p className="text-slate-600 text-[17px] uppercase tracking-widest font-semibold">Confidential - SafeTouch 2026</p>
        </div>
    </div>
  );
};

export default Slide8_Contact;