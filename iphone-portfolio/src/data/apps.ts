import { Image, Link, Code2, Headphones, FileText, Settings, Phone, Briefcase, LayoutGrid, Music } from 'lucide-react';

export type AppData = {
  id: string;
  name: string;
  icon: React.ElementType;
  iconColor: string;
  isFakeSystem?: boolean;
  type?: 'project' | 'system';
  isDock?: boolean;
};

export const apps: AppData[] = [
  // User Projects (Hidden from home screen, but available for the Projects app)
  {
    id: 'sharenow',
    name: 'ShareNow',
    icon: Image,
    iconColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    type: 'project',
  },
  {
    id: 'shortener',
    name: 'Shortener',
    icon: Link,
    iconColor: 'bg-gradient-to-br from-blue-400 to-indigo-600',
    type: 'project',
  },
  {
    id: 'devconnect',
    name: 'DevConnect',
    icon: Code2,
    iconColor: 'bg-gradient-to-br from-gray-800 to-black border border-gray-700',
    type: 'project',
  },
  {
    id: 'ytconverter',
    name: 'YT -> Spot',
    icon: Headphones,
    iconColor: 'bg-gradient-to-br from-green-400 to-green-600',
    type: 'project',
  },

  // Fake System Apps
  {
    id: 'notes',
    name: 'About Me',
    icon: FileText,
    iconColor: 'bg-ios-yellow',
    isFakeSystem: true,
    type: 'system',
  },
  {
    id: 'settings',
    name: 'Skills',
    icon: Settings,
    iconColor: 'bg-ios-gray',
    isFakeSystem: true,
    type: 'system',
  },
  {
    id: 'phone',
    name: 'Contact',
    icon: Phone,
    iconColor: 'bg-ios-green',
    isFakeSystem: true,
    type: 'system',
  },
  {
    id: 'experience',
    name: 'Experience',
    icon: Briefcase,
    iconColor: 'bg-gradient-to-br from-blue-700 to-indigo-900',
    isFakeSystem: true,
    type: 'system',
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: LayoutGrid,
    iconColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    isFakeSystem: true,
    type: 'system',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    icon: Music,
    iconColor: 'bg-green-500',
    isFakeSystem: true,
    type: 'system',
  },
];

export const dockApps: AppData[] = [
  apps.find(a => a.id === 'phone')!,
  apps.find(a => a.id === 'experience')!,
  apps.find(a => a.id === 'projects')!,
];

// homeScreenApps should include only system apps that are NOT in the dock
export const homeScreenApps: AppData[] = apps.filter(a => 
  a.type === 'system' && !dockApps.find(da => da.id === a.id)
);
