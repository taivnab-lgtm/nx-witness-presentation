import React from 'react';
import Layout from '../Layout';
import { ShieldCheck, Smartphone, Key } from 'lucide-react';

const NX_Slide_2FA: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <ShieldCheck className="text-blue-400" size={22} />,
            title: "OTP Verification",
            desc: "Нэвтрэх нэр, нууц үгийн дараа Google/Microsoft/DUO Authenticator кодыг шаардана."
        },
        {
            icon: <Smartphone className="text-blue-400" size={22} />,
            title: "Major Authenticators",
            desc: "Google Authenticator, Microsoft Authenticator болон DUO Mobile-г дэмжинэ."
        },
        {
            icon: <Key className="text-blue-400" size={22} />,
            title: "Nx Cloud Protection",
            desc: "Nx Cloud акаунтаа 2FA-р хамгаалснаар зөвшөөрөлгүй нэвтрэлтийг бүрэн зогсооно."
        },
    ];

    return (
        <Layout className="bg-slate-950" title="2FA — Two-Factor Authentication" subtitle="Нэвтрэх нууц үгийн дараа нэмэлт OTP кодоор баталгаажуулна.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">SECURITY</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Давхар хамгаалалт /<br />
                            <span className="text-blue-500 italic">хакерын эсрэг.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Нууц үг алдагдсан ч OTP кодгүйгээр нэвтрэх боломжгүй. Хоёр давхар баталгаажуулалт.
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

                {/* Right: Phone mockup with OTP */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative flex items-center gap-8">

                        {/* Phone mockup */}
                        <div className="relative">
                            {/* Phone outer shell */}
                            <div className="w-52 bg-slate-800 rounded-[2.5rem] border-4 border-slate-700 shadow-[0_0_60px_rgba(59,130,246,0.2)] overflow-hidden">
                                {/* Notch */}
                                <div className="flex justify-center pt-3 pb-2">
                                    <div className="w-20 h-5 bg-slate-900 rounded-full"></div>
                                </div>

                                {/* Screen content */}
                                <div className="bg-slate-950 mx-1 mb-1 rounded-[1.8rem] overflow-hidden min-h-[360px] flex flex-col">
                                    {/* App header */}
                                    <div className="bg-slate-900 px-4 pt-3 pb-3 flex flex-col items-center gap-1 border-b border-slate-800">
                                        <div className="w-10 h-10 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                                            <ShieldCheck className="text-blue-400" size={20} />
                                        </div>
                                        <span className="text-[10px] font-black text-white uppercase tracking-wider">Authenticator</span>
                                        <span className="text-[8px] text-slate-500">Nx Cloud — 2FA</span>
                                    </div>

                                    {/* OTP section */}
                                    <div className="flex-1 px-4 py-5 flex flex-col items-center gap-4">
                                        {/* Account label */}
                                        <div className="w-full text-center">
                                            <p className="text-[9px] text-slate-500 uppercase tracking-widest">admin@company.mn</p>
                                            <p className="text-[8px] text-blue-400 font-mono">Nx Cloud</p>
                                        </div>

                                        {/* OTP code digits */}
                                        <div className="flex gap-2 items-center">
                                            {['4', '8', '2', '9', '1', '3'].map((digit, i) => (
                                                <React.Fragment key={i}>
                                                    <div className="w-8 h-10 bg-slate-800 border border-blue-500/30 rounded-lg flex items-center justify-center shadow-[0_0_8px_rgba(59,130,246,0.15)]">
                                                        <span className="text-[25px] font-black text-white font-mono">{digit}</span>
                                                    </div>
                                                    {i === 2 && <div className="w-1 h-1 rounded-full bg-slate-600"></div>}
                                                </React.Fragment>
                                            ))}
                                        </div>

                                        {/* Expires timer */}
                                        <div className="flex flex-col items-center gap-1">
                                            {/* Circular progress */}
                                            <div className="relative w-12 h-12">
                                                <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                                                    <circle cx="24" cy="24" r="20" fill="none" stroke="#1e293b" strokeWidth="4"/>
                                                    <circle cx="24" cy="24" r="20" fill="none" stroke="#3b82f6" strokeWidth="4"
                                                        strokeDasharray="125.6"
                                                        strokeDashoffset="50"
                                                        strokeLinecap="round"/>
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-[11px] font-black text-blue-400 font-mono">18s</span>
                                                </div>
                                            </div>
                                            <p className="text-[8px] text-slate-600 uppercase tracking-wide">Дуусахад</p>
                                        </div>

                                        {/* Authenticator apps supported */}
                                        <div className="w-full space-y-1.5 mt-1">
                                            {['Google Authenticator', 'Microsoft Authenticator', 'DUO Mobile'].map((app, i) => (
                                                <div key={i} className="flex items-center gap-2 bg-slate-900 rounded-lg px-2.5 py-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                    <span className="text-[8px] text-slate-300 font-medium">{app}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Auth flow diagram */}
                        <div className="flex flex-col gap-3 flex-1">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Нэвтрэх процесс</p>

                            {[
                                { step: '1', label: 'Нэвтрэх нэр оруулна', icon: '👤', done: true },
                                { step: '2', label: 'Нууц үг оруулна', icon: '🔑', done: true },
                                { step: '3', label: 'OTP код шаардана', icon: '📱', done: false, active: true },
                                { step: '4', label: 'Нэвтрэлт баталгаажина', icon: '✅', done: false },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[17px] font-black border-2 flex-shrink-0 ${
                                        s.done ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                                        : s.active ? 'bg-blue-500/20 border-blue-500 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                                        : 'bg-slate-800 border-slate-700 text-slate-500'
                                    }`}>
                                        {s.done ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M2.5 7l3 3 6-6" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        ) : s.step}
                                    </div>
                                    <div className={`flex-1 py-2.5 px-3 rounded-xl border text-[17px] font-medium ${
                                        s.done ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300'
                                        : s.active ? 'bg-blue-500/10 border-blue-500/40 text-white font-bold'
                                        : 'bg-slate-900/40 border-slate-800/50 text-slate-500'
                                    }`}>
                                        {s.label}
                                    </div>
                                </div>
                            ))}

                            {/* Shield indicator */}
                            <div className="mt-2 flex items-center gap-3 bg-blue-500/5 border border-blue-500/20 rounded-xl p-3">
                                <ShieldCheck className="text-blue-400" size={18} />
                                <div>
                                    <p className="text-[10px] font-black text-white uppercase">Зөвшөөрөлгүй нэвтрэлтийг зогсооно</p>
                                    <p className="text-[9px] text-slate-500 mt-0.5">Нууц үг алдагдсан ч OTP кодгүйгээр нэвтэрч чадахгүй</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_2FA;
