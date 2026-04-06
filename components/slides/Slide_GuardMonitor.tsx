
import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { Moon, DoorOpen, AlertTriangle, CheckCircle2, Smartphone, History, Fingerprint, ArrowDown, XCircle, Quote, Timer } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide_GuardMonitor: React.FC<SlideProps> = () => {
  const [demoState, setDemoState] = useState<'idle' | 'warning' | 'missed' | 'verified'>('idle');
  const [timer, setTimer] = useState(60);
  const [logs, setLogs] = useState<{time: string, status: string, type: 'success' | 'danger'}[]>([
    { time: '01:00 AM', status: 'Бүртгэл хийгдсэн', type: 'success' },
    { time: '02:00 AM', status: 'Бүртгэл хийгдсэн', type: 'success' },
  ]);

  // Simulation Logic
  useEffect(() => {
    // Fix: Use 'any' type for interval to support browser environments where NodeJS.Timeout may not be available.
    let interval: any;
    if (demoState === 'idle' || demoState === 'warning') {
        interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 0) {
                    setDemoState('missed');
                    addLog('Хариу өгөөгүй (Унтсан?)', 'danger');
                    return 0;
                }
                if (prev <= 15) setDemoState('warning');
                return prev - 1;
            });
        }, 50); // Fast forward simulation
    }
    return () => clearInterval(interval);
  }, [demoState]);

  const addLog = (text: string, type: 'success' | 'danger') => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    setLogs(prev => [{ time: timeString, status: text, type }, ...prev].slice(0, 6)); // Keep last 6 logs
  };

  const handleCheckIn = () => {
      setDemoState('verified');
      setTimer(60);
      addLog('Бүртгэл баталгаажлаа', 'success');
      
      // Reset to idle after a moment
      setTimeout(() => {
          setDemoState('idle');
      }, 1000);
  };

  return (
    <Layout
      title="Харуулын Хяналтын Шийдэл"
      subtitle="Харуул унтах, ажлын байраа орхихоос сэргийлэх автомат систем."
    >
      <div className="h-full flex gap-8 items-center">
        
        {/* LEFT COLUMN: Concept & Logic */}
        <div className="w-1/2 flex flex-col gap-6">
            
            {/* 1. Problem */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10">
                    <Moon size={60} className="text-red-600" />
                </div>
                <h3 className="flex items-center text-red-700 font-bold mb-3 uppercase tracking-wider text-xl">
                    <AlertTriangle size={18} className="mr-2" />
                    Асуудал
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-center text-slate-700 font-medium">
                        <Moon size={20} className="text-red-400 mr-3" />
                        Харуул унтдаг
                    </li>
                    <li className="flex items-center text-slate-700 font-medium">
                        <DoorOpen size={20} className="text-red-400 mr-3" />
                        Харуул ажлын байраа орхидог
                    </li>
                    <li className="flex items-center text-slate-500 text-xl italic ml-8">
                        → Нотолгоо байхгүй тул маргаан үүсдэг.
                    </li>
                </ul>
            </div>

            {/* 2. Logic Flow - Visual Timeline */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm relative overflow-hidden">
                <h3 className="font-bold text-slate-800 mb-4 text-xl uppercase tracking-wide flex items-center">
                    <History size={16} className="mr-2 text-blue-500" />
                    Системийн Логик
                </h3>
                
                <div className="flex items-start relative pl-2">
                    {/* Vertical Line */}
                    <div className="absolute left-3 top-2 bottom-4 w-0.5 bg-slate-100"></div>

                    <div className="space-y-5 w-full relative z-10">
                        
                        {/* Step 1 */}
                        <div className="flex items-center group">
                            <div className="w-6 h-6 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center shrink-0 mr-3 shadow-sm z-10 relative bg-white">
                                <span className="text-[10px] font-bold text-blue-600">1</span>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-lg p-2 border border-slate-100 flex justify-between items-center">
                                <span className="text-[17px] font-bold text-slate-700">60 минут тоолох</span>
                                <div className="flex items-center space-x-1 text-slate-400">
                                    <Timer size={12} />
                                    <span className="text-[10px] font-mono">Timer</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start group">
                            <div className="w-6 h-6 rounded-full bg-slate-50 border-2 border-slate-300 flex items-center justify-center shrink-0 mr-3 shadow-sm z-10 relative bg-white mt-1">
                                <span className="text-[10px] font-bold text-slate-500">2</span>
                            </div>
                            <div className="flex-1">
                                <div className="text-[17px] font-bold text-slate-700 mb-2 ml-1">Хариу үйлдэл шалгах</div>
                                <div className="grid grid-cols-2 gap-3">
                                     {/* Success Branch */}
                                     <div className="bg-green-50/50 border border-green-100 rounded p-2 flex flex-col items-center gap-1 relative overflow-hidden">
                                         <div className="absolute top-0 left-0 w-full h-1 bg-green-400"></div>
                                         <CheckCircle2 size={16} className="text-green-500" />
                                         <div className="text-center">
                                             <span className="text-[10px] font-bold text-slate-600 block mb-0.5">Дарсан</span>
                                             <span className="text-[9px] text-green-700 bg-green-100 px-1.5 py-0.5 rounded font-bold">ХЭВИЙН</span>
                                         </div>
                                     </div>
                                     
                                     {/* Fail Branch */}
                                     <div className="bg-red-50/50 border border-red-100 rounded p-2 flex flex-col items-center gap-1 relative overflow-hidden">
                                         <div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
                                         <XCircle size={16} className="text-red-500" />
                                         <div className="text-center">
                                             <span className="text-[10px] font-bold text-slate-600 block mb-0.5">Дараагүй</span>
                                             <span className="text-[9px] text-red-700 bg-red-100 px-1.5 py-0.5 rounded font-bold animate-pulse">УНТСАН</span>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3. Result (Restored & Updated) */}
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10">
                    <CheckCircle2 size={60} className="text-green-600" />
                </div>
                <h3 className="flex items-center text-green-700 font-bold mb-3 uppercase tracking-wider text-xl">
                    <CheckCircle2 size={18} className="mr-2" />
                    Үр дүн
                </h3>
                <ul className="space-y-3">
                    <li className="flex items-center text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Харуул хариуцлагатай болно
                    </li>
                    <li className="flex items-center text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Бодит нотолгоо (timestamp, log)
                    </li>
                    <li className="flex items-center text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Удирдлагын ажил хөнгөвчлөгдөж, найдвартай хяналт бий болгоно.
                    </li>
                </ul>
            </div>

        </div>

        {/* RIGHT COLUMN: Interactive Visual */}
        <div className="w-1/2 h-full bg-slate-100 rounded-3xl p-6 relative flex flex-col items-center border border-slate-200 overflow-hidden">
            
            {/* Context Label */}
            <div className="w-full text-center mb-6">
                <span className="bg-white/80 backdrop-blur border px-3 py-1 rounded-full text-[17px] font-bold text-slate-400 uppercase tracking-widest">
                    Бодит хугацааны симуляци
                </span>
            </div>

            {/* Countdown - Outside */}
            <div className="text-center mb-8">
                 <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Дараагийн шалгалт</div>
                 <div className={`text-[84px] font-mono font-black transition-colors ${demoState === 'warning' || demoState === 'missed' ? 'text-red-500' : 'text-slate-800'}`}>
                     00:{timer.toString().padStart(2, '0')}
                 </div>
            </div>

            {/* Guard's Device View - Compact */}
            <div className={`w-48 bg-slate-800 rounded-3xl p-4 shadow-2xl transform transition-all duration-300 z-10 ${demoState === 'missed' ? 'shake-animation border-4 border-red-500' : 'border-4 border-slate-700'}`}>
                <div className="flex justify-between text-slate-500 text-[10px] mb-4 font-mono">
                    <span>S-01</span>
                    <span className="text-green-400">● ON</span>
                </div>

                {/* The Button */}
                <button 
                    onClick={handleCheckIn}
                    disabled={demoState === 'missed'}
                    className={`w-full aspect-square rounded-full flex flex-col items-center justify-center shadow-inner transition-all transform active:scale-95 group relative overflow-hidden ${
                        demoState === 'missed' ? 'bg-slate-700 cursor-not-allowed' :
                        demoState === 'verified' ? 'bg-green-500' :
                        'bg-blue-600 hover:bg-blue-500'
                    }`}
                >
                    {demoState === 'missed' ? (
                        <>
                            <XCircle size={32} className="text-red-500 mb-1" />
                            <span className="text-red-200 font-bold uppercase text-[10px]">Зөрчил!</span>
                        </>
                    ) : demoState === 'verified' ? (
                        <>
                             <CheckCircle2 size={32} className="text-white mb-1" />
                             <span className="text-white font-bold uppercase text-[10px]">OK</span>
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                            <Fingerprint size={32} className="text-white mb-1 relative z-10" />
                            <span className="text-white font-bold uppercase text-[10px] relative z-10">ТОВЧ ДАР</span>
                        </>
                    )}
                </button>
                
                {demoState === 'missed' && (
                     <div className="mt-3 text-center">
                        <button onClick={() => {setDemoState('idle'); setTimer(60);}} className="text-[10px] text-slate-400 underline hover:text-white">
                            Reset
                        </button>
                     </div>
                )}
            </div>

            {/* Manager's Web Platform - Fully Viewable at Bottom */}
            <div className="flex-1 w-full mt-8 min-h-0 flex flex-col">
                <div className="w-full bg-white border border-slate-200 rounded-xl shadow-lg flex flex-col h-full overflow-hidden">
                    <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex justify-between items-center shrink-0">
                        <div className="flex items-center gap-2">
                             <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                             <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Manager Dashboard</span>
                        </div>
                        <div className="flex space-x-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                             <span className="text-[9px] font-bold text-green-600">LIVE</span>
                        </div>
                    </div>
                    <div className="p-0 overflow-y-auto overflow-x-hidden flex-1 relative no-scrollbar">
                         {/* Header Row */}
                         <div className="flex bg-slate-50/50 text-[9px] font-bold text-slate-400 px-4 py-1 border-b border-slate-50">
                            <div className="w-16">TIME</div>
                            <div className="flex-1">STATUS</div>
                            <div className="w-16 text-right">DEVICE</div>
                         </div>
                         
                         {/* Rows */}
                        <div className="divide-y divide-slate-50">
                            {logs.map((log, idx) => (
                                <div key={idx} className={`flex items-center px-4 py-2.5 text-[10px] ${log.type === 'danger' ? 'bg-red-50/40' : 'hover:bg-slate-50'}`}>
                                    <div className="w-16 font-mono text-slate-400">{log.time}</div>
                                    <div className="flex-1 flex items-center">
                                         <div className={`w-1.5 h-1.5 rounded-full mr-2 ${log.type === 'danger' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                         <span className={`font-bold ${log.type === 'danger' ? 'text-red-700' : 'text-slate-700'}`}>{log.status}</span>
                                    </div>
                                    <div className="w-16 text-right text-slate-500 font-mono">S-01</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .shake-animation {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </Layout>
  );
};

export default Slide_GuardMonitor;
