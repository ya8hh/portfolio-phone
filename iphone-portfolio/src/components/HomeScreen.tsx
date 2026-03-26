import { useAppContext } from '../hooks/useAppContext';
import { homeScreenApps } from '../data/apps';
import AppIcon from './AppIcon';
import Dock from './Dock';
import StatusBar from './StatusBar';
import CatWidget from './CatWidget';
import { Code as Github } from 'lucide-react';

export default function HomeScreen() {
  const { wallpaper } = useAppContext();

  return (
    <div 
      className="relative w-full h-full bg-cover bg-center overflow-hidden flex flex-col pt-16 z-0"
      style={{ backgroundImage: wallpaper }}
    >
      <StatusBar />
      
      {/* App Grid */}
      <div className="flex-1 w-full px-4 sm:px-6 pt-6 grid grid-cols-4 gap-y-8 gap-x-2 sm:gap-y-10 sm:gap-x-5 place-items-center sm:place-items-start z-10 content-start">
         <CatWidget />
         {homeScreenApps.map((app) => (
          <AppIcon key={app.id} app={app} />
        ))}
        {/* GitHub Widget */}
        <a 
          href="https://github.com/ya8hh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="col-span-4 w-full h-[140px] sm:h-[150px] bg-white/70 backdrop-blur-[30px] rounded-[28px] shadow-sm border border-white/50 p-4 flex flex-col relative overflow-hidden hover:scale-[0.98] transition-transform cursor-pointer no-underline"
        >
          <div className="flex items-center justify-between mb-2 shrink-0 z-10">
            <div className="flex items-center gap-2">
              <Github size={18} className="text-gray-800" />
              <span className="text-[14px] font-bold text-gray-800 tracking-tight">Activity</span>
            </div>
            <span className="text-[11px] text-gray-500 font-bold tracking-wider uppercase">ya8hh</span>
          </div>
          
          {/* Inner padded container for SVG positioning */}
          <div className="absolute top-[42px] bottom-3 sm:bottom-4 left-4 right-4 flex overflow-hidden rounded-[14px] bg-white/40 border border-white/60">
             <div className="relative w-full h-full">
               <img 
                 src="https://ghchart.rshah.org/6366f1/ya8hh" 
                 alt="ya8hh Github Graph" 
                 className="absolute right-0 h-full w-auto max-w-none opacity-90 select-none py-2 px-1 mix-blend-multiply" 
               />
             </div>
          </div>
        </a>
       
      </div>

      {/* Page Dots */}
      <div className="flex justify-center gap-1.5 pb-2 z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </div>

      <Dock />
    </div>
  );
}
