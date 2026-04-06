import React from 'react';
import Layout from '../Layout';
import {
    Bell,
    DoorOpen,
    Lightbulb,
    PlayCircle,
    Cpu,
    Activity,
    Smartphone,
    Terminal,
    ActivitySquare,
    Zap,
    Info,
    RefreshCw
} from 'lucide-react';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

const NX_Slide11_SoftTrigger: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const [seconds, setSeconds] = React.useState(0);
    const playerRef = React.useRef<any>(null);
    const containerId = "youtube-player-soft-trigger";

    const VIDEO_ID = '_8gO_FPGy6A';

    // Load YouTube API and Initialize Player
    React.useEffect(() => {
        if (!isActive) return;

        let interval: any;

        const loadVideo = () => {
            playerRef.current = new window.YT.Player(containerId, {
                videoId: VIDEO_ID,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    loop: 1,
                    playlist: VIDEO_ID,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    iv_load_policy: 3,
                    vq: 'hd1080'
                },
                events: {
                    onReady: (event: any) => {
                        event.target.playVideo();
                        // Poll current time every 200ms for perfect sync
                        interval = setInterval(() => {
                            if (playerRef.current && playerRef.current.getCurrentTime) {
                                const time = playerRef.current.getCurrentTime();
                                setSeconds(time);
                            }
                        }, 200);
                    }
                }
            });
        };

        if (window.YT && window.YT.Player) {
            loadVideo();
        } else {
            // Load script if not present
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = loadVideo;
        }

        return () => {
            if (interval) clearInterval(interval);
            if (playerRef.current) {
                playerRef.current.destroy();
                playerRef.current = null;
            }
        };
    }, [isActive]);

    // Narrative overlays based on EXACT video time
    const overlays = [
        { start: 3, end: 6, text: "Дэлгэцүүд дээр виртуал товчлуур үүсгэнэ" },
        { start: 7, end: 11, text: "Гэрэл удирдана" },
        { start: 12, end: 16, text: "Хаалга нээх/хаах" },
        { start: 21, end: 25, text: "Лифт удирдана" }
    ];

    const currentOverlay = overlays.find(o => seconds >= o.start && seconds <= o.end);

    const points = [
        {
            icon: <Smartphone className="text-blue-500" size={22} />,
            title: "Desktop болон Nx Mobile",
            desc: "Удирдах самбар болон гар утаснаас хаанаас ч үйлдэл эхлүүлнэ."
        },
        {
            icon: <Cpu className="text-blue-500" size={22} />,
            title: "Системүүдийн гүүр",
            desc: "Зогсоолийн систем, галын систем,нэвтрэх хяналт, автоматжуулалтын системтэй холбогдоно."
        },
        {
            icon: <Activity className="text-blue-500" size={22} />,
            title: "Хариу үйлдлийг төвлөрүүлнэ",
            desc: "Оператор нэг интерфэйс дээрээс бүх системээ удирдах боломжтой."
        }
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Soft Trigger"
            subtitle="Nx Witness дотроос үйлдлийг гараар шууд эхлүүлнэ."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content (5/12) */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-blue-500/50 underline-offset-8 decoration-2">OPERATIONAL CONTROL</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Зөвхөн хянах бус, <br />
                            <span className="text-blue-500 italic">удирдага.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Soft Trigger нь операторын хариу үйлдлийг ганцхан товшилтоор эхлүүлж, 3rd-party системүүдтэй шууд холбогдох боломжийг олгодог.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                                    {p.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                        <div className="flex gap-4">
                            <div className="px-3 py-1 bg-slate-900 rounded text-[10px] font-black text-blue-400 border border-blue-500/20 uppercase tracking-widest">HTTP Request</div>
                            <div className="px-3 py-1 bg-slate-900 rounded text-[10px] font-black text-blue-400 border border-blue-500/20 uppercase tracking-widest">GENERIC API</div>
                            <div className="px-3 py-1 bg-slate-900 rounded text-[10px] font-black text-blue-400 border border-blue-500/20 uppercase tracking-widest">REST API</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Timed Video Visual (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center p-4">
                    <div className="relative w-full aspect-video rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl overflow-hidden group">

                        {/* THE VIDEO SOURCE */}
                        <div className="absolute inset-0">
                            <div id={containerId} className="w-full h-full scale-[1.02]"></div>
                            <div className="absolute inset-0 bg-slate-950/10 pointer-events-none"></div>
                        </div>

                        {/* TIMED OVERLAY BADGES - Positioned on the Right */}
                        <div className="absolute top-0 right-0 h-full w-full pointer-events-none p-10 flex flex-col justify-center items-end">
                            {currentOverlay && (
                                <div className="max-w-[280px] bg-blue-600/95 backdrop-blur-md rounded-2xl border border-white/30 p-6 shadow-[0_0_50px_rgba(59,130,246,0.4)] animate-in slide-in-from-right-12 fade-in duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-white animate-pulse"></div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            <Zap size={18} className="text-white animate-pulse" />
                                        </div>
                                        <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">System Rule Action</span>
                                    </div>
                                    <p className="text-[28px] font-black text-white leading-tight">
                                        {currentOverlay.text}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 font-mono text-[9px] text-white/50">
                                            <RefreshCw size={10} className="animate-spin-slow" />
                                            Active Loop Sync
                                        </div>
                                        <span className="text-[9px] font-bold text-white/50">{seconds.toFixed(1)}s / 33s</span>
                                    </div>
                                </div>
                            )}

                            {/* PERSISTENT STATUS INDICATOR */}
                            <div className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-slate-950/80 backdrop-blur-md rounded-lg border border-white/10 uppercase italic">
                                <ActivitySquare size={14} className="text-blue-500" />
                                <span className="text-[10px] font-black text-slate-400">Live API Polling: {seconds.toFixed(1)}s</span>
                            </div>
                        </div>

                        {/* Visual Frame Decor */}
                        <div className="absolute inset-0 border-2 border-white/5 rounded-3xl pointer-events-none"></div>
                        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-blue-600/90 rounded-md text-[10px] font-black text-white uppercase tracking-widest">
                            <Info size={14} /> Soft Trigger Operation Showcase
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 4s linear infinite;
                }
            `}</style>
        </Layout>
    );
};

export default NX_Slide11_SoftTrigger;
