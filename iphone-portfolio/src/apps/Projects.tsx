import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Code2, ChevronRight, LayoutGrid, RotateCcw, X, Check, Info, Code as GithubIcon, ExternalLink } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';

const projectData = [
  {
    id: 'iraah-partners',
    name: 'Iraah Partners (App Store)',
    description: 'An end-to-end B2B shopping and partnership mobile app built for clients while at Bytive Technologies.',
    tags: ['React Native', 'iOS', 'Full Stack'],
    color: 'from-blue-600 to-indigo-800',
    github: 'https://apps.apple.com/in/app/iraah-partners/id6759037518'
  },
  {
    id: 'BallRush3d',
    name: 'BallRush3d',
    description: 'A high-octane 3D runner game featuring dynamic obstacles and fluid physics-based movement.',
    tags: ['Unity', 'C#', 'Game Dev'],
    color: 'from-orange-400 to-red-500',
    github: 'https://github.com/ya8hh/BallRush3d'
  },
  {
    id: 'naam-jaap',
    name: 'Naam Jaap App',
    description: 'A spiritual companion app designed for meditative chanting and tracking spiritual progress.',
    tags: ['React Native', 'Firebase', 'Mobile'],
    color: 'from-amber-400 to-orange-600',
    github: 'https://github.com/ya8hh'
  },
  {
    id: 'ai-expense-app',
    name: 'AI Expense Tracker',
    description: 'Smart budgeting tool using AI to categorize and track daily expenses automatically.',
    tags: ['React Native', 'OpenAI', 'MERN'],
    color: 'from-violet-500 to-fuchsia-600',
    github: 'https://github.com/ya8hh/ai-expense-app'
  },
  {
    id: 'SpendWise',
    name: 'SpendWise',
    description: 'Advanced financial management app with beautiful data visualizations and reports.',
    tags: ['React Native', 'Firebase', 'Charts'],
    color: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/ya8hh/SpendWise'
  },
  {
    id: 'Ryde',
    name: 'Ryde',
    description: 'Full-featured ride-sharing mobile application with real-time tracking and maps.',
    tags: ['React Native', 'Google Maps', 'Node.js'],
    color: 'from-blue-500 to-cyan-600',
    github: 'https://github.com/ya8hh/Ryde'
  },
  {
    id: 'FoodDeliveryApp',
    name: 'Foodie Express',
    description: 'Scalable food delivery platform with menu management and order tracking.',
    tags: ['React Native', 'Redux', 'Express'],
    color: 'from-orange-500 to-red-600',
    github: 'https://github.com/ya8hh/FoodDeliveryApp'
  },
  {
    id: 'talkx-backend',
    name: 'TalkX Backend',
    description: 'High-concurrency chat backend system with real-time socket communication.',
    tags: ['Node.js', 'Socket.io', 'Redis'],
    color: 'from-gray-700 to-gray-900',
    github: 'https://github.com/ya8hh/talkx-backend'
  },
  {
    id: 'YT-converter',
    name: 'YouTube Converter',
    description: 'Fast and reliable utility to convert YouTube media into play-ready formats.',
    tags: ['Node.js', 'FFmpeg', 'React'],
    color: 'from-red-600 to-rose-700',
    github: 'https://github.com/ya8hh/YT-converter'
  },
  {
    id: 'devConnect',
    name: 'DevConnect',
    description: 'Professional networking platform for developers to share snippets and advice.',
    tags: ['TypeScript', 'MERN', 'Auth0'],
    color: 'from-sky-600 to-blue-800',
    github: 'https://github.com/ya8hh/devConnect'
  }
];

