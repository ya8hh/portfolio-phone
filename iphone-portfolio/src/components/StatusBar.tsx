import { useEffect, useState } from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';
import clsx from 'clsx';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());
  const { isDark, activeApp, isControlCenterOpen, setControlCenterOpen, isNotificationCenterOpen, setNotificationCenterOpen } = useAppContext();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  // Make it dark or light depending on context or activeApp
  const textColor = activeApp ? (isDark ? 'text-white' : 'text-black') : 'text-white';

  return (
    <div 
      className={clsx("flex justify-between items-center px-6 pb-1 w-full text-xs font-semibold select-none z-50 absolute top-0 left-0", textColor)}
      style={{ paddingTop: 'calc(0.75rem + env(safe-area-inset-top, 0px))' }}
    >
      
      {/* Left Tap target (Notifications) */}
      <div 
        className="flex-1 flex justify-start pl-2 cursor-pointer h-8 items-center" 
        onClick={() => setNotificationCenterOpen(!isNotificationCenterOpen)}
      >
        {timeString}
      </div>
      
      <div className="flex-1 flex justify-center pointer-events-none">
        {/* Notch Area */}
        <div className="w-[120px] h-[30px] bg-black rounded-b-3xl absolute top-0" />
      </div>

      {/* Right Tap Target (Control Center) */}
      <div 
        className="flex-1 flex justify-end gap-1.5 pr-2 items-center cursor-pointer h-8"
        onClick={() => setControlCenterOpen(!isControlCenterOpen)}
      >
        <Signal size={14} strokeWidth={2.5} />
        <Wifi size={14} strokeWidth={2.5} />
        <Battery size={16} strokeWidth={2} />
      </div>
    </div>
  );
}
