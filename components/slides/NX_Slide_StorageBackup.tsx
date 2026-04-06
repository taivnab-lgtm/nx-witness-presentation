import React from 'react';
import Layout from '../Layout';
import { HardDrive, RefreshCw, ShieldCheck } from 'lucide-react';

const NX_Slide_StorageBackup: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <HardDrive className="text-blue-400" size={22} />,
            title: "Redundant Storage",
            desc: "RAID болон гадаад хадгалах төхөөрөмж дээр автоматаар хоёрдуулж нөөцөлнө."
        },
        {
            icon: <RefreshCw className="text-blue-400" size={22} />,
            title: "Failover Recording",
            desc: "Үндсэн сервер унасан тохиолдолд нөөц сервер тэр даруй хаалтгүйгээр бичлэгийг үргэлжлүүлнэ."
        },
        {
            icon: <ShieldCheck className="text-blue-400" size={22} />,
            title: "Remote Backup",
            desc: "Алслагдсан байршилд бичлэгийг автоматаар нөөцлөж, гал түймэр эсвэл хулгайгаас хамгаална."
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Storage Backup" subtitle="Nx Witness нь өгөгдлийн аюулгүй байдлыг бүрэн хангана.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">DATA PROTECTION</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Өгөгдлөө хамгаалах /<br />
                            <span className="text-blue-500 italic">найдвартай нөөцлөх.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Давхар нөөцлөлт, автомат failover болон алслагдсан backup-аар өгөгдлийн аюулгүй байдлыг бүрэн хангана.
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

                {/* Right: visual diagram — Primary → Backup flow */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative w-full max-w-lg flex flex-col gap-6">

                        {/* Top row: Primary + Backup servers */}
                        <div className="flex items-center justify-between gap-4">
                            {/* Primary Server */}
                            <div className="flex-1 bg-slate-900 border border-blue-500/40 rounded-2xl p-5 flex flex-col items-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <HardDrive className="text-blue-400" size={28} />
                                </div>
                                <span className="text-[17px] font-black text-blue-400 uppercase tracking-widest">Primary Server</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-[17px] text-emerald-400 font-bold">ONLINE</span>
                                </div>
                                <div className="w-full bg-slate-800 rounded-lg p-2 space-y-1">
                                    {['CAM-01', 'CAM-02', 'CAM-03'].map((cam, i) => (
                                        <div key={i} className="flex items-center justify-between text-[10px] font-mono">
                                            <span className="text-slate-400">{cam}</span>
                                            <span className="text-emerald-400 font-bold">● REC</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-1">
                                    {[0,1,2].map(i => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-blue-500/60" style={{ animationDelay: `${i * 0.3}s` }}></div>
                                    ))}
                                </div>
                                <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
                                    <path d="M0 8 L36 8 M30 2 L48 8 L30 14" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-[9px] text-blue-400 font-black uppercase tracking-widest">SYNC</span>
                            </div>

                            {/* Backup Server */}
                            <div className="flex-1 bg-slate-900 border border-slate-700/50 rounded-2xl p-5 flex flex-col items-center gap-3">
                                <div className="p-3 bg-slate-700/30 rounded-xl">
                                    <RefreshCw className="text-slate-400" size={28} />
                                </div>
                                <span className="text-[17px] font-black text-slate-400 uppercase tracking-widest">Backup Server</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                                    <span className="text-[17px] text-amber-400 font-bold">STANDBY</span>
                                </div>
                                <div className="w-full bg-slate-800 rounded-lg p-2 space-y-1">
                                    {['CAM-01', 'CAM-02', 'CAM-03'].map((cam, i) => (
                                        <div key={i} className="flex items-center justify-between text-[10px] font-mono">
                                            <span className="text-slate-400">{cam}</span>
                                            <span className="text-amber-400 font-bold">◌ SYNC</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Failover indicator */}
                        <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/60 rounded-xl p-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <ShieldCheck className="text-emerald-400" size={18} />
                            </div>
                            <div className="flex-1">
                                <p className="text-[17px] font-black text-white uppercase tracking-wider">Failover: Автомат идэвхжих</p>
                                <p className="text-[11px] text-slate-500 mt-0.5">Үндсэн сервер унасан тохиолдолд 0 сек-д шилжинэ</p>
                            </div>
                            <div className="text-right">
                                <div className="text-[17px] font-black text-emerald-400">0s</div>
                                <div className="text-[10px] text-slate-500">Downtime</div>
                            </div>
                        </div>

                        {/* Remote backup row */}
                        <div className="flex items-center gap-3 bg-blue-500/5 border border-blue-500/20 rounded-xl p-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <HardDrive className="text-blue-400" size={18} />
                            </div>
                            <div className="flex-1">
                                <p className="text-[17px] font-black text-white uppercase tracking-wider">Remote Backup — Алслагдсан байршил</p>
                                <p className="text-[11px] text-slate-500 mt-0.5">Гал түймэр, хулгайгаас хамгаалсан гадаад нөөц</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                                <span className="text-[10px] text-blue-400 font-bold">ACTIVE</span>
                            </div>
                        </div>

                        {/* Storage usage bar */}
                        <div className="bg-slate-900/40 border border-slate-800/40 rounded-xl p-4 space-y-2">
                            <div className="flex justify-between text-[10px] font-mono text-slate-400">
                                <span>STORAGE USAGE</span>
                                <span className="text-blue-400">68% / 100%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-[68%] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-500">
                                <span>Primary: 6.8TB / 10TB</span>
                                <span>Backup: 6.8TB synced</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_StorageBackup;
