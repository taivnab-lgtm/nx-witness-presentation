import React from 'react';
import Layout from '../Layout';
import { Camera, MousePointer2, Scan, Compass, ShieldAlert, Crosshair, ArrowRight, Video, Target, Info, RefreshCw } from 'lucide-react';

// Import User Provided Screenshots
import Hotspot2 from '../../assets/slide/Slide 7/Hotspot2.png';
import Hotspot3 from '../../assets/slide/Slide 7/Hotspot3.png';
import Hotspot4 from '../../assets/slide/Slide 7/Hotspot4.png';
import Hotspot5 from '../../assets/slide/Slide 7/Hotspot5.png';

const NX_Slide7e_Hotspots: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const [step, setStep] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    const steps = [
        {
            title: "Лифтний коридор",
            desc: "Лифтнээс буусан объектыг анхлан илрүүлж байна. Одоо объектыг дараагийн камер руу шилжүүлж мөрдөнө үү.",
            img: Hotspot2,
            hotspotPos: { top: '65%', left: '82%' },
            label: "Өрөө 2 руу шилжих",
            onImageTip: "Лифтний лобби хэсэг"
        },
        {
            title: "Өрөө 2",
            desc: "Объект Өрөө 2-т орж ирснийг баталгаажууллаа. Мөрдөлтийг үргэлжлүүлэн нэгдсэн заалны камер руу шилжинэ.",
            img: Hotspot4,
            hotspotPos: { top: '43%', left: '47%' },
            label: "Нэгдсэн заал руу шилжих",
            onImageTip: "Өрөө 2: Хяналтын бүс"
        },
        {
            title: "Нэгдсэн заал (Fisheye)",
            desc: "360 градусын хяналт. Объект оффисын төв хэсэгт орсныг баталгаажуулж, мөрдөлтийг амжилттай дуусгалаа.",
            img: Hotspot5,
            hotspotPos: null,
            label: "Мөрдөлт амжилттай",
            onImageTip: "Оффис: Нэгдсэн заал"
        }
    ];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setIsTransitioning(true);
            setTimeout(() => {
                setStep(s => s + 1);
                setIsTransitioning(false);
            }, 600);
        }
    };

    const handleReset = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setStep(0);
            setIsTransitioning(false);
        }, 600);
    };

    return (
        <Layout
            className="bg-slate-950"
            title="Spatial Camera Hotspots"
            subtitle="Объектыг орон зайд мөрдөх: Камераас камер руу алдалгүй шилжинэ."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Features (5/12) */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-blue-500/50 underline-offset-8 decoration-2">REALISTIC TRACING</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Объектыг <br />
                            <span className="text-blue-500 italic">алдалгүй мөрдөх.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                           Камер бүр бие биетэйгээ логик холбоос бүхий "Hotspot"-оор холбогдсон тул объектыг нэг цонхноос нөгөө рүү шилжүүлэн мөрдөхөд маш хялбар.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl backdrop-blur-md">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 bg-blue-600 rounded-lg text-white">
                                    <Target size={20} />
                                </div>
                                <h5 className="font-bold text-white text-[22px] uppercase tracking-widest">{steps[step].title}</h5>
                            </div>
                            <p className="text-[17px] text-slate-400 leading-relaxed font-medium">
                                {steps[step].desc}
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                             <div className="flex items-center gap-3 text-emerald-500">
                                <Scan size={18} />
                                <span className="text-[17px] font-black uppercase tracking-widest">Хөдөлгөөн Илрүүлэлт: Идэвхтэй</span>
                             </div>
                             <div className="flex items-center gap-3 text-blue-400">
                                <Compass size={18} />
                                <span className="text-[17px] font-black uppercase tracking-widest">Орон зайн баримжаа: Хэвийн</span>
                             </div>
                        </div>
                    </div>

                    {step === steps.length - 1 && (
                         <button 
                            onClick={handleReset}
                            className="mt-4 flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-700 hover:border-blue-500 rounded-2xl text-white font-black uppercase tracking-widest text-[17px] transition-all active:scale-95"
                         >
                            <RefreshCw size={18} className="text-blue-500" />
                            Мөрдөлтийг дахин эхлүүлэх
                         </button>
                    )}
                </div>

                {/* Right Side: Interactive Screenshots (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center p-4">
                    <div className="relative w-full aspect-video rounded-3xl border-2 border-slate-800 shadow-2xl overflow-hidden group">
                        
                        {/* THE SCREENSHOT */}
                        <div className={`relative w-full h-full transition-all duration-700 ${isTransitioning ? 'opacity-30 blur-sm scale-[1.05]' : 'opacity-100 blur-none scale-100'}`}>
                            <img 
                                src={steps[step].img} 
                                alt={steps[step].title}
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-blue-950/10 pointer-events-none"></div>
                        </div>

                        {/* INTERACTIVE HOTSPOT OVERLAY */}
                        {!isTransitioning && steps[step].hotspotPos && (
                            <div 
                                className="absolute z-20 cursor-pointer group/hotspot transition-transform hover:scale-110 active:scale-90"
                                style={{ top: steps[step].hotspotPos.top, left: steps[step].hotspotPos.left }}
                                onClick={handleNext}
                            >
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-blue-500/30 rounded-full animate-ping"></div>
                                    <div className="relative p-3 bg-blue-600 rounded-full border-2 border-white shadow-[0_0_20px_#3b82f6]">
                                        <MousePointer2 size={24} className="text-white fill-white" />
                                    </div>
                                    
                                    {/* Action Label */}
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-blue-600 px-3 py-1.5 rounded-lg text-white font-black text-[10px] uppercase whitespace-nowrap shadow-xl border border-white/20 animate-in fade-in zoom-in-75 duration-300">
                                        {steps[step].label}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* HUD Overlays */}
                        <div className="absolute top-6 inset-x-6 flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <div className="px-4 py-2 bg-blue-600 rounded-xl shadow-xl border border-white/20 flex items-center gap-3 animate-in slide-in-from-top-4 duration-500">
                                    <Video size={18} className="text-white" />
                                    <span className="text-xl font-black text-white uppercase tracking-wider">{steps[step].onImageTip}</span>
                                </div>
                                <div className="px-3 py-1.5 bg-slate-950/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 w-fit">
                                    <Target size={16} className="text-blue-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Мөрдөх төлөв: Идэвхтэй</span>
                                </div>
                            </div>

                            <div className="px-3 py-1 bg-blue-600/90 backdrop-blur-md rounded-md text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                                СУВАГ {step + 1} / 3
                            </div>
                        </div>

                        {/* Final Screen Decoration */}
                        {step === steps.length - 1 && !isTransitioning && (
                             <div className="absolute inset-0 bg-emerald-500/10 border-4 border-emerald-500 animate-in fade-in duration-1000 pointer-events-none flex flex-col items-center justify-center">
                                <div className="px-8 py-4 bg-emerald-600 rounded-2xl shadow-2xl text-center">
                                    <div className="text-white font-black text-[28px] mb-1 uppercase tracking-tighter italic">МӨРДӨЛТ АМЖИЛТТАЙ</div>
                                    <div className="text-emerald-100 text-[10px] font-bold uppercase tracking-widest">Spatial Object Sequence Captured</div>
                                </div>
                             </div>
                        )}
                    </div>

                    {/* Blueprint grid underlay */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide7e_Hotspots;
