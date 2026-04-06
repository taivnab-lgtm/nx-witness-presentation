import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import { User, ShieldAlert, Store, EyeOff } from 'lucide-react';
import { SlideProps } from '../../types';

const Slide2_Problem: React.FC<SlideProps> = () => {
  const [vulnerableIndex, setVulnerableIndex] = useState(0);
  const [publicIndex, setPublicIndex] = useState(0);
  const [securityIndex, setSecurityIndex] = useState(0);

  const vulnerableImages = [
    "https://i.ibb.co/7m9MjqP/Untitled-design-6.png",
    "https://www.mokosmart.com/wp-content/uploads/2023/01/panic-button-for-elderly.webp"
  ];

  const publicImages = [
    "https://i.ibb.co/Dfvs4cCY/starting-harassment-dark-haired-client-hotel-starting-sexual-harassment-young-maid-259150-40105.avif",
    "https://i.ibb.co/67GGWcTD/Untitled-1-psd324.jpg"
  ];

  const securityImages = [
    "https://officerreports.com/wp-content/uploads/2025/08/sleeping-security-officer-768x512.png"
  ];

  useEffect(() => {
    // Slider for Vulnerable Groups (Card 2)
    const vInterval = setInterval(() => {
      setVulnerableIndex((prev) => (prev + 1) % vulnerableImages.length);
    }, 3500);

    // Slider for Public Facing (Card 3)
    const pInterval = setInterval(() => {
        setPublicIndex((prev) => (prev + 1) % publicImages.length);
      }, 4000); // Slightly different timing for visual variety

    // Slider for Security (Card 4)
    const sInterval = setInterval(() => {
        setSecurityIndex((prev) => (prev + 1) % securityImages.length);
    }, 4200);

    return () => {
        clearInterval(vInterval);
        clearInterval(pInterval);
        clearInterval(sInterval);
    };
  }, []);

  // Shared card classes for consistency
  const cardClasses = "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col";

  return (
    <Layout 
      title="Асуудал" 
      subtitle="Аюулгүй байдал бол тансаглал биш, нийтлэг хэрэгцээ."
    >
      <div className="h-full flex flex-col">
        {/* Grid layout with items-stretch to fill vertical space */}
        <div className="flex-1 grid grid-cols-4 gap-5">
            
            {/* Card 1: Solo Workers */}
            <div className={cardClasses}>
                <div className="flex-none">
                    <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
                        <User size={24} />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-800 mb-2">Ганцаараа ажиллагсад</h3>
                    <p className="text-slate-600 leading-snug mb-4 text-[17px]">
                        Таксины жолооч, дэлгүүрийн ажилтнууд ихэвчлэн ганцаараа ажилладаг.
                    </p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg flex-1 flex flex-col min-h-0">
                    <div className="flex justify-between items-baseline mb-2 flex-none">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Жишээ</span>
                         <span className="text-[10px] text-slate-700 font-bold">Шөнийн ээлжнийхэн</span>
                    </div>
                    <div className="w-full flex-1 rounded-md overflow-hidden relative group min-h-[120px]">
                         <img 
                             src="https://www.the-sun.com/wp-content/uploads/sites/6/2025/11/image_bea685.png?w=960" 
                             alt="Taxi Driver Safety Issue" 
                             className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                         />
                    </div>
                </div>
            </div>

            {/* Card 2: Vulnerable Groups (With Slider) */}
            <div className={cardClasses}>
                <div className="flex-none">
                    <div className="bg-red-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-red-600">
                        <ShieldAlert size={24} />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-800 mb-2">Эмзэг өртөмтгий бүлэг</h3>
                    <p className="text-slate-600 leading-snug mb-4 text-[17px]">
                        Хүүхэд, ахмад настнуудад энгийн шийдэл хэрэгтэй. Ухаалаг утас сандрах үед ашиглахад төвөгтэй байдаг.
                    </p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg flex-1 flex flex-col min-h-0">
                    <div className="flex justify-between items-baseline mb-2 flex-none">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Жишээ</span>
                         <span className="text-[10px] text-slate-700 font-bold">Ахмад настан & Хүүхэд</span>
                    </div>
                    <div className="w-full flex-1 rounded-md overflow-hidden relative group min-h-[120px]">
                         {vulnerableImages.map((src, index) => (
                             <img 
                                 key={index}
                                 src={src} 
                                 alt={`Safety Device ${index + 1}`} 
                                 className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                    index === vulnerableIndex 
                                        ? 'opacity-90 group-hover:opacity-100 scale-100 group-hover:scale-105 z-10' 
                                        : 'opacity-0 scale-100 z-0'
                                 }`}
                             />
                         ))}
                         {/* Dots indicator */}
                         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
                            {vulnerableImages.map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === vulnerableIndex ? 'bg-white' : 'bg-white/40'}`}
                                ></div>
                            ))}
                         </div>
                    </div>
                </div>
            </div>

            {/* Card 3: Public Facing (With Slider) */}
            <div className={cardClasses}>
                <div className="flex-none">
                    <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                        <Store size={24} />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-800 mb-2">Олон нийттэй харьцдаг</h3>
                    <p className="text-slate-600 leading-snug mb-4 text-[17px]">
                        Худалдаа, үйлчилгээний ажилчид төрөл бүрийн хүмүүстэй харьцдаг. Эрсдэл ихтэй үе бий.
                    </p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg flex-1 flex flex-col min-h-0">
                    <div className="flex justify-between items-baseline mb-2 flex-none">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Жишээ</span>
                         <span className="text-[10px] text-slate-700 font-bold">Зочид буудал</span>
                    </div>
                    <div className="w-full flex-1 rounded-md overflow-hidden relative group min-h-[120px]">
                        {publicImages.map((src, index) => (
                             <img 
                                 key={index}
                                 src={src} 
                                 alt={`Public Safety Issue ${index + 1}`} 
                                 className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                    index === publicIndex 
                                        ? 'opacity-90 group-hover:opacity-100 scale-100 group-hover:scale-105 z-10' 
                                        : 'opacity-0 scale-100 z-0'
                                 }`}
                             />
                         ))}
                         {/* Dots indicator */}
                         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
                            {publicImages.map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === publicIndex ? 'bg-white' : 'bg-white/40'}`}
                                ></div>
                            ))}
                         </div>
                    </div>
                </div>
            </div>

            {/* Card 4: Security (With Slider) */}
            <div className={cardClasses}>
                <div className="flex-none">
                    <div className="bg-slate-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-slate-600">
                        <EyeOff size={24} />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-800 mb-2">Харуул хамгаалалт</h3>
                    <p className="text-slate-600 leading-snug mb-4 text-[17px]">
                        Шөнийн ээлжийн харуул унтах, сонор сэрэмж алдах нь нийтлэг асуудал. Хяналтгүй үед эрсдэл эрс нэмэгддэг.
                    </p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg flex-1 flex flex-col min-h-0">
                    <div className="flex justify-between items-baseline mb-2 flex-none">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Жишээ</span>
                         <span className="text-[10px] text-slate-700 font-bold">Унтаж буй харуул</span>
                    </div>
                    <div className="w-full flex-1 rounded-md overflow-hidden relative group min-h-[120px]">
                        {securityImages.map((src, index) => (
                             <img 
                                 key={index}
                                 src={src} 
                                 alt={`Security Issue ${index + 1}`} 
                                 className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                    index === securityIndex 
                                        ? 'opacity-90 group-hover:opacity-100 scale-100 group-hover:scale-105 z-10' 
                                        : 'opacity-0 scale-100 z-0'
                                 }`}
                             />
                         ))}
                         {/* Dots indicator */}
                         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
                            {securityImages.map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === securityIndex ? 'bg-white' : 'bg-white/40'}`}
                                ></div>
                            ))}
                         </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="mt-6 bg-slate-900 rounded-xl p-6 flex items-center justify-between text-white shadow-xl flex-none">
            <div>
    
                <p className="text-slate-300 text-xl">Одоогийн шийдлүүд <span className="text-white font-semibold">хэт үнэтэй</span> (байгууллагын хамгаалалт) эсвэл <span className="text-white font-semibold">хэт төвөгтэй</span> (ухаалаг утасны апп) тул масс хэрэглээнд тохиромжгүй байна.</p>
            </div>

        </div>
      </div>
    </Layout>
  );
};

export default Slide2_Problem;