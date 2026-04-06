import React from 'react';
import Layout from '../Layout';
import { DoorOpen, Bell, Smartphone, FileText } from 'lucide-react';

const NX_Slide_AccessControl: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <FileText className="text-blue-400" size={22} />,
            title: 'Bookmark for Audit',
            desc: 'Зөвшөөрөлгүй нэвтрэлт бүрийг автоматаар bookmark хийж ирээдүйн аудитад бэлдэнэ.',
        },
        {
            icon: <Bell className="text-blue-400" size={22} />,
            title: 'Alarm Popup',
            desc: 'Хууль бус нэвтрэлт илрэх үед дэлгэц дээр шууд сэрэмжлүүлэг гарна.',
        },
        {
            icon: <Smartphone className="text-blue-400" size={22} />,
            title: 'Push Notification',
            desc: 'Гар утасны апп руу шууд мэдэгдэл илгээнэ.',
        },
        {
            icon: <DoorOpen className="text-blue-400" size={22} />,
            title: 'Partner References',
            desc: 'Chiyu Technology, Suprema, Gallagher зэрэг тэргүүлэх брэндүүдтэй нэгтгэгдсэн.',
        },
    ];

    const events = [
        { time: '14:32:07', label: 'Хаалга A1 — Зөвшөөрөгдсөн', status: 'authorized', id: 'EMP-4421' },
        { time: '14:35:19', label: 'Хаалга B2 — ТАТГАЛЗАВ', status: 'denied', id: 'UNK-0099' },
        { time: '14:37:44', label: 'Хаалга A1 — Зөвшөөрөгдсөн', status: 'authorized', id: 'EMP-2203' },
        { time: '14:40:02', label: 'Хаалга C1 — ТАТГАЛЗАВ', status: 'denied', id: 'UNK-0103' },
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Access Control System"
            subtitle="Нэвтрэх хяналтын системтэй нэгтгэснээр аюулгүй байдлыг бүрэн хангана."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left column */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">PHYSICAL SECURITY</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Нэвтрэх хяналт <br /><span className="text-blue-500 italic">нэг платформд.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Нэвтрэх хяналтын систем болон видео хяналтыг нэгтгэж, бүрэн аюулгүй байдлын шийдлийг нэг дэлгэцнээс удирдана.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-6 p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group"
                            >
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors shrink-0">
                                    {p.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — door/reader mockup + event log */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-full px-4 space-y-4" style={{ maxWidth: 440 }}>
                        {/* Door reader mockup */}
                        <div className="bg-slate-900 rounded-2xl border border-slate-700/60 p-5 flex items-center gap-5">
                            {/* Door illustration */}
                            <div className="relative shrink-0" style={{ width: 80, height: 110 }}>
                                {/* Door frame */}
                                <div className="absolute inset-0 rounded-t-xl bg-slate-800 border-2 border-slate-600">
                                    {/* Door panel */}
                                    <div className="absolute inset-2 rounded-t-lg bg-slate-750 border border-slate-700 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-slate-500 border border-slate-400 mt-4"></div>
                                    </div>
                                </div>
                                {/* Status indicator — green authorized */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-2 border-slate-900 flex items-center justify-center shadow-lg shadow-green-500/40">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>
                            </div>

                            {/* Card reader */}
                            <div className="shrink-0 w-14 h-20 rounded-xl bg-slate-800 border border-slate-600 flex flex-col items-center justify-center gap-2">
                                <div className="w-8 h-5 rounded bg-blue-600/40 border border-blue-500/40 flex items-center justify-center">
                                    <div className="w-5 h-3 rounded-sm bg-yellow-400/60"></div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-400/60"></div>
                            </div>

                            {/* Status display */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-green-400 font-bold text-xl">ЗӨВШӨӨРӨГДСӨН</span>
                                </div>
                                <div className="text-white font-black text-[25px] leading-tight">Хаалга A1</div>
                                <div className="text-slate-500 text-[17px] mt-1">Ажилтан: EMP-4421 · 14:32:07</div>
                                <div className="mt-2 flex gap-1.5">
                                    <div className="px-2 py-0.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold">Bookmark</div>
                                    <div className="px-2 py-0.5 rounded-full bg-slate-700/50 border border-slate-600/40 text-slate-400 text-[10px] font-bold">Бичлэг</div>
                                </div>
                            </div>
                        </div>

                        {/* Event log */}
                        <div className="bg-slate-900 rounded-2xl border border-slate-700/60 overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/60 border-b border-slate-700/50">
                                <span className="text-slate-300 text-[17px] font-black uppercase tracking-widest">Үйл явдлын бүртгэл</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-slate-500 text-[10px] font-medium">Шууд</span>
                                </div>
                            </div>
                            <div className="divide-y divide-slate-800/60">
                                {events.map((event, i) => (
                                    <div key={i} className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800/30 transition-colors">
                                        <div
                                            className={`w-2 h-2 rounded-full shrink-0 ${event.status === 'authorized' ? 'bg-green-400' : 'bg-red-500'}`}
                                        ></div>
                                        <span className="text-slate-500 text-[10px] font-mono shrink-0 w-16">{event.time}</span>
                                        <span className={`flex-1 text-[17px] font-semibold ${event.status === 'authorized' ? 'text-slate-300' : 'text-red-400'}`}>
                                            {event.label}
                                        </span>
                                        <span className="text-slate-600 text-[10px] font-mono shrink-0">{event.id}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Brand partners */}
                        <div className="flex items-center gap-3">
                            <span className="text-slate-600 text-[10px] uppercase tracking-widest font-bold shrink-0">Партнерууд:</span>
                            {['Suprema', 'Gallagher', 'Chiyu'].map((brand, i) => (
                                <div key={i} className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-400 text-[17px] font-bold">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_AccessControl;
