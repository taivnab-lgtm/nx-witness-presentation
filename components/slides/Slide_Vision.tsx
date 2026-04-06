import React from 'react';
import Layout from '../Layout';
import { Cpu, Network, Database, Layers, Activity, Globe, Share2 } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide_Vision: React.FC<SlideProps> = () => {
  return (
    <Layout
      title="Алсын Хараа"
      subtitle="Бүгдийг нэгтгэсэн IoT удирдлагын цогц платформ."
    >
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 60s linear infinite;
        }
        .animate-counter-orbit {
          animation: counter-orbit 60s linear infinite;
        }
      `}</style>

      <div className="h-full w-full flex items-center justify-between px-4 lg:px-12 overflow-hidden">
        
        {/* Left Side: Text Content */}
        <div className="w-1/3 z-20 flex flex-col justify-center">
             <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                {/* Decorative blob behind text */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
                
                <h3 className="text-[34px] font-bold text-slate-800 mb-4 relative">Нэгдсэн Экосистем</h3>
                <p className="text-[25px] text-slate-600 leading-relaxed relative">
                    Бидний эцсийн зорилго бол дан ганц төхөөрөмж биш, харин <span className="text-blue-600 font-bold">хот, байгууллага, иргэдийн</span> өгөгдлийг нэгтгэсэн нэгдсэн экосистем бүтээх явдал юм.
                </p>
             </div>
        </div>

        {/* Right Side: Rotating Visualization */}
        <div className="w-2/3 h-full flex items-center justify-center relative scale-90 lg:scale-100">
            
            {/* Background Glow */}
            <div className="absolute w-[700px] h-[700px] bg-blue-50/40 rounded-full blur-3xl -z-10"></div>

            {/* Main Container 600x600 */}
            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                
                {/* Static Outer Rings (Decorations) */}
                <div className="absolute inset-0 rounded-full border border-slate-100 opacity-60"></div>
                <div className="absolute inset-20 rounded-full border border-slate-100 opacity-40 border-dashed"></div>

                {/* Central Core (Static) */}
                <div className="absolute z-20 w-36 h-36 bg-white rounded-full shadow-2xl border-4 border-blue-500 flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-blue-200 animate-ping opacity-20"></div>
                    <Globe size={48} className="text-blue-600 mb-1" />
                    <span className="text-[17px] font-extrabold text-slate-800 uppercase tracking-widest">SafeTouch</span>
                    <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full mt-1">CORE</span>
                </div>

                {/* Rotating Orbit Container */}
                <div className="absolute inset-0 animate-orbit">
                    
                    {/* 1. Fleet - Top (0 deg) */}
                    <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="animate-counter-orbit">
                             <NodeIcon icon={Network} label="Fleet" color="text-yellow-500" borderColor="border-yellow-100" />
                        </div>
                    </div>

                    {/* 2. Energy - Top Right (60 deg) */}
                    <div className="absolute top-[30%] left-[84.6%] -translate-x-1/2 -translate-y-1/2 z-10">
                         <div className="animate-counter-orbit">
                            <NodeIcon icon={Cpu} label="Energy" color="text-orange-500" borderColor="border-orange-100" />
                         </div>
                    </div>

                    {/* 3. Smart City - Bottom Right (120 deg) */}
                    <div className="absolute top-[70%] left-[84.6%] -translate-x-1/2 -translate-y-1/2 z-10">
                         <div className="animate-counter-orbit">
                            <NodeIcon icon={Share2} label="Smart City" color="text-emerald-500" borderColor="border-emerald-100" />
                         </div>
                    </div>

                    {/* 4. Retail - Bottom (180 deg) */}
                    <div className="absolute top-[90%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                         <div className="animate-counter-orbit">
                            <NodeIcon icon={Database} label="Retail" color="text-cyan-500" borderColor="border-cyan-100" />
                         </div>
                    </div>

                    {/* 5. Logistics - Bottom Left (240 deg) */}
                    <div className="absolute top-[70%] left-[15.4%] -translate-x-1/2 -translate-y-1/2 z-10">
                         <div className="animate-counter-orbit">
                            <NodeIcon icon={Layers} label="Logistics" color="text-purple-500" borderColor="border-purple-100" />
                         </div>
                    </div>

                    {/* 6. Safety - Top Left (300 deg) */}
                    <div className="absolute top-[30%] left-[15.4%] -translate-x-1/2 -translate-y-1/2 z-10">
                         <div className="animate-counter-orbit">
                            <NodeIcon icon={Activity} label="Safety" color="text-red-500" borderColor="border-red-100" />
                         </div>
                    </div>

                    {/* Rotating Lines connecting center to nodes */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.05" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                        {/* Center is 300, 300 */}
                        <line x1="300" y1="300" x2="300" y2="60" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" />
                        <line x1="300" y1="300" x2="508" y2="180" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" />
                        <line x1="300" y1="300" x2="508" y2="420" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" />
                        <line x1="300" y1="300" x2="300" y2="540" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" />
                        <line x1="300" y1="300" x2="92" y2="420" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" />
                        <line x1="300" y1="300" x2="92" y2="180" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="6 4" />
                    </svg>

                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

const NodeIcon = ({ icon: Icon, label, color, borderColor }: any) => (
    <div className="group flex flex-col items-center">
        <div className={`w-16 h-16 bg-white rounded-2xl shadow-lg border-2 border-slate-50 flex items-center justify-center ${color} hover:scale-110 hover:border-blue-200 transition-all duration-300 relative z-10 ${borderColor}`}>
            <Icon size={28} />
        </div>
        <div className="mt-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-100 text-[17px] font-bold text-slate-600 whitespace-nowrap">
            {label}
        </div>
    </div>
);

export default Slide_Vision;