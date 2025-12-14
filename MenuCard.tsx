import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  return (
    <div 
      className="relative group h-auto min-h-[140px] md:h-48 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-red-600 hover:bg-zinc-900 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] flex flex-col justify-center items-center p-6"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-zinc-700 group-hover:border-red-600 transition-colors"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-zinc-700 group-hover:border-red-600 transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-zinc-700 group-hover:border-red-600 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-zinc-700 group-hover:border-red-600 transition-colors"></div>

      {/* Content */}
      <div className="relative z-10 w-full text-center">
        <h3 className="font-oswald text-xl md:text-2xl text-white group-hover:text-red-500 transition-colors uppercase tracking-wide leading-tight mb-3">
          {item.name}
        </h3>
        
        <div className="w-16 h-px bg-zinc-700 group-hover:bg-red-600 mx-auto mb-4 transition-colors duration-300"></div>
        
        <div className="inline-block relative">
          <span className="font-oswald text-2xl text-zinc-100 font-bold px-4 py-1">
            {item.price} <span className="text-sm text-red-500 align-top">DA</span>
          </span>
          {/* Glow effect under price on hover */}
          <div className="absolute inset-0 bg-red-600 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;