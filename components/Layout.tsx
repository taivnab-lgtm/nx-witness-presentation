import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle, className = "" }) => {
  return (
    <div className={`w-full h-full p-12 md:p-16 flex flex-col ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-8 border-b border-slate-800 pb-4">
          {title && (
            <h1 className="text-[50px] md:text-[67px] font-bold text-white tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="text-[28px] md:text-[34px] text-slate-400 mt-2 font-light">
              {subtitle}
            </h2>
          )}
        </div>
      )}
      
      {/* Main Content — scrollable when slide content overflows 1080px */}
      <div className="flex-1 min-h-0 relative overflow-y-auto">
        {children}
      </div>

      {/* Global Brand Logo (Top Right Watermark) */}
      <div className="absolute top-8 right-12">
        <div className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <img 
              src="/assets/nx-witness-logo.svg" 
              className="h-6 md:h-8 w-auto block" 
              alt="Nx Witness Logo" 
            />
        </div>
      </div>
    </div>
  );
};

export default Layout;