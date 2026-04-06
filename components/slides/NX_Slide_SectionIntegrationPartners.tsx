import React from 'react';

const NX_Slide_SectionIntegrationPartners: React.FC<{ isActive: boolean }> = ({ isActive }) => {
    return (
        <div className="w-full h-full bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            ></div>
            {/* Glow */}
            <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
            <div className="relative z-10 text-center space-y-6">
                <div className="text-xl font-black text-blue-500 uppercase tracking-[0.5em]">SECTION 04</div>
                <h2 className="text-[134px] font-black text-white tracking-tighter">Integration Partners</h2>
                <p className="text-[34px] text-slate-400 font-light max-w-2xl mx-auto">
                    Нэг Nx Witness-тэй болмогц 100+ партнерын шийдэл тань дэргэд.
                </p>
                <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            {/* Nx logo bottom right */}
            <div className="absolute bottom-8 right-12 opacity-30">
                <img
                    src="/assets/nx-witness-logo.svg"
                    className="h-8 w-auto"
                    alt="Nx Witness"
                />
            </div>
        </div>
    );
};

export default NX_Slide_SectionIntegrationPartners;
