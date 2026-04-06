import React from 'react';
import Layout from '../Layout';
import { CheckCircle, Award, Zap, RefreshCw, ShieldCheck, Infinity } from 'lucide-react';

const NX_Slide_Licensing: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <Layout className="bg-slate-950" title="Лицензийн Загварууд" subtitle="Gen 6 — Enterprise болон Professional хоёр урсгалаар санал болгогдоно.">
            <div className="h-full flex gap-8 items-center">
                {/* Card 1: Enterprise (Subscription) */}
                <div className="flex-1 h-[480px] bg-gradient-to-b from-blue-950 to-slate-950 border-2 border-blue-500 rounded-3xl p-8 flex flex-col gap-6 shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                    <div>
                        <div className="text-[17px] font-black text-blue-400 uppercase tracking-widest mb-2">Generation 6</div>
                        <h3 className="text-[50px] font-black text-white">Enterprise</h3>
                        <div className="text-blue-400 font-bold mt-1">Subscription Service</div>
                    </div>
                    <p className="text-slate-400 text-[17px] leading-relaxed">Том байгууллага, олон салбар системд зориулсан бүрэн функцтэй захиалгат үйлчилгээ.</p>
                    <ul className="space-y-3 flex-1">
                        {["Сар/жилийн захиалга", "Үргэлжлэх шинэчлэлт", "Хязгааргүй камер", "Дэвшилтэт AI функц", "Nx Cloud бүрэн дэмжлэг"].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300 text-[22px]">
                                <CheckCircle size={16} className="text-blue-400 flex-shrink-0" />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 py-2 bg-blue-600 rounded-xl text-center text-white font-black text-xl uppercase tracking-widest">Subscription</div>
                </div>

                {/* VS divider */}
                <div className="flex flex-col items-center gap-2 text-slate-700 font-black text-[25px]">
                    <div className="w-px h-20 bg-slate-800"></div>
                    <span>VS</span>
                    <div className="w-px h-20 bg-slate-800"></div>
                </div>

                {/* Card 2: Professional (Perpetual) */}
                <div className="flex-1 h-[480px] bg-slate-900 border border-slate-700 rounded-3xl p-8 flex flex-col gap-6">
                    <div>
                        <div className="text-[17px] font-black text-slate-500 uppercase tracking-widest mb-2">Generation 6</div>
                        <h3 className="text-[50px] font-black text-white">Professional</h3>
                        <div className="text-slate-400 font-bold mt-1">Perpetual Licensing</div>
                    </div>
                    <p className="text-slate-400 text-[17px] leading-relaxed">Жижиг, дунд байгууллагад тохирсон нэг удаагийн лицензийн загвар.</p>
                    <ul className="space-y-3 flex-1">
                        {["Нэг удаагийн лиценз", "Суурь функцүүд", "Хязгаарлагдмал камер", "Стандарт дэмжлэг", "Nx Cloud хязгаарлагдмал"].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-400 text-[22px]">
                                <CheckCircle size={16} className="text-slate-600 flex-shrink-0" />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-center text-slate-400 font-black text-xl uppercase tracking-widest">Perpetual</div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_Licensing;
