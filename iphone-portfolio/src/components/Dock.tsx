import { dockApps } from '../data/apps';
import AppIcon from './AppIcon';
import { useAppContext } from '../hooks/useAppContext';

export default function Dock() {
  const { activeApp } = useAppContext();

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-40"
      style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
    >
      <div
        className="flex items-center justify-around gap-4 px-6 py-4 rounded-[40px]"
        style={{
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(20px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
          border: '1px solid rgba(255,255,255,0.22)',
          boxShadow: '0 8px 32px -4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}
      >
        {dockApps.map((app) => (
          <div key={app.id} className="flex flex-col items-center gap-1.5">
            <div style={{ opacity: activeApp === null || activeApp === app.id ? 1 : 0.55, transition: 'opacity 0.2s ease' }}>
              <AppIcon app={{ ...app, isDock: true }} />
            </div>
            {/* Active dot indicator */}
            <div
              className="w-1 h-1 rounded-full bg-white transition-opacity duration-200"
              style={{ opacity: activeApp === app.id ? 0.9 : 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
