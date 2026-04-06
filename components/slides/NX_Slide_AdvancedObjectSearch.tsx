import React from 'react';
import Layout from '../Layout';
import { Search, SlidersHorizontal, Tag } from 'lucide-react';

const NX_Slide_AdvancedObjectSearch: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Search className="text-blue-400" size={22} />,
            title: 'Smart Object Search',
            desc: 'Хэт олон объект? Сонирхсон хэсгээ хүрээлж, шар тэмдэглэлүүд хэдхэн секундэд timeline дээр гарна.',
        },
        {
            icon: <SlidersHorizontal className="text-blue-400" size={22} />,
            title: 'Attribute Search',
            desc: 'Зөвхөн объект биш, түүний шинж чанарыг хайна. Өнгө, хэлбэр, хэмжээгээр шүүнэ.',
        },
        {
            icon: <Tag className="text-blue-400" size={22} />,
            title: 'AI Partner Platform',
            desc: 'AI технологи бүхий компаниудын хамгийн сайр дурдагддаг VMS платформ.',
        },
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Advanced Object Search"
            subtitle="AI партнеруудтай хамтарсан дэвшилтэт объект хайлтын интерфэйс."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left column */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">AI SEARCH</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Объект хайх <br /><span className="text-blue-500 italic">хамгийн хурдан арга.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Дүрс бичлэгийн дотроос объектыг хэдхэн секундэд хайж олох Nx-ийн дэвшилтэт хайлтын систем.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-6 p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group"
                            >
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors shrink-0">
                                    {p.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — search UI mockup */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-full px-4" style={{ maxWidth: 460 }}>
                        {/* Search interface card */}
                        <div className="bg-slate-900 rounded-2xl border border-slate-700/60 overflow-hidden shadow-2xl shadow-blue-500/5">
                            {/* Title bar */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-slate-700/50">
                                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                <span className="ml-3 text-slate-400 text-[17px] font-medium">Object Search — Nx Witness</span>
                            </div>

                            {/* Search bar */}
                            <div className="p-4 border-b border-slate-800/60">
                                <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2.5 border border-slate-700/50">
                                    <Search size={16} className="text-blue-400 shrink-0" />
                                    <span className="text-slate-300 text-xl font-medium flex-1">Хүн — цэнхэр хувцас...</span>
                                    <div className="flex gap-1.5">
                                        <div className="px-2 py-0.5 bg-blue-600/30 border border-blue-500/40 rounded-md text-blue-300 text-[17px] font-bold">Person</div>
                                        <div className="px-2 py-0.5 bg-slate-700/50 border border-slate-600/40 rounded-md text-slate-400 text-[17px] font-bold">Color</div>
                                    </div>
                                </div>
                            </div>

                            {/* Video area with bounding boxes */}
                            <div className="relative bg-slate-950 mx-4 mt-4 rounded-xl overflow-hidden" style={{ height: 140 }}>
                                {/* Simulated video feed — dark background with grid */}
                                <div
                                    className="absolute inset-0 opacity-[0.06]"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)',
                                        backgroundSize: '20px 20px',
                                    }}
                                ></div>
                                {/* Simulated scene label */}
                                <div className="absolute top-2 left-2 text-[9px] text-slate-600 font-mono uppercase tracking-widest">CAM-04 · 2024/01/15 14:32:11</div>

                                {/* Bounding box 1 — yellow / highlighted match */}
                                <div className="absolute border-2 border-yellow-400 rounded-sm" style={{ top: 28, left: 60, width: 36, height: 70 }}>
                                    <div className="absolute -top-4 left-0 bg-yellow-400 text-black text-[8px] font-black px-1 rounded-sm whitespace-nowrap">
                                        Person · 97%
                                    </div>
                                </div>

                                {/* Bounding box 2 */}
                                <div className="absolute border-2 border-yellow-400/50 rounded-sm" style={{ top: 40, left: 160, width: 30, height: 60 }}>
                                    <div className="absolute -top-4 left-0 bg-yellow-400/80 text-black text-[8px] font-black px-1 rounded-sm whitespace-nowrap">
                                        Person · 89%
                                    </div>
                                </div>

                                {/* Bounding box 3 — lower confidence */}
                                <div className="absolute border border-slate-500/60 rounded-sm" style={{ top: 50, left: 280, width: 28, height: 55 }}>
                                    <div className="absolute -top-4 left-0 bg-slate-600/80 text-slate-200 text-[8px] font-black px-1 rounded-sm whitespace-nowrap">
                                        Person · 61%
                                    </div>
                                </div>

                                {/* Match count badge */}
                                <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-blue-600/80 rounded-full px-2.5 py-1">
                                    <Search size={9} className="text-white" />
                                    <span className="text-white text-[9px] font-black">24 тохирол олдлоо</span>
                                </div>
                            </div>

                            {/* Timeline strip */}
                            <div className="mx-4 mt-3 mb-4">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">Timeline</span>
                                    <div className="flex-1 h-px bg-slate-800"></div>
                                    <span className="text-slate-600 text-[10px] font-mono">14:00 — 15:00</span>
                                </div>
                                <div className="relative h-7 bg-slate-800 rounded-lg overflow-hidden">
                                    {/* Base track */}
                                    <div className="absolute inset-0 bg-slate-800 rounded-lg"></div>
                                    {/* Match markers — yellow bars at different positions */}
                                    {[8, 18, 26, 35, 45, 55, 63, 72, 80, 88].map((pct, i) => (
                                        <div
                                            key={i}
                                            className="absolute top-1 bottom-1 w-1.5 bg-yellow-400 rounded-sm opacity-80"
                                            style={{ left: `${pct}%` }}
                                        ></div>
                                    ))}
                                    {/* Playhead */}
                                    <div className="absolute top-0 bottom-0 w-0.5 bg-blue-400" style={{ left: '35%' }}></div>
                                </div>
                                {/* Filter pills */}
                                <div className="flex gap-2 mt-2">
                                    {['Бүгд', 'Хүн', 'Тээврийн хэрэгсэл', 'Объект'].map((filter, i) => (
                                        <div
                                            key={i}
                                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${i === 0 ? 'bg-blue-600/30 border-blue-500/40 text-blue-300' : 'bg-slate-800/60 border-slate-700/40 text-slate-500'}`}
                                        >
                                            {filter}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_AdvancedObjectSearch;
