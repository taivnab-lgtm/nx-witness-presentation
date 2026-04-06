import React, { useState } from 'react';
import Layout from '../Layout';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { ShieldCheck, Truck, Factory, Activity, Zap, Wind, Box, Car, Shield } from 'lucide-react';
import { SlideProps } from '../../types';

// Distinct, Professional Multicolor Palette
const data = [
  { name: 'Panic Button', value: 5, color: '#4f46e5', icon: ShieldCheck, label: 'Panic Button', sub: 'Зах зээлд нэвтрэх цэг' }, // Indigo-600 (Primary - Darker for better glow base)
  { name: 'Зам тээвэр', value: 16, color: '#10b981', icon: Car, label: 'Зам тээвэр', sub: 'Хөдөлгөөний хяналт' },
  { name: 'Түгээлт', value: 15, color: '#8b5cf6', icon: Truck, label: 'Түгээлт', sub: 'UBCab, ABA, Papa' },
  { name: 'Аж үйлдвэр', value: 14, color: '#0ea5e9', icon: Factory, label: 'Аж үйлдвэр', sub: 'IoT автоматжуулалт' },
  { name: 'Эрүүл мэнд', value: 12, color: '#f43f5e', icon: Activity, label: 'Эрүүл мэнд', sub: 'Алсын зайн хяналт' },
  { name: 'Эрчим хүч', value: 10, color: '#f59e0b', icon: Zap, label: 'Эрчим хүч', sub: 'Ухаалаг тоолуур' },
  { name: 'Мэдрэгчүүд', value: 10, color: '#64748b', icon: Wind, label: 'Мэдрэгчүүд', sub: 'Утаа, хий мэдрэгч' },
  { name: 'Агуулах', value: 10, color: '#14b8a6', icon: Box, label: 'Агуулах', sub: 'Температур, хадгалалт' },
  { name: 'Хамгаалалт', value: 8, color: '#1e293b', icon: Shield, label: 'Хамгаалалт', sub: 'Объектын харуул' },
];

// Custom renderer for the active slice (center visuals)
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const Icon = payload.icon;
  const isPanic = payload.name === 'Panic Button';

  return (
    <g>
      {/* Glow Filter Def */}
      <defs>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
           <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
           <feColorMatrix in="blur" type="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -7" result="glow" />
           <feMerge>
             <feMergeNode in="glow" />
             <feMergeNode in="SourceGraphic" />
           </feMerge>
        </filter>
      </defs>

      {/* Main Active Slice */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + (isPanic ? 10 : 6)}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        className={isPanic ? "pulse-animation" : ""}
        style={{
            filter: isPanic ? 'drop-shadow(0 0 15px rgba(79, 70, 229, 0.8)) brightness(1.2)' : 'none',
        }}
      />
      
      {/* Extra Outer Glow Ring for Panic Button */}
      {isPanic && (
         <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 12}
            outerRadius={outerRadius + 18}
            fill={fill}
            fillOpacity={0.4}
            className="pulse-ring"
         />
      )}

      {/* Center Background */}
      <circle cx={cx} cy={cy} r={innerRadius - 10} fill="white" stroke={fill} strokeWidth={isPanic ? 3 : 1} />
      
      {/* Center Content */}
      <foreignObject x={cx - 30} y={cy - 50} width={60} height={60}>
          <div className="flex justify-center items-center h-full text-slate-600">
             <div style={{ backgroundColor: `${fill}20` }} className={`p-3 rounded-full ${isPanic ? 'animate-bounce' : ''}`}>
                <Icon size={28} color={fill} />
             </div>
          </div>
      </foreignObject>
      
      <text x={cx} y={cy + 25} textAnchor="middle" fill="#334155" className="text-xl font-bold uppercase tracking-wide">
          {payload.label}
      </text>
      
      {/* Enhanced Market Size Info in Center */}
      <text x={cx} y={cy + 50} textAnchor="middle" fill={isPanic ? fill : "#64748b"} className={`text-[28px] ${isPanic ? 'font-extrabold' : 'font-bold'}`}>
          {payload.value}%
      </text>
      <text x={cx} y={cy + 65} textAnchor="middle" fill="#94a3b8" className="text-[9px] font-semibold uppercase tracking-wider">
          Market Share
      </text>
    </g>
  );
};

