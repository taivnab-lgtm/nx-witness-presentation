import React from 'react';
import Layout from '../Layout';
import { Users, Globe, BarChart3, Award, MapPin } from 'lucide-react';
import worldMap from '../../assets/nx_world_map_tech.png';

const MapBadge = ({ top, left, text }: { top: string; left: string; text: string }) => (
  <div 
    className="absolute flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[2px] border-blue-400 bg-slate-900 font-black text-blue-400 text-[10px] sm:text-[11px] z-20 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
    style={{ top, left, transform: 'translate(-50%, -50%)' }}
  >
    {text}
  </div>
);

const RedDot = ({ top, left }: { top: string; left: string }) => (
  <div 
    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400 z-10 shadow-[0_0_8px_rgba(248,113,113,0.6)]"
    style={{ top, left, transform: 'translate(-50%, -50%)' }}
  />
);

const NX_Slide1b_KeyFacts: React.FC<{ isActive: boolean }> = () => {
  const stats = [
    { 
      icon: <Users className="text-blue-400" />, 
      title: "Ажилтнууд: 209", 
      desc: "Инженерчлэл: 152 | Маркетинг: 38 | Захиргаа: 19",
      label: "The People"
    },
    { 
      icon: <BarChart3 className="text-blue-400" />, 
      title: "Нийт суваг: 5.6 сая+", 
      desc: "2024 онд 1 сая+ шинэ суваг идэвхжүүлсэн",
      label: "The Numbers"
    },
    { 
      icon: <MapPin className="text-blue-400" />, 
      title: "Олон улсын 7 Оффис", 
      desc: "ЛА, СФ, Амстердам, Белград, Тайпэй, Аделаида",
      label: "The Presence"
    },
    { 
      icon: <Award className="text-blue-400" />, 
      title: "Inc 5000: 9 Жил", 
      desc: "Салбартаа №1 зэрэглэлтэй",
      label: "The Accolades"
    }
  ];

  return (
    <Layout 
      className="bg-slate-950"
      title="Гол баримтууд" 
      subtitle="Network Optix: Дэлхийн хэмжээний амжилт ба цар хүрээ"
    >
      <div className="h-full flex gap-12 items-center">
        {/* Left Side: Text Info */}
        <div className="w-5/12 space-y-8">
          <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl">
             <h3 className="text-[17px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Overview</h3>
             <p className="text-slate-300 leading-relaxed text-[25px]">
                Network Optix нь 2010 онд үүсгэн байгуулагдсан, дэвшилтэт бөгөөд хэрэглэхэд хялбар видео удирдлагын шийдэл хөгжүүлэх алсын хараатай технологийн компани юм. Тус компани хялбар хэрэглээ, өргөжих боломж, ухаалаг видео платформын давуу талыг санал болгож, олон улсын байгууллагуудын үр ашиг, хяналтын чадамжийг дээшлүүлж байна.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="p-4 bg-slate-900/30 rounded-xl border border-slate-800/50 hover:border-blue-500/30 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                     {s.icon}
                   </div>
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
                </div>
                <h4 className="text-white font-bold text-[22px] mb-1">{s.title}</h4>
                <p className="text-[17px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: World Map Visualization */}
        <div className="w-7/12 relative h-full flex items-center justify-center">
          <div className="relative w-full overflow-hidden flex items-center justify-center">
             <img 
               src={worldMap} 
               alt="Global Presence Map" 
               className="w-full h-auto object-contain opacity-80"
             />
             
             {/* Map Markers Overlay */}
             <div className="absolute inset-0 top-[2%]"> 
               {/* US West Coast Badges */}
               <MapBadge top="32%" left="11%" text="3" />
               <MapBadge top="40%" left="11%" text="12" />
               <MapBadge top="48%" left="11%" text="41" />
               
               {/* Europe Badges */}
               <MapBadge top="28%" left="48%" text="11" />
               <MapBadge top="32%" left="51%" text="44" />
               
               {/* Asia Badge */}
               <MapBadge top="48%" left="84%" text="7" />
               
               {/* Australia Badge */}
               <MapBadge top="85%" left="86%" text="5" />

               {/* Scattered Red Dots */}
               <RedDot top="41%" left="14%" />
               <RedDot top="35%" left="27%" />
               <RedDot top="39%" left="21%" />
               <RedDot top="46%" left="23%" />
               <RedDot top="62%" left="24%" />
               <RedDot top="70%" left="33%" />

               <RedDot top="26%" left="46%" />
               <RedDot top="31%" left="45%" />
               <RedDot top="34%" left="46%" />
               <RedDot top="29%" left="50%" />
               <RedDot top="36%" left="52%" />
               <RedDot top="41%" left="54%" />

               <RedDot top="31%" left="57%" />
               <RedDot top="36%" left="60%" />
               <RedDot top="34%" left="66%" />
               <RedDot top="46%" left="63%" />
               
               <RedDot top="55%" left="72%" />
               <RedDot top="61%" left="72%" />
               <RedDot top="42%" left="85%" />
               <RedDot top="58%" left="81%" />
               <RedDot top="56%" left="78%" />
             </div>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    </Layout>
  );
};

export default NX_Slide1b_KeyFacts;
