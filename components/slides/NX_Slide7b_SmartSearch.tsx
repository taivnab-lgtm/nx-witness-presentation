import React from 'react';
import Layout from '../Layout';
import { MousePointer2, Clock, Smartphone, Play, Zap } from 'lucide-react';

type Props = {
  isActive: boolean;
};

const VIDEO_ID = 'fghbvbFzbSI';
const IFRAME_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&vq=hd1080`;

const points = [
  {
    icon: <MousePointer2 className="text-red-500" size={22} />,
    title: 'Талбайг идэвхжүүлэх (Click & Drag)',
    desc: 'Уламжлалт хайлтыг мартаж, зөвхөн хэрэгтэй хэсгээ чирч сонгоход л хангалттай. Хаалга, зогсоол, эсвэл тодорхой объектыг шүүнэ.',
  },
  {
    icon: <Clock className="text-red-500" size={22} />,
    title: 'Шууд илэрц (Instant Timeline)',
    desc: 'Талбайг сонгомогц цагийн шугам дээр хөдөлгөөн гарсан агшнуудыг улаан зураасаар шууд ялгаж харуулна. Цаг алдахгүй.',
  },
  {
    icon: <Zap className="text-red-500" size={22} />,
    title: 'Метадата хайлтын хурд',
    desc: 'Видео файл ухахгүйгээр, текстийн мэдээлэл шүүж байгаа мэт маш хурдан ажиллана. Жилийн архивыг хэдхэн секундэд скан хийнэ.',
  },
  {
    icon: <Smartphone className="text-red-500" size={22} />,
    title: 'Гар утсанд дэмжигдсэн (Nx Mobile)',
    desc: 'Зөвхөн компьютер биш, гар утаснаасаа ч архивыг хөдөлгөөнөөр шүүж үзэх бүрэн боломжийг олгоно.',
  },
];

const NX_Slide7b_SmartSearch: React.FC<Props> = ({ isActive }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const rafRef = React.useRef<number | null>(null);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isOverHotspot, setIsOverHotspot] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  const updatePointerState = React.useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const clampedX = Math.max(0, Math.min(x, rect.width));
    const clampedY = Math.max(0, Math.min(y, rect.height));

    const isX = clampedX < rect.width * 0.7;
    const isY = clampedY > rect.height * 0.35;
    const nextHotspot = isX && isY;

    setMousePos((prev) => {
      if (prev.x === clampedX && prev.y === clampedY) return prev;
      return { x: clampedX, y: clampedY };
    });

    setIsOverHotspot((prev) => (prev === nextHotspot ? prev : nextHotspot));
  }, []);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isActive) return;
      if (!hasInteracted) setHasInteracted(true);

      const { clientX, clientY } = e;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updatePointerState(clientX, clientY);
      });
    },
    [isActive, hasInteracted, updatePointerState]
  );

  const handleMouseLeave = React.useCallback(() => {
    setIsOverHotspot(false);
  }, []);

  React.useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (!isActive) {
      setIsOverHotspot(false);
      setHasInteracted(false);
    }
  }, [isActive]);

  const showHud = isActive && hasInteracted;
  const showTargetBox = showHud && isOverHotspot;

  return (
    <Layout
      className="bg-slate-950"
      title="Smart Motion Search"
      subtitle="Ухаалаг Хөдөлгөөн Хайх: Цаг хугацааг товчилж, үр ашгийг дээшлүүлнэ."
    >
      <div className="h-full flex gap-12 items-center">
        <div className="w-5/12 space-y-8 text-left">
          <div className="space-y-4">
            <h3 className="mb-4 font-mono text-[17px] font-black uppercase tracking-[0.3em] text-red-500 underline decoration-2 decoration-red-500/50 underline-offset-8">
              CORE TECHNOLOGY
            </h3>

            <h4 className="text-[67px] font-black leading-tight tracking-tighter text-white">
              Архивыг секундийн <br />
              <span className="italic text-red-500">дотор шүүнэ.</span>
            </h4>

            <p className="text-[25px] leading-relaxed text-slate-400">
              NX Witness систем видео бичихдээ хөдөлгөөний метадатаг индексжүүлж хадгалдаг тул олон
              цагийн бичлэгийг гүйлгэж цаг үрэх шаардлагагүй.
            </p>
          </div>

          <div className="space-y-4">
            {points.map((p) => (
              <div
                key={p.title}
                className="group flex items-center gap-6 rounded-2xl border border-slate-800/50 bg-slate-900/40 p-4 backdrop-blur-sm transition-all hover:border-red-500/30"
              >
                <div className="rounded-xl bg-red-500/10 p-3 transition-colors group-hover:bg-red-500/20">
                  {p.icon}
                </div>

                <div>
                  <h5 className="mb-1 text-[22px] font-bold text-white">{p.title}</h5>
                  <p className="text-[17px] leading-relaxed text-slate-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-full w-7/12 items-center justify-center">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative w-full aspect-video overflow-hidden rounded-3xl border-2 border-slate-800 bg-slate-950 shadow-2xl ${
              isActive ? 'cursor-none' : 'cursor-default'
            }`}
          >
            <div className="absolute inset-0">
              <iframe
                className="pointer-events-none h-full w-full scale-[1.05]"
                src={isActive ? IFRAME_SRC : undefined}
                title="Smart Motion Search Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {!isActive && <div className="absolute inset-0 bg-slate-950" />}
            </div>

            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                showHud ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {showTargetBox && (
                <div
                  className="absolute h-[100px] w-[100px] rounded border-2 border-red-600 bg-red-600/20 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 100ms ease-out, top 100ms ease-out',
                  }}
                >
                  <div className="absolute left-0 top-0 -translate-y-5 whitespace-nowrap rounded bg-slate-950/80 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-red-500 shadow-lg">
                    Target Area [Active]
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[1px] w-4 bg-red-500/50" />
                    <div className="absolute h-4 w-[1px] bg-red-500/50" />
                  </div>
                </div>
              )}

              <div
                className="absolute h-4 w-4 rounded-full border border-white/40"
                style={{
                  left: mousePos.x,
                  top: mousePos.y,
                  transform: 'translate(-50%, -50%)',
                }}
              />

              <div className="absolute left-6 top-6 rounded border border-white/10 bg-slate-950/60 p-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full bg-red-500 ${
                      showTargetBox ? 'animate-pulse' : ''
                    }`}
                  />
                  <span className="text-[13px] font-black uppercase tracking-widest text-white">
                    Smart Scan Active
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-8 flex items-center gap-3">
              <div className="flex flex-col items-end">
                <div className="text-[8px] font-black uppercase text-slate-500">Playback Mode</div>
                <div className="text-[17px] font-black uppercase italic tracking-wider text-white">
                  Autoplay Clip by Clip
                </div>
              </div>

              <div className="rounded-full bg-red-600 p-3 shadow-[0_0_20px_#ef4444]">
                <Play size={20} className="fill-white text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NX_Slide7b_SmartSearch;
