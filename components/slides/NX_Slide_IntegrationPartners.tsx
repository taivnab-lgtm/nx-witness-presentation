import React, { useEffect, useRef } from 'react';
import Layout from '../Layout';
import { Globe, Users, Award, Brain, Shield, Map, Monitor, LayoutGrid, Wifi } from 'lucide-react';

// Each spoke: category + icon + color + brand logos
const SPOKES = [
  {
    label: 'AI Analytics',
    icon: Brain,
    color: { bg: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.5)', text: '#c084fc', glow: '#a855f7' },
    angle: -90,
    brands: [
      { name: 'Cyberlink', logo: '/assets/logos/cyberlink.svg' },
      { name: 'VCA Tech', logo: null },
      { name: 'Aira', logo: null },
    ],
  },
  {
    label: 'Access Control',
    icon: Shield,
    color: { bg: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.5)', text: '#86efac', glow: '#22c55e' },
    angle: -30,
    brands: [
      { name: 'Suprema', logo: '/assets/logos/suprema.svg' },
      { name: 'Gallagher', logo: '/assets/logos/gallagher.svg' },
      { name: 'Chiyu', logo: null },
    ],
  },
  {
    label: 'GIS / Maps',
    icon: Map,
    color: { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.5)', text: '#fde047', glow: '#eab308' },
    angle: 30,
    brands: [
      { name: 'Esri', logo: '/assets/logos/esri.svg' },
      { name: 'Mapbox', logo: '/assets/logos/mapbox.svg' },
      { name: 'Google Maps', logo: '/assets/logos/googlemaps.svg' },
    ],
  },
  {
    label: 'PSIM',
    icon: Monitor,
    color: { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.5)', text: '#fca5a5', glow: '#ef4444' },
    angle: 90,
    brands: [
      { name: 'Genetec', logo: '/assets/logos/genetec.svg' },
      { name: 'Milestone', logo: '/assets/logos/milestone.svg' },
      { name: 'IndigoVision', logo: null },
    ],
  },
  {
    label: 'Video Matrix',
    icon: LayoutGrid,
    color: { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.5)', text: '#fdba74', glow: '#f97316' },
    angle: 150,
    brands: [
      { name: 'Axis', logo: '/assets/logos/axis.svg' },
      { name: 'Hikvision', logo: '/assets/logos/hikvision.svg' },
      { name: 'Datapath', logo: null },
    ],
  },
  {
    label: 'IoT',
    icon: Wifi,
    color: { bg: 'rgba(6,182,212,0.15)', border: 'rgba(6,182,212,0.5)', text: '#67e8f9', glow: '#06b6d4' },
    angle: 210,
    brands: [
      { name: 'Siemens', logo: '/assets/logos/siemens.svg' },
      { name: 'Bosch', logo: '/assets/logos/bosch.svg' },
      { name: 'ONLY', logo: null },
    ],
  },
];

const RADIUS = 195;
const CENTER = 260;
const CANVAS = 520;

