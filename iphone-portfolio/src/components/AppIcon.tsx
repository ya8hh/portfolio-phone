import { useState } from 'react';
import { motion } from 'framer-motion';
import type { AppData } from '../data/apps';
import { useAppContext } from '../hooks/useAppContext';

type AppIconProps = {
  app: AppData;
};

export default function AppIcon({ app }: AppIconProps) {
  const { openApp, activeApp } = useAppContext();
  const [isJiggling, setIsJiggling] = useState(false);

  let longPressTimer: ReturnType<typeof setTimeout>;

  const handlePressStart = () => {
    longPressTimer = setTimeout(() => {
      setIsJiggling(true);
      setTimeout(() => setIsJiggling(false), 3000);
    }, 600);
  };

  const handlePressEnd = () => clearTimeout(longPressTimer);

  const isActive = activeApp === app.id;

  return (
    <div className={`flex flex-col items-center gap-1.5 select-none ${app.isDock ? 'w-auto' : 'w-[72px] sm:w-[76px]'}`}>
      <motion.button
        layoutId={`app-container-${app.id}`}
        /* Spring tap animation — feels alive */
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        onClick={() => { if (!isJiggling) openApp(app.id); }}
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
        animate={isJiggling ? {
          rotate: [0, -2.5, 2.5, -2.5, 2.5, 0],
          transition: { duration: 0.35, repeat: Infinity },
        } : { rotate: 0 }}
        aria-label={`Open ${app.name}`}
        /* 
          8px grid: icon is 56x56px (7u) on mobile, 60x60px on sm.
          Dock icons same size, but no label below → tighter vertical rhythm 
        */
        className={`
          w-[56px] h-[56px] sm:w-[60px] sm:h-[60px]
          flex items-center justify-center
          overflow-hidden text-white relative flex-shrink-0
          ${app.iconColor.startsWith('bg-') ? app.iconColor : ''}
          ${app.isDock ? 'opacity-100' : isActive ? 'opacity-100' : 'opacity-95'}
        `}
        style={{
          boxShadow: app.isDock
            ? '0 4px 12px -2px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.35)'
            : '0 6px 16px -4px rgba(0,0,0,0.18), inset 0 1px 2px rgba(255,255,255,0.3)',
          background: app.iconColor.startsWith('bg-') ? undefined : app.iconColor,
          borderRadius: 15,
        }}
      >
        <motion.div layoutId={`app-icon-${app.id}`} className="z-10 pointer-events-none">
          <app.icon size={28} strokeWidth={1.8} />
        </motion.div>

        {/* Press ripple overlay */}
        <div className="absolute inset-0 bg-black opacity-0 active:opacity-10 transition-opacity rounded-[15px]" />

        {/* Jiggle delete badge */}
        {isJiggling && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center z-20"
          >
            <span className="text-[11px] font-black leading-none text-white">×</span>
          </motion.div>
        )}
      </motion.button>

      {/* Label — hidden for dock icons */}
      {!app.isDock && (
        <span className="text-white text-[11px] font-semibold tracking-tight leading-tight w-full text-center drop-shadow-md px-0.5 truncate">
          {app.name}
        </span>
      )}
    </div>
  );
}
