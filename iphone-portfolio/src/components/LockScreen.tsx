import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../hooks/useAppContext';

export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const { wallpaper } = useAppContext();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateString = time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <motion.div
      className="absolute inset-0 z-[100] flex flex-col items-center justify-between bg-cover bg-center overflow-hidden select-none"
      style={{ backgroundImage: wallpaper }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-0" />

      {/* Notch */}
      <div className="relative z-10 w-full flex justify-center pt-0">
        <div className="w-[120px] h-[30px] bg-black rounded-b-3xl" />
      </div>

      {/* Time & Date */}
      <div className="relative z-10 flex flex-col items-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white text-[82px] font-thin tracking-tight leading-none drop-shadow-2xl"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {timeString}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/90 text-[20px] font-semibold mt-2 drop-shadow-md tracking-tight"
        >
          {dateString}
        </motion.div>
      </div>

      {/* Notification preview */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10 w-[85%] bg-white/20 backdrop-blur-xl rounded-[24px] p-4 border border-white/20 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-black shadow-md">YP</div>
          <div>
            <p className="text-white text-[13px] font-bold uppercase tracking-wider leading-none">Portfolio</p>
            <p className="text-white/60 text-[11px] font-semibold mt-0.5">Just now</p>
          </div>
        </div>
        <p className="text-white text-[15px] font-semibold leading-snug">
          Welcome! Swipe up to explore my work, skills, and projects 🚀
        </p>
      </motion.div>

      {/* Swipe Up Area */}
      <motion.div
        className="relative z-10 flex flex-col items-center pb-10 pt-6 cursor-grab active:cursor-grabbing w-full"
        drag="y"
        dragConstraints={{ top: -200, bottom: 0 }}
        dragElastic={0.3}
        onDragEnd={(_, info) => {
          if (info.offset.y < -80) {
            onUnlock();
          }
        }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-10 h-1.5 bg-white/50 rounded-full" />
          <span className="text-white/60 text-[13px] font-semibold tracking-wide">Swipe up to unlock</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
