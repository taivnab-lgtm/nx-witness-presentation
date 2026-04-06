import React from 'react';
import Layout from '../Layout';
import { Mail, Bell, Zap } from 'lucide-react';

const NX_Slide_EmailNotification: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Mail className="text-blue-400" size={22} />,
            title: "Zero Configuration",
            desc: "SMTP тохиргоо хийх шаардлагагүй. Зөвхөн имэйл хаяг оруулахад л хангалттай."
        },
        {
            icon: <Bell className="text-blue-400" size={22} />,
            title: "Instant Alerts",
            desc: "Камерын алдаа, хөдөлгөөн илрэлт, системийн үйл явдал бүрт шууд мэдэгдэл хүлээн авна."
        },
        {
            icon: <Zap className="text-blue-400" size={22} />,
            title: "Nx Cloud Powered",
            desc: "Nx Cloud-аар дамжуулан аюулгүй, найдвартай мэдэгдэл дамжуулна. Нэмэлт зардалгүй."
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Nx Cloud Email Notification" subtitle="SMTP сервер тохируулах шаардлагагүйгээр имэйл мэдэгдэл явуулна.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">SMART ALERTS</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Энгийн, хурдан /<br />
                            <span className="text-blue-500 italic">имэйл мэдэгдэл.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Nx Cloud дэд бүтцийг ашиглан SMTP тохиргоо хийлгүйгээр шуурхай мэдэгдэл хүлээн авна.
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

                {/* Right: Email notification card mockup */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative w-full max-w-md flex flex-col gap-4">

                        {/* Email client window chrome */}
                        <div className="bg-slate-900 border border-slate-700/60 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.12)]">
                            {/* Window titlebar */}
                            <div className="bg-slate-800/80 px-4 py-2.5 flex items-center gap-3 border-b border-slate-700/50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                                </div>
                                <div className="flex-1 bg-slate-700/50 rounded-md px-3 py-1 text-[10px] font-mono text-slate-400 text-center">
                                    inbox — security@yourcompany.com
                                </div>
                            </div>

                            {/* Email list */}
                            <div className="divide-y divide-slate-800/50">
                                {/* Alert email 1 — unread */}
                                <div className="p-4 bg-blue-500/5 border-l-2 border-blue-500 flex gap-3">
                                    <div className="p-2 bg-red-500/20 rounded-lg flex-shrink-0">
                                        <Bell className="text-red-400" size={16} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[11px] font-black text-white uppercase tracking-wide">⚠ Motion Detected</span>
                                            <span className="text-[10px] text-slate-500 font-mono">09:47:23</span>
                                        </div>
                                        <p className="text-[11px] text-slate-400 truncate">Camera: Entrance 01 — Site: HQ Building</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[9px] font-black rounded-full uppercase">Motion Alert</span>
                                            <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-[9px] font-mono rounded-full">CAM-01</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Alert email 2 */}
                                <div className="p-4 flex gap-3">
                                    <div className="p-2 bg-amber-500/20 rounded-lg flex-shrink-0">
                                        <Zap className="text-amber-400" size={16} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Camera Offline</span>
                                            <span className="text-[10px] text-slate-500 font-mono">08:12:05</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 truncate">Camera: Parking B — Site: HQ Building</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[9px] font-black rounded-full uppercase">System Alert</span>
                                            <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-[9px] font-mono rounded-full">CAM-05</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Alert email 3 */}
                                <div className="p-4 flex gap-3">
                                    <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                                        <Mail className="text-blue-400" size={16} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Storage Warning</span>
                                            <span className="text-[10px] text-slate-500 font-mono">07:30:00</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 truncate">Disk usage 90% — Server: NX-NODE-01</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[9px] font-black rounded-full uppercase">Storage Alert</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nx Cloud badge */}
                        <div className="flex items-center justify-center gap-3 bg-slate-900/60 border border-blue-500/20 rounded-xl p-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Zap className="text-blue-400" size={16} />
                            </div>
                            <div className="text-center">
                                <p className="text-[17px] font-black text-white uppercase tracking-widest">Nx Cloud Powered</p>
                                <p className="text-[10px] text-slate-500 mt-0.5">SMTP тохиргоо шаардахгүй — Нэмэлт зардалгүй</p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                <span className="text-[10px] text-emerald-400 font-bold">LIVE</span>
                            </div>
                        </div>

                        {/* Configuration row */}
                        <div className="bg-slate-900/40 border border-slate-800/40 rounded-xl p-4">
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Тохиргоо — Notification Setup</p>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-slate-800 rounded-lg px-3 py-2 text-[17px] font-mono text-slate-400">
                                    admin@company.mn
                                </div>
                                <div className="px-4 py-2 bg-blue-600 rounded-lg text-[17px] font-black text-white uppercase tracking-wide">
                                    Save
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-600 mt-2">Зөвхөн имэйл хаяг оруулахад л хангалттай</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_EmailNotification;
