import React from 'react';
import Layout from '../Layout';
import { Activity, TrendingUp, Camera } from 'lucide-react';

const NX_Slide_IoT: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Activity className="text-blue-400" size={22} />,
            title: "Combined View",
            desc: "IoT мэдрэгч болон камерыг нэг дэлгэц дээр зэрэгцүүлэн харна.",
        },
        {
            icon: <TrendingUp className="text-blue-400" size={22} />,
            title: "Chart + Video Sync",
            desc: "График дээрх оргил цэгийг дарбал тухайн үеийн камерын зураг шууд гарна.",
        },
        {
            icon: <Camera className="text-blue-400" size={22} />,
            title: "Anomaly Detection",
            desc: "Температур, чийгшил болон бусад утга хэт өндөр болоход камерын бичлэгтэй хамт дохиолол өгнө.",
        },
    ];

    return (
        <Layout className="bg-slate-950" title="IoT Integration" subtitle="IoT мэдрэгч болон видеог нэг платформд нэгтгэж хянана.">
            <div className="h-full flex gap-12 items-center">
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">IoT + VIDEO</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            IoT болон видео /<br /><span className="text-blue-500 italic">нэг платформд.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">Мэдрэгч ба камерын өгөгдлийг нэгтгэн хэт байдал илрэх үед автоматаар дохиолол өгнө.</p>
                    </div>
                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group">
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">{p.icon}</div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right visual: Split view chart + camera feed */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative w-[460px] h-[360px] bg-slate-900/60 rounded-2xl border border-slate-700 overflow-hidden flex flex-col">

                        {/* Header bar */}
                        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700/50 bg-slate-800/40 flex-shrink-0">
                            <span className="text-[17px] font-mono text-slate-400 uppercase tracking-widest">IoT Dashboard · Live</span>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <span className="text-[17px] text-red-400 font-bold">ALERT</span>
                            </div>
                        </div>

                        {/* Main split area */}
                        <div className="flex-1 flex min-h-0">

                            {/* Left: Line chart */}
                            <div className="flex-1 p-3 flex flex-col border-r border-slate-700/50">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[17px] font-bold text-slate-400">Температур (°C)</span>
                                    <span className="text-[17px] font-mono text-red-400 font-bold">87°C ↑</span>
                                </div>

                                {/* Chart area */}
                                <div className="flex-1 relative">
                                    <svg className="w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                                        {/* Grid lines */}
                                        {[20, 40, 60, 80, 100].map(y => (
                                            <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#334155" strokeWidth="0.5" />
                                        ))}
                                        {/* Normal range fill */}
                                        <rect x="0" y="60" width="200" height="40" fill="#1d4ed8" opacity="0.05" />
                                        {/* Normal line */}
                                        <line x1="0" y1="80" x2="200" y2="80" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 3" />
                                        {/* Temperature chart line — spike at end */}
                                        <polyline
                                            points="0,85 20,82 40,80 60,78 80,75 100,73 110,70 120,65 130,55 140,40 148,20 155,16 165,70 175,78 190,80 200,80"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        {/* Area under the line */}
                                        <polygon
                                            points="0,85 20,82 40,80 60,78 80,75 100,73 110,70 120,65 130,55 140,40 148,20 155,16 165,70 175,78 190,80 200,80 200,120 0,120"
                                            fill="url(#tempGrad)"
                                            opacity="0.3"
                                        />
                                        {/* Spike fill — red */}
                                        <polygon
                                            points="120,65 130,55 140,40 148,20 155,16 165,70 120,65"
                                            fill="#ef4444"
                                            opacity="0.15"
                                        />
                                        {/* Spike outline */}
                                        <polyline
                                            points="120,65 130,55 140,40 148,20 155,16 165,70"
                                            fill="none"
                                            stroke="#ef4444"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        {/* Spike dot */}
                                        <circle cx="155" cy="16" r="4" fill="#ef4444" />
                                        <circle cx="155" cy="16" r="7" fill="#ef4444" opacity="0.2" />
                                        {/* Click indicator */}
                                        <circle cx="155" cy="16" r="10" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                                        {/* Gradient def */}
                                        <defs>
                                            <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Y-axis labels */}
                                    <div className="absolute top-0 left-0 flex flex-col justify-between h-full">
                                        <span className="text-[17px] text-slate-600 font-mono">100</span>
                                        <span className="text-[17px] text-slate-600 font-mono">80</span>
                                        <span className="text-[17px] text-slate-600 font-mono">60</span>
                                        <span className="text-[17px] text-slate-600 font-mono">40</span>
                                    </div>
                                </div>

                                {/* Sensor badges */}
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {[
                                        { label: 'Темп', val: '87°C', alert: true },
                                        { label: 'Чийг', val: '32%', alert: false },
                                        { label: 'CO₂', val: '412ppm', alert: false },
                                    ].map((s, i) => (
                                        <div key={i} className={`px-2 py-1 rounded-lg border text-[17px] flex items-center gap-1 ${s.alert ? 'border-red-500/40 bg-red-950/30 text-red-400' : 'border-slate-700 bg-slate-800/40 text-slate-400'}`}>
                                            <span className="font-medium">{s.label}</span>
                                            <span className="font-black">{s.val}</span>
                                            {s.alert && <span className="text-red-400">!</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vertical dotted connector */}
                            <div className="relative flex items-center justify-center w-px">
                                <div className="absolute inset-y-4 w-px border-l-2 border-dashed border-blue-500/40" />
                                <div className="relative z-10 w-6 h-6 bg-slate-800 border-2 border-blue-500 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                </div>
                            </div>

                            {/* Right: Camera feed synced to spike */}
                            <div className="flex-1 p-3 flex flex-col">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[17px] font-bold text-slate-400">CAM-07 · Server Room</span>
                                    <span className="text-[17px] font-mono text-yellow-400">14:32:07</span>
                                </div>

                                {/* Camera feed mockup */}
                                <div className="flex-1 bg-slate-950 rounded-xl border border-slate-700 relative overflow-hidden">
                                    {/* Scene */}
                                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                    {/* Server rack shapes */}
                                    {[20, 60, 100, 140].map(x => (
                                        <div key={x} className="absolute" style={{ left: `${x}px`, top: '10px', width: '30px', height: '80px' }}>
                                            <div className="w-full h-full bg-slate-800 border border-slate-600 rounded-sm flex flex-col justify-evenly p-1">
                                                {[1,2,3,4].map(j => (
                                                    <div key={j} className="h-3 bg-slate-700 rounded-sm border border-slate-600 flex items-center px-1 gap-1">
                                                        <div className={`w-1 h-1 rounded-full ${j === 2 ? 'bg-red-400' : 'bg-green-400/60'}`} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Heat alert overlay */}
                                    <div className="absolute inset-0 bg-red-500/8 rounded-xl" />
                                    <div className="absolute top-2 left-2 bg-red-900/80 border border-red-500/50 rounded px-2 py-1 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                        <span className="text-[17px] text-red-300 font-bold">HEAT ALERT</span>
                                    </div>

                                    {/* Timestamp synced */}
                                    <div className="absolute bottom-2 right-2 bg-slate-900/80 border border-slate-700 rounded px-2 py-0.5">
                                        <span className="text-[17px] text-slate-400 font-mono">Spike үед синхрончлогдсон</span>
                                    </div>
                                </div>

                                {/* Alert badge */}
                                <div className="mt-2 flex items-center gap-2 bg-red-950/30 border border-red-500/30 rounded-xl px-3 py-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                                    <span className="text-[17px] text-red-300 font-bold">Дохиолол илгээгдлээ · 14:32:07</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_IoT;
