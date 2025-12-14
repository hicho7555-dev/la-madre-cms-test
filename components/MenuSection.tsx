import React, { useState } from 'react';
import { MenuCategory } from '../types';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 w-full">
      {/* Accordion Header */}
      <button 
        onClick={toggleAccordion}
        className={`w-full relative overflow-hidden rounded-lg border-2 transition-all duration-300 group ${
          isOpen ? 'border-red-600 bg-zinc-900' : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-600'
        }`}
      >
        <div className="relative z-10 px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <span className="text-3xl md:text-4xl filter drop-shadow-lg">{category.image}</span>
             <h3 className={`font-rye text-xl md:text-3xl uppercase tracking-wider transition-colors ${
               isOpen ? 'text-red-500' : 'text-zinc-200 group-hover:text-white'
             }`}>
               {category.title}
             </h3>
          </div>
          
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isOpen ? 'text-red-500' : 'text-zinc-500 group-hover:text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {/* Subtle glow background for active state */}
        {isOpen && <div className="absolute inset-0 bg-red-900/10 pointer-events-none"></div>}
      </button>

      {/* Accordion Content (Grid of Items) */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {category.items.map((item, idx) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
