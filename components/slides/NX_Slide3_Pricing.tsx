import React, { useState } from 'react';
import Layout from '../Layout';
import { Check, X, Shield, Zap, Cloud, Smartphone, Monitor, ChevronRight, LayoutDashboard, Globe, Activity } from 'lucide-react';

const NX_Slide3_Pricing: React.FC<{ isActive: boolean }> = () => {
    const [isEnterprise, setIsEnterprise] = useState(true);

    const features = [
        { name: "Desktop & Mobile Clients", pro: true, ent: true },
        { name: "Unlimited Devices & Scaling", pro: true, ent: true },
        { name: "Advanced Video Wall", pro: "Нэмэлт", ent: true },
        { name: "Unified Management (Multi-Site)", pro: false, ent: true },
        { name: "Nx Cloud Integration", pro: true, ent: "Сайжруулсан" },
        { name: "Nx Maps (GIS Support)", pro: false, ent: true },
        { name: "AI Manager & Object Search", pro: "Нэмэлт", ent: true },
        { name: "Temporary User Links", pro: false, ent: true },
        { name: "License Model", pro: "Насан туршийн", ent: "Захиалгат" },
        { name: "Support & Updates", pro: "Хязгаартай", ent: "Хязгааргүй" },
        { name: "Audit Trail & Logs", pro: "Суурь", ent: "Дэлгэрэнгүй" }
    ];

    const enterpriseHighlights = [
        { icon: <LayoutDashboard size={18} />, text: "Нэгдсэн видео хана" },
        { icon: <Globe size={18} />, text: "Ухаалаг GIS зураглал" },
        { icon: <Activity size={18} />, text: "Бүрэн хэмжээний AI хайлт" }
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Лицензийн Загвар"
            subtitle="Professional vs Enterprise: Таны бизнест аль нь тохирох вэ?"
        >
            <div className="h-full flex gap-12 items-center">
                
                {/* Left Side: Plan Summary (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-[17px] font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-blue-500/50 underline-offset-8 decoration-2">LINCENSING MODEL</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight">
                            {isEnterprise ? (
                                <>Шинэ үеийн <br /><span className="text-blue-500 italic">Enterprise</span></>
                            ) : (
                                <>Уламжлалт <br /><span className="text-slate-400 italic">Professional</span></>
                            )}
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            {isEnterprise 
                                ? "Том хэмжээний байгууллага, олон салбартай системд зориулсан бүрэн автоматжуулсан, ухаалаг хайлт бүхий захиалгат загвар."
                                : "Жижиг болон дунд бизнесүүдэд зориулсан нэг удаагийн төлөвтэй, локал хэрэглээний уламжлалт лицензийн загвар."}
                        </p>
                    </div>

                    {/* Featured Plan Card */}
                    <div className={`p-8 rounded-3xl border-2 transition-all duration-700 relative overflow-hidden backdrop-blur-3xl 
                        ${isEnterprise 
                            ? 'bg-blue-600 border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.3)] text-white' 
                            : 'bg-slate-900/60 border-slate-700 shadow-xl text-slate-300'}`}>
                        
                        {/* Background Pulse for Enterprise */}
                        {isEnterprise && <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-20 animate-pulse"></div>}
                        
                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-between items-start">
                                {isEnterprise ? <Zap size={44} className="text-yellow-300" /> : <Shield size={44} className="text-blue-500" />}
                                <div className={`text-[12px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${isEnterprise ? 'bg-white/10 border-white/20' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
                                    {isEnterprise ? 'Recommended' : 'One-time Payment'}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {enterpriseHighlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className={`p-2 rounded-xl ${isEnterprise ? 'bg-white/10 group-hover:bg-white/20' : 'bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-500'} transition-colors`}>
                                            {h.icon}
                                        </div>
                                        <span className={`text-[22px] font-bold ${isEnterprise ? 'text-white' : 'text-slate-300'}`}>{h.text}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full h-14 flex items-center justify-between px-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[17px] transition-all active:scale-95 group 
                                ${isEnterprise ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                                <span>Бүрэн харьцуулалт үзэх</span>
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Manual Toggle Switch */}
                    <div className="flex justify-start">
                        <div className="bg-slate-900 border border-slate-700 p-1.5 rounded-2xl flex items-center shadow-inner gap-1">
                            <button 
                                onClick={() => setIsEnterprise(false)}
                                className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${!isEnterprise ? 'bg-slate-700 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Professional
                            </button>
                            <button 
                                onClick={() => setIsEnterprise(true)}
                                className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${isEnterprise ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                Enterprise
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Feature Comparison Table (7/12) */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-full bg-slate-900/60 rounded-[32px] border border-blue-500/20 backdrop-blur-2xl shadow-2xl overflow-hidden group">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-900/40">
                                <tr>
                                    <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Бүх боломжууд</th>
                                    <th className="px-8 py-6 text-center text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] border-l border-blue-500/10">Төлөв</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {features.map((f, i) => {
                                    const val = isEnterprise ? f.ent : f.pro;
                                    return (
                                        <tr key={i} className="hover:bg-blue-500/5 transition-colors group/row">
                                            <td className="px-8 py-3.5 flex items-center gap-3">
                                                <div className={`w-1 h-1 rounded-full transition-all duration-300 ${isEnterprise ? 'bg-blue-500 opacity-60 scale-125' : 'bg-slate-700 opacity-30'}`}></div>
                                                <span className="text-[22px] font-medium text-slate-300 group-hover/row:text-white transition-colors">{f.name}</span>
                                            </td>
                                            <td className="px-8 py-3.5 text-center border-l border-blue-500/10">
                                                {val === true ? (
                                                    <div className="flex items-center justify-center">
                                                        <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                                            <Check size={16} strokeWidth={3} />
                                                        </div>
                                                    </div>
                                                ) : val === false ? (
                                                    <X size={16} className="text-slate-700 mx-auto opacity-40 shrink-0" strokeWidth={3} />
                                                ) : (
                                                    <span className={`text-[9px] font-black px-3 py-1.5 rounded-lg border uppercase tracking-widest whitespace-nowrap
                                                        ${isEnterprise ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                                                        {val}
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide3_Pricing;
