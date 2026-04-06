import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Settings, X, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NX_Slide1_Title from './components/slides/NX_Slide1_Title';
import NX_Slide1b_KeyFacts from './components/slides/NX_Slide1b_KeyFacts';
import NX_Slide2_Vision from './components/slides/NX_Slide2_Vision';
import NX_Slide4_Hive from './components/slides/NX_Slide4_Hive';
import NX_Slide7b_SmartSearch from './components/slides/NX_Slide7b_SmartSearch';
import NX_Slide7c_ZoomWindow from './components/slides/NX_Slide7c_ZoomWindow';
import NX_Slide7e_Hotspots from './components/slides/NX_Slide7e_Hotspots';
import NX_Slide11_SoftTrigger from './components/slides/NX_Slide11_SoftTrigger';
import NX_Slide12_Recording from './components/slides/NX_Slide12_Recording';
import NX_Slide13_EventRules from './components/slides/NX_Slide13_EventRules';
import NX_Slide14_AuditTrail from './components/slides/NX_Slide14_AuditTrail';
import NX_Slide8_Cloud from './components/slides/NX_Slide8_Cloud';
// New slides from PPTX
import NX_Slide_StorageBackup from './components/slides/NX_Slide_StorageBackup';
import NX_Slide_EmailNotification from './components/slides/NX_Slide_EmailNotification';
import NX_Slide_UserManagement from './components/slides/NX_Slide_UserManagement';
import NX_Slide_TempUser from './components/slides/NX_Slide_TempUser';
import NX_Slide_CloudClient from './components/slides/NX_Slide_CloudClient';
import NX_Slide_2FA from './components/slides/NX_Slide_2FA';
import NX_Slide_MobileApp from './components/slides/NX_Slide_MobileApp';
import NX_Slide_Lightweight from './components/slides/NX_Slide_Lightweight';
import NX_Slide_SectionIntegrations from './components/slides/NX_Slide_SectionIntegrations';
import NX_Slide_Toolkit from './components/slides/NX_Slide_Toolkit';
import NX_Slide_IntegrationPartners from './components/slides/NX_Slide_IntegrationPartners';
import NX_Slide_InCameraAnalytics from './components/slides/NX_Slide_InCameraAnalytics';
import NX_Slide_AnalyticsSoftware from './components/slides/NX_Slide_AnalyticsSoftware';
import NX_Slide_AdvancedObjectSearch from './components/slides/NX_Slide_AdvancedObjectSearch';
import NX_Slide_SectionIntegrationPartners from './components/slides/NX_Slide_SectionIntegrationPartners';
import NX_Slide_AccessControl from './components/slides/NX_Slide_AccessControl';
import NX_Slide_FaceRecognition from './components/slides/NX_Slide_FaceRecognition';
import NX_Slide_FaceTracking from './components/slides/NX_Slide_FaceTracking';
import NX_Slide_LPR from './components/slides/NX_Slide_LPR';
import NX_Slide_ObjectRecognition from './components/slides/NX_Slide_ObjectRecognition';
import NX_Slide_IoT from './components/slides/NX_Slide_IoT';
import NX_Slide_SectionLicensing from './components/slides/NX_Slide_SectionLicensing';
import NX_Slide_Licensing from './components/slides/NX_Slide_Licensing';

