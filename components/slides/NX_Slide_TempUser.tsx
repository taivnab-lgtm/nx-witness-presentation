import React from 'react';
import Layout from '../Layout';
import { Clock, Link, UserX } from 'lucide-react';

const NX_Slide_TempUser: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Clock className="text-blue-400" size={22} />,
            title: "Valid Date Setup",
            desc: "Идэвхтэй байх огноог тохируулна. Тухайн өдөр ирэхэд эрх автоматаар зогсоно."
        },
        {
            icon: <UserX className="text-blue-400" size={22} />,
            title: "Auto Revoke",
            desc: "Анхны нэвтрэлтийн дараа тогтоосон минут/цагт эрхийг автоматаар цуцлана."
        },
        {
            icon: <Link className="text-blue-400" size={22} />,
            title: "One-Click Link",
            desc: "Линк үүсгэж хэрэглэгчид илгээнэ. Нууц үг хийх шаардлагагүй."
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Temporary User" subtitle="Тодорхой хугацаатай нэвтрэх эрх олгож, автоматаар хүчингүй болгоно.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">TIME-LIMITED ACCESS</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Хугацаатай нэвтрэлт /<br />
                            <span className="text-blue-500 italic">аюулгүй, автомат.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Зочин буюу гадны ажилтанд хугацаа хязгаарлагдмал нэвтрэх эрх олгоод тайвнаараа мартаарай.
                        </p>
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

                {/* Right: Countdown + link generator mockup */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-full max-w-md space-y-5">

                        {/* Temp user card */}
                        <div className="bg-slate-900 border border-blue-500/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.12)]">
                            {/* Card header */}
                            <div className="bg-blue-600/10 border-b border-blue-500/20 px-5 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-black">B</div>
                                    <div>
                                        <p className="text-xl font-bold text-white">contractor_bob</p>
                                        <p className="text-[10px] text-blue-400 font-mono">Viewer — Temp Access</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full px-3 py-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                                    <span className="text-[10px] font-black text-amber-400 uppercase">Active</span>
                                </div>
                            </div>

                            {/* Countdown clock */}
                            <div className="px-5 py-6 flex flex-col items-center gap-4">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Хугацаа дуусахад үлдсэн</p>

                                {/* Big timer display */}
                                <div className="flex items-center gap-3">
                                    {[
                                        { val: '02', label: 'өдөр' },
                                        { val: '14', label: 'цаг' },
                                        { val: '37', label: 'мин' },
                                        { val: '22', label: 'сек' },
                                    ].map((t, i) => (
                                        <React.Fragment key={i}>
                                            <div className="flex flex-col items-center">
                                                <div className="w-14 h-14 bg-slate-800 border border-slate-700/60 rounded-xl flex items-center justify-center">
                                                    <span className="text-[34px] font-black text-white font-mono">{t.val}</span>
                                                </div>
                                                <span className="text-[9px] text-slate-500 mt-1 font-medium">{t.label}</span>
                                            </div>
                                            {i < 3 && <span className="text-[28px] font-black text-slate-600 mb-4">:</span>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                {/* Progress bar */}
                                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="h-full w-[35%] bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"></div>
                                </div>

                                {/* Date range */}
                                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                                    <span>2026.04.05 09:00</span>
                                    <svg width="24" height="8" viewBox="0 0 24 8" fill="none">
                                        <path d="M0 4h18M14 1l4 3-4 3" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="text-amber-400">2026.04.07 23:00</span>
                                </div>

                                {/* Auto-revoke indicator */}
                                <div className="flex items-center gap-2 bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-1.5 w-full justify-center">
                                    <UserX className="text-red-400" size={12} />
                                    <span className="text-[10px] text-red-400 font-black uppercase tracking-wide">Auto Revoke: 2026.04.07 23:00-д идэвхгүй болно</span>
                                </div>
                            </div>
                        </div>

                        {/* Generate link card */}
                        <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-5 space-y-3">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">One-Click Access Link</p>

                            <div className="flex items-center gap-2 bg-slate-800 border border-slate-700/50 rounded-xl px-4 py-2.5">
                                <Link className="text-blue-400 flex-shrink-0" size={13} />
                                <span className="text-[11px] font-mono text-slate-400 truncate flex-1">https://cloud.nx.team/access/tmp/8f3k2...</span>
                                <span className="text-[9px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-bold">COPY</span>
                            </div>

                            <button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl py-2.5 text-xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-2">
                                <Link size={14} />
                                GENERATE LINK
                            </button>

                            <p className="text-[10px] text-slate-600 text-center">Нууц үг хийх шаардлагагүй — линкээр шууд нэвтэрнэ</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_TempUser;
