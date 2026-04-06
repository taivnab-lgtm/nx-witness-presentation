import React from 'react';
import Layout from '../Layout';
import { Globe, Monitor, PlayCircle, Settings } from 'lucide-react';

const NX_Slide_CloudClient: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Globe className="text-blue-400" size={22} />,
            title: "HTML5 Based",
            desc: "Ямар ч суулгалт шаардахгүй. Chrome, Firefox, Safari хөтчөөр шууд ашиглана."
        },
        {
            icon: <Monitor className="text-blue-400" size={22} />,
            title: "Full Features",
            desc: "Бичлэг үзэх, хайх, экспортлох, bookmark, системийн тохиргоо бүгд дэмжигдсэн."
        },
        {
            icon: <PlayCircle className="text-blue-400" size={22} />,
            title: "Health Monitor",
            desc: "Системийн эрүүл мэнд, статистик dashboard болон логуудыг бодит цагт хянана."
        },
        {
            icon: <Settings className="text-blue-400" size={22} />,
            title: "API/SDK Embedded",
            desc: "Бүх API болон SDK нь Cloud Client-д шингэсэн байна."
        },
    ];

    const cameras = [
        { id: 'CAM-01', label: 'Үүдний танхим', status: 'LIVE' },
        { id: 'CAM-02', label: 'Зогсоол А', status: 'LIVE' },
        { id: 'CAM-03', label: 'Хадгалалтын өрөө', status: 'LIVE' },
        { id: 'CAM-04', label: 'Серверийн өрөө', status: 'OFFLINE' },
    ];

    return (
        <Layout className="bg-slate-950" title="Cloud Client" subtitle="Ямар ч суулгалтгүйгээр хөтчөөс бүх функцийг ашиглана.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-6 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">WEB ACCESS</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Нэвтрэх хаанаас ч /<br />
                            <span className="text-blue-500 italic">хөтчөөр л хангалттай.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            HTML5 технологид суурилсан Cloud Client нь суулгалтгүйгээр бүрэн функцтэй ажиллана.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-5 p-3.5 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">{p.icon}</div>
                                <div>
                                    <h5 className="font-bold text-white text-xl mb-0.5">{p.title}</h5>
                                    <p className="text-xl text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Browser mockup with camera grid */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-full max-w-lg">
                        {/* Browser chrome */}
                        <div className="bg-slate-800 border border-slate-700/60 rounded-t-2xl px-4 py-3 flex items-center gap-3">
                            {/* Traffic lights */}
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                            </div>
                            {/* Tab */}
                            <div className="flex items-center gap-2 bg-slate-900 rounded-t-lg px-4 py-1.5 border border-slate-700/50 border-b-0">
                                <Globe className="text-blue-400" size={11} />
                                <span className="text-[10px] text-slate-300 font-medium">Nx Cloud Client</span>
                            </div>
                            {/* URL bar */}
                            <div className="flex-1 bg-slate-900 border border-slate-700/40 rounded-lg px-3 py-1 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                <span className="text-[10px] font-mono text-slate-400 truncate">cloud.nx.team/client/live</span>
                            </div>
                        </div>

                        {/* Browser body */}
                        <div className="bg-slate-900 border border-slate-700/60 border-t-0 rounded-b-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.12)]">
                            {/* App top bar */}
                            <div className="bg-slate-950 border-b border-slate-800/60 px-4 py-2 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Nx Cloud Client</span>
                                    <div className="flex gap-3 text-[9px] text-slate-500">
                                        <span className="text-white border-b border-blue-500 pb-0.5">Live</span>
                                        <span>Playback</span>
                                        <span>Exports</span>
                                        <span>System</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-[9px] text-emerald-400 font-bold">4 LIVE</span>
                                </div>
                            </div>

                            {/* Camera grid — 2x2 */}
                            <div className="grid grid-cols-2 gap-1 p-2">
                                {cameras.map((cam, i) => (
                                    <div key={i} className="relative bg-black rounded-lg overflow-hidden aspect-video group">
                                        {/* Simulated camera feed */}
                                        <div className={`absolute inset-0 ${
                                            cam.status === 'OFFLINE'
                                                ? 'bg-slate-900'
                                                : i === 0 ? 'bg-gradient-to-br from-slate-800 to-slate-900'
                                                : i === 1 ? 'bg-gradient-to-br from-slate-850 to-slate-950'
                                                : 'bg-gradient-to-tl from-slate-800 to-slate-850'
                                        }`}>
                                            {cam.status === 'OFFLINE' ? (
                                                <div className="flex flex-col items-center justify-center h-full gap-1">
                                                    <Monitor className="text-slate-700" size={20} />
                                                    <span className="text-[8px] text-slate-600 font-bold uppercase">Offline</span>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center h-full gap-2 opacity-20">
                                                    {[...Array(4)].map((_, r) => (
                                                        <div key={r} className="flex gap-2">
                                                            {[...Array(5)].map((_, c) => (
                                                                <div key={c} className={`w-${Math.random() > 0.5 ? 4 : 3} h-1 bg-slate-500 rounded`}></div>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Camera overlay labels */}
                                        <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                                            <span className="text-[8px] font-black text-white bg-black/60 px-1.5 py-0.5 rounded font-mono">{cam.id}</span>
                                        </div>
                                        <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
                                            <span className="text-[8px] text-slate-300 font-medium">{cam.label}</span>
                                            <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[7px] font-black ${
                                                cam.status === 'LIVE' ? 'bg-red-600/80 text-white' : 'bg-slate-700/80 text-slate-400'
                                            }`}>
                                                {cam.status === 'LIVE' && <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>}
                                                {cam.status}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom status bar */}
                            <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/60 flex items-center justify-between">
                                <div className="flex items-center gap-4 text-[9px] text-slate-500 font-mono">
                                    <span>CPU: 12%</span>
                                    <span>RAM: 1.2GB</span>
                                    <span>Bitrate: 48 Mbps</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Settings className="text-slate-600" size={11} />
                                    <span className="text-[9px] text-slate-600">v6.1.0.38474</span>
                                </div>
                            </div>
                        </div>

                        {/* Browser badges */}
                        <div className="flex items-center justify-center gap-3 mt-4">
                            {['Chrome', 'Firefox', 'Safari', 'Edge'].map(b => (
                                <div key={b} className="px-3 py-1 bg-slate-800/60 border border-slate-700/40 rounded-full text-[9px] text-slate-400 font-bold">{b}</div>
                            ))}
                            <span className="text-[9px] text-slate-600">— Суулгалт шаардахгүй</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_CloudClient;
