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
      className="relative w-full h-full bg-cover bg-center overflow-hidden flex flex-col z-0"
      style={{ backgroundImage: wallpaper, paddingTop: 'var(--content-top, 56px)' }}
    >
      <StatusBar />

      {/* ── App Grid — 4-col, 8px gap rhythm ── */}
      <div className="flex-1 w-full px-4 sm:px-5 pt-6 grid grid-cols-4 gap-y-8 gap-x-2 sm:gap-y-8 sm:gap-x-3 place-items-center z-10 content-start">
        {/* Cat Widget — spans 4 cols */}
        <CatWidget />

        {homeScreenApps.map((app) => (
          <AppIcon key={app.id} app={app} />
        ))}

        {/* GitHub Activity Widget — full width */}
        <a
          href="https://github.com/ya8hh"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 w-full h-[136px] rounded-[24px] p-4 flex flex-col relative overflow-hidden active:scale-[0.98] transition-transform cursor-pointer no-underline"
          style={{
            background: 'rgba(255,255,255,0.14)',
            backdropFilter: 'blur(20px) saturate(1.8)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
            border: '1px solid rgba(255,255,255,0.20)',
            boxShadow: '0 4px 16px -4px rgba(0,0,0,0.15)',
          }}
        >
          {/* Widget Header */}
          <div className="flex items-center justify-between mb-2 shrink-0 z-10">
            <div className="flex items-center gap-2">
              <Github size={16} className="text-white/80" />
              <span className="text-[13px] font-bold text-white/90 tracking-tight">Activity</span>
            </div>
            <span className="ios-caption text-white/50">ya8hh</span>
          </div>

          {/* Graph */}
          <div className="absolute top-[40px] bottom-3 left-4 right-4 flex overflow-hidden rounded-[12px]"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <div className="relative w-full h-full">
              <img
                src="https://ghchart.rshah.org/6366f1/ya8hh"
                alt="GitHub contribution graph ya8hh"
                className="absolute right-0 h-full w-auto max-w-none opacity-85 select-none py-1.5 px-1 mix-blend-screen"
              />
            </div>
          </div>
        </a>
      </div>

      {/* ── Page Dots ── */}
      <div className="flex justify-center gap-2 pb-2 z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm opacity-90" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
      </div>

      <Dock />
    </div>
  );
}
