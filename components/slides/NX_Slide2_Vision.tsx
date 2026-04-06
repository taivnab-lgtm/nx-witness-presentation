import React from 'react';
import Layout from '../Layout';
import { Target, TrendingUp, Zap, Globe, Shield } from 'lucide-react';

const NX_Slide2_Vision: React.FC<{ isActive: boolean }> = () => {
    const points = [
        { icon: <Target className="text-blue-400" />, title: "Focused Strategy", desc: "Enterprise түвшний хэрэгцээг хангах уян хатан шийдэл." },
        { icon: <TrendingUp className="text-blue-400" />, title: "Scalable Growth", desc: "Хязгааргүй өргөсөх боломжтой систем болон дэд бүтэц." },
        { icon: <Zap className="text-blue-400" />, title: "Instant Value", desc: "Шинэ функцуудыг цаг алдалгүй хүлээн авах захиалгат загвар." },
        { icon: <Globe className="text-blue-400" />, title: "Cloud First", desc: "Хаанаас ч хандах, удирдах боломжтой үүлэн технологи." }
    ];

    return (
        <Layout 
            className="bg-slate-900"
            title="Алсын Хараа: Enterprise 2026" 
            subtitle="Технологийн шинэ эрин үе: Таны гарт хязгааргүй боломжыг өгнө"
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Text & Cards */}
                <div className="w-5/12 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-[50px] font-black text-white leading-tight">
                            Байгууллагын аюулгүй байдлыг <br/>
                            <span className="text-blue-500">дараагийн түвшинд</span> гаргана.
                        </h3>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            NX Witness Enterprise нь зөвхөн видео менежмент биш, харин таны бизнесийн үнэ цэнийг хамгаалах нэгдсэн экосистем юм. 
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {points.map((p, i) => (
                            <div key={i} className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group flex flex-col justify-center">
                                <div className="mb-3 transform group-hover:scale-110 transition-transform">{p.icon}</div>
                                <h4 className="text-[22px] font-bold text-white mb-1">{p.title}</h4>
                                <p className="text-[17px] text-slate-500 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Video Card (Symmetrical with the map in Slide 2) */}
                <div className="w-7/12 relative h-full flex items-center justify-center">
                    <div className="relative w-full aspect-video rounded-3xl border-2 border-slate-800 bg-slate-950 shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <iframe 
                                className="w-full aspect-video scale-[1.02]"
                                src="https://www.youtube.com/embed/IF9XKyT76rA?autoplay=1&mute=1&loop=1&playlist=IF9XKyT76rA&controls=0&modestbranding=1&rel=0&iv_load_policy=3&vq=hd1080" 
                                title="NX Witness Vision"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        
                        {/* Overlay for premium look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 border-[8px] border-slate-900/10 pointer-events-none rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide2_Vision;
