import React from 'react';
import Layout from '../Layout';
import { Smartphone, Eye, Wifi, Bell } from 'lucide-react';

const NX_Slide_MobileApp: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Eye className="text-blue-400" size={22} />,
            title: "Live & Playback",
            desc: "Бодит цагийн болон хуучин бичлэгийг хаанаасаа ч үзнэ."
        },
        {
            icon: <Wifi className="text-blue-400" size={22} />,
            title: "Smart Motion Search",
            desc: "Ухаалаг хөдөлгөөний хайлт, Fisheye буулгалт, 2 талт дуу дэмжинэ."
        },
        {
            icon: <Smartphone className="text-blue-400" size={22} />,
            title: "Soft Trigger & PTZ",
            desc: "Камерыг алсаас удирдах, гараар үйлдэл эхлүүлэх боломжтой."
        },
        {
            icon: <Bell className="text-blue-400" size={22} />,
            title: "Push Notification",
            desc: "Бүх үйл явдлын мэдэгдлийг шууд утасны дэлгэцэнд хүлээн авна."
        },
    ];

    const cameras = [
        { id: 'CAM-01', label: 'Үүдэн', status: 'LIVE' },
        { id: 'CAM-02', label: 'Зогсоол', status: 'LIVE' },
        { id: 'CAM-03', label: 'Хонгил', status: 'LIVE' },
        { id: 'CAM-04', label: 'Серверт', status: 'LIVE' },
    ];

    return (
        <Layout className="bg-slate-950" title="Nx Mobile App" subtitle="iOS болон Android дээр бүх функцийг гар утснаасаа удирдана.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-6 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">MOBILE EXPERIENCE</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Таны систем /<br />
                            <span className="text-blue-500 italic">гар утасны алганд.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            iOS болон Android аппаар бодит цагийн хяналт, PTZ удирдлага болон мэдэгдлийг хаанаасаа ч хийнэ.
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

                {/* Right: Phone portrait mockup */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="relative flex items-center gap-6">

                        {/* Phone mockup — portrait */}
                        <div className="relative flex-shrink-0">
                            {/* Phone shell */}
                            <div className="w-56 bg-slate-800 rounded-[2.8rem] border-[5px] border-slate-700 shadow-[0_0_60px_rgba(59,130,246,0.22)] overflow-hidden">
                                {/* Dynamic island / notch */}
                                <div className="flex justify-center pt-3 pb-1">
                                    <div className="w-24 h-5 bg-slate-900 rounded-full flex items-center justify-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                                        <div className="w-8 h-3 bg-slate-950 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Screen */}
                                <div className="bg-slate-950 mx-1 mb-1 rounded-[2.2rem] overflow-hidden" style={{ minHeight: 400 }}>
                                    {/* App status bar */}
                                    <div className="bg-slate-900 px-4 py-2 flex items-center justify-between">
                                        <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Nx Mobile</span>
                                        <div className="flex items-center gap-2">
                                            <Wifi className="text-slate-400" size={10} />
                                            <Bell className="text-slate-400" size={10} />
                                            <div className="w-4 h-2 border border-slate-500 rounded-sm flex items-center px-0.5">
                                                <div className="h-1 bg-emerald-400 rounded-sm w-[75%]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Toolbar */}
                                    <div className="flex gap-2 px-3 py-2 border-b border-slate-800">
                                        {['Live', 'Playback', 'PTZ'].map((t, i) => (
                                            <span key={t} className={`text-[9px] font-black uppercase px-2 py-1 rounded-lg ${i === 0 ? 'bg-blue-600 text-white' : 'text-slate-500'}`}>{t}</span>
                                        ))}
                                    </div>

                                    {/* Camera grid 2x2 */}
                                    <div className="grid grid-cols-2 gap-0.5 p-1.5">
                                        {cameras.map((cam, i) => (
                                            <div key={i} className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                                                {/* Simulated feed */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${
                                                    i === 0 ? 'from-slate-800 to-slate-900'
                                                    : i === 1 ? 'from-slate-850 to-slate-950'
                                                    : i === 2 ? 'from-slate-900 to-slate-800'
                                                    : 'from-slate-800 to-slate-850'
                                                }`}></div>
                                                <div className="absolute top-0.5 left-0.5 bg-black/50 rounded px-1 py-0.5">
                                                    <span className="text-[6px] font-mono text-white">{cam.id}</span>
                                                </div>
                                                <div className="absolute bottom-0.5 right-0.5 flex items-center gap-0.5 bg-red-600/70 rounded px-1 py-0.5">
                                                    <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>
                                                    <span className="text-[5px] font-black text-white">LIVE</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Push notification */}
                                    <div className="mx-2 mt-2 bg-slate-800/80 border border-slate-700/50 rounded-xl p-2.5 flex items-start gap-2">
                                        <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                            <Bell className="text-red-400" size={12} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[8px] font-black text-white">⚠ Хөдөлгөөн илрэв</p>
                                            <p className="text-[7px] text-slate-400 truncate">CAM-01 · Үүдний танхим · 09:47</p>
                                        </div>
                                    </div>

                                    {/* Bottom nav */}
                                    <div className="flex justify-around px-3 py-3 mt-2 border-t border-slate-800">
                                        {[
                                            { Icon: Eye, label: 'Live' },
                                            { Icon: Wifi, label: 'Search' },
                                            { Icon: Smartphone, label: 'PTZ' },
                                            { Icon: Bell, label: 'Alerts' },
                                        ].map(({ Icon, label }, i) => (
                                            <div key={i} className={`flex flex-col items-center gap-0.5 ${i === 0 ? 'text-blue-400' : 'text-slate-600'}`}>
                                                <Icon size={14} />
                                                <span className="text-[6px] font-bold uppercase">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side feature pills */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Платформ</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 bg-slate-900 border border-slate-700/50 rounded-xl px-4 py-3">
                                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-slate-300">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[17px] font-black text-white">iOS</p>
                                        <p className="text-[9px] text-slate-500">iPhone · iPad</p>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-slate-900 border border-slate-700/50 rounded-xl px-4 py-3">
                                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-slate-300">
                                            <path d="M17.523 15.341l-.015-.014-2.359-4.082c-.123-.212-.318-.355-.533-.414-.215-.059-.441-.037-.641.065l-1.019.588c-.287.166-.468.473-.476.808l-.016.762c-.006.287-.136.555-.355.737L10.56 14.6c-.22.182-.34.45-.335.738l.016.762c.008.335.19.643.476.808l1.019.588c.2.102.426.124.641.065.215-.059.41-.202.533-.414l2.359-4.082.015-.014c.124-.215.176-.461.152-.706s-.133-.471-.327-.648L17.523 15.341zM20.282 6.39l-1.89-3.27c-.207-.358-.583-.577-.99-.577H6.598c-.407 0-.783.219-.99.577l-1.89 3.27c-.207.358-.207.794 0 1.152l7.303 12.643c.207.358.583.577.99.577h.577c.407 0 .783-.219.99-.577l7.303-12.643c.207-.358.207-.794 0-1.152h-.599z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[17px] font-black text-white">Android</p>
                                        <p className="text-[9px] text-slate-500">Phone · Tablet</p>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Feature badges */}
                            <div className="space-y-2 mt-2">
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Онцлог</p>
                                {['Fisheye Dewarping', '2-Way Audio', 'PTZ Control', 'Smart Search', 'Push Alerts'].map(f => (
                                    <div key={f} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        <span className="text-[10px] text-slate-400 font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_MobileApp;
