import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../hooks/useAppContext';
import { apps } from '../data/apps';
import { ChevronLeft } from 'lucide-react';
import { type ReactNode } from 'react';

// Project Apps
import ShareNow from '../apps/ShareNow';
import Shortener from '../apps/Shortener';
import DevConnect from '../apps/DevConnect';
import YTConverter from '../apps/YTConverter';

// System Apps
import Notes from '../apps/Notes';
import Settings from '../apps/Settings';
import Phone from '../apps/Phone';
import Experience from '../apps/Experience';
import Projects from '../apps/Projects';
import Spotify from '../apps/Spotify';

const getAppContent = (id: string): ReactNode => {
  switch (id) {
    case 'sharenow': return <ShareNow />;
    case 'shortener': return <Shortener />;
    case 'devconnect': return <DevConnect />;
    case 'ytconverter': return <YTConverter />;
    case 'notes': return <Notes />;
    case 'settings': return <Settings />;
    case 'phone': return <Phone />;
    case 'experience': return <Experience />;
    case 'projects': return <Projects />;
    case 'spotify': return <Spotify />;
    default: return <div className="p-8">App Content Not Found</div>;
  }
};

export default function AppWindow() {
  const { activeApp, closeApp, isDark } = useAppContext();
  
  const app = apps.find(a => a.id === activeApp);

  return (
    <AnimatePresence>
      {activeApp && app && (
        <motion.div
          layoutId={`app-container-${app.id}`}
          initial={{ borderRadius: 40 }}
          animate={{ borderRadius: 0 }}
          exit={{ borderRadius: window.innerWidth < 640 ? 0 : 36, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.8 }}
          className={`absolute inset-0 z-50 flex flex-col w-full h-[100dvh] sm:h-full overflow-hidden ${isDark ? 'bg-ios-bg text-white' : 'bg-[#FAFAFA] text-[#1D1D1F]'} sm:rounded-[36px]`}
        >
          {/* App Header (fake iOS header) */}
          <div 
            className={`flex items-end px-2 pb-3 border-b backdrop-blur-3xl pt-8 shrink-0 relative z-20 ${isDark ? 'border-white/10 bg-black/50' : 'border-black/5 bg-white/70'}`}
            style={{ height: 'calc(90px + env(safe-area-inset-top, 0px))', paddingTop: 'calc(2rem + env(safe-area-inset-top, 0px))' }}
          >
            <button 
              onClick={closeApp}
              className="flex items-center text-ios-blue active:opacity-40 transition-opacity z-10 pl-2"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
              <span className="text-[17px] font-medium tracking-tight -ml-1 text-ios-blue drop-shadow-sm">Home</span>
            </button>
            <div className={`absolute inset-x-0 bottom-3 text-center pointer-events-none font-semibold text-[17px] tracking-tight ${isDark ? 'text-white' : 'text-black/80'}`}>
               {app.name}
            </div>
          </div>

          {/* App Content container */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.15 }}
            className="flex-1 overflow-x-hidden overflow-y-auto w-full relative z-0 no-scrollbar h-full bg-inherit"
          >
            {getAppContent(app.id)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
