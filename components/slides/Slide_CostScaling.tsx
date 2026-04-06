import React, { useMemo } from 'react';
import Layout from '../Layout';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendingDown, Users, CheckCircle, TrendingUp, DollarSign, Target } from 'lucide-react';
import { SlideProps } from '../../types';

const COST_STEPS = [
  { devices: 1000, totalCost: 1132 },
  { devices: 5000, totalCost: 1242 },
  { devices: 10000, totalCost: 1550 },
  { devices: 15000, totalCost: 1715 },
  { devices: 20000, totalCost: 1880 },
  { devices: 25000, totalCost: 3045 }, // Jump due to 2nd engineer
  { devices: 30000, totalCost: 3210 },
  { devices: 35000, totalCost: 3375 },
  { devices: 40000, totalCost: 3540 },
  { devices: 45000, totalCost: 3705 },
  { devices: 50000, totalCost: 3870 },
];

const Slide_CostScaling: React.FC<SlideProps> = ({ data }) => {

  const { chartData, breakEvenPoint, currentAvgPrice } = useMemo(() => {
    // Calculate Weighted Average Price from Global Data
    let totalPotentialUnits = 0;
    let totalPotentialRevenue = 0;

    if (data) {
        data.forEach(sector => {
            const units = sector.totalMarket * (sector.adoptionRate / 100);
            totalPotentialUnits += units;
            totalPotentialRevenue += units * sector.price;
        });
    }

    // Default to $1.50 if data is missing or zero, otherwise use calculated weighted average
    const avgPrice = totalPotentialUnits > 0 ? totalPotentialRevenue / totalPotentialUnits : 1.50;

    const computedData = COST_STEPS.map(step => {
        const revenue = step.devices * avgPrice;
        const profit = revenue - step.totalCost;
        const margin = (profit / revenue) * 100;

        return {
            devices: step.devices,
            totalCost: step.totalCost,
            revenue: revenue,
            profit: profit > 0 ? profit : 0, // Prevent negative bars if pricing is extremely low
            perDevice: step.totalCost / step.devices,
            margin: margin,
            avgPrice: avgPrice
        };
    });

    // Calculate Break Even Point
    // Linear regression on first two points to find Fixed vs Variable
    const p1 = COST_STEPS[0];
    const p2 = COST_STEPS[1];
    const variableCost = (p2.totalCost - p1.totalCost) / (p2.devices - p1.devices);
    const fixedCost = p1.totalCost - (p1.devices * variableCost);
    const bep = fixedCost / (avgPrice - variableCost);

    return { chartData: computedData, breakEvenPoint: bep, currentAvgPrice: avgPrice };
  }, [data]);

  const unitCost50k = chartData[chartData.length - 1].perDevice;
  const unitProfit50k = currentAvgPrice - unitCost50k;

  return (
    <Layout 
      title="Өргөжих боломж ба Ашигт ажиллагаа" 
      subtitle={`Дундаж үнэ $${currentAvgPrice.toFixed(2)} дээрх ашгийн төсөөлөл (Economy of Scale).`}
    >
      <div className="h-full flex gap-8">
        
        {/* LEFT: Main Chart */}
        <div className="w-2/3 flex flex-col">
            <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
                <div className="absolute top-6 left-6 z-10">
                     <h3 className="font-bold text-slate-700">Орлого vs Зардал</h3>
                     <p className="text-[17px] text-slate-500">
                        <span className="inline-block w-3 h-3 bg-emerald-400 rounded-sm mr-1 align-middle"></span>Цэвэр Ашиг
                        <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm ml-3 mr-1 align-middle"></span>Зардал
                     </p>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData} margin={{ top: 60, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid stroke="#f1f5f9" vertical={false} />
                        <XAxis 
                            dataKey="devices" 
                            type="number"
                            domain={[0, 'dataMax']}
                            tickFormatter={(value) => value === 0 ? '0' : `${value / 1000}k`}
                            tick={{ fontSize: 12, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                            label={{ value: 'Төхөөрөмжийн тоо', position: 'insideBottom', offset: -10, fill: '#94a3b8', fontSize: 12 }}
                        />
                        {/* Left Y Axis: Money */}
                        <YAxis 
                            yAxisId="left"
                            tickFormatter={(value) => `$${value / 1000}k`}
                            tick={{ fontSize: 12, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                            label={{ value: 'Сар бүрийн дүн ($)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }}
                        />
                        
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                            formatter={(value: number, name: string) => {
                                if (name === 'margin') return [`${value.toFixed(1)}%`, 'Ашгийн хувь'];
                                if (name === 'totalCost') return [`$${Math.round(value).toLocaleString()}`, 'Нийт зардал'];
                                if (name === 'profit') return [`$${Math.round(value).toLocaleString()}`, 'Цэвэр ашиг'];
                                return [`$${Math.round(value).toLocaleString()}`, name];
                            }}
                            labelFormatter={(label) => `${label.toLocaleString()} Төхөөрөмж`}
                        />
                        <Legend wrapperStyle={{ paddingTop: '20px' }} 
                            formatter={(value) => {
                                if (value === 'Total Cost') return 'Нийт зардал';
                                if (value === 'Net Profit') return 'Цэвэр ашиг';
                                return value;
                            }}
                        />
                        
                        {/* Stacked Bars for Revenue Breakdown */}
                        <Bar yAxisId="left" dataKey="totalCost" stackId="a" name="Total Cost" fill="#3b82f6" radius={[0, 0, 0, 0]} barSize={24} />
                        <Bar yAxisId="left" dataKey="profit" stackId="a" name="Net Profit" fill="#10b981" radius={[4, 4, 0, 0]} barSize={24} />
                        
                        {/* Break-even Reference Line */}
                        <ReferenceLine 
                            yAxisId="left" 
                            x={breakEvenPoint} 
                            stroke="#ef4444" 
                            strokeDasharray="3 3"
                            label={{ 
                                value: `Хугарлын цэг: ~${Math.round(breakEvenPoint)}`, 
                                position: 'center', 
                                fill: '#ef4444', 
                                fontSize: 12,
                                fontWeight: 'bold',
                                angle: -90,
                                dx: -10
                            }} 
                        />
                    </ComposedChart>
                </ResponsiveContainer>
                
                {/* Engineer Jump Annotation */}
                <div className="absolute top-[85%] left-[50%] -translate-y-full bg-slate-800 text-white text-[10px] px-2 py-1 rounded shadow-lg opacity-80 pointer-events-none">
                    Инженерийн баг нэмэгдэв
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
            </div>
        </div>

        {/* RIGHT: Data & Insights */}
        <div className="w-1/3 flex flex-col gap-4">
            
            {/* KPI Card: Margin */}
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp size={64} className="text-emerald-600" />
                </div>
                <h4 className="text-emerald-800 font-bold uppercase text-[17px] tracking-wider mb-2">Ашиг (50k Төхөөрөмж)</h4>
                <div className="flex items-baseline space-x-2">
                     <div className="text-[50px] font-black text-emerald-600 mb-2">
                        ${Math.round(chartData[chartData.length-1].profit).toLocaleString()}
                     </div>
                     <div className="text-xl font-bold text-emerald-500">/сар</div>
                </div>
                
                <div className="w-full bg-emerald-200/50 rounded-full h-2 mt-2">
                    <div 
                        className="bg-emerald-500 h-2 rounded-full" 
                        style={{ width: `${chartData[chartData.length-1].margin}%` }}
                    ></div>
                </div>
                <p className="text-emerald-700 text-[17px] font-bold mt-2 text-right">
                    {chartData[chartData.length-1].margin.toFixed(1)}% Ашиг
                </p>
            </div>

             {/* KPI Card: Profit per Device & Cost per Device (Swapped) */}
             <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                    <h4 className="text-slate-500 font-bold uppercase text-[10px] tracking-wider mb-1">Нэгж ашиг (50k)</h4>
                    <div className="text-[42px] font-black text-emerald-600">+${unitProfit50k.toFixed(2)}</div>
                    <div className="text-[11px] font-bold text-slate-500 mt-1 flex items-center bg-slate-100 px-2 py-1 rounded-lg w-fit">
                        <span>${unitCost50k.toFixed(3)} Нэгж зардал</span>
                    </div>
                </div>
                <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <DollarSign size={20} />
                </div>
            </div>

             {/* Dynamic Break Even Insight */}
             <div className="bg-white border border-red-100 p-4 rounded-2xl shadow-sm flex items-center space-x-3">
                <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center text-red-500 shrink-0">
                    <Target size={20} />
                </div>
                <div>
                     <h4 className="text-slate-500 font-bold uppercase text-[10px] tracking-wider mb-0.5">Хугарлын цэг</h4>
                     <div className="text-xl font-bold text-slate-800">
                        {Math.round(breakEvenPoint).toLocaleString()} төхөөрөмж
                     </div>
                     <div className="text-[10px] text-slate-400">
                        Тооцсон үнэ: ${currentAvgPrice.toFixed(2)}
                     </div>
                </div>
            </div>

            {/* Strategic Insights List */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex-1 flex flex-col justify-center shadow-lg">
                <h4 className="font-bold text-slate-300 text-[17px] uppercase tracking-widest mb-4">Санхүүгийн Дүгнэлт</h4>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <DollarSign className="text-emerald-400 mr-3 mt-0.5 shrink-0" size={18} />
                        <div>
                            <span className="font-bold text-xl block text-white">Масс Маржин</span>
                            <span className="text-[17px] text-slate-400 leading-snug">
                                Зардал шугаман бус (тогтмол шахуу) байхад орлого шугаман өсөлттэй тул ашиг эрс нэмэгдэнэ.
                            </span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Users className="text-blue-400 mr-3 mt-0.5 shrink-0" size={18} />
                        <div>
                            <span className="font-bold text-xl block text-white">Багийн өргөжилт</span>
                            <span className="text-[17px] text-slate-400 leading-snug">
                                25k хэрэглэгч хүртэл ганц инженертэй ажиллах боломж нь "Lean Startup" загварыг баталж байна.
                            </span>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="text-yellow-400 mr-3 mt-0.5 shrink-0" size={18} />
                        <div>
                            <span className="font-bold text-xl block text-white">Аюулгүй үнэ: ${currentAvgPrice.toFixed(2)}</span>
                            <span className="text-[17px] text-slate-400 leading-snug">
                                {Math.round(breakEvenPoint).toLocaleString()} хэрэглэгчээс дээш гарсан үед бүх зардал нөхөгдөнө.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

      </div>
    </Layout>
  );
};

export default Slide_CostScaling;