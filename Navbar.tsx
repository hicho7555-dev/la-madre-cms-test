import React from 'react';

interface NavbarProps {
  title?: string;
  onBack?: () => void;
  showLogo?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ title, onBack, showLogo = false }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 py-3 md:py-4 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Back Button or Empty */}
        <div className="flex-1 flex justify-start">
          {onBack && (
            <button 
              onClick={onBack}
              className="flex items-center text-zinc-300 hover:text-red-500 transition-colors group"
              aria-label="Back to Home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="ml-1 font-oswald uppercase tracking-wider hidden md:inline">Back</span>
            </button>
          )}
        </div>

        {/* Center: Logo or Title */}
        <div className="flex-1 flex justify-center">
          {showLogo ? (
            <div 
              className="flex flex-col cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h1 className="font-rye text-2xl md:text-3xl text-white group-hover:text-red-500 transition-colors">
                LA<span className="text-red-600 group-hover:text-white transition-colors">MADRE</span>
              </h1>
            </div>
          ) : (
            <h2 className="font-rye text-xl md:text-2xl text-white tracking-widest uppercase text-center animate-[fade-in_0.5s_ease-out]">
              {title}
            </h2>
          )}
        </div>

        {/* Right Side: Spacer to balance layout */}
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};

export default Navbar;