const SwipeCard = ({ project, onSwipe, index }: { project: typeof projectData[0], onSwipe: (dir: 'left' | 'right') => void, index: number }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-25, 25]);
  const nopeOpacity = useTransform(x, [-100, -20], [1, 0]);
  const likeOpacity = useTransform(x, [20, 100], [0, 1]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 100) onSwipe('right');
    else if (info.offset.x < -100) onSwipe('left');
  };

  return (
    <motion.div
      style={{ x, rotate, zIndex: 100 - index }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
      className="absolute inset-0 cursor-grab active:cursor-grabbing px-4 pt-4 pb-20"
    >
      <div className="relative w-full h-full bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
        {/* Visual Header */}
        <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-white relative`}>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-[24px]">
             <Code2 size={64} strokeWidth={1.5} />
          </div>
          
          {/* Swipe Indicators */}
          <motion.div style={{ opacity: nopeOpacity }} className="absolute top-6 right-6 border-4 border-red-500 rounded-lg px-3 py-1 rotate-12">
            <span className="text-red-500 font-black text-2xl uppercase">Nope</span>
          </motion.div>
          <motion.div style={{ opacity: likeOpacity }} className="absolute top-6 left-6 border-4 border-emerald-500 rounded-lg px-3 py-1 -rotate-12">
            <span className="text-emerald-500 font-black text-2xl uppercase">{project.github.includes('github') ? 'Code' : 'Link'}</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-[26px] font-black text-gray-900 mb-2">{project.name}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
             {project.tags.map(tag => (
               <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-400 rounded-lg text-[10px] font-black uppercase tracking-wider">
                 {tag}
               </span>
             ))}
          </div>
          <p className="text-gray-600 font-medium leading-relaxed text-[15px] mb-6">
            {project.description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-gray-400">
             <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-widest leading-none">
                <Info size={14} />
                <span>
                  Swipe right for{' '}
                  {project.github.includes('github') ? (
                    <><GithubIcon size={12} className="inline-block -mt-0.5" /> repo</>
                  ) : (
                    <><ExternalLink size={12} className="inline-block -mt-0.5" /> link</>
                  )}
                </span>
             </div>
             <ChevronRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { isDark } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
       window.open(projectData[currentIndex].github, '_blank');
    }
    setCurrentIndex(prev => prev + 1);
  };

  const reset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className={`min-h-full flex flex-col relative overflow-hidden ${isDark ? 'bg-[#1C1C1E] text-white' : 'bg-[#f4f4f5] text-gray-900'}`}>
      <div className="pt-6 px-6 mb-4 shrink-0">
        <div className="flex items-center justify-between">
           <div>
              <p className="text-[12px] font-black text-purple-600 uppercase tracking-widest mb-1">Explore Work</p>
              <h1 className={`text-[34px] font-black tracking-tighter leading-none ${isDark ? 'text-white' : 'text-black'}`}>RepoStack</h1>
           </div>
           <button onClick={reset} className={`p-2 rounded-full shadow-md active:scale-90 transition-transform ${isDark ? 'bg-white/10 text-gray-400' : 'bg-white text-gray-400'}`}>
              <RotateCcw size={20} />
           </button>
        </div>
      </div>

      <div className="flex-1 relative mt-2 mb-24">
        <AnimatePresence>
          {currentIndex < projectData.length ? (
            <div className="relative w-full h-[520px]">
               {projectData.slice(currentIndex, currentIndex + 2).reverse().map((p, i) => (
                 <SwipeCard 
                   key={p.id} 
                   project={p} 
                   onSwipe={handleSwipe} 
                   index={i} 
                 />
               ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-10 text-center h-[520px]">
               <div className="w-20 h-20 bg-white rounded-[24px] shadow-lg flex items-center justify-center text-purple-500 mb-6 border border-gray-100">
                  <LayoutGrid size={40} />
               </div>
               <h2 className="text-2xl font-black mb-2 tracking-tight">That's everything!</h2>
               <p className="text-gray-400 font-bold mb-8 leading-snug">You've explored all the top repositories. Want to see see more?</p>
               <div className="space-y-3 w-full max-w-[200px]">
                 <a 
                   href="https://github.com/ya8hh" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 bg-gray-900 text-white w-full py-3.5 rounded-2xl font-black shadow-xl active:scale-95 transition-transform"
                 >
                   <GithubIcon size={18} />
                   See More on GitHub
                 </a>
                 <button 
                   onClick={reset}
                   className="bg-white border border-gray-100 text-gray-500 w-full py-3.5 rounded-2xl font-bold shadow-md active:scale-95 transition-transform"
                 >
                   Start Again
                 </button>
               </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Swipe Controls (Visual only) */}
      {currentIndex < projectData.length && (
         <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 px-10 pointer-events-none">
            <div className="w-14 h-14 bg-white rounded-full shadow-lg border border-red-50 border-b-4 border-b-red-100 flex items-center justify-center text-red-500">
               <X size={28} strokeWidth={3} />
            </div>
            <div className="w-14 h-14 bg-white rounded-full shadow-lg border border-emerald-50 border-b-4 border-b-emerald-100 flex items-center justify-center text-emerald-500">
               <Check size={28} strokeWidth={3} />
            </div>
         </div>
      )}
    </div>
  );
}
