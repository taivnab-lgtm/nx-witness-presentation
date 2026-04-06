import React from 'react';
import Layout from '../Layout';
import {
    Database,
    Clock,
    Activity,
    BarChart3,
    Zap,
    ShieldCheck,
    HardDrive,
    ArrowRight,
    Target,
    Layers
} from 'lucide-react';

const NX_Slide12_Recording: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const [day, setDay] = React.useState(1);
    const [legacyUsage, setLegacyUsage] = React.useState(0);
    const [nxUsage, setNxUsage] = React.useState(0);

    // Simulation logic (30 Days Capacity Fill)
    React.useEffect(() => {
        let interval: any;
        if (isActive) {
            setDay(1);
            setLegacyUsage(0);
            setNxUsage(0);

            interval = setInterval(() => {
                setDay(prev => {
                    const next = prev + 1;
                    if (next > 30) {
                        // Reset simulation loop
                        setTimeout(() => {
                           setDay(1);
                           setLegacyUsage(0);
                           setNxUsage(0);
                        }, 2000); // Give it a 2-second pause before resetting
                        return 30; // Pause at day 30
                    }
                    
                    // Legacy fills continuously at ~3.33% per day -> reaches 100% capacity (16 drives)
                    setLegacyUsage(Math.min(next * 3.4, 100));

                    // Nx Witness records 24/7 (Dual-Stream) but optimizes to save ~40% overall
                    const nxBase = next * 1.5; // Continuous High/Low res combination (45% capacity)
                    const nxEvents = (next > 4 ? 3 : 0) + (next > 12 ? 5 : 0) + (next > 22 ? 7 : 0);
                    setNxUsage(nxBase + nxEvents); // Reaches approx 60% max (10 drives) by day 30
                    
                    return next;
                });
            }, 300); // 1 day every 300ms
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const points = [
        {
            icon: <Layers className="text-emerald-500" size={22} />,
            title: "Бичлэгийн олон төрөлт горим",
            desc: "Always record, motion record, object record горимуудыг хослуулан ашиглах боломж."
        },
        {
            icon: <Zap className="text-emerald-500" size={22} />,
            title: "Weighted Recording (Ухаалаг)",
            desc: "Always Low-Res + Motion/Object High-res горим нь хадгалах сангийн нөөцийг хамгийн чухал хэсэгт төвлөрүүлдэг."
        },
        {
            icon: <Clock className="text-emerald-500" size={22} />,
            title: "Pre-recording, post-recording",
            desc: "Үйл явдал эхлэхээс өмнөх болон дууссаны дараах мөчүүдийг орхигдуулалгүй хадгалах тохиргоо."
        },
        {
            icon: <ShieldCheck className="text-emerald-500" size={22} />,
            title: "Уян хатан хадгалалтын горим",
            desc: "Bandwidth limit (Сүлжээний зурвасын хязгаар) болон Max / Min retention setup (Хадгалалтын дээд / доод тохиргоо)-ийг бизнесийн хэрэгцээнд нийцүүлэн нарийн тохируулна."
        }
    ];

    const savings = legacyUsage > 0 ? Math.round((1 - (nxUsage / legacyUsage)) * 100) : 0;

    return (
        <Layout
            className="bg-slate-950"
            title="Flexible Recording"
            subtitle="Бичлэгийн уян хатан хуваарь: Хадгалах санг 80% хүртэл хэмнэх боломж."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-emerald-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-emerald-500/50 underline-offset-8 decoration-2">STORAGE EFFICIENCY</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Хадгалах санг <br />
                            <span className="text-emerald-500 italic">ухаалгаар хэмнэ.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Nx Witness нь зөвхөн хөдөлгөөн эсвэл объект илрэх үед өндөр чанараар бичиж, бусад үед бага чанараар хадгалах боломжийг олгодог.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/40 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                                    {p.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                        <div className="flex gap-4">
                            <div className="px-3 py-1 bg-slate-900 rounded text-[10px] font-black text-emerald-400 border border-emerald-500/20 uppercase tracking-widest flex items-center gap-2">
                                <Database size={12} />
                                Maximize Storage
                            </div>
                            <div className="px-3 py-1 bg-slate-900 rounded text-[10px] font-black text-emerald-400 border border-emerald-500/20 uppercase tracking-widest flex items-center gap-2">
                                <BarChart3 size={12} />
                                Lower Bandwidth
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Storage Simulation (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center p-4">
                    <div className="relative w-full aspect-video rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl p-8 overflow-hidden translate-y-4">

                        <div className="space-y-12">
                            {/* Simulation Header */}
                            <div className="flex justify-between items-center bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-3 bg-slate-900 px-3 py-1 rounded-xl border border-slate-800 shadow-inner">
                                       <span className="text-[28px] font-black text-white">{day}</span>
                                       <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-0.5">Хоног</span>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2 border-l border-slate-800">Хадгалах сан дүүрэлтийн хурд</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest animate-pulse border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-xl">Hardware: {savings}% Хэмнэлт</span>
                                </div>
                            </div>

                            {/* LEGACY SYSTEM */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500 pl-2">
                                    <span>Уламжлалт Систем (24/7 Цэвэр өндөр нягтрал)</span>
                                    <span>{Math.min(Math.round((legacyUsage / 100) * 16), 16)} / 16 Диск (<span className="text-red-400">{Math.round(legacyUsage)}%</span>)</span>
                                </div>
                                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/50 shadow-inner">
                                   <div className="grid grid-cols-8 gap-2">
                                     {[...Array(16)].map((_, i) => {
                                        const isFilled = (legacyUsage / 100) * 16 > i;
                                        return (
                                           <div key={i} className={`flex items-center justify-center py-2.5 rounded-lg border transition-all duration-300 ${isFilled ? 'bg-slate-800 border-slate-600 text-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'bg-slate-950/50 border-slate-900 text-slate-800'}`}>
                                              <HardDrive size={20} className={isFilled ? 'opacity-100' : 'opacity-20'} />
                                           </div>
                                        )
                                     })}
                                   </div>
                                </div>
                            </div>

                            {/* NX WITNESS SMART */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-emerald-500 pl-2">
                                    <span>Nx Witness (Weighted Recording)</span>
                                    <span>{Math.max(1, Math.min(Math.round((nxUsage / 100) * 16), 16))} / 16 Диск (<span className="text-emerald-400">{Math.round(nxUsage)}%</span>)</span>
                                </div>
                                <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/20 shadow-inner relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
                                   <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>
                                   <div className="grid grid-cols-8 gap-2 relative z-10">
                                     {[...Array(16)].map((_, i) => {
                                        const isFilled = (nxUsage / 100) * 16 > i;
                                        return (
                                           <div key={i} className={`flex items-center justify-center py-2.5 rounded-lg border transition-all duration-300 ${isFilled ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-950/50 border-slate-900 text-slate-800'}`}>
                                              <HardDrive size={20} className={isFilled ? 'opacity-100' : 'opacity-20'} />
                                           </div>
                                        )
                                     })}
                                   </div>
                                </div>
                            </div>

                            {/* PRE-RECORDING HIGHLIGHT */}
                            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
                                <div className="p-3 bg-emerald-500/20 rounded-xl">
                                    <Target size={24} className="text-emerald-500" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Pre-Recording & Object Motion Filter</div>
                                    <div className="text-[11px] font-medium text-emerald-500/90 uppercase tracking-widest">Зөвхөн хэрэгтэй мөчид дискийг дүүргэнэ.</div>
                                </div>
                            </div>
                        </div>

                        {/* Background Graphic */}
                        <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                            <HardDrive size={300} />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </Layout>
    );
};

export default NX_Slide12_Recording;
