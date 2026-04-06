import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Wifi, ArrowRightLeft, Signal, Smartphone, Server, Database, ShieldCheck, AlertTriangle } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide_Architecture: React.FC<SlideProps> = () => {
  const [alertActive, setAlertActive] = useState(false);
  const [triggerId, setTriggerId] = useState<number | null>(null);

  const handlePanicClick = (id: number) => {
    setAlertActive(true);
    setTriggerId(id);
    
    // Reset after 14 seconds
    setTimeout(() => {
      setAlertActive(false);
      setTriggerId(null);
    }, 14000);
  };

  return (
    <Layout
      title="Системийн архитектур"
      subtitle="Төхөөрөмжөөс хэрэглэгч рүү: Мэдээллийн урсгал."
    >
      <div className="h-full flex items-center justify-between px-4 lg:px-12 relative">
        
        {/* Background Connection Line */}
        <div className={`absolute top-1/2 left-20 right-20 h-px border-t-2 border-dashed -z-10 hidden md:block transition-colors duration-500 ${alertActive ? 'border-red-300' : 'border-slate-200'}`}></div>

        {/* 1. Dashboard & App (Left) */}
        <div className="w-1/3 h-full flex flex-col justify-center relative z-10">
            {/* Wrapper to keep dashboard and mobile together */}
            <div className="relative">
                {/* Web Dashboard Mockup */}
                <div className={`bg-white rounded-lg shadow-xl border overflow-hidden text-[10px] relative z-10 transform transition-all duration-300 ${alertActive ? 'border-red-400 scale-105 shadow-red-200' : 'border-slate-200 hover:scale-105'}`}>
                    <div className={`text-white p-3 flex justify-between items-center transition-colors duration-300 ${alertActive ? 'bg-red-600' : 'bg-slate-800'}`}>
                        <span className="font-bold tracking-wider">SHANGRI-LA</span>
                        <div className="flex space-x-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    <div className="p-4 grid grid-cols-4 gap-3 bg-slate-50">
                        <div className="col-span-1 bg-white border border-slate-100 rounded p-2 shadow-sm space-y-2">
                            <div className="h-1.5 w-full bg-slate-200 rounded"></div>
                            <div className="h-1.5 w-3/4 bg-slate-200 rounded"></div>
                            <div className="h-1.5 w-1/2 bg-slate-200 rounded"></div>
                            <div className="mt-4 h-1.5 w-full bg-blue-100 rounded"></div>
                        </div>
                        <div className="col-span-3 space-y-2">
                            {/* Status Bar */}
                            <div className={`bg-white border p-2 rounded flex justify-between items-center shadow-sm transition-colors duration-300 ${alertActive ? 'border-red-200 bg-red-50' : 'border-green-200'}`}>
                                {alertActive ? (
                                    <>
                                        <span className="text-red-600 font-bold text-[9px] animate-pulse">АЮУЛ: БҮС {triggerId}02</span>
                                        <AlertTriangle size={12} className="text-red-500 animate-bounce" />
                                    </>
                                ) : (
                                    <>
                                        <span className="text-green-700 font-bold text-[9px]">Бүх систем хэвийн</span>
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    </>
                                )}
                            </div>

                            {/* Device List */}
                            <div className="bg-white border border-slate-200 rounded overflow-hidden">
                                {[1, 2, 3].map(i => {
                                    const isTriggered = alertActive && triggerId === i;
                                    return (
                                    <div key={i} className={`flex justify-between items-center p-2 border-b border-slate-50 last:border-0 transition-colors duration-300 ${isTriggered ? 'bg-red-100' : 'hover:bg-slate-50'}`}>
                                        <div className="flex items-center space-x-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${isTriggered ? 'bg-red-500' : 'bg-slate-300'}`}></div>
                                            <span className={`font-medium ${isTriggered ? 'text-red-700 font-bold' : 'text-slate-500'}`}>Zone {i}02</span>
                                        </div>
                                        <span className={`font-bold px-1.5 py-0.5 rounded text-[8px] transition-all duration-300 ${isTriggered ? 'bg-red-500 text-white animate-pulse' : 'text-blue-600 bg-blue-50'}`}>
                                            {isTriggered ? 'SOS' : 'Active'}
                                        </span>
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile App Mockup */}
                <div className={`absolute -bottom-8 -right-8 w-28 bg-slate-900 rounded-[18px] p-1.5 shadow-2xl border transform z-20 transition-all duration-500 ${alertActive ? 'rotate-0 scale-110 border-red-500 shadow-red-500/50' : 'rotate-[15deg] border-slate-700 hover:rotate-0'}`}>
                    <div className="bg-white rounded-[14px] overflow-hidden h-48 relative flex flex-col">
                        <div className={`p-2 text-center border-b transition-colors duration-300 ${alertActive ? 'bg-red-600 border-red-600' : 'bg-slate-100 border-slate-100'}`}>
                            <div className={`w-8 h-1 rounded-full mx-auto ${alertActive ? 'bg-red-400' : 'bg-slate-300'}`}></div>
                        </div>
                        
                        <div className="p-2 flex flex-col items-center justify-center flex-1 space-y-3">
                            {alertActive ? (
                                <>
                                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center border-4 border-red-50 animate-pulse">
                                        <AlertTriangle size={24} className="animate-ping absolute opacity-50" />
                                        <AlertTriangle size={24} className="relative z-10" />
                                    </div>
                                    <div className="text-center w-full">
                                        <div className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1 animate-pulse">SOS ALERT</div>
                                        <div className="text-[8px] text-slate-500 font-medium">Zone {triggerId}02</div>
                                        <div className="text-[8px] text-slate-400">Just now</div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center border border-green-100">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div className="text-center w-full">
                                        <div className="text-[9px] font-bold text-slate-700 bg-slate-50 py-1 px-2 rounded mb-1">SYSTEM ARMED</div>
                                        <div className="text-[8px] text-slate-400">Everything looks good</div>
                                    </div>
                                </>
                            )}
                        </div>
                        
                        <div className="p-2">
                            <div className="w-full bg-slate-900 h-1 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className={`absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block transition-colors duration-300 ${alertActive ? 'text-red-500 animate-pulse' : 'text-blue-400'}`}>
                    <ArrowRightLeft size={24} strokeWidth={1.5} />
                </div>
             </div>
        </div>


        {/* 2. Cloud (Center) - Custom SVG Logo */}
        <div className="w-1/5 flex flex-col items-center justify-center relative z-10 group">
             <div className="relative w-40 h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                 
                 {/* Decorative background glow */}
                 <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>

                 {/* Custom Tech Cloud SVG */}
                 <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-xl relative z-10">
                    <defs>
                        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    {/* Orbiting Ring */}
                    <circle cx="100" cy="100" r="75" stroke="#bae6fd" strokeWidth="1.5" fill="none" strokeDasharray="6 6" className="animate-spin" style={{animationDuration: '30s', transformOrigin: 'center'}} />
                    
                    {/* Cloud Group - Centered and Grouped */}
                    <g transform="translate(20, 20)">
                        {/* Main Cloud Body */}
                        <path d="M50 110 C40 110 30 100 30 90 C30 80 38 72 48 72 C50 55 65 45 80 45 C95 45 108 55 110 70 C125 70 135 80 135 95 C135 110 125 120 110 120 L50 120 Z" 
                              fill="url(#cloudGradient)" 
                              stroke="white"
                              strokeWidth="2"
                              filter="url(#glow)" />
                              
                        {/* Server Rack Detail inside Cloud - Aligned visually */}
                        <rect x="65" y="80" width="40" height="4" rx="2" fill="white" fillOpacity="0.8" />
                        <rect x="65" y="90" width="40" height="4" rx="2" fill="white" fillOpacity="0.8" />
                        <rect x="65" y="100" width="25" height="4" rx="2" fill="white" fillOpacity="0.8" />
                        
                        {/* Status Dot */}
                        <circle cx="115" cy="65" r="4" fill="#10b981" stroke="white" strokeWidth="1" />
                    </g>
                </svg>

                 {/* Floating Badge */}
                 <div className="absolute top-0 right-2 bg-blue-600 text-white p-1.5 rounded-lg border border-white shadow-md animate-bounce z-20">
                    <Database size={12} />
                 </div>
            </div>
            
            <div className="text-center relative z-20 mt-2">
                <p className="text-[17px] font-bold text-slate-500 uppercase tracking-widest bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-slate-200 shadow-sm inline-block">Cloud Server</p>
            </div>
             
             {/* Connection to Dashboard - Responsive Red */}
             <div className={`absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block transition-colors duration-300 ${alertActive ? 'text-red-500 animate-pulse' : 'text-blue-400'}`}>
                <ArrowRightLeft size={24} strokeWidth={1.5} />
             </div>
        </div>

        {/* 3. Gateway (Mid Right) - Static Green/Slate */}
        <div className="w-1/5 flex flex-col items-center justify-center relative z-10 group">
            <div className="w-28 h-28 bg-white rounded-[20px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center relative transition-transform duration-500 group-hover:-translate-y-2">
                
                {/* Status Light - Always Green */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full bg-green-500 rounded-full"></div>
                </div>

                {/* Main Icon - Always Slate */}
                <Wifi size={40} className="text-slate-300" strokeWidth={2} />
                
                {/* Physical Antenna Graphic */}
                <div className="absolute -right-3 -top-6 w-2 h-12 bg-gradient-to-t from-slate-200 to-slate-100 rounded-full rotate-12 border border-slate-200 origin-bottom shadow-sm"></div>
            </div>
             <p className="mt-6 text-[17px] font-bold text-slate-400 uppercase tracking-widest text-center bg-white px-2 py-1 rounded-full border border-slate-100 shadow-sm">LoRa Gateway</p>
        </div>

        {/* 4. Devices (Right) */}
        <div className="w-1/4 flex flex-col justify-center gap-6 pl-8 relative z-10">
            {/* Arrows pointing to Gateway - Responsive Red */}
            <div className={`absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-12 hidden lg:flex transition-colors duration-300 ${alertActive ? 'text-red-500' : 'text-blue-400'}`}>
                 <ArrowRightLeft size={20} className={`-rotate-12 opacity-50 ${alertActive ? 'animate-pulse' : ''}`} />
                 <ArrowRightLeft size={20} className={`rotate-0 opacity-50 ${alertActive ? 'animate-pulse' : ''}`} />
                 <ArrowRightLeft size={20} className={`rotate-12 opacity-50 ${alertActive ? 'animate-pulse' : ''}`} />
            </div>

            {[1, 2, 3].map((i) => (
                <div 
                    key={i} 
                    onClick={() => handlePanicClick(i)}
                    className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                    title="Click to simulate panic alert"
                >
                    <div className="w-16 h-20 relative flex flex-col items-center justify-center drop-shadow-lg">
                        
                        {/* Custom CSS Wristband Graphic */}
                        
                        {/* Strap */}
                        <div className="w-10 h-full bg-slate-800 rounded-full absolute top-0 border border-slate-700 shadow-inner group-hover:bg-slate-700 transition-colors"></div>
                        
                        {/* Device Face */}
                        <div className={`w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-950 rounded-full border-4 shadow-[0_4px_10px_rgba(0,0,0,0.5)] relative z-10 flex items-center justify-center transition-all duration-200 active:scale-95 ${alertActive && triggerId === i ? 'border-red-500 shadow-red-500/50' : 'border-slate-800 group-hover:border-slate-700'}`}>
                             {/* Inner Button */}
                             <div className={`w-10 h-10 bg-slate-900 rounded-full border shadow-inner flex items-center justify-center transition-colors ${alertActive && triggerId === i ? 'border-red-500/50' : 'border-slate-700/50'}`}>
                                 {/* Center divot / Light */}
                                 <div className={`w-8 h-8 rounded-full bg-slate-900 border transition-all duration-200 ${alertActive && triggerId === i ? 'border-red-500 bg-red-900/20 shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'border-slate-800/80'}`}></div>
                             </div>
                             
                             {/* Gloss Reflection */}
                             <div className="absolute top-2 right-4 w-3 h-2 bg-white rounded-full opacity-5 rotate-45 pointer-events-none"></div>
                        </div>

                        {/* Ping effect on hover/active */}
                        <div className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-300 ${alertActive && triggerId === i ? 'bg-red-500/40 opacity-100 animate-pulse' : 'bg-blue-500/20 opacity-0 group-hover:opacity-100'}`}></div>
                    </div>
                    <div>
                        <h4 className={`font-bold text-xl transition-colors ${alertActive && triggerId === i ? 'text-red-600' : 'text-slate-700 group-hover:text-blue-600'}`}>
                            {alertActive && triggerId === i ? 'SENDING SOS...' : `Wearable S${i}`}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-mono bg-slate-50 px-1 rounded inline-block">ID: 829{i}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </Layout>
  );
};

export default Slide_Architecture;