import { useState } from 'react';
import { motion } from 'framer-motion';
import type { AppData } from '../data/apps';
import { useAppContext } from '../hooks/useAppContext';

type AppIconProps = {
  app: AppData;
};

export default function AppIcon({ app }: AppIconProps) {
  const { openApp } = useAppContext();
  const [isJiggling, setIsJiggling] = useState(false);

  let longPressTimer: ReturnType<typeof setTimeout>;

  const handleTouchStart = () => {
    longPressTimer = setTimeout(() => {
      setIsJiggling(true);
      // Stop jiggling after 3 seconds
      setTimeout(() => setIsJiggling(false), 3000);
    }, 600);
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer);
  };

  return (
    <div className="flex flex-col items-center gap-1 w-[72px] sm:w-[80px] group select-none">
      <motion.button
        layoutId={`app-container-${app.id}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { if (!isJiggling) openApp(app.id); }}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        animate={isJiggling ? {
          rotate: [0, -2, 2, -2, 2, 0],
          transition: { duration: 0.4, repeat: Infinity }
        } : { rotate: 0 }}
        aria-label={`Open ${app.name}`}
        className={`w-[60px] h-[60px] sm:w-[64px] sm:h-[64px] flex items-center justify-center shadow-md overflow-hidden text-white relative flex-shrink-0 ${
          app.iconColor.startsWith('bg-') ? app.iconColor : ''
        }`}
        style={{
          boxShadow: '0 8px 16px -4px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.4)',
          background: app.iconColor.startsWith('bg-') ? undefined : app.iconColor,
          borderRadius: 16
        }}
      >
        <motion.div layoutId={`app-icon-${app.id}`} className="z-10 pointer-events-none">
           <app.icon size={32} strokeWidth={1.5} />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-0 group-active:opacity-10 transition-opacity" />
        
        {/* Jiggle mode delete badge (purely cosmetic) */}
        {isJiggling && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-gray-500/80 rounded-full flex items-center justify-center text-white z-20"
          >
            <span className="text-[10px] font-black leading-none">×</span>
          </motion.div>
        )}
      </motion.button>
      <span className={`text-white text-[11px] font-bold tracking-tight leading-tight w-full text-center drop-shadow-md px-0.5 ${app.isDock ? 'mt-0.5 opacity-90' : ''}`}>
        {app.name}
      </span>
    </div>
  );
}
