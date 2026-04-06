import React from 'react';
import Layout from '../Layout';
import { Eye, UserCheck, ShieldAlert } from 'lucide-react';

const NX_Slide_FaceRecognition: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Eye className="text-blue-400" size={22} />,
            title: "Access Control",
            desc: "Зөвшөөрсөн нүүрийг танин хаалга нээх, хориглогдсон хүнийг дохиолол өгч зогсооно.",
        },
        {
            icon: <UserCheck className="text-blue-400" size={22} />,
            title: "VIP / Warning List",
            desc: "VIP зочид болон сэрэмжлүүлэх жагсаалттай нүүрийг тэр даруй таньж мэдэгдэнэ.",
        },
        {
            icon: <ShieldAlert className="text-blue-400" size={22} />,
            title: "Audit by Name",
            desc: "Нэр оруулан тухайн хүний ирж явсан бүх бичлэгийг хайж олно.",
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Face Recognition" subtitle="Нүүрний мэдээллийг таньж, нэр, бүлэг болон бусад мэдээллийг харуулна.">
            <div className="h-full flex gap-12 items-center">
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">BIOMETRIC AI</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Хүн таних /<br /><span className="text-blue-500 italic">ухаалгаар, автоматаар.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">Нүүрний биометрийн технологи ашиглан хандалт хянаж, аюулгүй байдлыг хангана.</p>
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

                {/* Right visual: Face recognition UI */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative w-[420px] h-[380px]">
                        {/* Camera feed background */}
                        <div className="absolute inset-0 bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                            {/* Scan lines */}
                            {Array.from({ length: 18 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-full h-px bg-blue-500/5"
                                    style={{ top: `${(i + 1) * 5.5}%` }}
                                />
                            ))}
                            {/* Corner grid overlay */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        </div>

                        {/* Face silhouette */}
                        <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '60px' }}>
                            <svg width="140" height="170" viewBox="0 0 140 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Head shape */}
                                <ellipse cx="70" cy="70" rx="52" ry="62" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                                {/* Eyes */}
                                <ellipse cx="50" cy="62" rx="8" ry="5" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />
                                <ellipse cx="90" cy="62" rx="8" ry="5" fill="#0f172a" stroke="#60a5fa" strokeWidth="1" />
                                {/* Nose */}
                                <path d="M70 72 L64 88 Q70 92 76 88 Z" fill="none" stroke="#334155" strokeWidth="1.2" />
                                {/* Mouth */}
                                <path d="M56 104 Q70 114 84 104" fill="none" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                                {/* Neck */}
                                <rect x="58" y="128" width="24" height="30" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                                {/* Shoulders */}
                                <path d="M10 165 Q35 145 58 158 L82 158 Q105 145 130 165" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                            </svg>
                        </div>

                        {/* Bounding box */}
                        <div className="absolute" style={{ top: '28px', left: '108px', width: '204px', height: '220px' }}>
                            {/* Corner brackets */}
                            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-400" />
                            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-400" />
                            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-400" />
                            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-400" />
                            {/* Scan line animation placeholder */}
                            <div className="absolute left-0 right-0 h-px bg-blue-400/60" style={{ top: '45%' }} />
                        </div>

                        {/* Landmark dots */}
                        {[
                            { x: 163, y: 88 }, { x: 185, y: 88 },
                            { x: 207, y: 88 }, { x: 229, y: 88 },
                            { x: 175, y: 108 }, { x: 210, y: 108 },
                            { x: 196, y: 120 }, { x: 175, y: 138 }, { x: 196, y: 144 }, { x: 217, y: 138 },
                        ].map((dot, i) => (
                            <div
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                                style={{ left: `${dot.x - 108}px`, top: `${dot.y - 28}px` }}
                            />
                        ))}

                        {/* Match result card */}
                        <div className="absolute bottom-0 left-0 right-0 mx-4 bg-slate-800/95 border border-blue-500/40 rounded-xl p-3 flex items-center gap-3 backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center flex-shrink-0">
                                <UserCheck size={14} className="text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-white font-bold text-xl">Б. Болд-Эрдэнэ</div>
                                <div className="text-slate-400 text-[17px]">VIP зочин · Зөвшөөрөгдсөн</div>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <div className="text-blue-400 font-black text-xl">98.4%</div>
                                <div className="text-slate-500 text-[17px]">таарсан</div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                        </div>

                        {/* Camera label */}
                        <div className="absolute top-3 left-3 bg-slate-800/80 border border-slate-700 rounded-lg px-2 py-1">
                            <span className="text-[17px] text-slate-400 font-mono">CAM-03 · MAIN ENTRANCE</span>
                        </div>

                        {/* Confidence bar */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                            <span className="text-[17px] text-slate-500 font-mono">AI</span>
                            <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: '98%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_FaceRecognition;
