import React from 'react';
import Layout from '../Layout';
import { Maximize2, Monitor, Box, Layers, Video } from 'lucide-react';

const NX_Slide7c_ZoomWindow: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Monitor className="text-blue-500" size={22} />,
            title: "Нэг камераас олон харагдац",
            desc: "Камер нэмж суурилуулахгүйгээр нэг эх дүрсээс хэд хэдэн ажиглалтын тусгайлсан цэгүүдийг (Operational view) үүсгэнэ."
        },
        {
            icon: <Maximize2 className="text-blue-500" size={22} />,
            title: "Дижитал Томруулалт (Digital Zoom)",
            desc: "Нэг өргөн өнцгийн камераас орох хаалга, касс, машины эгнээ зэргийг тус тусад нь томруулж, бие даасан цонх болгон гаргана."
        },
        {
            icon: <Layers className="text-blue-500" size={22} />,
            title: "Layout-д хадгалах боломж",
            desc: "Үүсгэсэн Zoom цонхнуудыг зохиомж (Layout) дээр байршуулан хадгалж, ямар ч үед дахин дуудаж ашиглах боломжтой."
        },
        {
            icon: <Box className="text-blue-500" size={22} />,
            title: "Evidence & Tracking",
            desc: "Зөвхөн шууд хяналт биш, архив болон нотлох баримт (Screenshot/Video clip) бэлтгэхэд хамгийн үр дүнтэй функц."
        }
    ];

    const VIDEO_ID = 'r8Z1R80x0Oc';
    const IFRAME_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&vq=hd1080`;

    return (
        <Layout
            className="bg-slate-950"
            title="Zoom Window"
            subtitle="Нэг камераас хязгааргүй харагдац: Камерын тоог нэмэхгүйгээр хяналтыг 4 дахин нэмэгдүүлнэ."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Features (5/12) */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-blue-500/50 underline-offset-8 decoration-2">ONE CAMERA, MULTIPLE VIEWS</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Хяналтыг <br />
                            <span className="text-blue-500 italic">хязгааргүй томруул.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                           Zoom Window нь нэг камераас хэрэгтэй хэсгүүдийг тус тусад нь томруулсан цонх болгон ашиглах боломжийг олгож, операторын үр ашгийг дээшлүүлдэг.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all group backdrop-blur-sm">
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

                {/* Right Side: Visual Demo (7/12) - NOW SHOWING LARGE VIDEO */}
                <div className="w-7/12 relative h-full flex items-center justify-center">
                    <div className="relative w-full aspect-video rounded-3xl bg-slate-950 border border-white/5 shadow-2xl overflow-hidden group">
                        
                        {/* THE SINGLE LARGE VIDEO PLAYER */}
                        <div className="relative w-full h-full">
                            {isActive ? (
                                <iframe 
                                    className="absolute inset-0 w-full h-full scale-[1.02]"
                                    src={IFRAME_SRC} 
                                    title="Zoom Window Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="absolute inset-0 bg-slate-950 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-blue-500/20 animate-spin border-t-blue-500"></div>
                                </div>
                            )}

                            {/* HUD Overlays - Very Minimal */}
                            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-slate-950/60 backdrop-blur-md rounded-lg border border-white/10">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                <span className="text-[12px] font-black text-white uppercase tracking-widest">Digital Zoom Enabled</span>
                            </div>

                            <div className="absolute bottom-6 right-6 flex items-center gap-3">
                                <div className="p-3 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                    <Video size={20} className="text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Subtle Scanner Line Effect */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-[scan_4s_linear_infinite] pointer-events-none"></div>

                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(500%); }
                }
            `}</style>
        </Layout>
    );
};

export default NX_Slide7c_ZoomWindow;
