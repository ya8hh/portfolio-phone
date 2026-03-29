import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../hooks/useAppContext';
import { apps } from '../data/apps';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { type ReactNode, lazy, Suspense } from 'react';

// Project Apps (Lazy Loaded)
const ShareNow = lazy(() => import('../apps/ShareNow'));
const Shortener = lazy(() => import('../apps/Shortener'));
const DevConnect = lazy(() => import('../apps/DevConnect'));
const YTConverter = lazy(() => import('../apps/YTConverter'));

// System Apps (Lazy Loaded)
const Notes = lazy(() => import('../apps/Notes'));
const Settings = lazy(() => import('../apps/Settings'));
const Phone = lazy(() => import('../apps/Phone'));
const Experience = lazy(() => import('../apps/Experience'));
const Projects = lazy(() => import('../apps/Projects'));
const Spotify = lazy(() => import('../apps/Spotify'));

const getAppContent = (id: string): ReactNode => {
  let Content;
  switch (id) {
    case 'sharenow': Content = <ShareNow />; break;
    case 'shortener': Content = <Shortener />; break;
    case 'devconnect': Content = <DevConnect />; break;
    case 'ytconverter': Content = <YTConverter />; break;
    case 'notes': Content = <Notes />; break;
    case 'settings': Content = <Settings />; break;
    case 'phone': Content = <Phone />; break;
    case 'experience': Content = <Experience />; break;
    case 'projects': Content = <Projects />; break;
    case 'spotify': Content = <Spotify />; break;
    default: return <div className="p-8">App Content Not Found</div>;
  }
  
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <Loader2 className="animate-spin text-gray-400" size={32} />
      </div>
    }>
      {Content}
    </Suspense>
  );
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
          transition={{ type: 'spring', damping: 28, stiffness: 220, mass: 0.8 }}
          className={`absolute inset-0 z-50 flex flex-col w-full h-[100dvh] sm:h-full overflow-hidden ${isDark ? 'bg-[#1C1C1E] text-white' : 'bg-[#F2F2F7] text-[#1C1C1E]'} sm:rounded-[36px]`}
        >
          {/* App Header (fake iOS header) */}
          <div
            className={`flex items-end px-2 pb-3 border-b backdrop-blur-3xl shrink-0 relative z-20 ${isDark ? 'border-white/10 bg-black/50' : 'border-black/5 bg-white/70'}`}
            style={{
              height: 'calc(var(--content-top, 56px) + 36px)',
              paddingTop: 'calc(var(--safe-top, 44px) + 4px)',
            }}
          >
            <button 
              onClick={closeApp}
              className="flex items-center text-ios-blue active:opacity-40 transition-opacity z-10 pl-2"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
              <span className="text-[17px] font-medium tracking-tight -ml-1 text-ios-blue drop-shadow-sm">Home</span>
            </button>
            <div className={`absolute inset-x-0 bottom-3 text-center pointer-events-none font-semibold text-[17px] tracking-tight ${isDark ? 'text-white' : 'text-[#1C1C1E]'}`}>
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
