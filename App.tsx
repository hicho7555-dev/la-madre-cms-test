import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.tsx';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import DeliveryModal from './components/DeliveryModal';
// Removed imports from constants.ts as we fetch data now
import { MenuCategory, MenuItem } from './types';

// Define the structure of our JSON data
interface MenuGroupData {
  id: string;
  title: string;
  emoji: string;
  categories: MenuCategory[];
}

interface MenuData {
  groups: MenuGroupData[];
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [menuGroups, setMenuGroups] = useState<MenuGroupData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content/menu.json');
        if (!response.ok) {
          throw new Error('Failed to load menu data');
        }
        const data: MenuData = await response.json();
        setMenuGroups(data.groups);
        
        // Keep the spectacular loading experience for at least 2.5s
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      } catch (err) {
        console.error(err);
        setError('Unable to load the menu. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGroupClick = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedGroupId(id);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedGroupId(null);
  };

  const selectedGroup = selectedGroupId ? menuGroups.find(g => g.id === selectedGroupId) : null;

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 text-center">
        <div>
          <h2 className="font-rye text-3xl text-red-600 mb-4">Error</h2>
          <p className="font-oswald">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans animated-bg">
      {loading && <Loader />}
      
      {/* Delivery Modal Overlay */}
      {showDeliveryModal && <DeliveryModal onClose={() => setShowDeliveryModal(false)} />}
      
      {!loading && (
        <div className="animate-[fade-in_0.5s_ease-in] min-h-screen flex flex-col">
          
          {/* Header Logic */}
          <Navbar 
            showLogo={!selectedGroupId} 
            onBack={selectedGroupId ? handleBack : undefined}
            title={selectedGroup?.title}
          />

          <main className="flex-grow w-full max-w-7xl mx-auto px-4 pb-20 relative z-10">
            {/* Global Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {!selectedGroupId ? (
              // HOME VIEW
              <div className="flex flex-col items-center animate-[fade-in_0.5s_ease-out]">
                <Hero />
                
                {/* DELIVERY BUTTON */}
                <button
                  onClick={() => setShowDeliveryModal(true)}
                  className="w-full max-w-3xl mb-8 relative group overflow-hidden rounded-xl border-2 border-red-600 bg-gradient-to-r from-red-900/40 to-black/60 backdrop-blur-md p-5 md:p-6 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                >
                  {/* Scanning Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                  
                  <div className="flex items-center gap-4 md:gap-8 z-10">
                    <span className="text-4xl md:text-6xl animate-bounce drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">🛵</span>
                    <div className="text-center md:text-left">
                      <h2 className="font-rye text-2xl md:text-4xl text-white tracking-widest uppercase drop-shadow-lg group-hover:text-red-500 transition-colors">
                        DELIVERY
                      </h2>
                      <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <p className="font-oswald text-zinc-300 tracking-[0.2em] text-xs md:text-sm uppercase">Click for Info</p>
                      </div>
                    </div>
                  </div>
                </button>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 w-full">
                  {menuGroups.map((group) => (
                    <button
                      key={group.id}
                      onClick={() => handleGroupClick(group.id)}
                      className="relative group/card overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm aspect-[4/5] md:aspect-square flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-[1.02] hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                    >
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                      <div className="absolute inset-0 bg-red-600/0 group-hover/card:bg-red-600/5 transition-colors duration-500 z-0"></div>

                      <span className="text-6xl md:text-8xl mb-4 transform group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform duration-500 drop-shadow-2xl z-20">
                        {group.emoji}
                      </span>
                      
                      <h3 className="font-rye text-lg md:text-2xl text-center text-white z-20 uppercase tracking-wider group-hover/card:text-red-500 transition-colors drop-shadow-md">
                        {group.title}
                      </h3>
                      
                      <div className="mt-2 w-8 h-1 bg-zinc-700 group-hover/card:bg-red-600 transition-colors z-20 rounded-full"></div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // CATEGORY DETAIL VIEW
              <div className="flex flex-col w-full py-8 animate-[fade-in-up_0.3s_ease-out]">
                <div className="flex flex-col space-y-4">
                  {/* Now we iterate over the categories directly nested in the group */}
                  {selectedGroup && selectedGroup.categories.map((category, index) => (
                    <MenuSection 
                      key={category.id} 
                      category={category} 
                      index={index} 
                    />
                  ))}
                </div>
                
                {/* Bottom decorative element */}
                <div className="mt-12 text-center">
                  <p className="font-oswald text-zinc-500 uppercase tracking-widest text-xs">LA MADRE • {selectedGroup?.title}</p>
                </div>
              </div>
            )}
          </main>

          <footer className="bg-black/50 border-t border-zinc-900 py-8 text-center relative z-10 mt-auto">
            <p className="font-rye text-2xl text-zinc-700 opacity-50">LA<span className="text-red-900">MADRE</span></p>
          </footer>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
