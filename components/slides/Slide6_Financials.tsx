import React, { useMemo, useState } from 'react';
import Layout from '../Layout';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { SlideProps } from '../../types';
import { Signal, TrendingDown, CheckSquare, Square, ChevronDown, ChevronUp } from 'lucide-react';

const Slide6_Financials: React.FC<SlideProps> = ({ data }) => {
  // State for cost checkboxes
  const [costs, setCosts] = useState({
    marketing: true,
    salary: true,
    server: true
  });
  
  // State for collapsible section
  const [isExpanded, setIsExpanded] = useState(false);

  const financialData = useMemo(() => {
    if (!data) return [];
    
    // Sort by calculated revenue for visualization
    const calculated = data.map(item => {
        const units = Math.round(item.totalMarket * (item.adoptionRate / 100));
        const revenue = Math.round(units * item.price);
        // Short name translation mapping for chart
        let shortName = item.name;
        if (item.id === 'schools') shortName = 'Сургууль';
        else if (item.id === 'taxi') shortName = 'Такси';
        else if (item.id === 'banks') shortName = 'Сүлжээ дэлгүүр';
        else if (item.id === 'grocery') shortName = 'Хүнсний дэлгүүр';
        else if (item.id === 'hotels') shortName = 'Зочид буудал';
        else if (item.id === 'pharm') shortName = 'Эмийн сан';

        return {
            name: item.name,
            shortName: shortName,
            value: revenue,
            units: units,
            adoptionRate: item.adoptionRate,
            label: `$${(revenue / 1000).toFixed(1)}k`,
            color: item.color
        };
    }).sort((a, b) => a.value - b.value); // Ascending for stacked look, but here we are vertical

    return calculated;
  }, [data]);

  const totalMonthlyRevenue = financialData.reduce((acc, curr) => acc + curr.value, 0);
  const totalDevices = financialData.reduce((acc, curr) => acc + curr.units, 0);

  // Calculate dynamic costs for Phase 2
  const marketingCost = costs.marketing ? totalMonthlyRevenue * 0.10 : 0; // 10%
  const salaryCost = costs.salary ? 2000 : 0; // $2000 for 2 people
  const serverCost = costs.server ? 1100 : 0; // $1100
  
  const totalMonthlyCost = marketingCost + salaryCost + serverCost;
  const netProfit = totalMonthlyRevenue - totalMonthlyCost;
  const costPercentage = totalMonthlyRevenue > 0 ? (totalMonthlyCost / totalMonthlyRevenue) * 100 : 0;
  const annualNetIncome = netProfit * 12;

  const toggleCost = (key: keyof typeof costs) => {
    setCosts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-100">
          <p className="font-bold text-slate-800 mb-2">{data.name}</p>
          <div className="space-y-1 text-xl">
            <p className="text-slate-600">
              Орлого: <span className="font-semibold text-emerald-600">${data.value.toLocaleString()}</span>
            </p>
            <p className="text-slate-600">
              Төхөөрөмж: <span className="font-semibold text-slate-800">{data.units.toLocaleString()}</span>
            </p>
            <p className="text-slate-600">
              Нэвтрэлт: <span className="font-semibold text-slate-800">{data.adoptionRate}%</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Layout 
      title="2-р үе шатны орлогын төлөв" 
      subtitle="Тогтвортой, давтамжит орлогын төсөөлөл."
    >
      <div className="flex h-full items-center gap-8">
        
        {/* Chart Section */}
        <div className="w-2/3 h-[500px]">
             <div className="flex justify-between items-end mb-4 pr-4">
                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wider">Сарын орлогын задаргаа</h3>
                <span className="text-[17px] font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                   (Зах зээлд эзлэх хувь)
                </span>
             </div>
             <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={financialData}
                  layout="vertical"
                  margin={{ top: 5, right: 80, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="shortName" 
                    type="category" 
                    width={100} 
                    tick={{fill: '#64748b', fontWeight: 500}} 
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32} isAnimationActive={true}>
                    {financialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <LabelList dataKey="label" position="right" style={{ fill: '#334155', fontWeight: 'bold', fontSize: '12px' }} />
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
        </div>

        {/* Summary Section - Updated to match Phase 0 design */}
        <div className="w-1/3 flex flex-col space-y-6">
           <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex-1 flex flex-col justify-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xl mb-6">Санхүүгийн Төлөв (Phase 2)</p>
                
                {/* Revenue & Devices Header */}
                <div className="mb-6 pb-6 border-b border-slate-800 flex justify-between items-end">
                    <div>
                         <div className="flex items-baseline">
                            <span className="text-[50px] font-extrabold tracking-tight text-white">${totalMonthlyRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                            <span className="text-xl text-slate-500 font-medium ml-2">/ сар</span>
                         </div>
                         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Нийт орлого (MRR)</p>
                    </div>
                    
                    {/* Connected Devices */}
                    <div className="flex flex-col items-end opacity-70">
                         <span className="text-[25px] font-bold text-slate-400 leading-none">{totalDevices.toLocaleString()}</span>
                         <div className="flex items-center space-x-1 mt-1">
                             <Signal size={10} className="text-slate-500" />
                             <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Devices</span>
                         </div>
                    </div>
                </div>

                <div className="space-y-4">
                     {/* Collapsible Dynamic Cost Controls */}
                     <div className="flex flex-col border-t border-slate-800/50 border-b border-slate-800/50 transition-all duration-300">
                         
                         {/* Toggle Header */}
                         <div 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex justify-between items-center py-4 cursor-pointer group select-none"
                         >
                             <div className="flex items-center text-xl text-slate-400 group-hover:text-slate-200 transition-colors">
                                <TrendingDown size={16} className="mr-2" />
                                <span className="uppercase tracking-wide text-[17px] font-bold">Сарын зардал (Cost)</span>
                             </div>
                             <div className="flex items-center space-x-2">
                                 {/* Show mini summary when collapsed */}
                                 {!isExpanded && (
                                     <span className="text-[17px] font-mono text-red-400">-${totalMonthlyCost.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                                 )}
                                 {isExpanded ? 
                                    <ChevronUp size={16} className="text-slate-500 group-hover:text-slate-300" /> : 
                                    <ChevronDown size={16} className="text-slate-500 group-hover:text-slate-300" />
                                 }
                             </div>
                         </div>
                         
                         {/* Content */}
                         {isExpanded && (
                             <div className="pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div 
                                    onClick={() => toggleCost('marketing')}
                                    className={`flex justify-between items-center p-2 rounded cursor-pointer transition-all border ${costs.marketing ? 'bg-slate-800 border-slate-600' : 'bg-slate-800/50 border-transparent hover:bg-slate-800'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        {costs.marketing ? <CheckSquare size={16} className="text-blue-400" /> : <Square size={16} className="text-slate-500" />}
                                        <span className={`text-xl ${costs.marketing ? 'text-white' : 'text-slate-400'}`}>Маркетинг (10%)</span>
                                    </div>
                                    <span className="font-mono text-red-400 text-xl">-${marketingCost.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                                </div>

                                <div 
                                    onClick={() => toggleCost('salary')}
                                    className={`flex justify-between items-center p-2 rounded cursor-pointer transition-all border ${costs.salary ? 'bg-slate-800 border-slate-600' : 'bg-slate-800/50 border-transparent hover:bg-slate-800'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        {costs.salary ? <CheckSquare size={16} className="text-blue-400" /> : <Square size={16} className="text-slate-500" />}
                                        <span className={`text-xl ${costs.salary ? 'text-white' : 'text-slate-400'}`}>Цалин (2 хүн)</span>
                                    </div>
                                    <span className="font-mono text-red-400 text-xl">-${salaryCost.toLocaleString()}</span>
                                </div>

                                <div 
                                    onClick={() => toggleCost('server')}
                                    className={`flex justify-between items-center p-2 rounded cursor-pointer transition-all border ${costs.server ? 'bg-slate-800 border-slate-600' : 'bg-slate-800/50 border-transparent hover:bg-slate-800'}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        {costs.server ? <CheckSquare size={16} className="text-blue-400" /> : <Square size={16} className="text-slate-500" />}
                                        <span className={`text-xl ${costs.server ? 'text-white' : 'text-slate-400'}`}>Сервер (Cloud)</span>
                                    </div>
                                    <span className="font-mono text-red-400 text-xl">-${serverCost.toLocaleString()}</span>
                                </div>

                                <div className="flex justify-between items-center text-[10px] uppercase tracking-wide pt-2 border-t border-slate-800/50">
                                    <span className="text-slate-500">Нийт зардал</span>
                                    <span className="text-red-400 font-bold bg-red-400/10 px-1.5 py-0.5 rounded">{costPercentage.toFixed(1)}% Орлогын</span>
                                </div>
                            </div>
                         )}
                    </div>

                     <div className="flex justify-between items-end bg-white/5 p-3 rounded-lg border border-white/10 mt-2">
                         <span className="text-emerald-400 font-bold text-xl uppercase tracking-wide">Цэвэр ашиг</span>
                         <span className="font-bold text-[34px] text-emerald-400 leading-none">${netProfit.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                        <span className="text-slate-500 text-[17px] uppercase tracking-wide">Жилийн цэвэр ашиг</span>
                        <span className="font-bold text-emerald-400">${annualNetIncome.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                    </div>
                </div>
           </div>
        </div>

      </div>
    </Layout>
  );
};

export default Slide6_Financials;