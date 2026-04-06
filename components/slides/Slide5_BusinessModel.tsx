import React from 'react';
import Layout from '../Layout';
import { Users, Truck, Briefcase } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide5_BusinessModel: React.FC<SlideProps> = ({ data }) => {
  const getSector = (id: string) => data?.find(d => d.id === id);

  const taxi = getSector('taxi');
  const schools = getSector('schools');
  const grocery = getSector('grocery');
  const pharm = getSector('pharm');
  const hotels = getSector('hotels');
  const banks = getSector('banks');
  const security = getSector('security');

  return (
    <Layout 
      title="Шатлалтай үнийн бодлого" 
      subtitle="Салбарын үнийн мэдрэмж болон хэмжээнд суурилсан захиалгын загвар."
    >
      <div className="h-full flex items-center justify-center space-x-8 px-8">
        
        {/* Tier 1 */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
            <div className="flex items-center space-x-2 text-green-600 mb-4">
                <Users size={24} />
                <span className="font-bold text-xl tracking-widest uppercase">Өндөр тоо хэмжээ</span>
            </div>
            {/* Displaying range or lowest price for Tier 1 header */}
            <h3 className="text-[42px] font-bold text-slate-900 mb-2">${taxi?.price?.toFixed(2) || '1.00'} - ${schools?.price?.toFixed(2) || '1.50'}</h3>
            <p className="text-slate-400 text-xl mb-6">хэрэглэгч тутамд / сард</p>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between text-slate-700 bg-slate-50 p-3 rounded">
                    <span>{taxi?.name || 'Таксины жолооч нар'}</span>
                    <span className="font-bold">${taxi?.price?.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 bg-slate-50 p-3 rounded">
                    <span>{schools?.name || 'Сургууль/Хүүхдүүд'}</span>
                    <span className="font-bold">${schools?.price?.toFixed(2)}</span>
                </div>
            </div>
        </div>

        {/* Tier 2 */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 scale-105 z-10">
             <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
             <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-[17px] font-bold px-2 py-1 rounded">ҮНДСЭН</div>
            <div className="flex items-center space-x-2 text-blue-600 mb-4">
                <Truck size={24} />
                <span className="font-bold text-xl tracking-widest uppercase">Дундаж тоо хэмжээ</span>
            </div>
            <h3 className="text-[50px] font-bold text-slate-900 mb-2">${grocery?.price?.toFixed(2) || '2.00'}</h3>
            <p className="text-slate-400 text-xl mb-6">хэрэглэгч тутамд / сард</p>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between text-slate-700 bg-slate-50 p-3 rounded">
                    <span>{grocery?.name || 'Хүнсний дэлгүүр'}</span>
                    <span className="font-bold">${grocery?.price?.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 bg-slate-50 p-3 rounded">
                    <span>{pharm?.name || 'Эмийн сангууд'}</span>
                    <span className="font-bold">${pharm?.price?.toFixed(2)}</span>
                </div>
            </div>
        </div>

        {/* Tier 3 */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
            <div className="flex items-center space-x-2 text-purple-600 mb-4">
                <Briefcase size={24} />
                <span className="font-bold text-xl tracking-widest uppercase">Өндөр үнэ цэнэтэй B2B</span>
            </div>
            <h3 className="text-[42px] font-bold text-slate-900 mb-2">${banks?.price?.toFixed(2) || '3.00'}</h3>
            <p className="text-slate-400 text-xl mb-6">хэрэглэгч тутамд / сард</p>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between text-slate-700 bg-slate-50 p-3 rounded">
                    <span>{hotels?.name || 'Зочид буудлууд'}</span>
                    <span className="font-bold">${hotels?.price?.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 bg-slate-50 p-3 rounded">
                    <span>{banks?.name || 'Сүлжээ дэлгүүр'}</span>
                    <span className="font-bold">${banks?.price?.toFixed(2)}</span>
                </div>
                {security && (
                    <div className="flex items-center justify-between text-slate-700 bg-slate-50 p-3 rounded">
                        <span>{security.name}</span>
                        <span className="font-bold">${security.price?.toFixed(2)}</span>
                    </div>
                )}
            </div>
        </div>

      </div>
    </Layout>
  );
};

export default Slide5_BusinessModel;