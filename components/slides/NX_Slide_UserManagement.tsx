import React from 'react';
import Layout from '../Layout';
import { Users, Lock, Key, Building2 } from 'lucide-react';

const NX_Slide_UserManagement: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    const points = [
        {
            icon: <Users className="text-blue-400" size={22} />,
            title: "Local & Cloud Users",
            desc: "Орон нутгийн болон Nx Cloud хаягаар нэвтрэх боломжийг хоёуланг нь дэмжинэ."
        },
        {
            icon: <Lock className="text-blue-400" size={22} />,
            title: "Flexible Permissions",
            desc: "Хэрэглэгч эсвэл бүлэг тус бүрт өөр өөр эрх тохируулах боломжтой."
        },
        {
            icon: <Key className="text-blue-400" size={22} />,
            title: "AD / LDAP Support",
            desc: "Active Directory болон LDAP системтэй шууд холбогдоно."
        },
        {
            icon: <Building2 className="text-blue-400" size={22} />,
            title: "Role-Based Access",
            desc: "Operator, Viewer, Admin зэрэг дүрүүдийг ашиглан хэрэглэгчдийн эрхийг системчлэн удирдана."
        },
    ];

    const users = [
        { name: "admin", role: "Admin",    view: true,  play: true,  cfg: true,  adm: true  },
        { name: "operator1", role: "Operator", view: true,  play: true,  cfg: false, adm: false },
        { name: "viewer_a",  role: "Viewer",   view: true,  play: false, cfg: false, adm: false },
        { name: "security",  role: "Operator", view: true,  play: true,  cfg: false, adm: false },
        { name: "auditor",   role: "Viewer",   view: true,  play: true,  cfg: false, adm: false },
    ];

    const colLabels = ['View', 'Playback', 'Config', 'Admin'];

    return (
        <Layout className="bg-slate-950" title="User Management" subtitle="Уян хатан, нарийвчилсан хэрэглэгчийн эрхийн удирдлага.">
            <div className="h-full flex gap-12 items-center">
                {/* Left: content */}
                <div className="w-5/12 space-y-6 text-left">
                    <div className="space-y-4">
                        <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] font-mono mb-4">ACCESS CONTROL</h3>
                        <h4 className="text-[67px] font-black text-white leading-tight tracking-tighter">
                            Зөв хүнд /<br />
                            <span className="text-blue-500 italic">зөв эрх олгоно.</span>
                        </h4>
                        <p className="text-slate-400 text-[25px] leading-relaxed">
                            Дүр, бүлэг, AD/LDAP интеграцийг ашиглан хэрэглэгчдийн нэвтрэх эрхийг бүрэн хянана.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {points.map((p, i) => (
                            <div key={i} className="flex items-center gap-5 p-3.5 bg-slate-900/40 rounded-2xl border border-slate-800/50 hover:border-blue-500/40 transition-all group">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">{p.icon}</div>
                                <div>
                                    <h5 className="font-bold text-white text-xl mb-0.5">{p.title}</h5>
                                    <p className="text-xl text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Permission matrix */}
                <div className="w-7/12 h-full flex items-center justify-center">
                    <div className="w-full max-w-lg space-y-4">

                        {/* Matrix header */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Lock className="text-blue-400" size={16} />
                            </div>
                            <span className="text-[17px] font-black text-blue-400 uppercase tracking-widest">Permission Matrix</span>
                        </div>

                        {/* Matrix table */}
                        <div className="bg-slate-900 border border-slate-800/60 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.08)]">
                            {/* Table header */}
                            <div className="grid grid-cols-6 bg-slate-800/60 px-4 py-3 border-b border-slate-700/50">
                                <div className="col-span-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Хэрэглэгч</div>
                                {colLabels.map(col => (
                                    <div key={col} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-wide">{col}</div>
                                ))}
                            </div>

                            {/* Table rows */}
                            {users.map((u, i) => (
                                <div key={i} className={`grid grid-cols-6 px-4 py-3 border-b border-slate-800/30 hover:bg-slate-800/20 transition-colors ${i === 0 ? 'bg-blue-500/5' : ''}`}>
                                    <div className="col-span-2 flex items-center gap-2">
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white ${
                                            u.role === 'Admin' ? 'bg-blue-600' : u.role === 'Operator' ? 'bg-violet-600' : 'bg-slate-600'
                                        }`}>
                                            {u.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="text-[17px] font-bold text-white">{u.name}</div>
                                            <div className={`text-[9px] font-black uppercase tracking-wide ${
                                                u.role === 'Admin' ? 'text-blue-400' : u.role === 'Operator' ? 'text-violet-400' : 'text-slate-400'
                                            }`}>{u.role}</div>
                                        </div>
                                    </div>
                                    {[u.view, u.play, u.cfg, u.adm].map((has, j) => (
                                        <div key={j} className="flex items-center justify-center">
                                            {has ? (
                                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <path d="M2 5l2.5 2.5L8 2.5" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                        <path d="M2 2l4 4M6 2l-4 4" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-6 px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                                        <path d="M2 5l2.5 2.5L8 2.5" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span className="text-[10px] text-slate-400">Зөвшөөрсөн</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
                                    <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                                        <path d="M2 2l4 4M6 2l-4 4" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <span className="text-[10px] text-slate-400">Хориглосон</span>
                            </div>
                            <div className="flex items-center gap-4 ml-auto">
                                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div><span className="text-[10px] text-slate-400">Admin</span></div>
                                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-violet-600"></div><span className="text-[10px] text-slate-400">Operator</span></div>
                                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div><span className="text-[10px] text-slate-400">Viewer</span></div>
                            </div>
                        </div>

                        {/* AD/LDAP badge */}
                        <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-700/40 rounded-xl p-3">
                            <Key className="text-blue-400" size={14} />
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">AD / LDAP Integration — Автомат хэрэглэгч нэвтрүүлэлт</span>
                            <div className="ml-auto flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                <span className="text-[10px] text-emerald-400 font-bold">Connected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NX_Slide_UserManagement;
