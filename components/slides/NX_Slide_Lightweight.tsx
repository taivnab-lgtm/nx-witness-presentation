import React from 'react';
import Layout from '../Layout';
import { Cpu, Server, HardDrive, Layers } from 'lucide-react';

const NX_Slide_Lightweight: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Cpu className="text-blue-400" size={22} />,
            title: "Any Hardware",
            desc: "Том сервер, laptop, ARM төхөөрөмж, IP камер, body worn камер бүгд дэмжигдэнэ."
        },
        {
            icon: <Server className="text-blue-400" size={22} />,
            title: "Any OS",
            desc: "Windows, Ubuntu, Debian болон ARM систем дээр бүрэн функцтэйгээр ажиллана."
        },
        {
            icon: <HardDrive className="text-blue-400" size={22} />,
            title: "Scalable Performance",
            desc: "Raspberry Pi дээр 8 суваг, Core i3 дээр 128, одоо 256 суваг хүртэл дэмжинэ."
        },
        {
            icon: <Layers className="text-blue-400" size={22} />,
            title: "Merge & Manage",
            desc: "Олон серверийг нэгтгэж, нэг систем болгон удирдана."
        },
    ];

    const tiers = [
        {
            name: 'Raspberry Pi',
            icon: '🫐',
            spec: 'ARM · 4-core · 4GB RAM',
            channels: 8,
            os: 'Debian/ARM',
            color: 'from-violet-900/40 to-violet-950/40',
            border: 'border-violet-500/30',
            accent: 'text-violet-400',
            bar: 'bg-violet-500',
            barW: 'w-[6%]',
        },
        {
            name: 'Core i3 Workstation',
            icon: '💻',
            spec: 'x64 · 4-core · 8GB RAM',
            channels: 128,
            os: 'Windows / Ubuntu',
            color: 'from-blue-900/40 to-blue-950/40',
            border: 'border-blue-500/40',
            accent: 'text-blue-400',
            bar: 'bg-blue-500',
            barW: 'w-[50%]',
        },
        {
            name: 'Enterprise Server',
            icon: '🖥',
            spec: 'Xeon · 32-core · 128GB RAM',
            channels: 256,
            os: 'Windows Server / Ubuntu',
            color: 'from-emerald-900/40 to-emerald-950/40',
            border: 'border-emerald-500/40',
            accent: 'text-emerald-400',
            bar: 'bg-emerald-500',
            barW: 'w-full',
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Incredibly Lightweight" subtitle="Ямар ч тоног төхөөрөмж, ямар ч үйлдлийн систем дээр ажиллана.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-6 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">HARDWARE FLEXIBILITY</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Raspberry Pi-аас /<br />
                            <span className="text-blue-500 italic">аж ахуйн серверт хүртэл.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Хамгийн бага тоног төхөөрөмж дээр ч гүйцэтгэл алдалгүй ажиллах хөнгөн архитектур.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-5 p-3.5 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">{p.icon}</div>
                                <div>
                                    <h5 className="font-bold text-white text-xl mb-0.5">{p.title}</h5>
                                    <p className="text-xl text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Hardware tier comparison */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-full max-w-lg space-y-4">

                        {/* Section header */}
                        <div className="flex items-center gap-2 mb-1">
                            <Cpu className="text-blue-400" size={14} />
                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Тоног төхөөрөмжийн шатлал — Суваг тоо</span>
                        </div>

                        {/* Tier cards */}
                        {tiers.map((tier, i) => (
                            <div key={i} className={`bg-gradient-to-r ${tier.color} border ${tier.border} rounded-2xl p-4 space-y-3`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-800/60 rounded-xl flex items-center justify-center text-[28px]">
                                            {tier.icon}
                                        </div>
                                        <div>
                                            <p className={`text-xl font-black ${tier.accent}`}>{tier.name}</p>
                                            <p className="text-[10px] text-slate-500 font-mono">{tier.spec}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-[34px] font-black ${tier.accent}`}>{tier.channels}</div>
                                        <div className="text-[9px] text-slate-500 uppercase tracking-wide">суваг</div>
                                    </div>
                                </div>

                                {/* Channel capacity bar */}
                                <div className="space-y-1">
                                    <div className="w-full h-1.5 bg-slate-800/60 rounded-full overflow-hidden">
                                        <div className={`h-full ${tier.bar} ${tier.barW} rounded-full`}></div>
                                    </div>
                                    <div className="flex justify-between text-[9px] font-mono text-slate-600">
                                        <span>OS: {tier.os}</span>
                                        <span>{tier.channels} channels max</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Multi-server merge */}
                        <div className="flex items-center gap-3 bg-slate-900/60 border border-blue-500/20 rounded-xl p-3 mt-2">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Layers className="text-blue-400" size={16} />
                            </div>
                            <div className="flex-1">
                                <p className="text-[17px] font-black text-white uppercase tracking-wider">Multi-Server Merge — Нэгдсэн удирдлага</p>
                                <p className="text-[10px] text-slate-500 mt-0.5">Олон сервер, нэг интерфейс дэх бүрэн удирдлага</p>
                            </div>
                            <div className="flex -space-x-2">
                                {['S1', 'S2', 'S3'].map((s, i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-blue-600 border-2 border-slate-950 flex items-center justify-center text-[7px] font-black text-white">{s}</div>
                                ))}
                                <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-[7px] font-black text-slate-300">+N</div>
                            </div>
                        </div>

                        {/* OS compatibility strip */}
                        <div className="flex items-center justify-between bg-slate-900/40 border border-slate-800/40 rounded-xl px-4 py-2.5">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">OS Support</span>
                            <div className="flex gap-2">
                                {['Windows', 'Ubuntu', 'Debian', 'ARM'].map(os => (
                                    <span key={os} className="px-2 py-0.5 bg-slate-800 border border-slate-700/50 rounded-full text-[9px] text-slate-300 font-bold">{os}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_Lightweight;