const NX_Slide_IntegrationPartners: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const points = [
    { icon: <Award className="text-blue-400" size={22} />, title: '20+ OEM Versions', desc: 'Дэлхийн болон бүс нутгийн 20 гаруй OEM хувилбараар түгээгдэнэ.' },
    { icon: <Users className="text-blue-400" size={22} />, title: '190+ Distributors', desc: 'Дэлхийн 190 гаруй бүс нутгийн дистрибьютор, дахин борлуулагчидтай.' },
    { icon: <Globe className="text-blue-400" size={22} />, title: '100+ Ecosystem Partners', desc: 'Видео аналитик, PSIM, GIS Map, нэвтрэх хяналт болон бусад 100+ партнер.' },
  ];

  return (
    <Layout className="bg-slate-950" title="Integration Partners" subtitle="Дэлхийн 100+ экосистемийн партнеруудтай нэгдсэн нээлттэй платформ.">
      <div className="h-full flex gap-8 items-center">
        {/* Left column */}
        <div className="w-5/12 space-y-6 text-left">
          <div className="space-y-3">
            <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono">ECOSYSTEM</h3>
            <h4 className="text-[56px] font-black text-white leading-tight tracking-tighter">
              Нэг платформ <br /><span className="text-blue-500 italic">бүх шийдлүүд.</span>
            </h4>
            <p className="text-slate-400 text-[22px] leading-relaxed">
              Nx Witness нь дэлхийн тэргүүлэх аюулгүй байдлын технологийн компаниудтай нягт хамтран ажилладаг нээлттэй платформ юм.
            </p>
          </div>
          <div className="space-y-3">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors shrink-0">{p.icon}</div>
                <div>
                  <h5 className="font-bold text-white text-[20px] mb-0.5">{p.title}</h5>
                  <p className="text-[15px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — hub and spoke */}
        <div className="w-7/12 h-full flex items-center justify-center">
          <div className="relative" style={{ width: CANVAS, height: CANVAS }}>
            {/* SVG: lines + rings */}
            <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${CANVAS} ${CANVAS}`}>
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                {SPOKES.map((s, i) => (
                  <linearGradient key={i} id={`lineGrad${i}`} gradientUnits="userSpaceOnUse"
                    x1={CENTER} y1={CENTER}
                    x2={CENTER + RADIUS * Math.cos((s.angle * Math.PI) / 180)}
                    y2={CENTER + RADIUS * Math.sin((s.angle * Math.PI) / 180)}>
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor={s.color.glow} stopOpacity="0.8" />
                  </linearGradient>
                ))}
              </defs>

              {/* Glow behind center */}
              <circle cx={CENTER} cy={CENTER} r="80" fill="url(#centerGlow)" />

              {/* Outer ring */}
              <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.12" />
              {/* Mid ring */}
              <circle cx={CENTER} cy={CENTER} r={RADIUS * 0.55} fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.07" strokeDasharray="6 6" />

              {/* Animated spoke lines */}
              {SPOKES.map((s, i) => {
                const rad = (s.angle * Math.PI) / 180;
                const x2 = CENTER + RADIUS * Math.cos(rad);
                const y2 = CENTER + RADIUS * Math.sin(rad);
                return (
                  <g key={i}>
                    {/* Base line */}
                    <line x1={CENTER} y1={CENTER} x2={x2} y2={y2}
                      stroke={`url(#lineGrad${i})`} strokeWidth="1.5" strokeOpacity="0.3" />
                    {/* Animated dashes */}
                    <line x1={CENTER} y1={CENTER} x2={x2} y2={y2}
                      stroke={s.color.glow} strokeWidth="2" strokeOpacity="0.6"
                      strokeDasharray="8 24"
                      style={{ animation: `flowDash${i % 3} ${2 + i * 0.3}s linear infinite` }} />
                  </g>
                );
              })}

              {/* Orbit ring animation */}
              <circle cx={CENTER} cy={CENTER} r={RADIUS * 0.75} fill="none"
                stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.15"
                strokeDasharray="40 20"
                style={{ animation: 'spinRing 20s linear infinite', transformOrigin: `${CENTER}px ${CENTER}px` }} />
            </svg>

            {/* Center Nx hub */}
            <div className="absolute" style={{ width: 100, height: 100, left: CENTER - 50, top: CENTER - 50 }}>
              <div className="w-full h-full rounded-full bg-blue-600 border-2 border-blue-400 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                style={{ animation: 'pulseHub 3s ease-in-out infinite' }}>
                <span className="text-white font-black text-[32px] tracking-tight">Nx</span>
              </div>
              {/* Ripple rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                style={{ animation: 'ripple 3s ease-out infinite' }} />
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                style={{ animation: 'ripple 3s ease-out infinite 1s' }} />
            </div>

            {/* Spoke nodes */}
            {SPOKES.map((spoke, i) => {
              const rad = (spoke.angle * Math.PI) / 180;
              const nx = CENTER + RADIUS * Math.cos(rad);
              const ny = CENTER + RADIUS * Math.sin(rad);
              const IconComp = spoke.icon;
              const nodeW = 140;
              const nodeH = 60;

              return (
                <div key={i} className="absolute" style={{
                  left: nx - nodeW / 2,
                  top: ny - nodeH / 2,
                  width: nodeW,
                  animation: `floatNode 4s ease-in-out infinite ${i * 0.5}s`,
                }}>
                  {/* Main node */}
                  <div className="flex flex-col items-center justify-center rounded-2xl border px-3 py-2 backdrop-blur-sm"
                    style={{
                      background: spoke.color.bg,
                      borderColor: spoke.color.border,
                      boxShadow: `0 0 20px ${spoke.color.glow}33`,
                      height: nodeH,
                    }}>
                    <div className="flex items-center gap-2">
                      <IconComp size={18} style={{ color: spoke.color.text }} />
                      <span className="font-bold text-[16px] whitespace-nowrap" style={{ color: spoke.color.text }}>
                        {spoke.label}
                      </span>
                    </div>
                  </div>

                  {/* Brand logos below the node */}
                  <div className="flex gap-1 justify-center mt-2 flex-wrap">
                    {spoke.brands.map((brand, j) => (
                      <div key={j} className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/50">
                        {brand.logo ? (
                          <img src={brand.logo} alt={brand.name}
                            className="h-4 w-auto object-contain opacity-90"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        ) : null}
                        <span className="text-[11px] text-slate-300 font-medium whitespace-nowrap">{brand.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flowDash0 { to { stroke-dashoffset: -64; } }
        @keyframes flowDash1 { to { stroke-dashoffset: -64; } }
        @keyframes flowDash2 { to { stroke-dashoffset: -64; } }
        @keyframes spinRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseHub {
          0%, 100% { box-shadow: 0 0 40px rgba(59,130,246,0.6); }
          50% { box-shadow: 0 0 70px rgba(59,130,246,0.9); }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes floatNode {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </Layout>
  );
};

export default NX_Slide_IntegrationPartners;
