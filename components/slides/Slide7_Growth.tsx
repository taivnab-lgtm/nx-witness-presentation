import React from 'react';
import Layout from '../Layout';
import { Sprout, Truck, Snowflake, Zap, Building2, ArrowUpRight, Shield } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide7_Growth: React.FC<SlideProps> = () => {
  return (
    <Layout 
      title="2-р үе шатаас цааш: IoT Экосистем" 
      subtitle="Бид зөвхөн товчлуур биш, хотын дэд бүтцийн мэдрэлийн систем болно."
    >
      <div className="h-full grid grid-cols-3 grid-rows-2 gap-4 pb-4">
        
        {/* 1. Agriculture (Updated from Fleet Management) */}
        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-md">
            <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" 
                alt="Smart Agriculture" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                    <Sprout size={20} />
                    <span className="text-[17px] font-bold uppercase tracking-wider">Хөдөө аж ахуй</span>
                </div>
                <h3 className="text-white font-bold text-[25px] leading-tight mb-2">Ухаалаг ферм & Мал аж ахуй</h3>
                <ul className="text-slate-300 text-xl space-y-1">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>Малын байршил тогтоогч</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>Хөрсний чийгшил хяналт</li>
                </ul>
            </div>
        </div>

        {/* 2. Delivery & Logistics */}
        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-md">
            <img 
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80" 
                alt="Logistics Delivery" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center space-x-2 text-blue-400 mb-2">
                    <Truck size={20} />
                    <span className="text-[17px] font-bold uppercase tracking-wider">Хүргэлт, Шуудан</span>
                </div>
                <h3 className="text-white font-bold text-[25px] leading-tight mb-2">Ложистикийн хяналт</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[17px] text-white border border-white/20">Papa</span>
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[17px] text-white border border-white/20">ABA</span>
                </div>
            </div>
        </div>

        {/* 3. Retail / Cold Chain */}
        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-md">
            <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80" 
                alt="Supermarket Fridge" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                    <Snowflake size={20} />
                    <span className="text-[17px] font-bold uppercase tracking-wider">Худалдаа</span>
                </div>
                <h3 className="text-white font-bold text-[25px] leading-tight mb-2">Хөргүүрийн хяналт</h3>
                <p className="text-slate-300 text-xl">Температурын алдагдлыг хянах.</p>
            </div>
        </div>

        {/* 4. Energy */}
        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-md">
            <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80" 
                alt="High voltage power lines" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                 <div className="flex items-center space-x-2 text-orange-400 mb-2">
                    <Zap size={20} />
                    <span className="text-[17px] font-bold uppercase tracking-wider">Эрчим хүч</span>
                </div>
                <h3 className="text-white font-bold text-[28px] mb-1">Ухаалаг тоолуур</h3>
                <p className="text-slate-300 text-[17px]">Хэрэглээг бодит цагт хянах</p>
            </div>
        </div>

         {/* 5. Security Companies */}
         <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-md">
            <img 
                src="https://images.unsplash.com/photo-1520690214124-2405c5217036?auto=format&fit=crop&w=800&q=80" 
                alt="Police Car" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center space-x-2 text-indigo-400 mb-2">
                    <Shield size={20} />
                    <span className="text-[17px] font-bold uppercase tracking-wider">Хамгаалалт</span>
                </div>
                <h3 className="text-white font-bold text-[25px] leading-tight mb-2">Хамгаалалтын Алба</h3>
                <ul className="text-slate-300 text-xl space-y-1">
                     <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>Guard Tour System</li>
                     <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>Шуурхай бүлэг</li>
                </ul>
            </div>
        </div>

        {/* 6. Smart City */}
        <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-md">
            <img 
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80" 
                alt="City Skyline Night" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                    <Building2 size={20} />
                    <span className="text-[17px] font-bold uppercase tracking-wider">Smart City</span>
                </div>
                <h3 className="text-white font-bold text-[28px] mb-1">Утаа & Түгжрэл</h3>
                <p className="text-slate-300 text-[17px]">Өгөгдөлд суурилсан шийдэл</p>
            </div>
        </div>

      </div>
    </Layout>
  );
};

export default Slide7_Growth;