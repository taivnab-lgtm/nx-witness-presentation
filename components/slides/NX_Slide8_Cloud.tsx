import React from 'react';
import Layout from '../Layout';
import {
    Cloud,
    Server,
    ShieldCheck,
    Zap,
    Monitor,
    Smartphone,
    Tablet,
    ArrowRight,
    Activity,
    Globe,
    Lock,
    Wifi,
    ChevronRight,
    Plus,
    Layers,
    MapPin,
    Cpu,
    Settings,
    User,
    ShieldAlert,
    Network,
    Share2,
    HardDrive,
    Radio,
    Camera,
    LayoutGrid,
    Search,
    Building2
} from 'lucide-react';

// --- SUB-COMPONENT: SITE CLUSTER (REMOTE SITE) ---
const SiteCluster: React.FC = () => (
    <div className="relative p-2 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col items-center gap-2 scale-[0.8] origin-center shadow-lg">
        <div className="flex gap-2 items-end">
            <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all">
                    <Monitor size={20} className="text-blue-400" />
                </div>
                <span className="text-[6px] font-black text-slate-500 uppercase tracking-tighter">Client</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-12 bg-blue-600 rounded flex items-center justify-center shadow-lg relative border border-white/20">
                    <div className="absolute right-1 top-1 w-1 h-1 rounded-full bg-white/40"></div>
                    <Server size={16} className="text-white" />
                </div>
                <span className="text-[6px] font-black text-slate-500 uppercase tracking-tighter">Server</span>
            </div>
        </div>

        {/* Camera Bus */}
        <div className="relative w-full h-px bg-blue-400/30 my-1">
            <div className="absolute top-0 left-0 right-0 h-4 flex justify-around -mt-1 px-1">
                {[1, 2, 3].map(c => (
                    <div key={c} className="flex flex-col items-center gap-1">
                        <div className="w-0.5 h-3 bg-blue-400/30"></div>
                        <Camera size={10} className="text-slate-400" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- VISUALIZATION 1: SCALED ENTERPRISE ARCHITECTURE ---
const NetworkTopology = ({ isActive }: { isActive: boolean }) => {
    return (
        <div className="relative w-full h-[620px] rounded-[40px] bg-[#080d17] border border-white/5 shadow-3xl p-8 ring-1 ring-white/10 overflow-hidden flex items-center">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* HEADERS */}
            <h5 className="absolute top-10 left-12 text-[42px] font-black text-white italic opacity-80 underline decoration-blue-500 decoration-4 underline-offset-8">Remote Sites</h5>
            <h5 className="absolute top-10 right-12 text-[42px] font-black text-white italic opacity-80 underline decoration-blue-500 decoration-4 underline-offset-8">Command Center</h5>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                {/* Main Backbone Lines */}
                <path d="M 330 180 L 400 180 L 400 460 L 330 460" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
                <path d="M 400 320 L 480 320" fill="none" stroke="#3b82f6" strokeWidth="4" className="animate-flow" />
                <path d="M 520 320 L 780 320" fill="none" stroke="#2563eb" strokeWidth="4" className="animate-flow" />
                <circle cx="400" cy="320" r="4" fill="#3b82f6" className="animate-pulse" />
            </svg>

            <div className="flex w-full items-center justify-between z-20 px-8">
                {/* 1. REMOTE SITES GRID (Left - 3x3 style) */}
                <div className="grid grid-cols-3 gap-x-2 gap-y-12">
                    {[...Array(9)].map((_, i) => (
                        <SiteCluster key={i} />
                    ))}
                </div>

                {/* 2. CLOUD CORE (Center) */}
                <div className="flex flex-col items-center gap-4 group -translate-x-4">
                    <div className="relative w-44 h-44 flex items-center justify-center">
                        {/* Glow Ring */}
                        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] animate-pulse"></div>
                        <div className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full animate-spin-slow"></div>

                        <div className="relative w-32 h-32 rounded-[2rem] bg-slate-950 border-4 border-blue-500 shadow-[0_0_80px_rgba(34,211,238,0.3)] flex items-center justify-center overflow-hidden">
                            <Cloud size={64} className="text-white relative z-10" />
                            <div className="absolute bottom-6 font-black text-white text-[28px] z-20 tracking-tighter">nx</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-black text-blue-400 mx-auto w-32 uppercase tracking-widest leading-tight">Connect via<br />Nx Cloud Service</div>
                    </div>
                </div>

                {/* 3. COMMAND CENTER (Right - High-Fidelity SOC) */}
                <div className="flex items-center gap-10 translate-x-2">
                    <div className="w-px h-72 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
                    
                    <div className="flex flex-col items-center gap-8 py-10 relative">
                        {/* 3.1 VIDEO WALL (Background) */}
                        <div className="relative p-6 bg-slate-900 shadow-2xl rounded-[3rem] border-4 border-slate-800 flex flex-col gap-8 transition-transform hover:scale-[1.02] duration-700 ring-1 ring-white/5">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1.5 rounded-full text-[11px] font-black text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] z-20 whitespace-nowrap">MISSION CONTROL CENTER</div>
                            
                            {/* Monitor Grid (3x2) */}
                            <div className="grid grid-cols-3 gap-3">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-24 h-18 bg-slate-950 rounded-xl border-2 border-blue-500/20 flex flex-col items-center justify-center shadow-inner relative overflow-hidden group hover:border-blue-400 transition-all duration-300">
                                        {/* Simulated Video Feeds */}
                                        <div className="absolute inset-1 flex flex-wrap gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                                            {[...Array(9)].map((_, j) => (
                                                <div key={j} className="w-1/4 h-1/4 bg-blue-500/20 rounded-sm"></div>
                                            ))}
                                        </div>
                                        <div className="w-14 h-1 bg-blue-500/20 rounded-full overflow-hidden relative z-10">
                                            <div className="h-full w-full bg-blue-400 translate-x-[-100%] animate-scan-slow"></div>
                                        </div>
                                        {/* Corner Status Lights */}
                                        <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-emerald-500/50 animate-pulse"></div>
                                    </div>
                                ))}
                            </div>

                            {/* 3.2 CONSOLE DESK (Foreground) */}
                            <div className="relative mt-2 flex flex-col items-center">
                                {/* Curved Desk Gradient Surface */}
                                <div className="w-80 h-16 bg-gradient-to-b from-slate-800 to-slate-950 rounded-t-[4rem] border-x border-t border-white/10 shadow-2xl flex items-center justify-center">
                                    <div className="flex items-center gap-10">
                                        {/* Operator Station (Monitor + Person) */}
                                        <div className="flex flex-col items-center -mt-8 animate-in slide-in-from-bottom-2 duration-1000">
                                           <div className="w-16 h-12 bg-slate-900 border-2 border-blue-500 rounded-lg flex flex-col items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                               <LayoutGrid size={16} className="text-blue-500/50" />
                                               <div className="w-8 h-0.5 bg-blue-500/30 mt-1"></div>
                                           </div>
                                           <div className="mt-2 text-slate-400 scale-125 mb-1"><User size={18} className="fill-blue-500/10" /></div>
                                           <span className="text-[7px] font-black text-blue-400 uppercase tracking-widest italic opacity-50">Local Operator</span>
                                        </div>

                                        {/* Master Management Hub (Server) */}
                                        <div className="flex flex-col items-center -mt-4 group">
                                           <div className="w-12 h-16 bg-blue-700/80 rounded-xl flex items-center justify-center border-2 border-white/20 shadow-[0_0_50px_rgba(37,99,235,0.3)] relative transition-all group-hover:scale-110">
                                               <div className="absolute right-2 top-2 space-y-1 z-20">
                                                   <div className="w-1 h-1 rounded-full bg-white/40"></div>
                                                   <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></div>
                                               </div>
                                               <Server size={24} className="text-white relative z-10" />
                                               <div className="absolute inset-0 bg-blue-400/10 rounded-xl blur-md group-hover:blur-xl transition-all"></div>
                                           </div>
                                           <div className="mt-2 flex flex-col items-center">
                                               <div className="text-[8px] font-black text-white uppercase tracking-widest">Master Management Server</div>
                                               <div className="text-[6px] font-bold text-slate-500 uppercase">Site Node ID: 0x2A4F</div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Label Footnote */}
            <div className="absolute bottom-8 left-12 right-12 flex justify-between px-10">
                <div className="flex items-center gap-4 bg-slate-950/60 px-6 py-2.5 rounded-2xl border border-white/5">
                    <Activity size={16} className="text-emerald-500" />
                    <span className="text-[11px] font-black text-white uppercase tracking-[.2em]">Active Communication with 240+ Endpoints</span>
                </div>
                <div className="flex items-center gap-4 bg-blue-600/20 px-6 py-2.5 rounded-2xl border border-blue-500/30">
                    <ShieldCheck size={16} className="text-blue-400" />
                    <span className="text-[11px] font-black text-white uppercase tracking-[.2em]">Secured by Global Routing Mesh</span>
                </div>
            </div>
        </div>
    );
};

