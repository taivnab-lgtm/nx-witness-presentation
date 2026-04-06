import React, { useState } from 'react';
import Layout from '../Layout';
import { Fingerprint, Radio, Cloud, Globe, Smartphone, Bell, BarChart3 } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide3_Solution: React.FC<SlideProps> = () => {
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [activeView, setActiveView] = useState<'device' | 'platform'>('device');

  const handleSosClick = () => {
    setIsAlertActive(true);
    // Reset the alert state after 2 seconds
    setTimeout(() => {
      setIsAlertActive(false);
    }, 2000);
  };

  return (
    <Layout 
      title="Шийдэл" 
      subtitle="Товчлуур дарахад л шууд ажиллана."
    >
      <div className="h-full flex items-center space-x-12">
        
        {/* Visual Mockup Area */}
        <div className="w-1/3 h-4/5 bg-gradient-to-b from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center relative shadow-inner border border-slate-300 overflow-hidden transition-all duration-500">
            
            {activeView === 'device' ? (
                // DEVICE VIEW
                <div className="w-full h-full flex flex-col items-center justify-center animate-in fade-in duration-500">
                    <div 
                        onClick={handleSosClick}
                        className="w-48 h-48 rounded-full bg-white shadow-2xl border-4 border-slate-50 flex items-center justify-center relative z-10 group cursor-pointer transition-all duration-200 transform active:scale-95 hover:scale-105"
                        title="Click to simulate SOS"
                    >
                        {/* Ping Animation Effect when active */}
                        <div className={`absolute inset-0 rounded-full ${isAlertActive ? 'bg-red-500 animate-ping opacity-75' : 'bg-blue-50 animate-ping opacity-20'}`}></div>
                        
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-inner flex items-center justify-center border-t border-red-400 relative z-20">
                            <span className="text-white font-bold tracking-widest text-[25px] drop-shadow-md select-none">SOS</span>
                        </div>
                    </div>
                    <div className="absolute bottom-12 text-center">
                        <p className="font-mono text-slate-400 text-xl">SafeTouch Model S1</p>
                        <div className="flex justify-center space-x-2 mt-2">
                            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isAlertActive ? 'bg-red-500 animate-pulse' : 'bg-green-400'}`}></div>
                            <span className={`text-[17px] transition-colors duration-300 ${isAlertActive ? 'text-red-500 font-bold' : 'text-slate-500'}`}>
                                {isAlertActive ? 'ДОХИО ИЛГЭЭГДЛЭЭ!' : 'Идэвхтэй & Холбогдсон'}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                // PLATFORM VIEW
                <div className="w-full h-full relative p-6 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
                    
                    {/* Web Dashboard Mockup */}
                    <div className="w-full aspect-[4/3] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden flex flex-col relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        {/* Header */}
                        <div className="h-6 bg-slate-800 flex items-center px-2 space-x-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 bg-slate-50 p-2 flex gap-2">
                            {/* Sidebar */}
                            <div className="w-8 bg-white border border-slate-100 rounded-lg flex flex-col items-center py-2 space-y-2">
                                <div className="w-4 h-4 bg-slate-100 rounded"></div>
                                <div className="w-4 h-4 bg-blue-100 rounded"></div>
                                <div className="w-4 h-4 bg-slate-100 rounded"></div>
                            </div>
                            {/* Main Area */}
                            <div className="flex-1 space-y-2">
                                {/* Top Stats */}
                                <div className="flex gap-2">
                                    <div className="flex-1 h-10 bg-white rounded-lg border border-slate-100 p-1.5">
                                        <div className="w-3 h-3 bg-red-100 rounded mb-1"></div>
                                        <div className="w-8 h-1 bg-slate-200 rounded"></div>
                                    </div>
                                    <div className="flex-1 h-10 bg-white rounded-lg border border-slate-100 p-1.5">
                                        <div className="w-3 h-3 bg-green-100 rounded mb-1"></div>
                                        <div className="w-8 h-1 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                                {/* Map / List */}
                                <div className="flex-1 bg-white rounded-lg border border-slate-100 relative overflow-hidden">
                                     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:8px_8px]"></div>
                                     <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                                     <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full"></div>
                                     <div className="absolute bottom-8 right-6 w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile App Mockup - Overlapping */}
                    <div className="absolute bottom-10 right-8 w-20 aspect-[9/16] bg-slate-900 rounded-xl p-1 shadow-2xl border border-slate-700 transform rotate-12 hover:rotate-0 transition-transform duration-500 z-20">
                         <div className="bg-white rounded-lg w-full h-full overflow-hidden flex flex-col">
                              <div className="h-3 bg-slate-50 border-b flex justify-center items-center">
                                  <div className="w-3 h-0.5 bg-slate-300 rounded-full"></div>
                              </div>
                              <div className="flex-1 bg-slate-50 p-1.5 flex flex-col items-center justify-center space-y-1">
                                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center">
                                      <Bell size={10} className="text-red-500" />
                                  </div>
                                  <div className="w-10 h-1 bg-slate-200 rounded"></div>
                                  <div className="w-8 h-1 bg-slate-200 rounded"></div>
                              </div>
                              <div className="h-6 bg-white border-t flex justify-around items-center px-1">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                              </div>
                         </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-8 left-8">
                         <div className="bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-100 text-[10px] font-bold text-blue-600 flex items-center">
                            <Globe size={10} className="mr-1" />
                            Platform Sync
                         </div>
                    </div>

                </div>
            )}
        </div>

        {/* Features List */}
        <div className="w-2/3 space-y-8">
            {/* Feature 1 */}
            <div 
                className={`flex items-start space-x-6 p-6 rounded-xl border transition-all cursor-pointer ${activeView === 'device' ? 'bg-white border-blue-100 shadow-lg scale-[1.02]' : 'bg-transparent border-transparent hover:bg-white/50 opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveView('device')}
            >
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                    <Fingerprint size={28} />
                </div>
                <div>
                    <h3 className="text-[28px] font-bold text-slate-900">Ашиглахад хялбар</h3>
                    <p className="text-slate-600 mt-2">Ямар ч саадгүй. Ганц удаа дарахад л дохио илгээнэ. Утас түгжээг тайлах, дугаар залгах шаардлагагүй.</p>
                </div>
            </div>

            {/* Feature 2: Real-time response */}
            <div 
                className={`flex items-start space-x-6 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeView === 'device' && isAlertActive
                    ? 'bg-red-50 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)] scale-105 opacity-100' 
                    : 'bg-transparent border-transparent hover:bg-white/50 opacity-60 hover:opacity-100'
                }`}
                onClick={() => { setActiveView('device'); handleSosClick(); }}
            >
                <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    isAlertActive && activeView === 'device' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-700'
                }`}>
                    <Radio size={28} className={isAlertActive && activeView === 'device' ? 'animate-pulse' : ''} />
                </div>
                <div>
                    <h3 className={`text-[28px] font-bold transition-colors duration-300 ${
                        isAlertActive && activeView === 'device' ? 'text-red-700' : 'text-slate-900'
                    }`}>
                        Шуурхай хариу
                    </h3>
                    <p className={`mt-2 transition-colors duration-300 ${
                        isAlertActive && activeView === 'device' ? 'text-red-600' : 'text-slate-600'
                    }`}>
                        Wifi сүлжээгээр дамжин ажил олгогч, гэр бүл эсвэл яаралтай тусламжийн албанд шууд мэдэгдэл илгээнэ.
                    </p>
                </div>
            </div>

            {/* Feature 3: Cloud Platform */}
            <div 
                className={`flex items-start space-x-6 p-6 rounded-xl border transition-all cursor-pointer ${activeView === 'platform' ? 'bg-white border-blue-100 shadow-lg scale-[1.02]' : 'bg-transparent border-transparent hover:bg-white/50 opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveView('platform')}
            >
                <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                    <Cloud size={28} />
                </div>
                <div>
                    <h3 className="text-[28px] font-bold text-slate-900">Cloud Платформ</h3>
                    <p className="text-slate-600 mt-2">Вэб болон Мобайл платформоор дамжуулан бүх төхөөрөмжийг шууд хянах, удирдах, дата цуглуулах боломжтой.</p>
                </div>
            </div>
        </div>

      </div>
    </Layout>
  );
};

export default Slide3_Solution;