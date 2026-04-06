import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Settings, X, RotateCcw } from 'lucide-react';
import Slide1_Title from './components/slides/Slide1_Title';
import Slide2_Problem from './components/slides/Slide2_Problem';
import Slide3_Solution from './components/slides/Slide3_Solution';
import Slide_GuardMonitor from './components/slides/Slide_GuardMonitor';
import Slide_Architecture from './components/slides/Slide_Architecture';
import Slide_Phase0 from './components/slides/Slide_Phase0';
import Slide4_Market from './components/slides/Slide4_Market';
import Slide_NewMarket from './components/slides/Slide_NewMarket';
import Slide5_BusinessModel from './components/slides/Slide5_BusinessModel';
import Slide6_Financials from './components/slides/Slide6_Financials';
import Slide_CostScaling from './components/slides/Slide_CostScaling';
import Slide_Roadmap from './components/slides/Slide_Roadmap';
import Slide7_Growth from './components/slides/Slide7_Growth';
import Slide_Vision from './components/slides/Slide_Vision';
import Slide8_Contact from './components/slides/Slide8_Contact';
import { SectorConfig } from './types';

// Default initial data translated to Mongolian
const INITIAL_DATA: SectorConfig[] = [
  { id: 'taxi', name: "Таксины жолооч нар", totalMarket: 100000, adoptionRate: 15, price: 1.0, color: '#fcd34d' },
  { id: 'schools', name: "Сургууль/Хүүхдүүд", totalMarket: 900000, adoptionRate: 1, price: 1.5, color: '#60a5fa' },
  { id: 'banks', name: "Сүлжээ дэлгүүр", totalMarket: 3500, adoptionRate: 40, price: 3.0, color: '#94a3b8' },
  { id: 'grocery', name: "Хүнсний дэлгүүр", totalMarket: 3700, adoptionRate: 25, price: 2.0, color: '#86efac' },
  { id: 'hotels', name: "Зочид буудлууд", totalMarket: 2931, adoptionRate: 30, price: 3.0, color: '#d8b4fe' },
  { id: 'pharm', name: "Эмийн сангууд", totalMarket: 1523, adoptionRate: 30, price: 2.0, color: '#fca5a5' },
  { id: 'security', name: "Хамгаалалтын компани", totalMarket: 5000, adoptionRate: 60, price: 5.0, color: '#1e293b' },
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sectorData, setSectorData] = useState<SectorConfig[]>(INITIAL_DATA);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const slides = [
    Slide1_Title,
    Slide2_Problem,
    Slide3_Solution,
    Slide_GuardMonitor, // Added specific solution slide
    Slide_Architecture,
    Slide4_Market,
    Slide_NewMarket,
    Slide5_BusinessModel,
    Slide_Phase0,
    Slide6_Financials,
    Slide_CostScaling,
    Slide_Roadmap,
    Slide7_Growth,
    Slide_Vision,
    Slide8_Contact,
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const updateSectorData = (id: string, field: keyof SectorConfig, value: number) => {
    setSectorData(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const resetData = () => {
    setSectorData(INITIAL_DATA);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger navigation if editing inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="h-screen w-screen bg-slate-900 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Slide Container - Removed max constraints to fix whitespace on large screens */}
      <div className="relative w-full h-full aspect-video bg-white shadow-2xl overflow-hidden">
        
        {/* Content */}
        <div className="w-full h-full">
            <CurrentSlideComponent isActive={true} data={sectorData} />
        </div>

        {/* Floating Navigation Controls */}
        <div className="absolute bottom-6 right-6 flex items-center space-x-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-slate-200 z-40 transition-opacity opacity-50 hover:opacity-100">
          <span className="text-xs font-semibold text-slate-500 pl-2">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div className="h-4 w-px bg-slate-300 mx-2"></div>
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-700 transition-colors focus:outline-none"
            aria-label="Өмнөх хуудас"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 hover:bg-blue-50 rounded-full text-blue-600 transition-colors focus:outline-none"
            aria-label="Дараагийн хуудас"
          >
            <ChevronRight size={20} />
          </button>
          <div className="h-4 w-px bg-slate-300 mx-2"></div>
          <button
             onClick={() => setIsEditModalOpen(true)}
             className="p-2 hover:bg-slate-100 rounded-full text-slate-700 transition-colors focus:outline-none"
             aria-label="Өгөгдөл засах"
          >
            <Settings size={16} />
          </button>
          <button
             onClick={toggleFullscreen}
             className="p-2 hover:bg-slate-100 rounded-full text-slate-700 transition-colors focus:outline-none"
             aria-label="Дэлгэц дүүргэх"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Edit Modal Overlay */}
      {isEditModalOpen && (
        <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Танилцуулгын өгөгдлийг засах</h2>
                <p className="text-sm text-slate-500">Тоонуудыг өөрчлөхөд бүх хуудсан дээрх мэдээлэл бодит цагт шинэчлэгдэнэ.</p>
              </div>
              <div className="flex space-x-2">
                 <button 
                  onClick={resetData}
                  className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="Анхны утга руу буцаах"
                >
                  <RotateCcw size={20} />
                </button>
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto p-6 flex-1">
              <table className="w-full">
                <thead className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">Салбар</th>
                    <th className="px-4 py-3">Зах зээлийн хэмжээ</th>
                    <th className="px-4 py-3">Нэвтрэлт %</th>
                    <th className="px-4 py-3 rounded-tr-lg">Үнэ ($)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sectorData.map((sector) => (
                    <tr key={sector.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-4 py-4 font-bold text-slate-700">
                        {sector.name}
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          value={sector.totalMarket}
                          onChange={(e) => updateSectorData(sector.id, 'totalMarket', Number(e.target.value))}
                          className="w-full p-2 border border-slate-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all font-mono text-sm"
                        />
                      </td>
                      <td className="px-4 py-2">
                         <div className="relative">
                          <input
                            type="number"
                            value={sector.adoptionRate}
                            step="0.1"
                            onChange={(e) => updateSectorData(sector.id, 'adoptionRate', Number(e.target.value))}
                            className="w-full p-2 border border-slate-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all font-mono text-sm pr-8"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">%</span>
                         </div>
                      </td>
                      <td className="px-4 py-2">
                         <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                          <input
                            type="number"
                            value={sector.price}
                            step="0.01"
                            onChange={(e) => updateSectorData(sector.id, 'price', Number(e.target.value))}
                            className="w-full p-2 pl-6 border border-slate-200 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all font-mono text-sm"
                          />
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 text-right">
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
              >
                Дуусгах
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;