const App_NX: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    NX_Slide1_Title,
    NX_Slide1b_KeyFacts,
    NX_Slide2_Vision,
    NX_Slide4_Hive,
    NX_Slide7b_SmartSearch,
    NX_Slide7c_ZoomWindow,
    NX_Slide7e_Hotspots,
    NX_Slide11_SoftTrigger,
    NX_Slide12_Recording,
    NX_Slide13_EventRules,
    NX_Slide14_AuditTrail,
    NX_Slide8_Cloud,
    // New slides from PPTX
    NX_Slide_StorageBackup,
    NX_Slide_EmailNotification,
    NX_Slide_UserManagement,
    NX_Slide_TempUser,
    NX_Slide_CloudClient,
    NX_Slide_2FA,
    NX_Slide_MobileApp,
    NX_Slide_Lightweight,
    NX_Slide_SectionIntegrations,
    NX_Slide_Toolkit,
    NX_Slide_IntegrationPartners,
    NX_Slide_InCameraAnalytics,
    NX_Slide_AnalyticsSoftware,
    NX_Slide_AdvancedObjectSearch,
    NX_Slide_SectionIntegrationPartners,
    NX_Slide_AccessControl,
    NX_Slide_FaceRecognition,
    NX_Slide_FaceTracking,
    NX_Slide_LPR,
    NX_Slide_ObjectRecognition,
    NX_Slide_IoT,
    NX_Slide_SectionLicensing,
    NX_Slide_Licensing,
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
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

  useEffect(() => {
    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;
    let wheelAccumulator = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger navigation if editing inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // If the event target (or any scrollable ancestor) can still scroll in
      // the wheel direction, let the browser handle it natively.
      let node = e.target as HTMLElement | null;
      while (node && node !== document.documentElement) {
        const style = window.getComputedStyle(node);
        const oy = style.overflowY;
        const scrollable = (oy === 'auto' || oy === 'scroll') && node.scrollHeight > node.clientHeight + 2;
        if (scrollable) {
          const atTop    = node.scrollTop <= 1;
          const atBottom = node.scrollTop >= node.scrollHeight - node.clientHeight - 2;
          const goingUp  = e.deltaY < 0;
          const goingDown = e.deltaY > 0;
          // Not at boundary — let the element scroll naturally
          if (!((atTop && goingUp) || (atBottom && goingDown))) return;
          break;
        }
        node = node.parentElement;
      }

      // Also let the outer page scroll naturally if a scrollbar is visible
      const pageOverflows = document.documentElement.scrollHeight > document.documentElement.clientHeight + 4;
      if (pageOverflows) return;

      // No scrollable content — navigate slides
      wheelAccumulator += e.deltaY;
      if (wheelTimeout) return;
      wheelTimeout = setTimeout(() => {
        if (wheelAccumulator > 30)       nextSlide();
        else if (wheelAccumulator < -30) prevSlide();
        wheelAccumulator = 0;
        wheelTimeout = null;
      }, 180);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  const pageFlipVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      originX: direction > 0 ? 1 : 0,
      z: -500,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      originX: 0.5,
      z: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.64, 0.04, 0.35, 1], // easeInOutCubic for a smooth flip
      }
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      originX: direction > 0 ? 0 : 1,
      z: -500,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.64, 0.04, 0.35, 1],
      }
    }),
  };

  const visualW = 1920 * scale;
  const visualH = 1080 * scale;

  return (
    <div
      className="w-screen bg-slate-950 overflow-x-hidden overflow-y-auto font-sans text-slate-200"
      style={{ minHeight: '100vh' }}
    >
      {/* Centering wrapper — visual dimensions match scaled canvas */}
      <div
        className="flex justify-center"
        style={{
          paddingTop: `max(0px, calc((100vh - ${visualH}px) / 2))`,
          paddingBottom: `max(0px, calc((100vh - ${visualH}px) / 2))`,
        }}
      >
        {/* Visual-size container to fix layout/transform mismatch */}
        <div style={{ width: `${visualW}px`, height: `${visualH}px`, position: 'relative', flexShrink: 0 }}>

      {/* 1920x1080 Virtual Canvas scaled to fit Screen */}
      <div
        className="relative bg-slate-900 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          transition: 'transform 0.1s ease-out',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <div 
          className="w-full h-full relative"
          style={{ perspective: '2500px', transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={pageFlipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full absolute inset-0"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <CurrentSlideComponent isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Navigation Controls */}
        <div className="absolute bottom-6 right-6 flex items-center space-x-4 bg-slate-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-slate-700 z-40 transition-opacity opacity-50 hover:opacity-100">
          <span className="text-xs font-semibold text-slate-400 pl-2">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div className="h-4 w-px bg-slate-600 mx-2"></div>
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-slate-700 rounded-full text-slate-300 transition-colors focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 hover:bg-blue-600 rounded-full text-white transition-colors focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
          <div className="h-4 w-px bg-slate-600 mx-2"></div>
          <button
             onClick={toggleFullscreen}
             className="p-2 hover:bg-slate-700 rounded-full text-slate-300 transition-colors focus:outline-none"
             aria-label="Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out shadow-[0_0_10px_#3b82f6]"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
        </div>
        </div>{/* end visual-size container */}
      </div>{/* end centering wrapper */}
    </div>
  );
};

export default App_NX;
