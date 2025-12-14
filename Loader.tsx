import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black opacity-80"></div>
      
      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Animated Logo Container */}
        <div className="relative group">
          {/* Fire/Glow Effect behind logo */}
          <div className="absolute -inset-4 bg-red-600 rounded-full blur-3xl opacity-20 animate-[flame-flicker_2s_infinite]"></div>
          
          <div className="relative flex flex-col items-center justify-center p-10 border-4 border-red-800 bg-black shadow-2xl shadow-red-900/50 transform transition-transform duration-1000 scale-100">
            <h1 className="font-rye text-6xl md:text-8xl text-white tracking-widest animate-[text-glow_2s_ease-in-out_infinite_alternate]">
              LA<span className="text-red-600">MADRE</span>
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent my-4"></div>
            <p className="font-oswald text-2xl md:text-3xl tracking-[0.5em] text-zinc-400 uppercase">
              Crepods
            </p>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-64 h-1 bg-zinc-800 overflow-hidden rounded-full">
          <div className="h-full bg-red-600 animate-[shimmer_1.5s_infinite_linear]" style={{ width: '100%', transformOrigin: 'left', animation: 'progress 2s ease-in-out forwards' }}></div>
        </div>
        
        <p className="mt-4 font-oswald text-zinc-500 text-sm animate-pulse">PREPARING THE KITCHEN...</p>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;