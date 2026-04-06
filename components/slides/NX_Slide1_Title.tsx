import React from 'react';
import { MousePointer2, Search, Cloud, Infinity } from 'lucide-react';

const NX_Slide1_Title: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-12">
          <img 
            src="/assets/nx-witness-logo.svg" 
            className="h-16 md:h-20 w-auto transition-transform hover:scale-105 duration-500" 
            alt="Nx Witness Brand Logo" 
          />
        </div>

        <h1 className="text-[101px] md:text-[134px] font-black text-white tracking-tighter mb-4 leading-none">
          Nx Witness <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Платформ</span>
        </h1>

        <div className="h-1 w-24 bg-blue-500 mb-8"></div>

        <p className="text-[28px] md:text-[34px] text-slate-400 font-light tracking-wide max-w-2xl">
          Орчин үеийн байгууллагын аюулгүй байдлын хэрэгцээнд зориулсан ухаалаг видео удирдлагын платформ.
        </p>

        <div className="mt-16 flex items-center justify-center space-x-12 max-w-5xl">
          <div className="flex flex-col items-center group w-48">
            <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-all shadow-lg shadow-blue-500/5">
              <MousePointer2 className="text-blue-400 w-7 h-7" />
            </div>
            <span className="text-[22px] font-bold text-white/90 text-center leading-relaxed">Хэрэглэхэд маш хялбар</span>
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>

          <div className="flex flex-col items-center group w-48">
            <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-all shadow-lg shadow-blue-500/5">
              <Search className="text-blue-400 w-7 h-7" />
            </div>
            <span className="text-[22px] font-bold text-white/90 text-center leading-relaxed">Ухаалаг хайлт</span>
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>

          <div className="flex flex-col items-center group w-48">
            <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-all shadow-lg shadow-blue-500/5">
              <Cloud className="text-blue-400 w-7 h-7" />
            </div>
            <span className="text-[22px] font-bold text-white/90 text-center leading-relaxed">Үүлэн технологи</span>
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>

          <div className="flex flex-col items-center group w-48">
            <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-all shadow-lg shadow-blue-500/5">
              <Infinity className="text-blue-400 w-7 h-7" />
            </div>
            <span className="text-[22px] font-bold text-white/90 text-center leading-relaxed">Хязгааргүй боломж</span>
          </div>
        </div>
      </div>

      {/* Footer Year */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-600 font-black tracking-widest text-xl">
        2026 ТАНИЛЦУУЛГА
      </div>
    </div>
  );
};

export default NX_Slide1_Title;
