import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide1_Title: React.FC<SlideProps> = () => {
  return (
    <div className="w-full h-full flex flex-row">
      {/* Left Content */}
      <div className="w-5/12 h-full bg-white flex flex-col justify-center px-12 md:px-20 z-10 relative">
        <div className="mb-6 flex items-center space-x-3 text-blue-600">
            <ShieldCheck size={48} strokeWidth={1.5} />
            <span className="text-[34px] font-bold tracking-tight text-slate-800">SafeTouch</span>
        </div>
        
        <h1 className="text-[67px] font-extrabold text-slate-900 leading-[1.1] mb-6">
          Масс зах зээлд зориулсан <span className="text-blue-600">"Panic Button"</span> шийдэл.
        </h1>
        
        <p className="text-[28px] text-slate-500 font-light mb-12 border-l-4 border-blue-200 pl-6 py-2">
          Хүн бүрт, хаана ч хямд үнээр аюулгүй байдал.
        </p>

        <div className="mt-8 flex items-center space-x-4">
           <div className="px-6 py-3 bg-slate-50 rounded-lg border border-slate-200 text-xl font-semibold text-slate-600">
             Танилцуулга
           </div>
           <div className="px-6 py-3 bg-slate-50 rounded-lg border border-slate-200 text-xl font-semibold text-slate-600">
             2026
           </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="w-7/12 h-full relative overflow-hidden bg-slate-900">
         <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 opacity-100"></div>
         <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply z-10"></div>
         
         {/* Split Image Composition */}
         <div className="grid grid-rows-2 h-full">
            {/* Top Image: Aerial Street View */}
            <img 
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80" 
                alt="Aerial City Street" 
                className="w-full h-full object-cover opacity-90"
            />
            {/* Bottom Image: Industrial/Warehouse */}
            <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
                alt="Industrial Warehouse Logistics" 
                className="w-full h-full object-cover opacity-80"
            />
         </div>
      </div>
    </div>
  );
};

export default Slide1_Title;