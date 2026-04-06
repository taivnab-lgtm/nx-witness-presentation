import React from 'react';
import Layout from '../Layout';
import { TrendingUp, Anchor, Navigation, DollarSign, Target, Skull } from 'lucide-react';
import { SlideProps } from '../../types';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell, ReferenceLine, Label, LabelList } from 'recharts';

const Slide_NewMarket: React.FC<SlideProps> = () => {
  
  // Data for the Strategy Canvas (Blue Ocean)
  const marketPositionData = [
    // Red Ocean Competitors (High Cost, High Complexity)
    { x: 85, y: 92, z: 200, name: 'Тотал технологи', color: '#94a3b8' },
    { x: 92, y: 85, z: 180, name: 'Таван Богд', color: '#94a3b8' },
    { x: 75, y: 95, z: 160, name: 'Бодь Электроникс', color: '#94a3b8' },
    { x: 88, y: 75, z: 190, name: 'ITZone', color: '#94a3b8' },
    { x: 68, y: 82, z: 150, name: 'DSS Pro', color: '#cbd5e1' },
    { x: 95, y: 95, z: 170, name: 'Ньютелеком', color: '#cbd5e1' },
    { x: 80, y: 88, z: 150, name: 'Ньюкомпас', color: '#cbd5e1' },
    { x: 96, y: 72, z: 190, name: 'Юнивишн', color: '#94a3b8' },
    { x: 70, y: 90, z: 140, name: 'PDTS', color: '#cbd5e1' },

    // Other Segments
    { x: 90, y: 30, z: 100, name: 'GPS Tracker', color: '#cbd5e1' },       // High Cost, Low Utility
    { x: 20, y: 85, z: 120, name: 'Мобайл Апп', color: '#cbd5e1' },        // Low Cost, High Complexity (Panic situations)
    
    // Blue Ocean
    { x: 10, y: 10, z: 500, name: 'SafeTouch', color: '#2563eb' },         // Low Cost, Low Complexity (Empty Space)
  ];

  return (
    <Layout 
      title="Өрсөлдөөнгүй Зах Зээл" 
      subtitle="Blue Ocean Strategy: Бид өрсөлддөггүй, бид шинэ орон зайг бүтээдэг."
    >
      <div className="h-full flex gap-12">
        
        {/* LEFT: The Empty Market Space */}
        <div className="w-3/5 flex flex-col">
            <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-6 relative overflow-hidden">
                <h3 className="absolute top-6 left-6 font-bold text-slate-700 z-10">Зах зээлийн байршил</h3>
                
                {/* Visuals for Red Ocean (Fighting & Wojak) 
                    Placed to the left of the Red Ocean cluster (x=68-95, y=75-95)
                    CSS Position: top-24 (approx y=85-90 area), right-[35%] (approx x=55-60 area)
                */}
                <div className="absolute top-24 right-[35%] z-0 pointer-events-none opacity-60 flex flex-col items-center gap-2 transform scale-75">
                    {/* Dust Cloud / Fighting Effect */}
                    <div className="relative w-28 h-20 flex items-center justify-center">
                        <div className="w-full h-full bg-red-100/50 rounded-full blur-xl absolute inset-0"></div>
                        <div className="absolute -top-2 -left-2 text-[28px]">💢</div>
                        <div className="absolute top-2 -right-4 text-[28px] animate-ping delay-150">👊</div>
                        <div className="absolute -bottom-2 left-4 text-[28px]">💥</div>
                    </div>
                    
                    {/* Red Faced Wojak Meme */}
                    <div className="relative group flex flex-col items-center -mt-4">
                        <img 
                            src="https://ih1.redbubble.net/image.1639563564.3875/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" 
                            alt="Red Faced Wojak" 
                            className="w-14 h-14 object-cover rounded-full border-2 border-white shadow-lg transform -rotate-6 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-0 mix-blend-multiply"
                        />
                         {/* Tooltip on the left to avoid cluster overlap */}
                         <div className="absolute -top-6 -left-16 bg-white border-2 border-slate-900 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-tighter -rotate-6 shadow-sm whitespace-nowrap z-20">
                            Үнэ буулга!!
                             <div className="absolute top-full right-4 w-2 h-2 bg-white border-b-2 border-r-2 border-slate-900 transform rotate-45 -mt-1"></div>
                        </div>
                    </div>
                    <span className="text-red-500 font-black uppercase tracking-widest text-[10px] bg-red-50 px-2 py-0.5 rounded shadow-sm">Өрсөлдөөн</span>
                </div>

                {/* Custom Chart Layer */}
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 60, right: 60, bottom: 40, left: 40 }}>
                        <XAxis 
                            type="number" 
                            dataKey="x" 
                            name="Cost" 
                            domain={[0, 100]} 
                            tick={false} 
                            axisLine={{ stroke: '#e2e8f0', strokeWidth: 2 }}
                            label={{ value: 'Үнэ / Зардал', position: 'bottom', offset: 0, fill: '#64748b', fontSize: 12, fontWeight: 'bold' }}
                        />
                        <YAxis 
                            type="number" 
                            dataKey="y" 
                            name="Complexity" 
                            domain={[0, 100]} 
                            tick={false} 
                            axisLine={{ stroke: '#e2e8f0', strokeWidth: 2 }}
                            label={{ value: 'Хэрэглээний төвөгтэй байдал', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12, fontWeight: 'bold' }}
                        />
                        <ZAxis type="number" dataKey="z" range={[100, 1000]} />
                        
                        {/* Quadrant Lines */}
                        <ReferenceLine x={50} stroke="#e2e8f0" strokeDasharray="3 3" />
                        <ReferenceLine y={50} stroke="#e2e8f0" strokeDasharray="3 3" />

                        {/* Red Ocean Label */}
                        <ReferenceLine segment={[{ x: 60, y: 55 }, { x: 95, y: 55 }]} stroke="none" label={{ value: "Улаан Далай (Өрсөлдөөн их)", fill: '#ef4444', fontSize: 14, fontWeight: 'bold', position: 'insideBottomRight' }} />
                        
                        {/* Blue Ocean Label */}
                        <ReferenceLine 
                            segment={[{ x: 15, y: 5 }, { x: 55, y: 5 }]} 
                            stroke="none" 
                            label={{ 
                                value: "Цэнхэр Далай (Хоосон орон зай)", 
                                fill: '#2563eb', 
                                fontSize: 14, 
                                fontWeight: 'bold', 
                                position: 'center' 
                            }} 
                        />

                        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                    <div className="bg-white p-2 border border-slate-200 shadow-lg rounded text-[17px] font-bold text-slate-700">
                                        {data.name}
                                    </div>
                                );
                            }
                            return null;
                        }} />

                        <Scatter data={marketPositionData}>
                            {marketPositionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.name === 'SafeTouch' ? '#2563eb' : '#ef4444'} fillOpacity={entry.name === 'SafeTouch' ? 1 : 0.4} />
                            ))}
                            <LabelList dataKey="name" position="top" style={{ fontSize: '10px', fontWeight: 'bold', fill: '#475569' }} />
                        </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>

                <div className="absolute bottom-6 right-6 max-w-xs text-right">
                    <p className="text-[17px] text-slate-500 bg-white/80 p-2 rounded backdrop-blur-sm">
                        Бид бусадтай өрсөлдөхгүй. Бид энгийн, хямд, хүртээмжтэй шинэ зах зээлийг бүтээж байна.
                    </p>
                </div>
            </div>
        </div>

        {/* RIGHT: The Profit Margin */}
        <div className="w-2/5 flex flex-col justify-center">
            
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white">
                {/* Background FX */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <h3 className="text-[28px] font-bold mb-8 flex items-center">
                    <DollarSign className="text-emerald-400 mr-2" />
                    Нэгжийн Эдийн Засаг
                </h3>

                <div className="flex flex-col h-[350px]">
                    
                    {/* PROFIT BLOCK */}
                    <div className="flex-1 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-t-xl relative group transition-all hover:flex-[5] flex flex-col justify-center items-center shadow-[0_0_30px_rgba(16,185,129,0.3)] z-10">
                        <span className="text-[67px] font-black text-white drop-shadow-md">85%</span>
                        <span className="text-emerald-100 text-xl font-bold uppercase tracking-widest mt-2">Цэвэр Ашиг</span>
                        
                        {/* Floating Profit particles */}
                        <div className="absolute inset-0 overflow-hidden opacity-30">
                             <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                             <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
                        </div>
                    </div>

                    {/* SEPARATOR */}
                    <div className="h-0.5 bg-slate-800 w-full relative">
                        {/* Removed Gross Margin Text */}
                    </div>

                    {/* COST BLOCK */}
                    <div className="h-[15%] bg-slate-700/50 rounded-b-xl border border-slate-600 border-t-0 flex flex-col justify-center items-center relative group">
                        <div className="flex items-center space-x-2">
                             <span className="text-[28px] font-bold text-slate-300">15%</span>
                             <span className="text-slate-400 text-[17px] uppercase font-bold">Зардал</span>
                        </div>
                        {/* Removed Cost Detail List */}
                    </div>

                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                    <p className="text-emerald-400 text-xl font-medium leading-relaxed">
                        Техник хангамжийн зардал маш бага. Үндсэн орлого нь <span className="text-white font-bold underline decoration-emerald-500/50">Service Subscription</span> буюу цэвэр ашиг юм.
                    </p>
                </div>

            </div>

        </div>

      </div>
    </Layout>
  );
};

export default Slide_NewMarket;