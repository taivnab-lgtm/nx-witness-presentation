import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Scan, User, Car, Briefcase, Zap, Search, Eye, Activity, ShieldCheck } from 'lucide-react';
import aiStreetView from '../../assets/nx_ai_street_view.png';

const AIAnalyticsVisual = () => {
    const [objects, setObjects] = useState([
        { id: 1, type: 'person', x: 25, y: 35, w: 10, h: 45, label: 'ХҮН 98.4%', metadata: 'ХҮЙС: ЭРЭГТЭЙ | ХУВЦАС: ЦЭНХЭР' },
        { id: 2, type: 'vehicle', x: 55, y: 55, w: 25, h: 25, label: 'МАШИН 99.1%', metadata: 'ДУГААР: 7788 UB | ӨНГӨ: ЦАГААН' },
        { id: 3, type: 'object', x: 38, y: 48, w: 8, h: 10, label: 'ЦҮНХ 91.5%', metadata: 'ТӨЛӨВ: ОРХИГДСОН' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setObjects(prev => prev.map(obj => ({
                ...obj,
                x: obj.x + (Math.random() - 0.5) * 0.2,
                y: obj.y + (Math.random() - 0.5) * 0.2,
            })));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-slate-800 bg-black shadow-2xl group">
             {/* Base Street View Image */}
             <img 
                src={aiStreetView} 
                className="w-full h-full object-cover opacity-80 transition-transform duration-[20s] ease-linear group-hover:scale-110" 
                alt="AI Analytics View"
             />
             <div className="absolute inset-0 bg-blue-950/10 pointer-events-none"></div>

             {/* Dynamic Bounding Boxes */}
             {objects.map((obj) => (
                <div 
                    key={obj.id}
                    className="absolute border-2 transition-all duration-300 ease-linear flex flex-col"
                    style={{ 
                        left: `${obj.x}%`, 
                        top: `${obj.y}%`, 
                        width: `${obj.w}%`, 
                        height: `${obj.h}%`,
                        borderColor: obj.type === 'person' ? '#3b82f6' : obj.type === 'vehicle' ? '#10b981' : '#f59e0b',
                        boxShadow: `0 0 15px ${obj.type === 'person' ? '#3b82f644' : obj.type === 'vehicle' ? '#10b98144' : '#f59e0b44'}`
                    }}
                >
                    {/* Corner Brackets */}
                    <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-2 border-l-2 border-inherit"></div>
                    <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-2 border-r-2 border-inherit"></div>
                    <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-2 border-l-2 border-inherit"></div>
                    <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-2 border-r-2 border-inherit"></div>

                    {/* Meta Badge */}
                    <div className="absolute -top-7 left-0 flex flex-col gap-0.5">
                        <div className="px-2 py-0.5 bg-blue-600/90 text-[8px] font-black text-white whitespace-nowrap rounded-t-sm" style={{ backgroundColor: obj.type === 'person' ? '#3b82f6' : obj.type === 'vehicle' ? '#10b981' : '#f59e0b' }}>
                            {obj.label}
                        </div>
                        <div className="px-2 py-0.5 bg-slate-900/80 text-[6px] font-mono text-slate-300 whitespace-nowrap backdrop-blur-sm">
                            {obj.metadata}
                        </div>
                    </div>
                </div>
             ))}

             {/* HUD Overlays */}
             <div className="absolute top-6 left-6 p-3 bg-slate-900/80 border border-slate-700/50 rounded-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest">ШУУД AI УРСГАЛ // 4K 60FPS</div>
             </div>

             <div className="absolute top-6 right-6 flex gap-2">
                <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700 backdrop-blur-md">
                   <Activity size={16} className="text-emerald-400" />
                </div>
                <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700 backdrop-blur-md">
                   <ShieldCheck size={16} className="text-blue-400" />
                </div>
             </div>

             {/* Scanning Line */}
             <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500/30 blur-sm animate-[scan_6s_infinite_linear] z-20"></div>
             <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-blue-500/5 to-transparent animate-[scan_6s_infinite_linear] z-20"></div>

             {/* Bottom Metadata Feed */}
             <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="space-y-1">
                    <div className="text-[8px] font-mono text-slate-500">SYSTEM_AUTH: NX_ENTERPRISE_AI_CORE</div>
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-tighter">AI БОЛОВСРУУЛАЛТ: 4ms</div>
                </div>
                <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/30 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                    <Search size={14} />
                    Ухаалаг хайлт идэвхтэй
                </div>
             </div>

             <style>{`
                @keyframes scan {
                    0% { transform: translateY(0); opacity: 0; }
                    5% { opacity: 1; }
                    95% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
             `}</style>
        </div>
    );
};

const NX_Slide7_AI: React.FC<{ isActive: boolean }> = () => {
    const features = [
        {
            icon: <Scan className="text-blue-400" size={22} />,
            title: "80+ Object Classes",
            desc: "Хүн, машин, цүнх гэх мэт 80 гаруй төрлийн объектыг таньж, бодит хугацаанд шүүнэ."
        },
        {
            icon: <Search className="text-blue-400" size={22} />,
            title: "Metadata Smart Search",
            desc: "Нас, хүйс, хувцасны өнгө, улсын дугаар зэрэг мета-өгөгдлөөр хэдхэн секундэд хайлт хийнэ."
        },
        {
            icon: <Zap className="text-blue-400" size={22} />,
            title: "Low Latency Processing",
            desc: "AI боловсруулалт нь ямар нэгэн хоцрогдолгүйгээр (Edge AI) шууд камер дээр хийгдэнэ."
        }
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="AI Analytics & Search"
            subtitle="Ухаалаг хайлт ба Объект танилт: Хиймэл оюун ухааны хүч."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-[17px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4 font-mono underline decoration-blue-500/50 underline-offset-8 decoration-2">AI MANAGER</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight">
                            Ухаалаг хайлт <br />
                            <span className="text-blue-500">AI Powered.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            NX Witness нь мянга мянган цагийн бичлэгээс хэрэгтэй хүн эсвэл объектыг мета-өгөгдөл ашиглан маш хурдтай шүүж олох боломжийг олгодог.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-center gap-6 p-5 bg-slate-900/30 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                    {f.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{f.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center">
                    <AIAnalyticsVisual />
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide7_AI;
