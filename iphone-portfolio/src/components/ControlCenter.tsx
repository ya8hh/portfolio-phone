import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext, wallpapers } from '../hooks/useAppContext';
import { Sun, Moon, Wifi, Bluetooth, Plane, Signal, Image } from 'lucide-react';

export default function ControlCenter() {
  const { isControlCenterOpen, setControlCenterOpen, isDark, toggleTheme, wallpaper, setWallpaper } = useAppContext();

  return (
    <AnimatePresence>
      {isControlCenterOpen && (
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="absolute inset-x-0 top-0 bottom-0 z-[60] pt-16 px-4 bg-black/40 backdrop-blur-3xl rounded-[36px] overflow-y-auto no-scrollbar"
        >
          {/* Background catch-all to close */}
          <div 
             className="absolute inset-0 z-[-1]" 
             onClick={() => setControlCenterOpen(false)} 
          />
          
          <div className="grid grid-cols-4 gap-4 mt-4">
             {/* Widget 1: Network */}
             <div className="col-span-2 bg-white/20 backdrop-blur-md rounded-[28px] p-4 grid grid-cols-2 grid-rows-2 gap-3 aspect-square shadow-sm border border-white/20">
                <div className="flex flex-col items-center justify-center bg-[#007AFF] rounded-full w-[52px] h-[52px] shadow-sm"><Wifi size={22} className="text-white" strokeWidth={2.5} /></div>
                <div className="flex flex-col items-center justify-center bg-[#007AFF] rounded-full w-[52px] h-[52px] shadow-sm"><Bluetooth size={22} className="text-white" strokeWidth={2} /></div>
                <div className="flex flex-col items-center justify-center bg-[#FF9500] rounded-full w-[52px] h-[52px] shadow-sm"><Plane size={22} className="text-white" strokeWidth={2} /></div>
                <div className="flex flex-col items-center justify-center bg-[#34C759] rounded-full w-[52px] h-[52px] shadow-sm"><Signal size={22} className="text-white" strokeWidth={2.5} /></div>
             </div>
             
             {/* Widget 2: Display (Dark Mode) */}
             <div className="col-span-2 bg-white/20 backdrop-blur-md rounded-[28px] p-4 flex flex-col justify-between items-center aspect-square shadow-sm border border-white/20">
                <div className="text-white font-semibold text-[17px] w-full text-center tracking-tight drop-shadow-sm mt-1">Appearance</div>
                <button 
                  onClick={toggleTheme}
                  className="w-full flex-1 mt-3 bg-white/90 rounded-[20px] flex items-center justify-center active:scale-95 transition-transform"
                >
                  {isDark ? <Moon size={32} className="text-indigo-500 fill-indigo-100" /> : <Sun size={32} className="text-orange-500 fill-orange-100" />}
                </button>
             </div>
          </div>

          {/* Wallpaper Selector */}
          <div className="mt-4 bg-white/20 backdrop-blur-md rounded-[28px] p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-3">
              <Image size={16} className="text-white/80" />
              <span className="text-white font-semibold text-[15px] tracking-tight">Wallpaper</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {wallpapers.map((wp) => (
                <button
                  key={wp.id}
                  onClick={() => setWallpaper(wp.url)}
                  className={`aspect-[3/4] rounded-[14px] overflow-hidden border-2 transition-all active:scale-90 ${
                    wallpaper === wp.url ? 'border-white shadow-lg scale-105' : 'border-white/20'
                  }`}
                  style={{ backgroundImage: wp.url, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="w-full h-full flex items-end justify-center pb-1.5 bg-black/20">
                    <span className="text-white text-[9px] font-bold uppercase tracking-wider drop-shadow-md">{wp.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="h-20" /> {/* Bottom spacing */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
