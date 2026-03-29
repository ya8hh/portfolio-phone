import { useState, useRef, type ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import AppWindow from './AppWindow';
import ControlCenter from './ControlCenter';
import NotificationCenter from './NotificationCenter';
import LockScreen from './LockScreen';
import SplashScreen from './SplashScreen';

export default function IPhoneFrame({ children }: { children: ReactNode }) {
  const [isBooted, setIsBooted] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!frameRef.current || window.innerWidth < 640) return;
    const rect = frameRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientY - centerY) / rect.height) * 8;
    const y = ((e.clientX - centerX) / rect.width) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="h-[100dvh] w-full flex items-center justify-center p-0 sm:p-8 relative overflow-hidden"
      style={{
        backgroundColor: '#F2F2F7',
        backgroundImage:
          'radial-gradient(circle at 20% 80%, rgba(124,58,237,0.07) 0%, transparent 50%),' +
          'radial-gradient(circle at 80% 20%, rgba(6,182,212,0.07) 0%, transparent 50%),' +
          'radial-gradient(#C7C7CC 1px, transparent 1px)',
        backgroundSize: 'auto, auto, 28px 28px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ─── Outside-Phone Sidebar (Desktop only) ─── */}
      <div className="hidden lg:flex absolute inset-0 items-center pointer-events-none z-0">

        {/* LEFT: Name + Bio + Social */}
        <div className="flex-1 flex flex-col items-end pr-16 gap-6 pointer-events-auto">
          <div className="text-right max-w-[300px]">
            <p className="ios-overline mb-2">Portfolio</p>
            <h1 className="text-[52px] font-black text-[#1C1C1E] leading-[1.05] tracking-tighter mb-4">
              Yash<br />Pal
            </h1>
            <p className="text-[#8E8E93] text-[17px] font-medium leading-relaxed">
              React Native Developer crafting smooth,<br />scalable mobile experiences.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <a href="https://github.com/ya8hh" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-[#1C1C1E] rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md tap-pressable">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/yashpal06/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0077B5] rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md tap-pressable">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:pyash3137@gmail.com"
              className="w-10 h-10 bg-[#FF3B30] rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md tap-pressable">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Spacer for phone */}
        <div className="w-[420px] shrink-0" />

        {/* RIGHT: Status, Stats, Tags */}
        <div className="flex-1 flex flex-col items-start pl-16 gap-6 pointer-events-auto">
          <div className="space-y-4 max-w-[280px]">
            {/* Open to work pill */}
            <div className="flex items-center gap-3 glass-light px-4 py-3 rounded-2xl shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#34C759] animate-pulse"
                style={{ boxShadow: '0 0 0 4px rgba(52,199,89,0.2)' }} />
              <span className="text-[#1C1C1E] text-[15px] font-semibold">Open to opportunities</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2">
              {[['3', 'Companies'], ['9+', 'Projects'], ['1+', 'Yr Exp']].map(([num, label]) => (
                <div key={label} className="glass-light px-3 py-4 rounded-2xl shadow-sm text-center">
                  <p className="text-[24px] font-black text-[#1C1C1E]">{num}</p>
                  <p className="text-[10px] font-bold text-[#8E8E93] uppercase tracking-wider mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Tinted tech tags */}
            <div className="flex flex-wrap gap-2">
              {['React Native', 'TypeScript', 'Node.js', 'Firebase', 'MERN'].map(t => (
                <span key={t} className="ios-tag">{t}</span>
              ))}
            </div>
          </div>

          <p className="text-[#C7C7CC] text-[11px] font-bold tracking-widest uppercase">
            Built with React + Framer Motion
          </p>
        </div>
      </div>

      {/* ─── iPhone Frame ─── */}
      <div
        ref={frameRef}
        className="relative w-full h-full sm:w-auto sm:h-full sm:max-h-[900px] sm:aspect-[390/844] sm:bg-[#111] sm:rounded-[50px] overflow-hidden sm:ring-[14px] sm:ring-[#1a1a1a] z-10 shrink-0"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
          boxShadow: '0 40px_80px_-12px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Hardware Buttons */}
        <div className="hidden sm:block absolute left-[-16px] top-[15%] w-1 h-[4%] bg-zinc-800 rounded-l-md z-50" />
        <div className="hidden sm:block absolute left-[-16px] top-[22%] w-1 h-[6%] bg-zinc-800 rounded-l-md z-50" />
        <div className="hidden sm:block absolute left-[-16px] top-[29%] w-1 h-[6%] bg-zinc-800 rounded-l-md z-50" />
        <div className="hidden sm:block absolute right-[-16px] top-[25%] w-1 h-[9%] bg-zinc-800 rounded-r-md z-50" />

        {/* Inner Screen */}
        <div className="relative w-full h-[100dvh] sm:h-full overflow-hidden sm:rounded-[36px] bg-black z-10">
          {!isBooted && <SplashScreen onFinish={() => setIsBooted(true)} />}

          <AnimatePresence>
            {isBooted && isLocked && (
              <LockScreen onUnlock={() => setIsLocked(false)} />
            )}
          </AnimatePresence>

          {children}
          <AppWindow />
          <ControlCenter />
          <NotificationCenter />
        </div>
      </div>
    </div>
  );
}
