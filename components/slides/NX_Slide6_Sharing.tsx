import React, { useState } from 'react';
import Layout from '../Layout';
import { Share2, Lock, Clock, ShieldCheck, Link as LinkIcon, CheckCircle2, Copy, Zap } from 'lucide-react';

const SharingDashboardVisual = () => {
    const [isGenerated, setIsGenerated] = useState(false);
    const [timer, setTimer] = useState("59:59");

    const generateLink = () => {
        setIsGenerated(true);
        // Simulate a countdown
        setTimeout(() => setTimer("59:58"), 1000);
    };

    return (
        <div className="relative w-full max-w-2xl bg-slate-900/60 rounded-3xl border border-blue-500/30 backdrop-blur-3xl shadow-[0_0_50px_rgba(59,130,246,0.1)] p-10 overflow-hidden group transition-all duration-500">
             {/* Header */}
             <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30">
                    <Share2 size={24} className="text-white" />
                </div>
                <div>
                   <h5 className="text-[34px] font-black text-white">Secure Video Sharing</h5>
                   <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">Enterprise Sharing Protocol v2.4</p>
                </div>
             </div>

             {/* UI Controls */}
             <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Expiration Period</label>
                        <div className="flex gap-2">
                            {['1h', '24h', '7d'].map((t, i) => (
                                <button key={i} className={`flex-1 py-3 rounded-xl border text-[11px] font-black transition-all ${i === 0 ? 'bg-blue-600 border-blue-400 text-white shadow-lg' : 'bg-slate-950/50 border-slate-800 text-slate-500 hover:border-slate-700'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Access Level</label>
                        <select className="w-full h-[46px] bg-slate-950/50 border border-slate-800 rounded-xl px-4 text-[17px] font-bold text-slate-300 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer">
                            <option>View Only (No Download)</option>
                            <option>Full Control</option>
                        </select>
                    </div>
                </div>

                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center justify-between group-hover:border-blue-500/30 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                           <Lock size={18} className="text-blue-400" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-white">Require Security Pin</div>
                            <div className="text-[10px] text-slate-500">Adds an extra layer of authentication</div>
                        </div>
                    </div>
                    <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    </div>
                </div>

                {/* Generate Button / Result */}
                {!isGenerated ? (
                    <button 
                        onClick={generateLink}
                        className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest text-xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all active:scale-95 group/btn"
                    >
                        <Zap size={20} className="group-hover:animate-pulse" />
                        Generate Secure Link
                    </button>
                ) : (
                    <div className="animate-in fade-in zoom-in-95 duration-500">
                        <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-emerald-400">
                                    <CheckCircle2 size={18} />
                                    <span className="text-[17px] font-black uppercase tracking-widest">Link Active</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px]">
                                    <Clock size={14} />
                                    EXPIRING IN: <span className="text-emerald-500 font-bold">{timer}</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1 bg-slate-950 h-12 rounded-xl border border-slate-800 flex items-center px-4 overflow-hidden">
                                    <span className="text-blue-400 text-[17px] font-mono truncate">nx.cloud/share/v_847291_a9f2</span>
                                </div>
                                <button className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-white transition-colors">
                                    <Copy size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
             </div>

             {/* Background Effects */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-1000"></div>
        </div>
    );
};

const NX_Slide6_Sharing: React.FC<{ isActive: boolean }> = () => {
    const points = [
        {
            icon: <Clock className="text-blue-400" size={22} />,
            title: "Automatic Expiration",
            desc: "Хуваалцсан видео холбоос заасан хугацааны дараа (1ц-7х) автоматаар хүчингүй болно."
        },
        {
            icon: <ShieldCheck className="text-blue-400" size={22} />,
            title: "Restricted Access",
            desc: "Тухайн хэрэглэгч зөвхөн заасан камер болон заасан цагийн бичлэгийг үзнэ."
        },
        {
            icon: <CheckCircle2 className="text-blue-400" size={22} />,
            title: "Security Audit Logs",
            desc: "Хэн, хэзээ, ямар бичлэг үзсэнийг төв системээс хянах, тайлагнах боломжтой."
        }
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Видео Хуваалцах"
            subtitle="Cloud Video Links: Хялбар бөгөөд аюулгүй гадаад хандалт."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-[17px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4 font-mono underline decoration-blue-500/50 underline-offset-8 decoration-2">SECURE SHARING</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight">
                            Аюулгүй <span className="text-blue-500 italic">Link</span><br />
                            Түргэн хуваалцах.
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Цагдаагийн байгууллага эсвэл гадны аудитад бичлэг үзүүлэх шаардлага гарвал NX Cloud-аар дамжуулан "Түр зуурын холбоос" үүсгэхэд л хангалттай.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-6 p-5 bg-slate-900/30 rounded-2xl border border-slate-800/50 hover:border-blue-500/50 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                    {p.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center">
                    <SharingDashboardVisual />
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide6_Sharing;
