import React from 'react';
import Layout from '../Layout';
import { Share2, Users, Building2, Store, ChevronRight, Share, Network, Globe } from 'lucide-react';

const EcosystemHubVisual = () => {
    const Orgs = [
        { id: 1, angle: -60, label: "Org Alpha", sites: 4 },
        { id: 2, angle: 30, label: "Org Beta", sites: 12 },
        { id: 3, angle: 120, label: "Org Gamma", sites: 8 },
        { id: 4, angle: 210, label: "Org Delta", sites: 6 },
    ];

    const centerX = 500;
    const centerY = 375;
    const radius = 240;

    return (
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-950/40 shadow-2xl group">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             <svg viewBox="0 0 1000 750" className="w-full h-full p-8">
                <defs>
                    <filter id="glow-gold">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <radialGradient id="hubGradientGold">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Central Hub Rings */}
                <circle cx={centerX} cy={centerY} r="140" fill="url(#hubGradientGold)" className="animate-pulse" />
                <circle cx={centerX} cy={centerY} r="100" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="5 15" className="animate-[spin_30s_linear_infinite]" />

                {/* Connections to Organizations */}
                {Orgs.map((org, i) => {
                    const rad = (org.angle * Math.PI) / 180;
                    const x = centerX + Math.cos(rad) * radius;
                    const y = centerY + Math.sin(rad) * radius;
                    
                    return (
                        <g key={org.id}>
                            {/* Branching Path */}
                            <line 
                                x1={centerX} y1={centerY} x2={x} y2={y} 
                                stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 8"
                                className="opacity-30"
                            />
                            {/* Animated Collaboration Pulse */}
                            <circle r="4" fill="#fbbf24" className="animate-[collab_4s_infinite]" style={{ animationDelay: `${i * 1}s` }}>
                                <animateMotion 
                                    path={`M ${centerX} ${centerY} L ${x} ${y}`} 
                                    dur="4s" repeatCount="indefinite" 
                                    begin={`${i * 1}s`}
                                />
                            </circle>

                            {/* Organization Node */}
                            <g transform={`translate(${x-45}, ${y-45})`} className="group/node">
                                <rect width="90" height="90" rx="25" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" className="shadow-lg group-hover/node:stroke-blue-400 transition-colors" />
                                <Building2 x="25" y="25" size={40} className="text-blue-500 opacity-80" />
                                <div className="absolute top-[100px] left-1/2 -translate-x-1/2 flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-2 py-1 rounded-full backdrop-blur-md">
                                    <span className="text-[8px] font-black text-blue-400 uppercase tracking-tighter whitespace-nowrap">{org.sites} SITES ACTIVE</span>
                                </div>
                                <text x="45" y="115" textAnchor="middle" fill="#64748b" fontSize="10" className="font-mono font-bold uppercase tracking-widest">{org.label}</text>
                            </g>
                        </g>
                    );
                })}

                {/* Central Channel Partner Hub */}
                <g transform={`translate(${centerX-60}, ${centerY-60})`}>
                    <rect width="120" height="120" rx="35" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="4" filter="url(#glow-gold)" />
                    <Store x="30" y="30" size={60} className="text-amber-400 animate-pulse" />
                    <text x="60" y="160" textAnchor="middle" fill="#fbbf24" fontSize="14" className="font-black tracking-[0.3em] uppercase">Partner Hub</text>
                </g>
             </svg>

             {/* Ecosystem Status */}
             <div className="absolute bottom-10 right-10 flex flex-col gap-3">
                <div className="flex items-center gap-3 p-4 bg-slate-900/80 border border-amber-500/30 rounded-2xl backdrop-blur-xl shadow-xl shadow-amber-500/5">
                   <Network size={22} className="text-amber-400" />
                   <div className="text-[10px] space-y-1">
                      <div className="font-black text-white uppercase tracking-wider">Connect Ecosystem</div>
                      <div className="text-amber-500/70 font-mono font-bold uppercase">Multi-tier Management</div>
                   </div>
                </div>
             </div>

             <style>{`
                @keyframes collab {
                    0% { opacity: 0; scale: 0.5; }
                    50% { opacity: 1; scale: 1.5; }
                    100% { opacity: 0; scale: 1; }
                }
             `}</style>
        </div>
    );
};

const NX_Slide9_Connect: React.FC<{ isActive: boolean }> = () => {
    const features = [
        {
            icon: <Network className="text-blue-400" size={22} />,
            title: "Multi-tier Mgmt",
            desc: "Дистрибьютор, Интегратор болон Олон байгууллагуудын захиалгыг нэг дороос удирдах олон түвшний платформ."
        },
        {
            icon: <Share className="text-blue-400" size={22} />,
            title: "Partner Portal",
            desc: "Паттнерүүд өөрийн бүх хэрэглэгчдийн лиценз болон системийн төлөв байдлыг нэг дороос хянах удирдлагын хэсэг."
        },
        {
            icon: <Globe className="text-blue-400" size={22} />,
            title: "Cloud Services Marketplace",
            desc: "Хэрэглэгч өөрөө захиалгаа сунгах, шинэ үүлэн үйлчилгээнүүдийг идэвхжүүлэх боломжтой Nx Cloud портал."
        }
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Nx Connect"
            subtitle="Бизнес Экосистем: Хамтын ажиллагааны нэгдсэн платформ."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-[17px] font-black text-amber-500 uppercase tracking-[0.3em] mb-4 font-mono underline decoration-amber-500/50 underline-offset-8 decoration-2">CONNECT ECOSYSTEM</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight">
                            Нэгдсэн <br />
                            <span className="text-amber-500">Платформ.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Nx Connect нь паттнерүүд болон байгууллагуудыг нэг дор холбосон, захиалгын удирдлагын ухаалаг экосистем юм.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-center gap-6 p-5 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-amber-500/50 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                                    {f.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{f.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-normal">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center">
                    <EcosystemHubVisual />
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide9_Connect;
