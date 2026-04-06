import React from 'react';
import Layout from '../Layout';
import { Code, Globe, Cpu, HardDrive } from 'lucide-react';

const NX_Slide_Toolkit: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Code className="text-blue-400" size={22} />,
            title: 'JavaScript Client API',
            desc: 'Desktop Client-ийг дурын веб программтай нэгтгэх Client JS API.',
        },
        {
            icon: <Globe className="text-blue-400" size={22} />,
            title: 'REST Server API',
            desc: 'RESTful HTTP/HTTPS дуудлагаар Nx Server-тэй харилцана.',
        },
        {
            icon: <Cpu className="text-blue-400" size={22} />,
            title: 'Metadata SDK (C++)',
            desc: '3rd party төхөөрөмж болон системүүдийг Nx Server дээр ажиллах plugin болгон нэгтгэнэ.',
        },
        {
            icon: <HardDrive className="text-blue-400" size={22} />,
            title: 'Storage & Video Source SDK',
            desc: 'Cloud хадгалалт болон гуравдагч эх үүсвэр (IP камер, I/O) нэгтгэх SDK.',
        },
    ];

    return (
        <Layout className="bg-slate-950" title="Nx Toolkit" subtitle="REST API, JavaScript SDK болон C++ SDK-ийн тусламжтайгаар дурын системтэй холбогдоно.">
            <div className="h-full flex gap-12 items-center">
                {/* Left column */}
                <div className="w-5/12 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">DEVELOPER TOOLS</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Хөгжүүлэгчдэд зориулсан <br /><span className="text-blue-500 italic">бүрэн хэрэгслүүд.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Нээлттэй API болон SDK-үүдийн тусламжтайгаар Nx платформыг өөрийн системдээ бүрэн нэгтгэнэ.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {points.map((p, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-6 p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group"
                            >
                                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors shrink-0">
                                    {p.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-[22px] mb-1">{p.title}</h5>
                                    <p className="text-[17px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — SDK cards */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="flex gap-5 h-4/5 w-full px-4">
                        {/* JS Card */}
                        <div className="flex-1 flex flex-col rounded-3xl border border-yellow-500/30 bg-yellow-500/5 overflow-hidden">
                            <div className="h-2 bg-yellow-400 w-full"></div>
                            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
                                <div className="w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                    <span className="text-[42px] font-black text-slate-900">JS</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-yellow-400 font-black text-[28px] tracking-tight mb-1">JavaScript</div>
                                    <div className="text-slate-500 text-xl font-semibold uppercase tracking-widest">Client API</div>
                                </div>
                                <div className="w-full space-y-2 mt-2">
                                    {['Client Desktop', 'Web Integration', 'Event Hooks'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-yellow-500/10 rounded-lg px-3 py-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></div>
                                            <span className="text-yellow-300/70 text-[17px] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* REST Card */}
                        <div className="flex-1 flex flex-col rounded-3xl border border-blue-500/30 bg-blue-500/5 overflow-hidden">
                            <div className="h-2 bg-blue-500 w-full"></div>
                            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
                                <div className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                    <span className="text-[28px] font-black text-white leading-tight text-center">REST</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-blue-400 font-black text-[28px] tracking-tight mb-1">Server API</div>
                                    <div className="text-slate-500 text-xl font-semibold uppercase tracking-widest">HTTP / HTTPS</div>
                                </div>
                                <div className="w-full space-y-2 mt-2">
                                    {['GET / POST', 'Auth & Sessions', 'Camera Control'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-blue-500/10 rounded-lg px-3 py-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                            <span className="text-blue-300/70 text-[17px] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* C++ Card */}
                        <div className="flex-1 flex flex-col rounded-3xl border border-slate-500/30 bg-slate-700/10 overflow-hidden">
                            <div className="h-2 bg-slate-500 w-full"></div>
                            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
                                <div className="w-20 h-20 rounded-2xl bg-slate-600 flex items-center justify-center shadow-lg shadow-slate-700/20">
                                    <span className="text-[34px] font-black text-white">C++</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-slate-300 font-black text-[28px] tracking-tight mb-1">Metadata SDK</div>
                                    <div className="text-slate-500 text-xl font-semibold uppercase tracking-widest">Native Plugin</div>
                                </div>
                                <div className="w-full space-y-2 mt-2">
                                    {['Device Plugin', 'Storage SDK', 'Video Source'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-slate-500/10 rounded-lg px-3 py-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
                                            <span className="text-slate-400/70 text-[17px] font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_Toolkit;
