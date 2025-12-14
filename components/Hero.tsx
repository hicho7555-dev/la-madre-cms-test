import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-10 md:py-16 flex flex-col items-center justify-center text-center px-4">
      <div className="mb-2 animate-[fade-in-up_0.8s_ease-out]">
          <span className="bg-red-600/90 text-white font-oswald text-xs md:text-sm px-3 py-1 tracking-[0.2em] uppercase rounded-sm backdrop-blur-sm">
              Premium Fast Food
          </span>
      </div>
      
      <h1 className="font-rye text-5xl md:text-7xl text-white mb-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] animate-[fade-in-up_1s_ease-out]">
        LA<span className="text-red-600">MADRE</span>
      </h1>
      
      <p className="font-oswald text-lg md:text-xl text-zinc-300 tracking-[0.3em] uppercase opacity-80 animate-[fade-in-up_1.2s_ease-out]">
        Select a Category
      </p>
      
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mt-6 mb-2"></div>
    </section>
  );
};

export default Hero;
