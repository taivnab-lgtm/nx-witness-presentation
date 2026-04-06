import React from 'react';
import Layout from '../Layout';
import { Smartphone, Database, Layers, TrendingUp, Globe, Rocket, Signal } from 'lucide-react';
import { SlideProps } from '../../types';

const ROADMAP_DATA = [
  {
    month: 1,
    title: "Мобайл Апп",
    subtitle: "UI/UX & MVP",
    icon: Smartphone,
    color: "bg-blue-500",
    text: "text-blue-600",
    tasks: ["UI/UX Дизайн", "MVP Апп", "Beta туршилт"]
  },
  {
    month: 2,
    title: "Дэд бүтэц",
    subtitle: "Сервер & DB",
    icon: Database,
    color: "bg-indigo-500",
    text: "text-indigo-600",
    tasks: ["Backend Opt.", "DB Sharding", "Security Audit"]
  },
  {
    month: 3,
    title: "Шинэ салбарууд",
    subtitle: "B2B Нэвтрэлт",
    icon: Layers,
    color: "bg-purple-500",
    text: "text-purple-600",
    devices: 500,
    tasks: ["B2B Борлуулалт", "Гэрээ байгуулах", "API интеграц"]
  },
  {
    month: 4,
    title: "Хөрөнгө Оруулалт",
    subtitle: "Series A",
    icon: TrendingUp,
    color: "bg-green-500",
    text: "text-green-600",
    devices: 1000,
    tasks: ["Due Diligence", "Уулзалтууд", "Гэрээ хаах"]
  },
  {
    month: 5,
    title: "Тэлэлт I",
    subtitle: "Улаанбаатар",
    icon: Globe,
    color: "bg-orange-500",
    text: "text-orange-600",
    devices: 1500,
    tasks: ["Масс маркетинг", "Борлуулалт ++", "Хэрэглэгч 2x"]
  },
  {
    month: 6,
    title: "Тэлэлт II",
    subtitle: "Орон нутгийн",
    icon: Rocket,
    color: "bg-red-500",
    text: "text-red-600",
    devices: 2000,
    tasks: ["Орон нутаг", "IoT Шинэчлэл", "Экосистем"]
  }
];

const Slide_Roadmap: React.FC<SlideProps> = () => {
  return (
    <Layout 
      title="Хөгжүүлэлтийн замын зураг" 
      subtitle="Ирэх 6 сарын үйл ажиллагааны нэгдсэн төлөвлөгөө."
    >
      <div className="h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl">
            {/* Main Connecting Line */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-100 -translate-y-1/2 rounded-full z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-slate-200 to-slate-100 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-6 gap-2 relative z-10">
                {ROADMAP_DATA.map((item, index) => {
                    // Alternating top and bottom
                    const isTop = index % 2 === 0;
                    
                    return (
                        <div key={index} className="relative h-[420px] group">
                            
                            {/* Central Node on the Line */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-[6px] border-slate-50 shadow-sm flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                                <div className={`w-4 h-4 rounded-full ${item.color} shadow-inner`}></div>
                            </div>

                            {/* Month Label near Node */}
                            <div className={`absolute left-1/2 -translate-x-1/2 font-bold text-slate-400 text-[10px] tracking-widest uppercase transition-colors duration-300 group-hover:text-slate-600
                                ${isTop ? 'top-[55%] pt-2' : 'bottom-[55%] pb-2'}
                            `}>
                                Сар {item.month}
                            </div>

                            {/* Vertical Connector Line */}
                            <div className={`absolute left-1/2 -translate-x-1/2 w-px bg-slate-200 z-0 group-hover:bg-blue-300 transition-colors duration-300
                                ${isTop ? 'bottom-[50%] h-16' : 'top-[50%] h-16'}
                            `}></div>

                            {/* Content Card */}
                            <div className={`absolute left-0 right-0 px-1 flex justify-center
                                ${isTop ? 'bottom-[calc(50%+4rem)]' : 'top-[calc(50%+4rem)]'}
                            `}>
                                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm w-full hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                                    {/* Top colored accent line */}
                                    <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`}></div>
                                    
                                    <div className="flex justify-between items-start mb-3">
                                        <div className={`w-10 h-10 rounded-xl ${item.color} bg-opacity-10 flex items-center justify-center ${item.text}`}>
                                            <item.icon size={20} strokeWidth={2} />
                                        </div>
                                        <span className="text-[50px] font-black text-slate-50 absolute -right-2 -top-2 select-none pointer-events-none">0{item.month}</span>
                                    </div>
                                    
                                    <h3 className="font-bold text-slate-800 text-xl mb-0.5 leading-tight">{item.title}</h3>
                                    <p className="text-[10px] text-slate-500 mb-3 font-semibold uppercase tracking-wide">{item.subtitle}</p>
                                    
                                    {item.devices && (
                                        <div className={`inline-flex items-center px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold ${item.text} mb-3 shadow-sm`}>
                                            <Signal size={10} className="mr-1.5" />
                                            +{item.devices.toLocaleString()} Төхөөрөмж
                                        </div>
                                    )}

                                    <div className="space-y-2 border-t border-slate-100 pt-3">
                                        {item.tasks.map((task, i) => (
                                            <div key={i} className="flex items-start text-[11px] text-slate-600 font-medium leading-tight">
                                                <div className={`w-1 h-1 rounded-full ${item.color} mt-1.5 mr-2 shrink-0`}></div>
                                                <span>{task}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Slide_Roadmap;