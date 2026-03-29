import { useEffect, useState } from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';
import DynamicIsland from './DynamicIsland';
import clsx from 'clsx';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());
  const { isDark, activeApp, isControlCenterOpen, setControlCenterOpen, isNotificationCenterOpen, setNotificationCenterOpen } = useAppContext();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const textColor = activeApp ? (isDark ? 'text-white' : 'text-black') : 'text-white';

  return (
    <div
      className={clsx('flex justify-between items-start px-5 w-full text-xs font-semibold select-none z-50 absolute top-0 left-0', textColor)}
      style={{
        // Push content below the real device notch — env() gives 0 in desktop browser 
        paddingTop: 'calc(env(safe-area-inset-top, 0px) + 14px)',
        paddingBottom: '6px'
      }}
    >
      {/* Left — Time (taps to open Notifications) */}
      <div
        className="flex-1 flex justify-start pl-1 cursor-pointer items-center h-8"
        onClick={() => setNotificationCenterOpen(!isNotificationCenterOpen)}
      >
        {timeString}
      </div>

      {/* Dynamic Island — responsive, interactive, floats below real notch */}
      <div className="absolute top-[calc(env(safe-area-inset-top,0px)+10px)] left-1/2 -translate-x-1/2 z-[60]">
        <DynamicIsland />
      </div>

      {/* Right — Icons (taps to open Control Center) */}
      <div
        className="flex-1 flex justify-end gap-1.5 pr-1 items-center cursor-pointer h-8 border-none"
        onClick={() => setControlCenterOpen(!isControlCenterOpen)}
      >
        <Signal size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <Battery size={16} strokeWidth={2} />
      </div>
    </div>
  );
}
