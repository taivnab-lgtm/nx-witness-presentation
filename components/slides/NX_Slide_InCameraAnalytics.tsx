import React from 'react';
import Layout from '../Layout';
import { Camera, Cpu, Zap } from 'lucide-react';

const NX_Slide_InCameraAnalytics: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Camera className="text-blue-400" size={22} />,
            title: 'Native API/SDK Integration',
            desc: 'Камерын үйлдвэрлэгчийн native API/SDK-ийг шууд ашиглана.',
        },
        {
            icon: <Cpu className="text-blue-400" size={22} />,
            title: 'Easy to Configure',
            desc: 'Хялбар тохиргоотой. Техникийн мэдлэг шаардахгүй.',
        },
        {
            icon: <Zap className="text-blue-400" size={22} />,
            title: 'No Additional License',
            desc: 'Nx-ийн нэмэлт лиценз шаардахгүй. Камерын хүчин чадлыг дээд зэргээр ашиглана.',
        },
    ];

    const brands = ['Axis', 'Hikvision', 'Dahua', 'Hanwha'];
    const brandPositions = [
        { top: '8%', left: '50%', transform: 'translateX(-50%)' },
        { top: '38%', left: '82%' },
        { top: '70%', left: '60%' },
        { top: '70%', left: '18%' },
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="In-Camera Analytics"
            subtitle="Камерт суурилсан AI аналитикийг нэмэлт лиценз шаардахгүйгээр ашиглана."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left column */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">EDGE AI</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Камерт суурилсан <br /><span className="text-blue-500 italic">ухаалаг аналитик.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Камерын дотор суурилсан AI-г Nx платформоор шууд удирдаж, дүн шинжилгээ хийнэ.
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

                {/* Right column — camera + analytics overlay */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative" style={{ width: 360, height: 340 }}>
                        {/* Camera body */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-52 h-52 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-2xl shadow-blue-500/10">
                                {/* Camera lens ring */}
                                <div className="w-36 h-36 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-slate-700 border border-slate-500 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-blue-900/60 border border-blue-500/40 flex items-center justify-center">
                                            <Camera className="text-blue-400" size={28} />
                                        </div>
                                    </div>
                                </div>

                                {/* Bounding box overlays */}
                                <div className="absolute top-6 left-10 w-12 h-14 border-2 border-yellow-400 rounded-sm opacity-80">
                                    <div className="absolute -top-4 left-0 bg-yellow-400 text-black text-[9px] font-black px-1 rounded-sm whitespace-nowrap">Person 98%</div>
                                </div>
                                <div className="absolute bottom-8 right-8 w-10 h-10 border-2 border-green-400 rounded-sm opacity-80">
                                    <div className="absolute -top-4 left-0 bg-green-400 text-black text-[9px] font-black px-1 rounded-sm whitespace-nowrap">Object</div>
                                </div>
                            </div>
                        </div>

                        {/* Brand labels around */}
                        {brands.map((brand, i) => (
                            <div
                                key={i}
                                className="absolute flex items-center justify-center"
                                style={brandPositions[i] as React.CSSProperties}
                            >
                                <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-600 text-slate-300 font-black text-xl tracking-wide shadow-md">
                                    {brand}
                                </div>
                            </div>
                        ))}

                        {/* Dashed connector lines (decorative) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 340">
                            <line x1="180" y1="170" x2="180" y2="30" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                            <line x1="180" y1="170" x2="295" y2="130" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                            <line x1="180" y1="170" x2="215" y2="238" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                            <line x1="180" y1="170" x2="65" y2="238" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                        </svg>

                        {/* Edge AI label */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5">
                            <Zap size={12} className="text-blue-400" />
                            <span className="text-blue-300 text-[17px] font-bold tracking-widest uppercase">Edge AI Processing</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_InCameraAnalytics;
