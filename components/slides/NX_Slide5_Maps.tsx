import React, { useState } from 'react';
import Layout from '../Layout';
import { MapPin, Camera, Activity, ShieldCheck, Play, Info, Layers } from 'lucide-react';
import mapTech from '../../assets/nx_world_map_tech.png';

const NX_Slide5_Maps: React.FC<{ isActive: boolean }> = () => {
    const [selectedId, setSelectedId] = useState<number | null>(1);

    const sites = [
        { id: 1, name: "Ulaanbaatar Central", x: "42%", y: "42%", cameras: 154, status: "Active", uptime: "99.9%" },
        { id: 2, name: "Darkhan Branch", x: "46%", y: "28%", cameras: 48, status: "Active", uptime: "98.5%" },
        { id: 3, name: "Oyu Tolgoi Hub", x: "44%", y: "78%", cameras: 210, status: "Warning", uptime: "94.2%" },
        { id: 4, name: "Erdenet Plant", x: "36%", y: "32%", cameras: 92, status: "Active", uptime: "99.2%" },
    ];

    const currentSite = sites.find(s => s.id === selectedId) || sites[0];

    return (
        <Layout
            className="bg-slate-950"
            title="Nx Maps & GIS"
            subtitle="Газар зүйн мэдээллийн системтэй (GIS) нэгдсэн хяналтын зураг."
        >
            <div className="h-full flex gap-12 items-center">
                {/* Left Side: Info Panel (5/12) */}
                <div className="w-5/12 space-y-10 text-left h-full flex flex-col justify-center">
                    <div className="space-y-4">
                        <h3 className="text-[17px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4 font-mono underline decoration-blue-500/50 underline-offset-8 decoration-2">INTELLIGENT MAPPING</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight">
                            Бодит хугацааны <br />
                            <span className="text-blue-500">GIS Integration.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Google Maps, Mapbox болон байгууллагын хувийн GIS системтэй шууд холбогдож, газар зүйн байрлал дээр суурилсан ухаалаг хяналтыг (Geospatial awareness) бодит цагт гүйцэтгэнэ.
                        </p>
                    </div>

                    {/* Detailed Site Info Card */}
                    <div className="relative p-8 bg-slate-900/60 rounded-3xl border border-blue-500/30 backdrop-blur-3xl shadow-2xl overflow-hidden group transition-all duration-500">
                        {/* Selected Indicator */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 animate-pulse"></div>
                        
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h5 className="font-bold text-white text-[22px] mb-1">{currentSite.name}</h5>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${currentSite.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`}></div>
                                    <span className={`text-[22px] font-black uppercase tracking-widest ${currentSite.status === 'Active' ? 'text-emerald-500' : 'text-amber-500'}`}>{currentSite.status}</span>
                                </div>
                            </div>
                            <MapPin className="text-blue-500 opacity-50" size={32} />
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex flex-col gap-1">
                                <span className="text-[12px] font-black text-slate-500 uppercase tracking-[0.2em]">Live Cameras</span>
                                <div className="text-[42px] font-black text-white flex items-center gap-2">
                                    <Camera size={20} className="text-blue-500" />
                                    {currentSite.cameras}
                                </div>
                            </div>
                            <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex flex-col gap-1">
                                <span className="text-[12px] font-black text-slate-500 uppercase tracking-[0.2em]">Network Uptime</span>
                                <div className="text-[42px] font-black text-white flex items-center gap-2">
                                    <Activity size={20} className="text-blue-500" />
                                    {currentSite.uptime}
                                </div>
                            </div>
                        </div>

                        <button className="w-full h-14 flex items-center justify-between px-6 bg-blue-600 hover:bg-blue-700 rounded-2xl text-white font-black uppercase tracking-widest text-[11px] shadow-xl shadow-blue-500/20 transition-all active:scale-95 group">
                            <span className="flex items-center gap-3">
                                <Play size={18} fill="currentColor" />
                                Open Site Monitoring
                            </span>
                            <Info size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                </div>

                {/* Right Side: Map Visual (7/12) */}
                <div className="w-7/12 relative h-full flex items-center justify-center p-4">
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900/20 shadow-2xl">
                        {/* Tech Map Background */}
                        <img 
                            src={mapTech} 
                            alt="GIS Map Visualization" 
                            className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-transform duration-[10s] linear" 
                        />
                        <div className="absolute inset-0 bg-blue-950/20 pointer-events-none"></div>

                        {/* Interactive Markers */}
                        {sites.map((site) => (
                            <div 
                                key={site.id}
                                className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-20 group/marker 
                                             ${selectedId === site.id ? 'scale-125' : 'scale-90 hover:scale-110 opacity-70 hover:opacity-100'}`}
                                style={{ left: site.x, top: site.y }}
                                onClick={() => setSelectedId(site.id)}
                            >
                                <div className="relative">
                                    {/* Ping Effect */}
                                    <div className={`absolute -inset-4 rounded-full animate-ping opacity-30 ${site.status === 'Warning' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
                                    {/* Map Pin */}
                                    <div className={`relative p-2 rounded-xl border-2 transition-all duration-300 ${selectedId === site.id ? 'bg-blue-500 border-white shadow-[0_0_20px_#3b82f6]' : 'bg-slate-900 border-slate-700'}`}>
                                        <MapPin size={24} className={selectedId === site.id ? 'text-white' : site.status === 'Warning' ? 'text-amber-500' : 'text-blue-500'} />
                                    </div>
                                    {/* Pulse Label */}
                                    {selectedId === site.id && (
                                        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-blue-600/90 text-white text-[12px] font-black px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-md whitespace-nowrap shadow-xl animate-in fade-in zoom-in-75 duration-300">
                                            {site.name}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Scanning Radar Filter Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none animate-pulse"></div>

                        {/* Map HUD Overlay */}
                        <div className="absolute bottom-6 right-6 flex items-center gap-3">
                           <div className="flex gap-1 p-2 bg-slate-900/80 border border-slate-700 rounded-xl backdrop-blur-md">
                              <ShieldCheck size={16} className="text-emerald-500" />
                              <div className="text-[13px] font-black text-slate-400 uppercase tracking-tighter">Сүлжээний хяналт: ИДЭВХТЭЙ</div>
                           </div>
                           <div className="p-2 bg-blue-600 border border-blue-400 rounded-xl flex items-center gap-2">
                              <Layers size={14} className="text-white" />
                              <span className="text-[12px] font-black text-white uppercase tracking-widest">GIS Layer</span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide5_Maps;
