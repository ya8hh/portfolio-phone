import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type AppContextType = {
  activeApp: string | null;
  openApp: (appId: string) => void;
  closeApp: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  isControlCenterOpen: boolean;
  setControlCenterOpen: (val: boolean) => void;
  isNotificationCenterOpen: boolean;
  setNotificationCenterOpen: (val: boolean) => void;
  wallpaper: string;
  setWallpaper: (wp: string) => void;
};

export const wallpapers = [
  { id: 'default', url: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')", label: 'Abstract' },
  { id: 'gradient', url: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", label: 'Gradient' },
  { id: 'dark', url: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)", label: 'Dark' },
  { id: 'nature', url: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop')", label: 'Mountain' },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isControlCenterOpen, setControlCenterOpen] = useState(false);
  const [isNotificationCenterOpen, setNotificationCenterOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState(wallpapers[0].url);

  const openApp = (appId: string) => setActiveApp(appId);
  const closeApp = () => setActiveApp(null);
  const toggleTheme = () => setIsDark(prev => !prev);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <AppContext.Provider value={{ 
      activeApp, openApp, closeApp, isDark, toggleTheme,
      isControlCenterOpen, setControlCenterOpen,
      isNotificationCenterOpen, setNotificationCenterOpen,
      wallpaper, setWallpaper
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
