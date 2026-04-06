import React from 'react';
import Layout from '../Layout';
import { 
  ShieldCheck, 
  User, 
  Search, 
  Eye, 
  Lock, 
  Terminal, 
  History, 
  Smartphone,
  ChevronRight,
  Activity,
  ArrowRight,
  ShieldAlert,
  Download
} from 'lucide-react';

const NX_Slide14_AuditTrail: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const [logs, setLogs] = React.useState<string[]>([]);
    const logContainerRef = React.useRef<HTMLDivElement>(null);
    const timersRef = React.useRef<NodeJS.Timeout[]>([]);

    const auditEvents = [
        "AUTH: andy LOGIN (Web) @ 192.168.1.45 - [SUCCESS]",
        "PTZ: Camera 04 (Lobby) - [MOVE_UP_LEFT] by user: andy",
        "PLAYBACK: Cam 12 (Vault) - [START] by user: andy",
        "EXPORT: Video_Clip_Vault.mp4 @ 192.168.1.45 - [SUCCESS]",
        "AUTH: andy LOGOUT - [SESSION_END]",
        "AUTH: admin LOGIN (Desktop) @ 10.0.0.12 - [SUCCESS]",
        "CONFIG: Watermark status - [ENABLED] by user: admin",
        "SECURITY: 2FA settings - [CH_SYNC] by user: admin"
    ];

    const addLog = (msg: string) => {
        setLogs(prev => {
            return [...prev.slice(-5), `[${new Date().toLocaleTimeString([], {hour12: false})}] ${msg}`];
        });
    };

    const runLogSequence = () => {
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
        
        let i = 0;
        const sequence = () => {
            addLog(auditEvents[i]);
            i = (i + 1) % auditEvents.length;
            const timer = setTimeout(sequence, 2000 + Math.random() * 3000);
            timersRef.current.push(timer);
        };
        sequence();
    };

    React.useEffect(() => {
        if (isActive) runLogSequence();
        return () => {
            timersRef.current.forEach(clearTimeout);
            timersRef.current = [];
        };
    }, [isActive]);

    React.useEffect(() => {
        if (logContainerRef.current) logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }, [logs]);

    const highlights = [
        { 
            icon: <Eye className="text-emerald-400" size={22} />, 
            title: "Операторын хариуцлага", 
            desc: "Бичлэг дээр операторын нэрийг (Watermark) харуулснаар бичлэгийн нууцлал болон мэдээлэл хамгаалахад илүү хариуцлагатай хандах нөхцөлийг бүрдүүлнэ." 
        },
        { 
            icon: <History className="text-emerald-400" size={22} />, 
            title: "Шүүх шинжилгээний бүртгэл", 
            desc: "Систем дээр хийгдэж буй бүх үйлдлийг (Login, Search, Export) нэг ч секунд алгасалгүй бүртгэж, хэзээ ч буцаан хайх боломжтой." 
        },
        { 
            icon: <Lock className="text-emerald-400" size={22} />, 
            title: "Дотоод мэдээллийн аюулгүй байдал", 
            desc: "Гадаад халдлагаас гадна дотоод ажилчдын зүгээс гарч болох санаатай болон санамсаргүй мэдээлэл алдагдахаас бүрэн хамгаална." 
        },
        { 
            icon: <ShieldAlert className="text-emerald-400" size={22} />, 
            title: "Устгах боломжгүй бүртгэл", 
            desc: "Audit Trail бүртгэлийг хэн ч (админ ч бай) устгах эсвэл засах боломжгүй тул хуулийн байгууллагад албан ёсны нотлох баримт болж чадна." 
        }
    ];

    return (
        <Layout className="bg-[#020617]" title="Data Protection & Accountability" subtitle="Дотоод мэдээллийн аюулгүй байдал болон операторын үйлдлийг хянах систем.">
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-6">
                        <div className="inline-flex px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest gap-2 items-center">
                            <ShieldCheck size={14} /> SECURITY & FORENSICS
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                                Username Watermark / <br />
                                <span className="text-emerald-500 italic">Audit Trail</span>
                            </h4>
                            
                            <div className="relative pl-6 py-2 border-l-4 border-emerald-500/30">
                                <p className="text-[25px] text-slate-300 italic font-medium leading-relaxed">
                                    "Мянга мянган долларын өртөгтэй галт хана (Firewall) ч дотоод ажилчдын санаатай болон санамсаргүй мэдээлэл алдагдуулах үйлдлээс хамгаалж чадахгүй."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/40 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                                    <div className="text-emerald-400">
                                        {React.cloneElement(h.icon as React.ReactElement, { size: 22 })}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{h.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{h.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual Forensic View */}
                <div className="w-7/12 relative h-full flex flex-col items-center justify-center">
                    {/* ENLARGED Main Forensic Window */}
                    <div className="relative w-full aspect-video bg-black rounded-[3rem] border-[16px] border-slate-900 shadow-[0_0_100px_rgba(16,185,129,0.25)] overflow-hidden ring-1 ring-white/10 group">
                        
                        {/* Video Player */}
                        <div className="absolute inset-0 bg-slate-950 flex items-center justify-center overflow-hidden">
                             {isActive ? (
                                <iframe 
                                    src="https://www.youtube.com/embed/oS8ZrpT8xso?autoplay=1&mute=1&controls=0&loop=1&playlist=oS8ZrpT8xso&modestbranding=1&rel=0"
                                    className="w-[105%] h-[105%] border-0 opacity-70 group-hover:opacity-100 transition-opacity duration-1000 scale-110"
                                    title="Nx Witness Demo"
                                    allow="autoplay; encrypted-media"
                                />
                             ) : (
                                <div className="flex flex-col items-center gap-4 text-slate-800">
                                    <Activity size={48} className="animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Awaiting Active State...</span>
                                </div>
                             )}

                             {/* USERNAME WATERMARK SIMULATION */}
                             <div className="absolute inset-0 pointer-events-none grid grid-cols-2 grid-rows-4 p-12 opacity-30 select-none">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="flex items-center justify-center">
                                         <span className="text-[34px] md:text-[50px] font-black text-white/40 tracking-widest rotate-[-15deg] uppercase blur-[0.5px]">Nx0522-andy</span>
                                    </div>
                                ))}
                             </div>

                             {/* SCANLINE EFFECT */}
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-2 w-full animate-scan-slow pointer-events-none"></div>
                        </div>

                        {/* Top Forensic Ribbon */}
                        <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start z-10">
                            <div className="flex flex-col gap-2">
                                <div className="bg-emerald-600 px-5 py-2 rounded-full text-[12px] font-black text-white shadow-lg flex items-center gap-3 italic">
                                    <ScanLine size={16} /> LIVE SECURITY STREAM
                                </div>
                                <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/5 text-[10px] font-mono text-emerald-500">
                                    FORENSIC_ID: SEC-NODE-01
                                </div>
                            </div>
                            <div className="bg-red-600/30 backdrop-blur-md px-5 py-2 rounded-full border border-red-500/30 flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="text-[11px] font-black text-white uppercase tracking-widest italic">Confidential Data</span>
                            </div>
                        </div>

                        {/* Action Indicators */}
                        <div className="absolute bottom-8 left-10 flex items-center gap-4 z-20">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 text-white">
                                <ShieldCheck size={28} />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-[11px] font-black text-white uppercase opacity-60">Forensic Protection</div>
                                <div className="text-[22px] font-black text-white uppercase tracking-tighter italic">Dynamic Watermark Active</div>
                            </div>
                        </div>

                        {/* MINI FLOATING LOG (Discreet) */}
                        <div className="absolute bottom-8 right-10 w-64 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 p-4 z-20 hidden group-hover:block animate-in fade-in slide-in-from-right-4">
                             <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                                <Terminal size={12} className="text-emerald-500" />
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Real-time Audit</span>
                             </div>
                             <div className="space-y-1">
                                {auditEvents.slice(0, 3).map((log, idx) => (
                                    <div key={idx} className="text-[9px] font-mono text-slate-400 truncate">
                                        {log}
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scan-line { from { transform: translateY(-100%); } to { transform: translateY(1000%); } }
                .animate-scan-slow { animation: scan-line 6s linear infinite; }
            `}</style>
        </Layout>
    );
};

const ScanLine: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><line x1="7" x2="17" y1="12" y2="12" />
    </svg>
);

export default NX_Slide14_AuditTrail;
