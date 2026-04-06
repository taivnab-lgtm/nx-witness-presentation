import React from 'react';
import Layout from '../Layout';
import { LayoutDashboard, Globe, ShieldCheck, Server, Network, Activity } from 'lucide-react';

const GlobalSyncVisual = () => {
    const sites = [
        { id: 1, angle: -60, label: "Ulaanbaatar Site" },
        { id: 2, angle: 30, label: "Darkhan Branch" },
        { id: 3, angle: 150, label: "Erdenet Hub" },
        { id: 4, angle: 240, label: "Remote Mining" },
    ];

    const centerX = 500;
    const centerY = 375;
    const radius = 220;

    return (
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-950/50 shadow-2xl group">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             <svg viewBox="0 0 1000 750" className="w-full h-full p-8">
                <defs>
                    <filter id="glow-blue">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <radialGradient id="hubGradient">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Central Hub Rings */}
                <circle cx={centerX} cy={centerY} r="120" fill="url(#hubGradient)" className="animate-pulse" />
                <circle cx={centerX} cy={centerY} r="80" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="10 20" className="animate-[spin_20s_linear_infinite]" />
                <circle cx={centerX} cy={centerY} r="100" fill="none" stroke="#1e40af" strokeWidth="0.5" />

                {/* Connections & Data Flow */}
                {sites.map((s, i) => {
                    const rad = (s.angle * Math.PI) / 180;
                    const x = centerX + Math.cos(rad) * radius;
                    const y = centerY + Math.sin(rad) * radius;
                    
                    return (
                        <g key={s.id}>
                            {/* Beam Path */}
                            <line 
                                x1={centerX} y1={centerY} x2={x} y2={y} 
                                stroke="#1e3a8a" strokeWidth="2" strokeDasharray="4 8"
                                className="opacity-40"
                            />
                            {/* Animated Pulse */}
                            <circle r="3" fill="#60a5fa" className="animate-[beam_3s_infinite]" style={{ animationDelay: `${i * 0.7}s` }}>
                                <animateMotion 
                                    path={`M ${x} ${y} L ${centerX} ${centerY}`} 
                                    dur="3s" repeatCount="indefinite" 
                                    begin={`${i * 0.7}s`}
                                />
                            </circle>

                            {/* Site Node */}
                            <g transform={`translate(${x-30}, ${y-30})`} className="group/node">
                                <rect width="60" height="60" rx="15" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" className="shadow-lg" />
                                <Server x="18" y="18" size={24} className="text-blue-400 opacity-80" />
                                <text x="30" y="75" textAnchor="middle" fill="#64748b" fontSize="10" className="font-mono font-bold uppercase tracking-widest whitespace-nowrap">{s.label}</text>
                            </g>
                        </g>
                    );
                })}

                {/* Central Org Admin Hub */}
                <g transform={`translate(${centerX-50}, ${centerY-50})`}>
                    <rect width="100" height="100" rx="25" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="3" filter="url(#glow-blue)" />
                    <Globe x="25" y="25" size={50} className="text-white animate-pulse" />
                    <text x="50" y="120" textAnchor="middle" fill="#fff" fontSize="12" className="font-black tracking-[0.2em] uppercase">Organization Hub</text>
                </g>
             </svg>

             {/* Dynamic Site Status */}
             <div className="absolute top-10 right-10 flex flex-col gap-2">
                <div className="flex items-center gap-3 p-3 bg-slate-900/80 border border-blue-500/30 rounded-xl backdrop-blur-xl">
                   <Activity size={16} className="text-blue-400 animate-bounce" />
                   <div className="text-[10px] space-y-1">
                      <div className="font-black text-white uppercase tracking-wider">Cloud Sync: Active</div>
                      <div className="text-blue-500/60 font-mono">ALL SITES OPERATIONAL</div>
                   </div>
                </div>
             </div>

             <style>{`
                @keyframes beam {
                    0% { opacity: 0; scale: 0.5; }
                    50% { opacity: 1; scale: 1.2; }
                    100% { opacity: 0; scale: 0.5; }
                }
             `}</style>
        </div>
    );
};

const NX_Slide4_Unified: React.FC<{ isActive: boolean }> = () => {
    const features = [
        {
            icon: <LayoutDashboard className="text-blue-400" size={22} />,
            title: "Single Interface",
            desc: "Мянга мянган камерыг, олон зуун салбарыг нэг цонхноос удирдах бодит боломж."
        },
        {
            icon: <Network className="text-blue-400" size={22} />,
            title: "Global Permissions",
            desc: "Салбар бүрт хандах эрх, хэрэглэгчийн үүргийг төвөөс нэгдсэн байдлаар тохируулах."
        },
        {
            icon: <ShieldCheck className="text-blue-400" size={22} />,
            title: "Policy Centralization",
            desc: "Байгууллагын аюулгүй байдлын стандартыг бүх салбаруудад нэгэн зэрэг мөрдүүлэх."
        }
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Нэгдсэн Удирдлага"
            subtitle="Organization Admin: Олон салбарыг нэг дороос, нэг цонхноос."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] mb-4 font-mono underline decoration-blue-500/50 underline-offset-8 decoration-2">SECURE SHARING</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight">
                            Нэг <span className="text-blue-500 italic">Interface</span><br />
                            Бүх салбарууд.
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            NX Witness Enterprise нь таны байгууллагын хэдэн зуун салбарыг нэгдсэн "Cloud Hub"-д холбож, нэг л эрхээр (Single Sign-On) бүх системдээ хандах боломжийг олгоно.
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
                    <GlobalSyncVisual />
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide4_Unified;