// --- VISUALIZATION 2: OFFICIAL CLOUD DASHBOARD IMAGE ---
const CloudDashboard = () => {
    return (
        <div className="relative w-full h-[620px] flex items-center justify-center px-4 animate-in fade-in zoom-in duration-1000">
            {/* Workstation Monitor Frame */}
            <div className="relative w-[1000px] aspect-video bg-slate-950 rounded-[2.5rem] border-[14px] border-slate-900 shadow-[0_0_120px_rgba(15,23,42,0.8)] overflow-hidden ring-1 ring-white/10 group">
                <img 
                    src="/assets/slide/Slide Cloud/Comman Center.jpg" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" 
                    alt="Nx Cloud Dashboard Interface" 
                />
                
                {/* Integration Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none"></div>

                {/* Status Badges */}
                <div className="absolute top-6 left-8 flex items-center gap-4">
                    <div className="bg-blue-600 px-4 py-1.5 rounded-full text-[11px] font-black text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center gap-2 italic">
                        <LayoutGrid size={14} />
                        <span>CLOUD DASHBOARD ACTIVE</span>
                    </div>
                    <div className="bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">Site Sync: OK</span>
                    </div>
                    <div className="bg-emerald-600/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-2">
                        <Lock size={12} className="text-emerald-400" />
                        <span className="text-[10px] font-black text-emerald-400 tracking-widest uppercase">2FA Secured</span>
                    </div>
                </div>

                {/* Bottom Info Bar Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent flex justify-between items-end">
                    <div className="flex gap-6 items-center opacity-60">
                         <div className="text-[10px] font-black text-white uppercase tracking-widest border-l-2 border-blue-500 pl-3">Centralized Node Operations</div>
                    </div>
                </div>

                {/* Premium Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Stand Base Shadow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-80 h-4 bg-blue-500/20 blur-2xl rounded-full"></div>
        </div>
    );
};

const NX_Slide8_Cloud: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const [viewMode, setViewMode] = React.useState<'network' | 'dashboard'>('network');

    const highlights = [
        { icon: <Zap className="text-blue-400" size={22} />, title: "Unlimited Scalability", desc: "Зуу зуун алслагдсан салбаруудыг нэг секундын дотор Клауд орчинд нэгтгэж, нэгдмэл төвөөс удирдах боломж." },
        { icon: <LayoutGrid className="text-blue-400" size={22} />, title: "Centralized Management", desc: "Дэлхийн хаанаас ч ямар ч порт нээх шаардлагагүйгээр бүх системээ өөрийн таблет эсвэл Desktop-оос хянах." },
        { icon: <ShieldCheck className="text-blue-400" size={22} />, title: "Enterprise Grade Security", desc: "End-to-End SSL/TLS нууцлал болон 2FA (Two-Factor Authentication) хамгаалалт бүрэн дэмжигдсэн хамгийн найдвартай систем." }
    ];

    return (
        <Layout
            className="bg-[#020617]"
            title="Nx Cloud: Universal Connectivity"
            subtitle="VPN үүсгэх, Public IP ашиглах шаардлагагүйгээр дэлхийн хаанаас ч системээ удирдана."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-blue-500/50 underline-offset-8 decoration-2">CLOUD ECOSYSTEM</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Дэлхийг таны <br />
                            <span className="text-blue-500 italic">гарт нэгтгэнэ.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed font-normal">
                            Nx Cloud нь таны системүүдийн хооронд аюулгүй "гүүр" үүсгэж, салбар бүрийг хамгийн бага зардлаар нэгтгэн удирдах бодит боломжийг олгодог.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 hover:border-blue-500/40 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                    <div className="text-blue-400">
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

                    <div className="pt-4 border-t border-slate-800">
                        <div className="inline-flex px-3 py-1 bg-slate-900 rounded text-[10px] font-black text-blue-400 border border-blue-500/20 uppercase tracking-widest items-center gap-2 italic">
                            <Globe size={12} className="animate-spin-slow" />
                            Connected Infrastructure - No Limits
                        </div>
                    </div>
                </div>

                {/* Right Side: Flow Control */}
                <div className="w-7/12 relative h-full flex flex-col items-center justify-center gap-4">
                    {/* View Mode Toggle Buttons */}
                    <div className="flex bg-slate-900/80 p-1 rounded-xl border border-white/10 backdrop-blur-xl z-[70] shadow-2xl">
                        <button
                            onClick={() => setViewMode('network')}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all flex items-center gap-2 ${viewMode === 'network' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            <Layers size={14} /> NETWORK ARCHITECTURE
                        </button>
                        <button
                            onClick={() => setViewMode('dashboard')}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all flex items-center gap-2 ${viewMode === 'dashboard' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            <LayoutGrid size={14} />
                            Cloud Dashboard
                        </button>
                    </div>

                    {/* Conditional Visualization Rendering */}
                    <div className="w-full">
                        {viewMode === 'network' ? <NetworkTopology isActive={isActive} /> : <CloudDashboard />}
                    </div>
                </div>
            </div>

            <style>{`
                .animate-bounce-slow { animation: bounce-slow 4s infinite; }
                .animate-spin-slow { animation: spin-slow 10s linear infinite; }
                @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .animate-flow { animation: flow-dash 4s linear infinite; }
                .animate-flow-fast { animation: flow-dash 1.5s linear infinite; }
                @keyframes flow-dash { to { stroke-dashoffset: -100; } }
                @keyframes scan-line { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
                .animate-scan-slow { animation: scan-line 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
                @keyframes ping-slow { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
                .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
            `}</style>
        </Layout>
    );
};

export default NX_Slide8_Cloud;
