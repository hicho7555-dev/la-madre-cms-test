import React from 'react';

interface DeliveryModalProps {
  onClose: () => void;
}

const DeliveryModal: React.FC<DeliveryModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-10 bg-zinc-900 border-2 border-red-600 rounded-2xl p-8 max-w-md w-full text-center shadow-[0_0_50px_rgba(220,38,38,0.3)] animate-[fade-in-up_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8">
          {/* Icon Circle */}
          <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(220,38,38,0.5)] border-4 border-black">
             <span className="text-5xl">🛵</span>
          </div>
          
          <h2 className="font-rye text-3xl md:text-4xl text-white mb-2 uppercase leading-tight">
            Livraison<br/>
            <span className="text-red-500">Disponible</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4 font-oswald text-xl tracking-wide">
          {/* Phone */}
          <a href="tel:0778712615" className="group block p-4 rounded-xl bg-black/60 border border-zinc-800 hover:border-red-600 hover:bg-zinc-900 transition-all flex items-center justify-between px-6">
            <span className="text-2xl group-hover:scale-110 transition-transform">📞</span> 
            <span className="text-zinc-200 group-hover:text-white">0778.71.26.15</span>
          </a>
          
          <div className="pt-2">
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-3">Instagram</p>
            <div className="space-y-3">
                <a href="https://instagram.com/la_madre_17" target="_blank" rel="noreferrer" className="group block p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-colors flex items-center justify-center gap-3">
                    <span className="text-xl">📸</span> 
                    <span className="text-zinc-300 group-hover:text-white">@la_madre_17</span>
                </a>
                <a href="https://instagram.com/crepo_ds" target="_blank" rel="noreferrer" className="group block p-3 rounded-xl bg-zinc-800/40 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-colors flex items-center justify-center gap-3">
                    <span className="text-xl">📸</span> 
                    <span className="text-zinc-300 group-hover:text-white">@crepo_ds</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryModal;
