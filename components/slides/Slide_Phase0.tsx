import React, { useMemo, useState } from 'react';
import Layout from '../Layout';
import { Car, GraduationCap, Building2, ShoppingCart, Hotel, Pill, ArrowRight, Shield, TrendingDown, CheckSquare, Square, ChevronDown, ChevronUp, Signal } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide_Phase0: React.FC<SlideProps> = ({ data }) => {
  // State for cost checkboxes
  const [costs, setCosts] = useState({
    marketing: true,
    salary: true,
    server: true
  });
  
  // State for collapsible section
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper for icons
  const getIcon = (id: string) => {
    switch(id) {
      case 'taxi': return <Car className="text-yellow-500" />;
      case 'schools': return <GraduationCap className="text-blue-500" />;
      case 'banks': return <Building2 className="text-slate-500" />;
      case 'grocery': return <ShoppingCart className="text-green-500" />;
      case 'hotels': return <Hotel className="text-purple-500" />;
      case 'pharm': return <Pill className="text-red-500" />;
      case 'security': return <Shield className="text-slate-800" />;
      default: return <Building2 />;
    }
  };

  const displayData = data || [];
  
  // Fixed 1% Scenario Calculation
  const SCENARIO_RATE = 1; // 1%

  const phaseData = useMemo(() => {
    return displayData.map(item => {
        // Use fixed 1% rate for this scenario
        const rate = SCENARIO_RATE / 100;
        const units = Math.round(item.totalMarket * rate);
        const revenue = units * item.price;
        return {
            ...item,
            scenarioRate: SCENARIO_RATE,
            units: units,
            revenue: revenue
        };
    });
  }, [displayData]);

  const totalRevenue = phaseData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalUnits = phaseData.reduce((acc, curr) => acc + curr.units, 0);

  // Calculate dynamic costs
  const marketingCost = costs.marketing ? totalRevenue * 0.10 : 0; // Updated to 10%
  const salaryCost = costs.salary ? 1000 : 0; // Updated to $1000
  const serverCost = costs.server ? 360 : 0; // Updated to $360
  
  const totalMonthlyCost = marketingCost + salaryCost + serverCost;
  const netProfit = totalRevenue - totalMonthlyCost;
  const costPercentage = totalRevenue > 0 ? (totalMonthlyCost / totalRevenue) * 100 : 0;
  const annualNetIncome = netProfit * 12;

  const toggleCost = (key: keyof typeof costs) => {
    setCosts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout
      title="2-р үе шат: Баталгаажуулалт"
      subtitle="Зах зээлийн дөнгөж 1%-д хүрэхэд бий болох үнэ цэнэ."
    >
       <div className="flex h-full gap-8">
           {/* Table Section */}
           <div className="w-2/3 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
               <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                   <h3 className="font-bold text-slate-700">Салбарын шинжилгээ (1% Scenario)</h3>
                   <div className="text-[17px] font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 shadow-sm">
                       Хувилбар: 1% Market Share
                   </div>
               </div>
               <div className="overflow-auto flex-1">
                   <table className="w-full">
                       <thead className="bg-slate-50 text-[17px] text-slate-500 uppercase font-semibold sticky top-0">
                           <tr>
                               <th className="px-6 py-3 text-left">Салбар</th>
                               <th className="px-6 py-3 text-right">Зах зээл</th>
                               <th className="px-6 py-3 text-right">Нэвтрэлт</th>
                               <th className="px-6 py-3 text-right">Тооц. MRR</th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100 text-xl">
                           {phaseData.map(item => (
                               <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                                   <td className="px-6 py-3">
                                       <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                                {getIcon(item.id)}
                                            </div>
                                            <div>
                                                <span className="font-medium text-slate-700 block">{item.name}</span>
                                                <span className="text-[10px] text-slate-400 font-mono">${item.price}/сар</span>
                                            </div>
                                       </div>
                                   </td>
                                   <td className="px-6 py-3 text-right text-slate-500 font-mono">
                                       {item.totalMarket.toLocaleString()}
                                   </td>
                                   <td className="px-6 py-3 text-right font-mono">
                                       <div className="flex flex-col items-end">
                                           <span className="font-bold text-blue-600">{item.units.toLocaleString()}</span>
                                           <span className="text-[10px] text-slate-400">({item.scenarioRate}%)</span>
                                       </div>
                                   </td>
                                    <td className="px-6 py-3 text-right font-mono text-slate-700">
                                       ${item.revenue.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                                   </td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
           </div>

           {/* Summary Section */}
           <div className="w-1/3 flex flex-col space-y-6">
               <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex-1 flex flex-col justify-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xl mb-6">Санхүүгийн Төлөв (1% Share)</p>
                    
                    {/* Revenue & Devices Header */}
                    <div className="mb-6 pb-6 border-b border-slate-800 flex justify-between items-end">
                        <div>
                             <div className="flex items-baseline">
                                <span className="text-[50px] font-extrabold tracking-tight text-white">${totalRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                                <span className="text-xl text-slate-500 font-medium ml-2">/ сар</span>
                             </div>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Нийт орлого (MRR)</p>
                        </div>
                        
                        {/* Connected Devices - Small & Subtle */}
                        <div className="flex flex-col items-end opacity-70">
                             <span className="text-[25px] font-bold text-slate-400 leading-none">{totalUnits.toLocaleString()}</span>
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
                                            <span className={`text-xl ${costs.salary ? 'text-white' : 'text-slate-400'}`}>Цалин (Staff)</span>
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
                            <span className="text-slate-500 text-[17px] uppercase tracking-wide">Жилийн цэвэр ашиг (Annual Net)</span>
                            <span className="font-bold text-emerald-400">${annualNetIncome.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                        </div>
                    </div>
               </div>

               <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                   <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                       <ArrowRight className="mr-2" size={18} />
                       Стратегийн зорилт
                   </h4>
                   <p className="text-blue-800 text-xl leading-relaxed">
                       Зах зээлийн дөнгөж 1%-ийг эзлэхэд бид тогтвортой, өндөр ашигтай бизнесийг бий болгож чадна. Энэ нь бидний "Хамгийн муу хувилбар" (Worst case scenario) юм.
                   </p>
               </div>
           </div>
       </div>
    </Layout>
  );
};

export default Slide_Phase0;