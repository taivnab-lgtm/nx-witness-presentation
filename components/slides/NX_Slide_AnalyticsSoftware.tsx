import React from 'react';
import Layout from '../Layout';
import { Shield, Car, Flame, Layers } from 'lucide-react';

const NX_Slide_AnalyticsSoftware: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Shield className="text-blue-400" size={22} />,
            title: 'Facial Recognition',
            desc: 'Нүүрний таних, зочны удирдлага, зөвшөөрлийн жагсаалттай харьцуулалт.',
        },
        {
            icon: <Car className="text-blue-400" size={22} />,
            title: 'ANPR / Vehicle MMC',
            desc: 'Дугаарын тэмдэгт таних, машины үйлдвэрлэгч/загвар/өнгийг таних.',
        },
        {
            icon: <Flame className="text-blue-400" size={22} />,
            title: 'Safety Detection',
            desc: 'Гал, утаа, аюулгүйн хантааз, дуулга болон бусад аюулгүй байдлын илрүүлэлт.',
        },
        {
            icon: <Layers className="text-blue-400" size={22} />,
            title: 'Object Classification',
            desc: 'Олон төрлийн объект ангилах. Захиалгат AI хөгжүүлэлт боломжтой.',
        },
    ];

    const analyticsCards = [
        {
            label: 'Facial Recognition',
            sublabel: 'Нүүр таних',
            icon: <Shield size={28} className="text-blue-300" />,
            bg: 'bg-blue-600/15',
            border: 'border-blue-500/30',
            accent: 'bg-blue-500',
            tag: 'bg-blue-500/20 text-blue-300',
            tagText: 'Face ID',
        },
        {
            label: 'ANPR / Vehicle',
            sublabel: 'Дугаар таних',
            icon: <Car size={28} className="text-orange-300" />,
            bg: 'bg-orange-600/15',
            border: 'border-orange-500/30',
            accent: 'bg-orange-500',
            tag: 'bg-orange-500/20 text-orange-300',
            tagText: 'LPR / MMC',
        },
        {
            label: 'Safety Detection',
            sublabel: 'Аюулгүй байдал',
            icon: <Flame size={28} className="text-red-300" />,
            bg: 'bg-red-600/15',
            border: 'border-red-500/30',
            accent: 'bg-red-500',
            tag: 'bg-red-500/20 text-red-300',
            tagText: 'Fire / PPE',
        },
        {
            label: 'Object Classification',
            sublabel: 'Объект ангилал',
            icon: <Layers size={28} className="text-green-300" />,
            bg: 'bg-green-600/15',
            border: 'border-green-500/30',
            accent: 'bg-green-500',
            tag: 'bg-green-500/20 text-green-300',
            tagText: 'Custom AI',
        },
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Analytics Software Partners"
            subtitle="Ухаалаг үйлдвэр, хот, тээвэр болон хүний аюулгүй байдалд зориулсан AI шийдлүүд."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left column */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">AI ANALYTICS</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            AI-н хүчийг <br /><span className="text-blue-500 italic">Nx дээр ажиллуул.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Дэлхийн тэргүүлэх AI аналитикийн партнеруудтай нэгдсэн Nx платформ дээр хамгийн дэвшилтэт шийдлүүдийг ашиглана.
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

                {/* Right column — 2x2 grid of analytics cards */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full px-4" style={{ maxWidth: 440 }}>
                        {analyticsCards.map((card, i) => (
                            <div
                                key={i}
                                className={`relative flex flex-col gap-3 p-5 rounded-2xl border ${card.bg} ${card.border} overflow-hidden`}
                            >
                                {/* Accent bar top */}
                                <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent}`}></div>
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="p-2 bg-slate-900/50 rounded-xl">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-xl leading-tight">{card.label}</div>
                                        <div className="text-slate-500 text-[17px] mt-0.5">{card.sublabel}</div>
                                    </div>
                                </div>
                                <div className={`self-start px-2.5 py-1 rounded-full text-[17px] font-bold ${card.tag}`}>
                                    {card.tagText}
                                </div>
                                {/* Decorative dots */}
                                <div className="absolute bottom-3 right-3 flex gap-1 opacity-30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_AnalyticsSoftware;
