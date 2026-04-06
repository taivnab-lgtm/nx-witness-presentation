import React from 'react';
import Layout from '../Layout';
import { 
  Zap, 
  ArrowRight, 
  Database, 
  Bell, 
  Smartphone, 
  DoorOpen, 
  Camera, 
  Settings, 
  Workflow, 
  ShieldAlert,
  Send,
  Terminal,
  Activity,
  ChevronRight,
  Eye,
  Cpu,
  ScanLine,
  Server,
  User,
  ShieldCheck,
  Binary,
  Plus
} from 'lucide-react';

// Balanced Layout Constants
const HUB_X = 402;
const HUB_Y = 320; // Lowered center to accommodate 5 nodes
const INPUT_START_X = 130;
const ACTION_END_X = 580;
const ACTION_CARD_X = 580;
const ACTION_CARD_WIDTH = 280;
const ACTION_CARD_HEIGHT = 80;
const inputYPositions = [110, 320, 530];

const NX_Slide13_EventRules: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const [phase, setPhase] = React.useState<'idle' | 'input' | 'packet' | 'process' | 'action'>('idle');
    const [activeNodes, setActiveNodes] = React.useState<number[]>([]);
    const [activeInputIndex, setActiveInputIndex] = React.useState(0);
    const [logs, setLogs] = React.useState<string[]>([]);
    const logContainerRef = React.useRef<HTMLDivElement>(null);
    const timersRef = React.useRef<NodeJS.Timeout[]>([]);

    const plateImg = "/assets/slide/Slide 10/plate_1234uba.png";
    const faceImg = "/assets/slide/Slide 10/face_ai.png";

    const inputNodes = [
        { id: 'lpr', label: 'EVENT SOURCE', sub: '3rd-Party AI / LPR', icon: <ScanLine size={20} /> },
        { id: 'ai', label: 'SYSTEM EVENT', sub: 'Camera Analytics', icon: <Camera size={20} /> },
        { id: 'server', label: 'GENERIC EVENT', sub: 'HTTP / API Request', icon: <Server size={20} /> }
    ];

    const actionNodes = [
        { icon: <Smartphone size={20} />, label: "MOBILE & SITE ALERT", desc: "Push notification & site workflow", y: 90 },
        { icon: <DoorOpen size={20} />, label: "HTTP GATEWAY", desc: "API: ALLOW_GATE_ENTRY", y: 205 },
        { icon: <Camera size={20} />, label: "PTZ CONTROL", desc: "Focusing on parking lane 3", y: 320 },
        { icon: <Database size={20} />, label: "ERP INTEGRATION", desc: "Sync to SAP / Oracle / Odoo", y: 435 },
        { icon: <Plus size={20} />, label: "AND MUCH MORE...", desc: "Infinite API & SDK integrations", y: 550 }
    ];

    const [viewMode, setViewMode] = React.useState<'visual' | 'image'>('visual');
    const logsArr = ["ACTION: Mobile & Site alerts SENT", "ACTION: Gate relay OPEN", "ACTION: PTZ Auto-track ACTIVE", "ACTION: ERP Data synchronization SUCCESS"];
    const eventRuleImg = "/assets/slide/Slide 10/Event rule.png";

    const addLog = (msg: string) => {
        setLogs(prev => {
            if (prev[prev.length - 1]?.includes(msg)) return prev;
            return [...prev.slice(-3), `[${new Date().toLocaleTimeString([], {hour12: false})}] ${msg}`];
        });
    };

    const runSequence = () => {
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
        setPhase('idle');
        setActiveNodes([]);
        setLogs([]);

        const addTimeout = (fn: () => void, delay: number) => {
            const timer = setTimeout(fn, delay);
            timersRef.current.push(timer);
        };

        addTimeout(() => {
            if (!isActive) return;
            setPhase('input');
            const msgs = ["INBOUND EVENT: LPR Data detected", "ANALYTICS: Object meta received", "API CALL: External trigger active", "CRITICAL: Simultaneous Multi-Source Trigger"];
            addLog(msgs[activeInputIndex]);
        }, 800);

        addTimeout(() => {
            if (!isActive) return;
            setPhase('packet');
            const msgs = ["EVENT DATA: [1234 УБА]", "OBJECT DATA: [HUMAN]", "JSON PACKET: [metadata]", "DATA BURST: [LPR, AI, JSON]"];
            addLog(msgs[activeInputIndex]);
        }, 2200);

        addTimeout(() => {
            if (!isActive) return;
            setPhase('process');
            addLog(activeInputIndex === 3 ? "RULE ENGINE: Multi-Condition Complex Match" : "RULE ENGINE: Condition Match - [IF_PLATE_WHITELIST]");
        }, 3700);

        addTimeout(() => {
            if (!isActive) return;
            setPhase('action');
            [0, 1, 2, 3, 4].forEach((i) => {
                addTimeout(() => {
                    setActiveNodes(prev => {
                        if (prev.includes(i)) return prev;
                        return [...prev, i];
                    });
                    if (i < 4) {
                        const logsArr = ["ACTION: Mobile & Site alerts SENT", "ACTION: Gate relay OPEN", "ACTION: PTZ Auto-track ACTIVE", "ACTION: ERP Data synchronization SUCCESS"];
                        addLog(logsArr[i]);
                    } else {
                        addLog("ACTION: Custom API [Integration] Executed");
                    }
                }, (i + 1) * 600);
            });
        }, 4200);

        addTimeout(() => {
            if (isActive) {
                setActiveInputIndex(prev => (prev + 1) % 4);
                runSequence();
            }
        }, 12000);
    };

    React.useEffect(() => {
        if (isActive) runSequence();
        return () => {
            timersRef.current.forEach(clearTimeout);
            timersRef.current = [];
        };
    }, [isActive]);

    React.useEffect(() => {
        if (logContainerRef.current) logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }, [logs]);

    const highlights = [
        { icon: <Workflow className="text-cyan-400" size={22} />, title: "Уян хатан дүрмийн систем", desc: "Ямар ч оролтын мэдээлэл дээр (Event) үндэслэн хүссэн хариу үйлдлээ (Action) автоматжуулж тохируулах боломж." },
        { icon: <Binary className="text-cyan-400" size={22} />, title: "Аливаа системтэй холбогдоно", desc: "HTTP Request, Generic Events, эсвэл API ашиглан 3-дагч талын программ болон төхөөрөгжтэй шууд харилцана." },
        { icon: <ShieldCheck className="text-cyan-400" size={22} />, title: "Үйл ажиллагааны автоматжуулалт", desc: "Операторын оролцоогүйгээр систем өөрөө шийдвэр гаргаж, аюулгүй байдлын болон бизнесийн процессийг удирдана." }
    ];

    return (
        <Layout className="bg-[#020617]" title="Event Rule Engine" subtitle="Аливаа өдөөлтийг автомат хариу үйлдэл болгон хувиргах логик төв.">
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Content */}
                <div className="w-5/12 space-y-10 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-cyan-500 uppercase tracking-[0.3em] font-mono mb-4 underline decoration-cyan-500/50 underline-offset-8 decoration-2">LOGIC PLATFORM</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Аливаа үйлдлийг
                            <br />
                            <span className="text-cyan-500 italic">хязгааргүй автоматжуулна.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed font-normal">
                             Nx Witness бол зөвхөн дүрс бичлэгийн систем биш юм. Энэ бол таны аюулгүй байдал болон бизнесийн бүх төхөөрөмжүүдийг нэгтгэн удирдах <b>"Ухаалаг Дүрмийн Төв"</b> юм.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/40 transition-all group backdrop-blur-sm">
                                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                                    <div className="text-cyan-400">
                                        {React.cloneElement(h.icon as React.ReactElement, { size: 22 })}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{h.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{h.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                         <div className="inline-flex px-3 py-1 bg-slate-900 rounded text-[10px] font-black text-cyan-400 border border-cyan-500/20 uppercase tracking-widest items-center gap-2 italic">
                            <Settings size={12} className="animate-spin-slow" />
                            Rule Customization Engine
                         </div>
                    </div>
                </div>

                {/* Right Side: Visual Flow (Animation or Screenshot) */}
                <div className="w-7/12 relative h-full flex flex-col items-center justify-center gap-4">
                    {/* View Mode Toggle Buttons */}
                    <div className="flex bg-slate-900/80 p-1 rounded-xl border border-white/10 backdrop-blur-xl z-[70] shadow-2xl">
                        <button 
                            onClick={() => setViewMode('visual')}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all flex items-center gap-2 ${viewMode === 'visual' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            <Activity size={14} /> INTERACTIVE FLOW
                        </button>
                        <button 
                            onClick={() => setViewMode('image')}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all flex items-center gap-2 ${viewMode === 'image' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            <ScanLine size={14} /> SYSTEM SCREENSHOT
                        </button>
                    </div>

                    <div className="relative w-full h-[620px] rounded-[40px] bg-slate-1000 border border-white/5 shadow-3xl bg-[#080d17] p-8 ring-1 ring-white/10 overflow-hidden group">
                        
                        {viewMode === 'image' ? (
                            /* REAL SCREENSHOT VIEW */
                            <div className="absolute inset-0 bg-black flex items-center justify-center p-2">
                                <img 
                                    src={eventRuleImg} 
                                    className="w-full h-full object-contain rounded-2xl animate-in zoom-in-95 duration-500" 
                                    alt="Real Event Rule" 
                                />
                                <div className="absolute bottom-6 right-6 px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-lg text-[9px] font-black text-cyan-400 uppercase italic tracking-widest backdrop-blur-md">
                                    Official System Screenshot
                                </div>
                            </div>
                        ) : (
                            /* INTERACTIVE FLOW VIEW (Simulation) */
                            <>
                                {/* 1. INPUT NODES */}
                                <div className="absolute top-0 left-8 bottom-0 w-32 z-30 pointer-events-none">
                                    {inputNodes.map((node, idx) => {
                                        const centerY = inputYPositions[idx];
                                        return (
                                        <div 
                                            key={node.id} 
                                            className="absolute left-0 right-0 flex flex-col items-center pointer-events-auto"
                                            style={{ top: `${centerY - 40}px` }}
                                        >
                                            <div className={`relative w-20 h-20 flex items-center justify-center transition-all duration-500 rounded-3xl border-2 ${(activeInputIndex === idx || activeInputIndex === 3) ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.5)] scale-110 opacity-100' : 'border-white/10 bg-slate-900/50 opacity-20'}`}>
                                                {node.icon}
                                            </div>
                                            <div className={`mt-3 text-center transition-opacity duration-500 ${(activeInputIndex === idx || activeInputIndex === 3) ? 'opacity-100' : 'opacity-20'}`}>
                                                <div className="text-[22px] font-black text-white uppercase tracking-tighter italic">Dynamic Watermark Active</div>
                                                <div className="text-[9px] font-bold text-white uppercase mt-0.5 leading-none">{node.sub}</div>
                                            </div>
                                        </div>
                                    )})}
                                </div>

                                {/* 2. DATA PACKETS */}
                                {phase === 'packet' && (
                                    <>
                                        {(activeInputIndex === 0 || activeInputIndex === 3) && (
                                            <div 
                                                className={`absolute z-[70] left-12 h-32 w-44 flex items-center justify-center pointer-events-none`}
                                                style={{ 
                                                    top: inputYPositions[0] - 64 + 'px',
                                                    animation: 'fly-to-hub-perfect 1.5s forwards cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                <div className="relative p-0.5 bg-black rounded border-2 border-white/20 shadow-2xl overflow-hidden scale-[1.3]">
                                                    <img src={plateImg} className="w-32 h-auto block" alt="plate" />
                                                </div>
                                            </div>
                                        )}
                                        
                                        {(activeInputIndex === 1 || activeInputIndex === 3) && (
                                            <div 
                                                className={`absolute z-[70] left-12 h-32 w-44 flex items-center justify-center pointer-events-none`}
                                                style={{ 
                                                    top: inputYPositions[1] - 64 + 'px',
                                                    animation: 'fly-to-hub-perfect 1.5s forwards cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                <div className="relative p-0.5 bg-black rounded-xl border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] overflow-hidden scale-[1.3] w-32 aspect-square">
                                                    <img src={faceImg} className="w-full h-full object-cover" alt="face" />
                                                </div>
                                            </div>
                                        )}
                                        
                                        {(activeInputIndex === 2 || activeInputIndex === 3) && (
                                            <div 
                                                className={`absolute z-[70] left-12 h-32 w-44 flex items-center justify-center pointer-events-none`}
                                                style={{ 
                                                    top: inputYPositions[2] - 64 + 'px',
                                                    animation: 'fly-to-hub-perfect 1.5s forwards cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                <div className="bg-slate-950 p-4 rounded-2xl border-2 border-blue-500 shadow-2xl flex flex-col items-center w-36 gap-2">
                                                    <Terminal size={20} className="text-blue-400" />
                                                    <span className="text-[9px] font-mono text-blue-300">GENERIC JSON</span>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* 3. RULE ENGINE HUB */}
                                <div className="absolute top-[320px] left-[330px] -translate-y-1/2 z-20 flex flex-col items-center">
                                    <div className="relative w-36 h-36 flex items-center justify-center">
                                        <div className={`absolute inset-0 border-2 border-dashed rounded-full animate-spin-slow ${phase === 'process' || phase === 'action' ? 'border-cyan-500/50' : 'border-white/10'}`}></div>
                                        <div className={`w-28 h-28 rounded-full flex items-center justify-center border-4 transition-all duration-500 bg-slate-900 ${phase === 'process' || phase === 'action' ? 'border-cyan-400 shadow-[0_0_80px_rgba(34,211,238,1)] scale-110' : 'border-white/10'}`}>
                                            <Workflow size={48} className={phase === 'process' || phase === 'action' ? 'text-cyan-400 animate-pulse-fast' : 'text-slate-800'} />
                                        </div>
                                        {(phase === 'process' || phase === 'action') && (
                                            <div className="absolute inset-[-15px] bg-cyan-400/20 rounded-full animate-ping-slow"></div>
                                        )}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] mb-1 block">
                                            RULE ENGINE
                                        </span>
                                        <div className="text-[17px] font-black text-white uppercase italic tracking-tighter opacity-80">
                                            CONDITION MATCH LOGIC
                                        </div>
                                    </div>
                                </div>

                                {/* 4. SYMMETRICAL DATA FLOW LINES */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                                    {inputNodes.map((_, i) => {
                                        const startY = inputYPositions[i];
                                        const isActiveInput = (activeInputIndex === i || activeInputIndex === 3) && (phase === 'packet' || phase === 'process' || phase === 'action');
                                        return (
                                            <path
                                                key={`in-${i}`}
                                                d={`M ${INPUT_START_X} ${startY} C 220 ${startY}, 290 ${HUB_Y}, ${HUB_X} ${HUB_Y}`}
                                                fill="none"
                                                stroke={isActiveInput ? '#22d3ee' : '#1e1b4b'}
                                                strokeWidth="3"
                                                strokeDasharray="12 10"
                                                className={isActiveInput ? 'animate-flow' : ''}
                                                opacity={isActiveInput ? 1 : 0.18}
                                                strokeLinecap="round"
                                            />
                                        );
                                    })}

                                    {actionNodes.map((node, i) => {
                                        const isActiveOutput = activeNodes.includes(i);
                                        return (
                                            <path
                                                key={`out-${i}`}
                                                d={`M ${HUB_X} ${HUB_Y} C 525 ${HUB_Y}, 565 ${node.y}, ${ACTION_END_X} ${node.y}`}
                                                fill="none"
                                                stroke={isActiveOutput ? '#22d3ee' : '#1e1b4b'}
                                                strokeWidth="3"
                                                strokeDasharray="12 10"
                                                className={isActiveOutput ? 'animate-flow' : ''}
                                                opacity={isActiveOutput ? 1 : 0.18}
                                                strokeLinecap="round"
                                            />
                                        );
                                    })}
                                </svg>

                                {/* 5. ACTION MODULES */}
                                <div className="absolute inset-0 z-20 pointer-events-none">
                                    <div className="absolute top-10 right-20 text-[8px] font-black text-cyan-500/50 uppercase tracking-widest italic">
                                        Infinite Expandability via API / SDK
                                    </div>
                                    {actionNodes.map((node, i) => {
                                        const isActiveNode = activeNodes.includes(i);
                                        return (
                                        <div
                                            key={i}
                                            className={`absolute flex items-center gap-5 rounded-3xl border p-4 transition-all duration-700 backdrop-blur-3xl overflow-hidden pointer-events-auto ${
                                            isActiveNode
                                                ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)] translate-x-2'
                                                : (i === 4 ? 'bg-slate-900/10 border-white/5 opacity-40 italic translate-x-0' : 'bg-slate-900/30 border-white/5 opacity-15')
                                            }`}
                                            style={{
                                            left: `${ACTION_CARD_X}px`,
                                            top: `${node.y - ACTION_CARD_HEIGHT / 2}px`,
                                            width: `${ACTION_CARD_WIDTH}px`,
                                            minHeight: `${ACTION_CARD_HEIGHT}px`,
                                            }}
                                        >
                                            <div
                                            className={`p-3 rounded-2xl transition-colors ${
                                                isActiveNode ? 'bg-cyan-500' : 'bg-slate-900'
                                            }`}
                                            >
                                            <div className={isActiveNode ? 'text-white' : 'text-slate-600'}>
                                                {node.icon}
                                            </div>
                                            </div>
                                            <div className="text-left">
                                            <div className={`text-[22px] font-black uppercase tracking-widest ${isActiveNode ? 'text-white' : 'text-slate-600'}`}>
                                                {node.label}
                                            </div>
                                            <div className="mt-2 text-[10px] font-medium uppercase text-slate-500">
                                                {node.desc}
                                            </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                </div>

                                {/* 6. LOGS (FOOTER) */}
                                <div className="absolute bottom-4 left-44 right-[490px] h-16 bg-black/80 border border-white/5 rounded-xl p-4 font-mono overflow-hidden backdrop-blur-2xl z-[60] shadow-2xl">
                                    <div ref={logContainerRef} className="space-y-1 h-full overflow-hidden">
                                        {logs.length === 0 ? (
                                            <div className="text-[10px] text-slate-800 italic uppercase tracking-[0.2em] flex items-center gap-2">
                                                <Activity size={12} className="animate-pulse" />
                                                System Logic Ready...
                                            </div>
                                        ) : (
                                            logs.map((log, i) => (
                                                <div key={i} className="text-[10px] text-cyan-400 font-bold flex items-center gap-2 animate-in slide-in-from-bottom-1">
                                                    <ChevronRight size={10} className="text-cyan-900" />
                                                    {log}
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fly-to-hub-perfect {
                    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
                    20% { opacity: 1; transform: translate(40px, 0) scale(1.2); }
                    80% { opacity: 1; transform: translate(250px, 0) scale(0.8); }
                    100% { opacity: 0; transform: translate(270px, 0) scale(0.1); }
                }
                .animate-spin-slow { animation: spin-slow 15s linear infinite; }
                .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
                .animate-pulse-fast { animation: pulse-fast 0.6s ease-in-out infinite; }
                .animate-flow { animation: flow-animation 4s linear infinite; }
                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes ping-slow { 75%, 100% { transform: scale(1.6); opacity: 0; } }
                @keyframes pulse-fast { 0%, 100% { transform: scale(1); filter: brightness(1.2); } 50% { transform: scale(1.05); filter: brightness(1.5); } }
                @keyframes flow-animation { to { stroke-dashoffset: -120; } }
            `}</style>
        </Layout>
    );
};

export default NX_Slide13_EventRules;
