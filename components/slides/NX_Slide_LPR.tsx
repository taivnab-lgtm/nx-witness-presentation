import React from 'react';
import Layout from '../Layout';
import { Car, Search, ShieldCheck } from 'lucide-react';

const NX_Slide_LPR: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Car className="text-blue-400" size={22} />,
            title: "License Plate Recognition",
            desc: "Дугаарын тэмдэгт оруулбал хэдэн секундэд тухайн машины бичлэгийг олно.",
        },
        {
            icon: <Search className="text-blue-400" size={22} />,
            title: "Access Control",
            desc: "VIP машин ирэхэд хаалга автоматаар нээнэ. Зөвшөөрөлгүй машинд дохиолол өгнө.",
        },
        {
            icon: <ShieldCheck className="text-blue-400" size={22} />,
            title: "Make-Model-Color",
            desc: "Машины үйлдвэрлэгч, загвар, өнгөөр хайх. Дугааргүй тохиолдолд ч ашиглана.",
        },
    ];

    return (
        <Layout className="bg-slate-950" title="LPR & MMC" subtitle="Дугаарын тэмдэгт болон машины үйлдвэрлэгч, загвар, өнгийг таних.">
            <div className="h-full flex gap-12 items-center">
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">VEHICLE INTELLIGENCE</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Машин хайхад /<br /><span className="text-blue-500 italic">хэдэн секунд л хангалттай.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">Дугаар эсвэл машины шинж чанараар хэдхэн секундэд хайж олно.</p>
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

                {/* Right visual: Car with bounding box and LPR overlay */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative w-[460px] h-[360px]">

                        {/* Camera feed background */}
                        <div className="absolute inset-0 bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                            {/* Road surface */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-slate-800/60" />
                            {/* Road lane lines */}
                            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className="w-12 h-1 bg-slate-600/50 rounded-full" />
                                ))}
                            </div>
                        </div>

                        {/* Car silhouette SVG */}
                        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '20px' }}>
                            <svg width="280" height="160" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Car body */}
                                <rect x="20" y="70" width="240" height="60" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                                {/* Cabin */}
                                <path d="M70 70 L90 30 L190 30 L210 70 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                                {/* Windows */}
                                <path d="M96 68 L108 36 L138 36 L138 68 Z" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
                                <path d="M142 68 L142 36 L172 36 L184 68 Z" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
                                {/* Wheels */}
                                <circle cx="70" cy="130" r="22" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                                <circle cx="70" cy="130" r="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                                <circle cx="210" cy="130" r="22" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                                <circle cx="210" cy="130" r="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                                {/* Headlights */}
                                <rect x="22" y="82" width="18" height="10" rx="3" fill="#93c5fd" opacity="0.6" />
                                <rect x="22" y="96" width="18" height="10" rx="3" fill="#fbbf24" opacity="0.4" />
                                {/* Tail lights */}
                                <rect x="240" y="82" width="18" height="10" rx="3" fill="#ef4444" opacity="0.5" />
                                <rect x="240" y="96" width="18" height="10" rx="3" fill="#ef4444" opacity="0.3" />
                            </svg>
                        </div>

                        {/* Vehicle bounding box */}
                        <div className="absolute" style={{ top: '48px', left: '68px', width: '324px', height: '186px' }}>
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-400" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-400" />
                            {/* VEHICLE label */}
                            <div className="absolute -top-6 left-0 bg-blue-600 px-2 py-0.5 rounded text-[17px] font-black text-white tracking-widest">VEHICLE</div>
                        </div>

                        {/* License plate overlay */}
                        <div className="absolute" style={{ bottom: '68px', left: '50%', transform: 'translateX(-50%)' }}>
                            {/* Plate bounding box */}
                            <div className="relative border-2 border-yellow-400 rounded-sm px-1 py-0.5">
                                <div className="bg-white rounded-sm px-3 py-1 flex items-center gap-1">
                                    <span className="text-blue-800 font-black text-xl tracking-widest font-mono">УБА·1234</span>
                                </div>
                                <div className="absolute -top-5 left-0 bg-yellow-500 px-1.5 py-0.5 rounded text-[17px] font-black text-slate-900 tracking-wider">LPR</div>
                            </div>
                        </div>

                        {/* MMC info panel — top right */}
                        <div className="absolute top-3 right-3 bg-slate-800/95 border border-slate-600 rounded-xl p-3 flex flex-col gap-1.5 min-w-[140px]">
                            <div className="text-[17px] font-black text-blue-400 uppercase tracking-widest mb-1">MMC</div>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-500 text-[17px] w-12">Марк</span>
                                <span className="text-white text-[17px] font-bold">Toyota</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-500 text-[17px] w-12">Загвар</span>
                                <span className="text-white text-[17px] font-bold">Camry</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-500 text-[17px] w-12">Өнгө</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-slate-400 border border-slate-500" />
                                    <span className="text-white text-[17px] font-bold">Мөнгөн</span>
                                </div>
                            </div>
                            <div className="mt-1 pt-1 border-t border-slate-700 flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                <span className="text-green-400 text-[17px] font-bold">Зөвшөөрөгдсөн</span>
                            </div>
                        </div>

                        {/* Camera label */}
                        <div className="absolute top-3 left-3 bg-slate-800/80 border border-slate-700 rounded-lg px-2 py-1">
                            <span className="text-[17px] text-slate-400 font-mono">CAM-01 · ENTRANCE GATE</span>
                        </div>

                        {/* Confidence score */}
                        <div className="absolute bottom-3 right-3 bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-1.5 flex items-center gap-2">
                            <span className="text-[17px] text-slate-500 font-mono">Таарсан</span>
                            <span className="text-blue-400 font-black text-xl">99.1%</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_LPR;
