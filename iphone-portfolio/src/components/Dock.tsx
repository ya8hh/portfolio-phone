import { dockApps } from '../data/apps';
import AppIcon from './AppIcon';

export default function Dock() {
  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 w-[92%] h-[84px] sm:h-[92px] bg-white/40 backdrop-blur-[30px] border border-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-[28px] sm:rounded-[32px] flex items-center justify-around px-2 sm:px-3 z-40"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      {dockApps.map((app) => (
        <AppIcon key={app.id} app={{ ...app, isDock: true }} />
      ))}
    </div>
  );
}
