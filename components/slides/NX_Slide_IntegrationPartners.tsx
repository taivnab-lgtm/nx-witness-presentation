import React from 'react';
import Layout from '../Layout';
import { Globe, Users, Award } from 'lucide-react';

const NX_Slide_IntegrationPartners: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Award className="text-blue-400" size={22} />,
            title: '20+ OEM Versions',
            desc: 'Дэлхийн болон бүс нутгийн 20 гаруй OEM хувилбараар түгээгдэнэ.',
        },
        {
            icon: <Users className="text-blue-400" size={22} />,
            title: '190+ Distributors',
            desc: 'Дэлхийн 190 гаруй бүс нутгийн дистрибьютор, дахин борлуулагчидтай.',
        },
        {
            icon: <Globe className="text-blue-400" size={22} />,
            title: '100+ Ecosystem Partners',
            desc: 'Видео аналитик, PSIM, GIS Map, нэвтрэх хяналт болон бусад 100+ партнер.',
        },
    ];

    const spokes = [
        { label: 'AI Analytics', color: 'bg-purple-500/20 border-purple-500/40 text-purple-300', angle: -90 },
        { label: 'Access Control', color: 'bg-green-500/20 border-green-500/40 text-green-300', angle: -30 },
        { label: 'GIS / Maps', color: 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300', angle: 30 },
        { label: 'PSIM', color: 'bg-red-500/20 border-red-500/40 text-red-300', angle: 90 },
        { label: 'Video Matrix', color: 'bg-orange-500/20 border-orange-500/40 text-orange-300', angle: 150 },
        { label: 'IoT', color: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300', angle: 210 },
    ];

    const radius = 130;

    return (
        <Layout
            className="bg-slate-950"
            title="Integration Partners"
            subtitle="Дэлхийн 100+ экосистемийн партнеруудтай нэгдсэн нээлттэй платформ."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left column */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">ECOSYSTEM</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Нэг платформ <br /><span className="text-blue-500 italic">бүх шийдлүүд.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Nx Witness нь дэлхийн тэргүүлэх аюулгүй байдлын технологийн компаниудтай нягт хамтран ажилладаг нээлттэй платформ юм.
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

                {/* Right column — hub and spoke diagram */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative" style={{ width: 380, height: 380 }}>
                        {/* SVG lines from center to each spoke */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
                            {spokes.map((spoke, i) => {
                                const angleRad = (spoke.angle * Math.PI) / 180;
                                const cx = 190;
                                const cy = 190;
                                const x2 = cx + radius * Math.cos(angleRad);
                                const y2 = cy + radius * Math.sin(angleRad);
                                return (
                                    <line
                                        key={i}
                                        x1={cx}
                                        y1={cy}
                                        x2={x2}
                                        y2={y2}
                                        stroke="#3b82f6"
                                        strokeWidth="1"
                                        strokeOpacity="0.3"
                                        strokeDasharray="4 4"
                                    />
                                );
                            })}
                            {/* Outer ring */}
                            <circle cx="190" cy="190" r={radius} fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.08" />
                        </svg>

                        {/* Center Nx hub */}
                        <div
                            className="absolute flex items-center justify-center"
                            style={{ width: 80, height: 80, left: 190 - 40, top: 190 - 40 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-blue-600 border-2 border-blue-400/60 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <span className="text-white font-black text-[28px] tracking-tight">Nx</span>
                            </div>
                        </div>

                        {/* Spoke nodes */}
                        {spokes.map((spoke, i) => {
                            const angleRad = (spoke.angle * Math.PI) / 180;
                            const cx = 190;
                            const cy = 190;
                            const x = cx + radius * Math.cos(angleRad);
                            const y = cy + radius * Math.sin(angleRad);
                            const nodeW = 108;
                            const nodeH = 36;
                            return (
                                <div
                                    key={i}
                                    className={`absolute flex items-center justify-center rounded-xl border text-[17px] font-bold px-3 py-2 ${spoke.color}`}
                                    style={{
                                        left: x - nodeW / 2,
                                        top: y - nodeH / 2,
                                        width: nodeW,
                                        height: nodeH,
                                    }}
                                >
                                    {spoke.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_IntegrationPartners;
