import React from 'react';
import Layout from '../Layout';
import { ArrowRight, Search, ShieldCheck } from 'lucide-react';

const NX_Slide_FaceTracking: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <ArrowRight className="text-blue-400" size={22} />,
            title: "Choose a Face",
            desc: "Бичлэгийн зургаас нэг нүүр сонгоно. Нэр мэдэх шаардлагагүй.",
        },
        {
            icon: <Search className="text-blue-400" size={22} />,
            title: "Full Visit Route",
            desc: "Тухайн хүн байгууллагад ирж яваад бүх замыг автоматаар харуулна.",
        },
        {
            icon: <ShieldCheck className="text-blue-400" size={22} />,
            title: "GDPR Compliant",
            desc: "Хувийн мэдээлэл ашиглахгүй тул GDPR стандартад нийцнэ.",
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Face Tracking" subtitle="Нэр мэдэгдэхгүй ч тухайн нүүрийг бүхэл системд мөрдөж хайна.">
            <div className="h-full flex gap-12 items-center">
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">FORENSIC AI</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Нэр мэдэхгүй ч /<br /><span className="text-blue-500 italic">нүүрийг мөрдөнө.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">Нэргүй нүүр сонгоод бүхэл байгууллагын камер дамжсан замыг автоматаар гаргана.</p>
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

                {/* Right visual: Timeline route diagram */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative w-[460px] h-[360px]">

                        {/* Background panel */}
                        <div className="absolute inset-0 bg-slate-900/60 rounded-2xl border border-slate-700/50 overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        </div>

                        {/* Title label */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                            <span className="text-[17px] font-mono text-slate-500 uppercase tracking-widest">Visit Route · 2024-12-18</span>
                            <span className="text-[17px] font-mono text-blue-400">4 cameras · 00:47 min</span>
                        </div>

                        {/* Route path — horizontal flow */}
                        <div className="absolute inset-0 flex items-center justify-center px-8 pt-8">
                            <div className="relative w-full flex items-center justify-between">

                                {/* Dashed connecting line */}
                                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center px-12">
                                    <div className="flex-1 border-t-2 border-dashed border-blue-500/30" />
                                </div>

                                {/* Camera nodes */}
                                {[
                                    { label: 'CAM-01', place: 'Гадна үүд', time: '09:14', active: true },
                                    { label: 'CAM-05', place: 'Лифт', time: '09:17', active: true },
                                    { label: 'CAM-09', place: '3-р давхар', time: '09:21', active: true },
                                    { label: 'CAM-12', place: 'Хурлын өрөө', time: '09:31', active: false },
                                ].map((cam, i) => (
                                    <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                                        {/* Camera icon box */}
                                        <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center border-2 transition-all ${cam.active ? 'bg-blue-950 border-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.3)]' : 'bg-slate-800 border-slate-600'}`}>
                                            {/* Camera SVG */}
                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                                                <rect x="1" y="4" width="16" height="12" rx="2" fill={cam.active ? '#1d4ed8' : '#334155'} stroke={cam.active ? '#60a5fa' : '#475569'} strokeWidth="1.2" />
                                                <path d="M17 8l5-3v8l-5-3V8z" fill={cam.active ? '#3b82f6' : '#475569'} />
                                            </svg>
                                        </div>
                                        {/* Step number */}
                                        <div className={`text-[17px] font-black font-mono ${cam.active ? 'text-blue-400' : 'text-slate-600'}`}>{cam.label}</div>
                                        <div className={`text-[17px] text-center ${cam.active ? 'text-slate-300' : 'text-slate-600'}`}>{cam.place}</div>
                                        <div className={`text-[17px] font-mono ${cam.active ? 'text-blue-300' : 'text-slate-600'}`}>{cam.time}</div>

                                        {/* Active pulse dot */}
                                        {cam.active && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full border-2 border-slate-900" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Face thumbnail — selected face */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-slate-800/90 border border-blue-500/30 rounded-xl px-3 py-2">
                            <div className="w-10 h-10 bg-slate-700 rounded-lg border border-slate-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <ellipse cx="14" cy="11" rx="7" ry="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                                    <ellipse cx="10.5" cy="10" rx="1.5" ry="1" fill="#60a5fa" />
                                    <ellipse cx="17.5" cy="10" rx="1.5" ry="1" fill="#60a5fa" />
                                    <path d="M10 16 Q14 19 18 16" stroke="#475569" strokeWidth="1" fill="none" strokeLinecap="round" />
                                    <path d="M8 26 Q11 22 14 23 Q17 22 20 26" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-white font-bold text-[17px]">Сонгосон нүүр</div>
                                <div className="text-slate-400 text-[17px]">Нэр мэдэгдэхгүй · Хайж байна</div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-blue-400 ml-1" />
                        </div>

                        {/* GDPR badge */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-slate-800/90 border border-green-500/30 rounded-xl px-3 py-2">
                            <ShieldCheck size={14} className="text-green-400" />
                            <span className="text-[17px] text-green-400 font-bold">GDPR</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_FaceTracking;
