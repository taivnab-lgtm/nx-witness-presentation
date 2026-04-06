import React, { useState } from 'react';
import Layout from '../Layout';
import { Share2, ShieldCheck, Zap, Database, Cpu, Activity } from 'lucide-react';

const HiveNetworkVisual = () => {
    const [failedServer, setFailedServer] = useState<number | null>(null);
    const [isRebalancing, setIsRebalancing] = useState(false);

    // 7 nodes in an organic (non-symmetrical) placement
    const nodes = [
        { id: 1, x: 500, y: 375, label: 'Core Server' }, // Slightly central
        { id: 2, x: 420, y: 150, label: 'Edge 01' },
        { id: 3, x: 700, y: 250, label: 'Bridge 02' },
        { id: 4, x: 750, y: 500, label: 'Node 03' },
        { id: 5, x: 520, y: 620, label: 'Storage 04' },
        { id: 6, x: 280, y: 530, label: 'Relay 05' },
        { id: 7, x: 220, y: 280, label: 'Gateway 06' },
    ];

    // Generate FULL MESH connections (all possible pairs)
    const connections: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            connections.push([nodes[i].id, nodes[j].id]);
        }
    }

    const handleHover = (id: number | null) => {
        setFailedServer(id);
        setIsRebalancing(id !== null);
    };

    const failedNode = nodes.find(n => n.id === failedServer);

    return (
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-950/50 shadow-2xl group select-none">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             <svg viewBox="0 0 1000 750" className="w-full h-full p-8">
                <defs>
                    <linearGradient id="failGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                </defs>

                {/* Draw FULL MESH Connections */}
                {connections.map(([a, b], i) => {
                    const nodeA = nodes.find(n => n.id === a)!;
                    const nodeB = nodes.find(n => n.id === b)!;
                    const isA_Failed = a === failedServer;
                    const isB_Failed = b === failedServer;
                    const isInvolvingFail = isA_Failed || isB_Failed;
                    
                    return (
                        <g key={i}>
                            <line 
                                x1={nodeA.x} y1={nodeA.y} x2={nodeB.x} y2={nodeB.y} 
                                stroke={isInvolvingFail ? "#ef4444" : "#1e3a8a"} 
                                strokeWidth={isInvolvingFail ? "1" : "0.5"} 
                                className="opacity-20 transition-all duration-500"
                            />
                            {/* Pulse Flow only between non-failed nodes */}
                            {!isInvolvingFail && (
                                <line 
                                    x1={nodeA.x} y1={nodeA.y} x2={nodeB.x} y2={nodeB.y} 
                                    stroke="#3b82f6" 
                                    strokeWidth="0.5" 
                                    strokeDasharray="5 20"
                                    className="opacity-30 animate-[flow_10s_linear_infinite]"
                                />
                            )}
                        </g>
                    );
                })}

                {/* Draw Nodes */}
                {nodes.map((node) => {
                    const isFailed = failedServer === node.id;
                    return (
                        <g 
                            key={node.id} 
                            onMouseEnter={() => handleHover(node.id)}
                            onMouseLeave={() => handleHover(null)}
                            className="cursor-pointer group/node"
                        >
                            {/* Inner Glow */}
                            <circle 
                                cx={node.x} cy={node.y} r={isFailed ? "55" : "38"} 
                                fill={isFailed ? "#ef444420" : "#3b82f610"} 
                                className={`transition-all duration-500 ${isFailed ? "animate-pulse" : "group-hover/node:fill-blue-500/20"}`}
                            />
                            
                            {/* Node Rect */}
                            <rect 
                                x={node.x - 22} y={node.y - 22} width="44" height="44" 
                                rx="10" 
                                fill={isFailed ? "#7f1d1d" : "#0f172a"} 
                                stroke={isFailed ? "#ef4444" : "#3b82f6"} 
                                strokeWidth="2"
                                className={`transition-all duration-500 ${isFailed ? "shadow-[0_0_20px_#ef4444]" : "shadow-[0_0_10px_#3b82f633]"}`}
                            />

                            {/* Failover Animation Particles */}
                            {isRebalancing && isFailed && nodes.filter(n => n.id !== node.id).map((target, k) => (
                                <circle 
                                    key={k} cx={node.x} cy={node.y} r="4" 
                                    fill="#60a5fa" 
                                    className="distribute-dot animate-[distribute_2.5s_infinite]"
                                    style={{ 
                                        '--tx': `${target.x - node.x}px`, 
                                        '--ty': `${target.y - node.y}px`,
                                        animationDelay: `${k * 0.1}s`
                                    } as any}
                                />
                            ))}

                            {/* Label */}
                            <text 
                                x={node.x} y={node.y + 45} textAnchor="middle" 
                                fill={isFailed ? "#ef4444" : "#64748b"} 
                                fontSize="9" className="font-mono font-bold tracking-wider"
                            >
                                {node.label}
                            </text>
                        </g>
                    );
                })}
             </svg>

             {/* Dynamic UI Overlays */}
             <div className="absolute top-8 left-8 flex flex-col gap-3">
                <div className={`flex items-center gap-2 p-2 rounded-lg border backdrop-blur-md transition-all duration-500 ${failedServer ? 'bg-red-950/40 border-red-500/30' : 'bg-slate-900/90 border-blue-500/20'}`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${failedServer ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                    <div className={`text-[17px] font-black uppercase tracking-tight ${failedServer ? 'text-red-400' : 'text-white'}`}>
                        {failedServer ? `ДОГОЛДОЛ: СЕРВЕР ${failedServer}` : "БҮХ ЗАНГИЛААНУУД СИНХРОНЧЛОГДЛОО"}
                    </div>
                </div>
                <div className="text-[13px] text-slate-500 bg-slate-900/40 p-2 rounded-md border border-slate-800">
                   {failedServer 
                     ? `АЧААЛАЛ ШИЛЖҮҮЛЭГДЭЖ БАЙНА: ${nodes.length - 1} СЕРВЕР РҮҮ ХУВААРИЛАВ` 
                     : "СҮЛЖЭЭНИЙ ХӨДӨЛГӨӨН - ХЭВИЙН"}
                </div>
             </div>

             <div className="absolute top-8 right-8 flex gap-2">
                <div className="px-3 py-1 bg-blue-600 rounded-md text-[13px] font-black text-white uppercase tracking-widest">Төв зангилаагүй</div>
             </div>

             <div className="absolute bottom-10 inset-x-10 text-center opacity-40 group-hover:opacity-100 transition-opacity">
                <p className="text-[12px] text-slate-500 uppercase tracking-[0.3em] font-black italic underline decoration-blue-500/30 underline-offset-4">Дурын сервер дээр очиж системийн доголдлыг туршиж үзнэ үү</p>
             </div>

             <style>{`
                @keyframes flow { to { stroke-dashoffset: -100; } }
                @keyframes distribute {
                    0% { transform: translate(0, 0); opacity: 1; scale: 1.2; }
                    50% { transform: translate(var(--tx), var(--ty)); opacity: 1; scale: 1; }
                    100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
                }
                .distribute-dot {
                    transform-box: fill-box;
                    transform-origin: center;
                }
             `}</style>
        </div>
    );
};

const NX_Slide4_Hive: React.FC<{ isActive: boolean }> = () => {
    const points = [
        {
            icon: <Share2 className="text-blue-400" size={20} />,
            title: "Peer-to-Peer Mesh",
            desc: "Серверүүд хоорондоо шууд холбогдсон тул төв зангилаа шаардлагагүй."
        },
        {
            icon: <ShieldCheck className="text-blue-400" size={20} />,
            title: "Smart Failover",
            desc: "Аль ч сервер унахад бусад нь ачааллыг тэнцвэртэйгээр хуваан авна."
        },
        {
            icon: <Zap className="text-blue-400" size={20} />,
            title: "No Single Point of Failure",
            desc: "Систем бүхэлдээ зогсох аюулгүй. Тасралтгүй ажиллагааны дээд түвшин."
        },
        {
            icon: <Activity className="text-blue-400" size={20} />,
            title: "16-Node Cluster",
            desc: "Нэг сүлжээнд 128 хүртэлх серверийг нэг цул систем болгон ажиллуулна."
        }
    ];

    return (
        <Layout
            className="bg-slate-950"
            title="Hive Архитектур"
            subtitle="Ухаалаг Failover ба Хязгааргүй Өргөтгөл: Serverless хувьсгал."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content (5/12) */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-[17px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">ARCHITECTURE</h3>
                        <h4 className="text-[50px] font-black text-white leading-tight">
                            Нэг цэгийн доголдолгүй <br />
                            <span className="text-blue-500">Системийн Архитектур.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            NX Witness-ийн Hive архитектурт бүх серверүүд хоорондоо шууд холболттой (Fully Mesh). Аль ч сервер дээр очиж "Failure" үүсгэхэд систем түүний ажлыг бусаддаа шууд даатгадаг.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {points.map((p, i) => (
                            <div key={i} className="p-5 bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
                                <div className="mb-3 p-2 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                    {p.icon}
                                </div>
                                <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                <p className="text-[17px] text-slate-500 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center">
                    <HiveNetworkVisual />
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide4_Hive;
