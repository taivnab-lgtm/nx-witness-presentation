import React from 'react';
import Layout from '../Layout';
import { Calendar, Mail, Globe, ArrowRight, Zap, CheckCircle2, Phone } from 'lucide-react';

const Roadmap3DVisual = () => {
    const milestones = [
        { q: "Q1 2026", task: "Enterprise Alpha", status: "In Progress", color: "blue" },
        { q: "Q2 2026", task: "AI Manager Live", status: "Planned", color: "emerald" },
        { q: "Q3 2026", task: "Cloud Storage v2", status: "Planned", color: "indigo" },
        { q: "Q4 2026", task: "Global Launch", status: "Public", color: "amber" },
    ];

    return (
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-950/40 shadow-2xl group">
             {/* Background Space / Starfield effect */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}></div>
             
             <svg viewBox="0 0 1000 750" className="w-full h-full p-12">
                <defs>
                    <filter id="glow-roadmap">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Perspective Road */}
                <path d="M 500 750 L 500 100" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="10 20" className="opacity-30" />
                <path d="M 400 750 L 480 100" stroke="#1e3a8a" strokeWidth="1" className="opacity-10" />
                <path d="M 600 750 L 520 100" stroke="#1e3a8a" strokeWidth="1" className="opacity-10" />

                {/* Nodes with Perspective */}
                {milestones.map((m, i) => {
                    const progress = i / (milestones.length - 1);
                    const y = 650 - progress * 500;
                    const scale = 1 - progress * 0.4;
                    const xOffset = i % 2 === 0 ? -150 : 150;
                    const x = 500 + xOffset * scale;

                    return (
                        <g key={i} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${i * 0.2}s` }}>
                            {/* Connector Line to road */}
                            <line x1="500" y1={y} x2={x} y2={y} stroke="#1e3a8a" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
                            
                            {/* Glass Node */}
                            <g transform={`translate(${x - 90 * scale}, ${y - 45 * scale}) scale(${scale})`}>
                                <rect width="180" height="90" rx="20" fill="#0f172a" stroke={m.color === 'blue' ? "#3b82f6" : m.color === 'emerald' ? "#10b981" : m.color === 'amber' ? "#fbbf24" : "#6366f1"} strokeWidth="2" className="shadow-2xl" filter="url(#glow-roadmap)"/>
                                
                                <text x="20" y="30" fill="#94a3b8" fontSize="12" className="font-black uppercase tracking-widest">{m.q}</text>
                                <text x="20" y="55" fill="#fff" fontSize="16" className="font-black tracking-tight">{m.task}</text>
                                
                                <g transform="translate(140, 20)">
                                    <circle r="6" fill={m.status === 'In Progress' ? "#3b82f6" : "#1e293b"} stroke="#3b82f6" strokeWidth="1" className={m.status === 'In Progress' ? "animate-pulse" : ""} />
                                </g>
                                <text x="20" y="75" fill={m.color === 'blue' ? "#60a5fa" : "#64748b"} fontSize="10" className="font-mono font-bold uppercase">{m.status === 'In Progress' ? "Идэвхтэй хөгжүүлэлт" : "Төлөвлөсөн"}</text>
                            </g>
                        </g>
                    );
                })}

                {/* Perspective Horizon Glow */}
                <circle cx="500" cy="100" r="100" fill="radial-gradient(circle, #3b82f633 0%, transparent 70%)" className="opacity-40" />
             </svg>

             {/* Roadmap HUD */}
             <div className="absolute top-10 right-10 flex flex-col gap-3">
                <div className="flex items-center gap-3 p-4 bg-slate-900/80 border border-blue-500/30 rounded-2xl backdrop-blur-xl">
                   <div className="text-[10px] space-y-1">
                      <div className="font-black text-white uppercase tracking-wider">Vision 1.0</div>
                      <div className="text-blue-500/60 font-mono font-bold">2026 STRATEGIC GOALS</div>
                   </div>
                </div>
             </div>
        </div>
    );
};

const NX_Slide10_Roadmap: React.FC<{ isActive: boolean }> = () => {
    return (
        <Layout
            className="bg-slate-950"
            title="Ирээдүйн Төлөвлөгөө"
            subtitle="Roadmap 2026: Тасралтгүй хөгжил ба инноваци."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Closing / CTA (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-6">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-blue-500/50 underline-offset-8 decoration-2">NEXT STEPS</h3>
                        <h4 className="text-[84px] font-black text-white leading-tight tracking-tighter">
                            Та нэгдэхэд <br />
                            <span className="text-blue-500">Бэлэн үү?</span>
                        </h4>
                        <p className="text-slate-400 text-[17px] leading-relaxed max-w-sm">
                            NX Witness Enterprise систем нь таны бизнесийн аюулгүй байдлыг дараагийн түвшинд гаргахад бэлэн байна. Өнөөдөр нэгдэж, ирээдүйг хамтдаа бүтээе.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-4">
                        <button className="w-full h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black uppercase tracking-[0.3em] text-xl shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center justify-center gap-4 transition-all active:scale-105 group relative overflow-hidden">
                            <Zap size={24} className="group-hover:animate-bounce" />
                            <span>Энтерпрайз системд нэгдэх</span>
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4 group hover:border-blue-500/50 transition-colors">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black text-slate-500 uppercase">Мэйл бичих</div>
                                    <div className="text-[17px] font-bold text-slate-300">sales@nx.com</div>
                                </div>
                            </div>
                            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4 group hover:border-blue-500/50 transition-colors">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <Globe size={18} />
                                </div>
                                <div>
                                    <div className="text-[9px] font-black text-slate-500 uppercase">Веб хуудас</div>
                                    <div className="text-[17px] font-bold text-slate-300">www.nx.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: 3D Roadmap (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center">
                    <Roadmap3DVisual />
                </div>
            </div>

            {/* Branding Footer */}
            <div className="absolute bottom-8 right-12 flex items-center gap-6 opacity-40">
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">© 2026 NETWORK OPTIX, INC. ALL RIGHTS RESERVED.</span>
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide10_Roadmap;
