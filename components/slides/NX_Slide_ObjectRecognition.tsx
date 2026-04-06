import React from 'react';
import Layout from '../Layout';
import { Box, SlidersHorizontal, Clock } from 'lucide-react';

const NX_Slide_ObjectRecognition: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Box className="text-blue-400" size={22} />,
            title: "Category Search",
            desc: "Хүн, машин, дугуй, амьтан зэрэг ангиллаар хайж объект олно.",
        },
        {
            icon: <SlidersHorizontal className="text-blue-400" size={22} />,
            title: "Frame Your Interest",
            desc: "Дэлгэц дээр хүрээ зурж тухайн хэсгийн объектийг л хайна.",
        },
        {
            icon: <Clock className="text-blue-400" size={22} />,
            title: "Instant Results",
            desc: "Шар тэмдэглэлүүд timeline дээр хэдхэн секундэд гарч ирнэ.",
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Object Recognition" subtitle="Объектын ангиллаар хайж, тохирох бичлэгийг хэдхэн секундэд олно.">
            <div className="h-full flex gap-12 items-center">
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">OBJECT INTELLIGENCE</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Объектоор хайх /<br /><span className="text-blue-500 italic">ангиллаар шүүх.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">AI ангилал болон хүрээ зурж хайснаар бичлэгийг хэдхэн секундэд шүүнэ.</p>
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

                {/* Right visual: Camera view with bounding boxes + filter panel */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative w-[480px] h-[360px] flex gap-3">

                        {/* Main camera view */}
                        <div className="relative flex-1 bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                            {/* Scene background elements */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                            {/* Floor / ground */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-slate-800/40" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }} />

                            {/* Camera label */}
                            <div className="absolute top-2 left-2 bg-slate-800/80 border border-slate-700 rounded px-2 py-0.5">
                                <span className="text-[17px] text-slate-400 font-mono">CAM-04 · LOBBY</span>
                            </div>

                            {/* PERSON bounding box */}
                            <div className="absolute" style={{ top: '32px', left: '32px', width: '72px', height: '140px' }}>
                                <div className="w-full h-full border-2 border-blue-400 rounded" />
                                <div className="absolute -top-5 left-0 bg-blue-600 px-1.5 py-0.5 rounded text-[17px] font-black text-white tracking-wider">Person</div>
                                {/* Simple person shape */}
                                <div className="absolute inset-0 flex flex-col items-center justify-start pt-2 gap-1">
                                    <div className="w-8 h-8 bg-slate-700 rounded-full border border-slate-600" />
                                    <div className="w-10 h-16 bg-slate-700/70 rounded-sm border border-slate-600/50" />
                                </div>
                            </div>

                            {/* CAR bounding box */}
                            <div className="absolute" style={{ top: '60px', left: '130px', width: '140px', height: '72px' }}>
                                <div className="w-full h-full border-2 border-yellow-400 rounded" />
                                <div className="absolute -top-5 left-0 bg-yellow-500 px-1.5 py-0.5 rounded text-[17px] font-black text-slate-900 tracking-wider">Car</div>
                                {/* Simple car shape */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg width="100" height="48" viewBox="0 0 100 48" fill="none">
                                        <rect x="5" y="20" width="90" height="22" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                                        <path d="M22 20 L32 8 L68 8 L78 20 Z" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                                        <circle cx="24" cy="42" r="7" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                                        <circle cx="76" cy="42" r="7" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>

                            {/* BICYCLE bounding box */}
                            <div className="absolute" style={{ top: '100px', left: '290px', width: '60px', height: '90px' }}>
                                <div className="w-full h-full border-2 border-green-400 rounded" />
                                <div className="absolute -top-5 left-0 bg-green-600 px-1.5 py-0.5 rounded text-[17px] font-black text-white tracking-wider">Bicycle</div>
                                {/* Simple bike shape */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg width="46" height="56" viewBox="0 0 46 56" fill="none">
                                        <circle cx="10" cy="40" r="9" fill="none" stroke="#4ade80" strokeWidth="1.5" />
                                        <circle cx="36" cy="40" r="9" fill="none" stroke="#4ade80" strokeWidth="1.5" />
                                        <path d="M10 40 L20 20 L36 20 L36 40" stroke="#4ade80" strokeWidth="1.5" fill="none" />
                                        <path d="M20 20 L23 12" stroke="#4ade80" strokeWidth="1.5" />
                                        <circle cx="23" cy="10" r="3" fill="none" stroke="#4ade80" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            </div>

                            {/* PERSON bounding box (2nd) */}
                            <div className="absolute" style={{ top: '28px', left: '220px', width: '60px', height: '120px' }}>
                                <div className="w-full h-full border-2 border-blue-400/70 rounded" />
                                <div className="absolute -top-5 left-0 bg-blue-600/70 px-1.5 py-0.5 rounded text-[17px] font-black text-white tracking-wider">Person</div>
                            </div>

                            {/* Timeline bar at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-950/90 border-t border-slate-700 flex items-center px-3 gap-2">
                                <span className="text-[17px] text-slate-500 font-mono flex-shrink-0">Timeline</span>
                                <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden flex gap-0.5 items-center px-1">
                                    {/* Yellow hit markers */}
                                    {[8, 20, 31, 45, 52, 68, 74, 87].map((pos, i) => (
                                        <div key={i} className="absolute h-2 w-1 bg-yellow-400 rounded-sm" style={{ left: `${44 + pos * 2.4}px` }} />
                                    ))}
                                    <div className="w-full h-full bg-slate-700/40 rounded-full" />
                                </div>
                                <span className="text-[17px] text-yellow-400 font-mono flex-shrink-0">8 hits</span>
                            </div>
                        </div>

                        {/* Filter panel — right side */}
                        <div className="w-[110px] bg-slate-900/80 border border-slate-700 rounded-2xl p-3 flex flex-col gap-3">
                            <div className="text-[17px] font-black text-blue-400 uppercase tracking-widest">Шүүлт</div>

                            {/* Category filters */}
                            {[
                                { label: 'Хүн', color: 'bg-blue-500', active: true },
                                { label: 'Машин', color: 'bg-yellow-500', active: true },
                                { label: 'Дугуй', color: 'bg-green-500', active: true },
                                { label: 'Амьтан', color: 'bg-orange-500', active: false },
                            ].map((cat, i) => (
                                <div key={i} className={`flex items-center gap-2 p-1.5 rounded-lg border transition-all ${cat.active ? 'border-slate-600 bg-slate-800/60' : 'border-slate-800 opacity-40'}`}>
                                    <div className={`w-2 h-2 rounded-sm flex-shrink-0 ${cat.color}`} />
                                    <span className={`text-[17px] font-bold ${cat.active ? 'text-white' : 'text-slate-500'}`}>{cat.label}</span>
                                    {cat.active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />}
                                </div>
                            ))}

                            <div className="border-t border-slate-700 pt-2">
                                <div className="text-[17px] text-slate-500 mb-2">Бүс</div>
                                {/* ROI frame indicator */}
                                <div className="w-full aspect-video bg-slate-800 rounded-lg border border-slate-600 relative overflow-hidden">
                                    <div className="absolute border-2 border-dashed border-blue-400/60 rounded" style={{ top: '15%', left: '10%', right: '20%', bottom: '20%' }} />
                                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                </div>
                            </div>

                            <div className="mt-auto bg-blue-600/20 border border-blue-500/30 rounded-lg p-2 text-center">
                                <div className="text-[17px] font-black text-blue-400">Хайх</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_ObjectRecognition;
