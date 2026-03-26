import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CatWidget() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWinking, setIsWinking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate cursor position relative to the center of the widget container
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Occasionally wink
  useEffect(() => {
    const winkInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        setIsWinking(true);
        setTimeout(() => setIsWinking(false), 200);
      }
    }, 3000);
    return () => clearInterval(winkInterval);
  }, []);

  // Max distance the pupils can move
  const maxTravel = 8;
  const rawDist = Math.sqrt(mousePos.x ** 2 + mousePos.y ** 2);
  const ratio = rawDist > 0 ? Math.min(rawDist, 200) / 200 : 0;
  
  // Angle of the cursor from the center
  const angle = Math.atan2(mousePos.y, mousePos.x);
  
  const pupilX = Math.cos(angle) * maxTravel * ratio;
  const pupilY = Math.sin(angle) * maxTravel * ratio;

  return (
    <motion.div 
      ref={containerRef}
      className="col-span-2 aspect-square w-full bg-[#1D1D27] rounded-[28px] shadow-sm border border-white/10 p-4 flex flex-col relative overflow-hidden active:scale-95 transition-transform select-none"
      whileHover={{ y: -2 }}
    >
      <div className="absolute top-4 left-4 flex gap-1.5 items-center z-10">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Companion</span>
      </div>

      <div className="flex-1 w-full h-full flex items-center justify-center relative mt-2 z-0">
         {/* Head */}
         <div className="w-[84px] h-[70px] bg-orange-400 rounded-full relative shadow-inner">
           {/* Left Ear */}
           <div className="absolute -top-3 -left-1 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-orange-400 -rotate-12 transform origin-bottom" />
           {/* Inner Left Ear */}
           <div className="absolute -top-1.5 left-1 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#f6b490] -rotate-12 transform origin-bottom z-10" />

           {/* Right Ear */}
           <div className="absolute -top-3 -right-1 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-orange-400 rotate-12 transform origin-bottom" />
           {/* Inner Right Ear */}
           <div className="absolute -top-1.5 right-1 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#f6b490] rotate-12 transform origin-bottom z-10" />

           {/* Eyes Canvas */}
           <div className="absolute inset-0 flex items-center justify-center gap-4 mt-1 z-20">
             {/* Left Eye */}
             <div className="w-[18px] h-[22px] bg-white rounded-[50%] overflow-hidden relative border-2 border-orange-500 shadow-sm flex items-center justify-center">
                {isWinking ? (
                   <div className="w-3 h-1 bg-black rounded-full" />
                ) : (
                   <div 
                     className="w-2.5 h-[14px] bg-black rounded-full absolute transition-transform duration-75 ease-out"
                     style={{ transform: `translate(${pupilX}px, ${pupilY}px)` }}
                   />
                )}
             </div>

             {/* Right Eye */}
             <div className="w-[18px] h-[22px] bg-white rounded-[50%] overflow-hidden relative border-2 border-orange-500 shadow-sm flex items-center justify-center">
                <div 
                  className="w-2.5 h-[14px] bg-black rounded-full absolute transition-transform duration-75 ease-out"
                  style={{ transform: `translate(${pupilX}px, ${pupilY}px)` }}
                />
             </div>
           </div>

           {/* Nose & Mouth */}
           <div className="absolute top-[40px] w-full flex flex-col items-center z-20">
             <div className="w-2.5 h-1.5 bg-pink-400 rounded-full shadow-sm" />
             <div className="w-4 h-3 border-b-2 border-orange-600/50 rounded-b-full mt-0.5" />
           </div>
         </div>
         
         {/* Whiskers */}
         <div className="absolute top-[48px] left-[10px] space-y-1.5 rotate-[15deg] opacity-60 z-10 block pointer-events-none w-8">
            <div className="h-[1.5px] w-6 bg-white/60 rounded-full" />
            <div className="h-[1.5px] w-8 bg-white/60 rounded-full -translate-x-1" />
         </div>
         <div className="absolute top-[48px] right-[10px] space-y-1.5 -rotate-[15deg] opacity-60 z-10 flex flex-col items-end pointer-events-none w-8">
            <div className="h-[1.5px] w-6 bg-white/60 rounded-full" />
            <div className="h-[1.5px] w-8 bg-white/60 rounded-full translate-x-1" />
         </div>
      </div>
      
      {/* Footer text */}
      <div className="absolute bottom-3 left-0 right-0 text-center">
         <span className="text-[11px] font-bold tracking-tight text-white/40">Meow!</span>
      </div>
    </motion.div>
  );
}