const Slide4_Market: React.FC<SlideProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  
  const onPieLeave = () => {
    setActiveIndex(0); // Reset to Panic Button
  };

  // Custom renderer for external labels
  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 45; // Push labels further out
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = x > cx ? 'start' : 'end';
    
    // Calculate line points
    const midRadius = outerRadius + 20;
    const mx = cx + midRadius * Math.cos(-midAngle * RADIAN);
    const my = cy + midRadius * Math.sin(-midAngle * RADIAN);
    
    // Check if this label belongs to the active segment
    const isActive = index === activeIndex;

    return (
      <g 
        className="transition-opacity duration-300"
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(0)}
        style={{ cursor: 'pointer' }}
      >
          {/* Connector Line with Dot */}
          <path 
            d={`M${cx + outerRadius * Math.cos(-midAngle * RADIAN)},${cy + outerRadius * Math.sin(-midAngle * RADIAN)}Q${mx},${my} ${x},${y}`} 
            stroke={payload.color} 
            strokeWidth={isActive ? 2 : 1} 
            fill="none" 
            style={{ pointerEvents: 'none' }}
          />
          <circle cx={x} cy={y} r={isActive ? 3 : 2} fill={payload.color} style={{ pointerEvents: 'none' }} />
          
           {/* Hit Area Rect for better usability */}
           <rect 
            x={x + (x > cx ? 0 : -80)}
            y={y - 10}
            width={80}
            height={20}
            fill="transparent"
          />

          {/* Label Text - Normalized */}
          <text 
            x={x + (x > cx ? 12 : -12)} 
            y={y} 
            fill={isActive ? "#334155" : "#64748b"} 
            textAnchor={textAnchor} 
            dominantBaseline="central" 
            className={`text-[17px] ${isActive ? 'font-bold' : 'font-bold'}`} 
            style={{ pointerEvents: 'none' }}
          >
              {payload.label} {`(${payload.value}%)`}
          </text>
      </g>
    );
  };

  return (
    <Layout 
      title="IoT Зах зээлийн экосистем" 
      subtitle="Жижиг эхлэл, том алсын хараа: Panic Button-оос эхэлж бүтэн экосистем рүү."
    >
      <style>{`
        @keyframes subtle-pulse {
          0% { filter: drop-shadow(0 0 8px rgba(79, 70, 229, 0.4)) brightness(1); transform: scale(1); }
          50% { filter: drop-shadow(0 0 20px rgba(79, 70, 229, 0.8)) brightness(1.2); transform: scale(1.02); }
          100% { filter: drop-shadow(0 0 8px rgba(79, 70, 229, 0.4)) brightness(1); transform: scale(1); }
        }
        .pulse-animation {
           animation: subtle-pulse 3s infinite ease-in-out;
           transform-origin: center;
        }
        @keyframes ring-expand {
           0% { opacity: 0.4; stroke-width: 0; }
           50% { opacity: 0.8; stroke-width: 2px; }
           100% { opacity: 0.4; stroke-width: 0; }
        }
        .pulse-ring {
           animation: ring-expand 3s infinite ease-in-out;
        }
      `}</style>
      
      <div className="flex h-full items-center gap-4">
        
        {/* Interactive Chart */}
        <div className="w-7/12 h-[550px] relative">
            <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 20, right: 80, left: 80, bottom: 20 }}>
                <Pie
                // @ts-ignore
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={130}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                paddingAngle={2}
                cornerRadius={4}
                label={renderCustomizedLabel}
                labelLine={false} 
                >
                {data.map((entry, index) => (
                    <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        stroke="white"
                        strokeWidth={index === activeIndex ? 0 : 2}
                        style={{ 
                          cursor: 'pointer', 
                          outline: 'none', 
                          opacity: index === activeIndex ? 1 : 0.25, // Significantly dimmed non-active items
                          filter: index === activeIndex ? 'drop-shadow(0 0 10px rgba(79, 70, 229, 0.6))' : 'grayscale(0.5)', // Grayscale others slightly
                          transformOrigin: 'center',
                          transition: 'all 0.5s ease'
                        }}
                    />
                ))}
                </Pie>
            </PieChart>
            </ResponsiveContainer>
        </div>

        {/* Strategy Panel */}
        <div className="w-5/12 pr-12 flex flex-col justify-center h-full">
            
            {/* Main Strategy Card */}
            <div className="bg-white rounded-2xl p-8 border border-indigo-100 shadow-[0_10px_40px_-10px_rgba(79,70,229,0.15)] mb-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
                
                {/* Background Decor */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                        <span className="text-[17px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">Бидний стратеги</span>
                        <h3 className="text-[42px] font-black text-slate-900 mt-3 tracking-tight">Trojan Horse</h3>
                    </div>
                    <div className="bg-indigo-600 p-3 rounded-xl shadow-lg shadow-indigo-200">
                        <ShieldCheck size={32} className="text-white" />
                    </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-xl mb-6 relative z-10">
                    Бид <span className="font-bold text-indigo-700 bg-indigo-50 px-1">Panic Button</span> зах зээлийг эзэлснээр хэрэглэгчийн сүлжээг үүсгэж, улмаар бусад өндөр үнийн дүнтэй IoT сегментүүд рүү нэвтрэх гүүр болгоно.
                </p>

                <div className="flex items-center space-x-3 text-xl bg-slate-900 p-4 rounded-xl text-white relative z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 absolute left-4"></div>
                    <span className="font-bold tracking-wide">Одоогоор: Panic Button (5%)</span>
                </div>
            </div>

            {/* Active Item Details */}
            <div className={`transition-all duration-500 transform opacity-100`}>
                <p className="text-[17px] font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1">Сонгогдсон сегмент</p>
                <div className={`flex items-center p-5 rounded-xl border transition-colors duration-300 ${activeIndex === 0 ? 'bg-indigo-50 border-indigo-200 shadow-sm' : 'bg-slate-50 border-slate-200'}`}>
                    <div 
                        className="p-3 rounded-lg mr-4 shadow-sm transition-all duration-300" 
                        style={{ 
                            backgroundColor: activeIndex === 0 ? '#4f46e5' : data[activeIndex].color, 
                            color: 'white',
                            transform: 'scale(1)'
                        }}
                    >
                         {React.createElement(data[activeIndex].icon, { size: 24 })}
                    </div>
                    <div>
                        <div className={`font-bold text-[25px] ${activeIndex === 0 ? 'text-indigo-900' : 'text-slate-800'}`}>{data[activeIndex].label}</div>
                        <div className="text-xl text-slate-500">{data[activeIndex].sub}</div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </Layout>
  );
};

export default Slide4_Market;