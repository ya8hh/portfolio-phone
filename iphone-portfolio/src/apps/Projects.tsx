import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Code2, ChevronRight, LayoutGrid, RotateCcw, X, Check, ArrowRight } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';
import { Code as GithubIcon, ExternalLink } from 'lucide-react';

const projectData = [
  {
    id: 'iraah-partners',
    name: 'Iraah Partners',
    meta: 'App Store · iOS',
    description: 'End-to-end B2B shopping and partnership mobile app built for clients at Bytive Technologies.',
    tags: ['React Native', 'iOS', 'Full Stack'],
    color: 'from-blue-600 via-blue-500 to-indigo-700',
    github: 'https://apps.apple.com/in/app/iraah-partners/id6759037518',
    isLink: true,
  },
  {
    id: 'BallRush3d',
    name: 'BallRush 3D',
    meta: 'Game · Unity',
    description: 'High-octane 3D runner game featuring dynamic obstacles and fluid physics-based movement.',
    tags: ['Unity', 'C#', 'Game Dev'],
    color: 'from-orange-400 via-red-400 to-rose-500',
    github: 'https://github.com/ya8hh/BallRush3d',
    isLink: false,
  },
  {
    id: 'naam-jaap',
    name: 'Naam Jaap App',
    meta: 'Spiritual · Mobile',
    description: 'Spiritual companion app for meditative chanting and tracking spiritual progress.',
    tags: ['React Native', 'Firebase', 'Mobile'],
    color: 'from-amber-400 via-orange-400 to-orange-600',
    github: 'https://github.com/ya8hh',
    isLink: false,
  },
  {
    id: 'ai-expense-app',
    name: 'AI Expense Tracker',
    meta: 'AI · Finance',
    description: 'Smart budgeting tool using AI to categorize and track daily expenses automatically.',
    tags: ['React Native', 'OpenAI', 'MERN'],
    color: 'from-violet-500 via-purple-500 to-fuchsia-600',
    github: 'https://github.com/ya8hh/ai-expense-app',
    isLink: false,
  },
  {
    id: 'SpendWise',
    name: 'SpendWise',
    meta: 'Finance · Charts',
    description: 'Advanced financial management app with beautiful data visualizations and reports.',
    tags: ['React Native', 'Firebase', 'Charts'],
    color: 'from-emerald-500 via-green-400 to-teal-600',
    github: 'https://github.com/ya8hh/SpendWise',
    isLink: false,
  },
  {
    id: 'Ryde',
    name: 'Ryde',
    meta: 'Maps · Ride-sharing',
    description: 'Full-featured ride-sharing mobile application with real-time tracking and maps.',
    tags: ['React Native', 'Google Maps', 'Node.js'],
    color: 'from-sky-500 via-blue-400 to-cyan-600',
    github: 'https://github.com/ya8hh/Ryde',
    isLink: false,
  },
  {
    id: 'FoodDeliveryApp',
    name: 'Foodie Express',
    meta: 'Food · Delivery',
    description: 'Scalable food delivery platform with menu management and real-time order tracking.',
    tags: ['React Native', 'Redux', 'Express'],
    color: 'from-orange-500 via-amber-500 to-red-500',
    github: 'https://github.com/ya8hh/FoodDeliveryApp',
    isLink: false,
  },
  {
    id: 'talkx-backend',
    name: 'TalkX Backend',
    meta: 'Backend · Real-time',
    description: 'High-concurrency chat backend with real-time socket communication and Redis caching.',
    tags: ['Node.js', 'Socket.io', 'Redis'],
    color: 'from-gray-700 via-gray-600 to-gray-800',
    github: 'https://github.com/ya8hh/talkx-backend',
    isLink: false,
  },
  {
    id: 'YT-converter',
    name: 'YouTube Converter',
    meta: 'Utility · Web',
    description: 'Fast and reliable utility to convert YouTube media into play-ready formats.',
    tags: ['Node.js', 'FFmpeg', 'React'],
    color: 'from-red-600 via-red-500 to-rose-700',
    github: 'https://github.com/ya8hh/YT-converter',
    isLink: false,
  },
  {
    id: 'devConnect',
    name: 'DevConnect',
    meta: 'Social · Developer',
    description: 'Professional networking platform for developers to share snippets and advice.',
    tags: ['TypeScript', 'MERN', 'Auth0'],
    color: 'from-sky-600 via-blue-600 to-blue-800',
    github: 'https://github.com/ya8hh/devConnect',
    isLink: false,
  },
];

const TAG_COLORS: Record<string, string> = {
  'React Native': 'bg-blue-50 border-blue-100 text-blue-600',
  'iOS': 'bg-gray-50 border-gray-200 text-gray-500',
  'Full Stack': 'bg-purple-50 border-purple-100 text-purple-600',
  'Unity': 'bg-orange-50 border-orange-100 text-orange-600',
  'C#': 'bg-green-50 border-green-100 text-green-600',
  'Game Dev': 'bg-red-50 border-red-100 text-red-500',
  'Firebase': 'bg-yellow-50 border-yellow-200 text-yellow-700',
  'Mobile': 'bg-indigo-50 border-indigo-100 text-indigo-600',
  'OpenAI': 'bg-emerald-50 border-emerald-100 text-emerald-600',
  'MERN': 'bg-teal-50 border-teal-100 text-teal-600',
  'Charts': 'bg-blue-50 border-blue-100 text-blue-500',
  'Google Maps': 'bg-green-50 border-green-100 text-green-600',
  'Node.js': 'bg-lime-50 border-lime-100 text-lime-700',
  'Redux': 'bg-purple-50 border-purple-100 text-purple-500',
  'Express': 'bg-gray-50 border-gray-200 text-gray-600',
  'Socket.io': 'bg-gray-50 border-gray-200 text-gray-700',
  'Redis': 'bg-red-50 border-red-100 text-red-600',
  'FFmpeg': 'bg-orange-50 border-orange-100 text-orange-600',
  'React': 'bg-sky-50 border-sky-100 text-sky-600',
  'TypeScript': 'bg-blue-50 border-blue-200 text-blue-700',
  'Auth0': 'bg-orange-50 border-orange-100 text-orange-500',
  'default': 'bg-gray-50 border-gray-200 text-gray-500',
};

const SwipeCard = ({ project, onSwipe, index }: {
  project: typeof projectData[0];
  onSwipe: (dir: 'left' | 'right') => void;
  index: number;
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-180, 180], [-22, 22]);
  const nopeOpacity = useTransform(x, [-120, -20], [1, 0]);
  const likeOpacity = useTransform(x, [20, 120], [0, 1]);
  const cardScale = useTransform(x, [-200, 0, 200], [0.96, 1, 0.96]);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x > 100) onSwipe('right');
    else if (info.offset.x < -100) onSwipe('left');
  };

  return (
    <motion.div
      style={{ x, rotate, zIndex: 100 - index, scale: cardScale }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: 'grabbing' }}
      className="absolute inset-0 cursor-grab p-4"
    >
      {/* Card itself */}
      <div className="relative w-full h-full bg-white rounded-[28px] shadow-lg overflow-hidden border border-black/[0.06] flex flex-col">

        {/* ── Gradient Header ── */}
        <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden shrink-0`}>
          {/* Decorative blur circles */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/10 rounded-full blur-2xl" />

          {/* App icon square */}
          <div className="w-20 h-20 rounded-[20px] flex items-center justify-center text-white z-10"
            style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px) saturate(1.8)', border: '1px solid rgba(255,255,255,0.25)' }}>
            <Code2 size={36} strokeWidth={1.5} />
          </div>

          {/* Swipe indicators */}
          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-5 right-5 border-[3px] border-red-400 rounded-xl px-3 py-1 rotate-12"
          >
            <span className="text-red-400 font-black text-xl uppercase tracking-wide">Nope</span>
          </motion.div>
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-5 left-5 border-[3px] border-emerald-400 rounded-xl px-3 py-1 -rotate-12"
          >
            <span className="text-emerald-400 font-black text-xl uppercase tracking-wide">
              {project.isLink ? 'Open' : 'Code'}
            </span>
          </motion.div>

          {/* Meta label top-right */}
          <div className="absolute bottom-3 right-4">
            <span className="text-white/70 text-[11px] font-semibold tracking-wide">{project.meta}</span>
          </div>
        </div>

        {/* ── White Content Body ── */}
        <div className="p-5 flex-1 flex flex-col gap-3">
          {/* Overline + Title */}
          <div>
            <h2 className="text-[22px] font-bold text-[#1C1C1E] leading-tight tracking-tight">{project.name}</h2>
          </div>

          {/* Tinted tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => {
              const cls = TAG_COLORS[tag] ?? TAG_COLORS.default;
              return (
                <span key={tag} className={`px-2.5 py-1 rounded-[6px] text-[11px] font-bold uppercase tracking-wider border ${cls}`}>
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Description */}
          <p className="text-[15px] text-[#636366] font-normal leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Swipe hint */}
          <div className="flex items-center justify-between pt-3 border-t border-[#F2F2F7] mt-auto">
            <div className="flex items-center gap-1.5 text-[#8E8E93]">
              <ArrowRight size={14} strokeWidth={2} />
              <span className="text-[12px] font-semibold">
                Swipe → to view {project.isLink ? 'App Store link' : 'GitHub repo'}
              </span>
            </div>
            <ChevronRight size={16} className="text-[#C7C7CC]" />
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

  const reset = () => setCurrentIndex(0);
  const remaining = projectData.length - currentIndex;

  return (
    <div className={`min-h-full flex flex-col relative overflow-hidden ${isDark ? 'bg-[#1C1C1E] text-white' : 'bg-[#F2F2F7] text-[#1C1C1E]'}`}>

      {/* ── Header ── */}
      <div className="pt-6 px-6 pb-4 shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="ios-overline mb-1">Explore Work</p>
            <h1 className={`text-[34px] font-black tracking-tighter leading-none ${isDark ? 'text-white' : 'text-[#1C1C1E]'}`}>
              RepoStack
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {remaining > 0 && (
              <span className="text-[13px] font-semibold text-[#8E8E93]">
                {remaining} left
              </span>
            )}
            <button
              onClick={reset}
              className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm active:scale-90 transition-transform tap-pressable ${isDark ? 'bg-white/10 text-[#8E8E93]' : 'bg-white text-[#8E8E93]'}`}
            >
              <RotateCcw size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Card Stack ── */}
      <div className="flex-1 relative mt-2 mb-28">
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="flex flex-col items-center justify-center p-10 text-center h-[520px]"
            >
              <div className="w-20 h-20 bg-white rounded-[24px] shadow-sm flex items-center justify-center text-[#007AFF] mb-6 border border-black/[0.06]">
                <LayoutGrid size={36} strokeWidth={1.5} />
              </div>
              <p className="ios-overline mb-2">All done!</p>
              <h2 className={`text-[24px] font-bold mb-2 tracking-tight ${isDark ? 'text-white' : 'text-[#1C1C1E]'}`}>
                That's everything!
              </h2>
              <p className="text-[#8E8E93] text-[15px] font-medium mb-8 leading-relaxed">
                You've explored all the top repositories.<br />Want to see more?
              </p>
              <div className="space-y-3 w-full max-w-[200px]">
                <a
                  href="https://github.com/ya8hh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1C1C1E] text-white w-full py-3.5 rounded-2xl font-bold shadow-md active:scale-95 transition-transform tap-pressable text-[15px]"
                >
                  <GithubIcon size={16} />
                  See More on GitHub
                </a>
                <button
                  onClick={reset}
                  className="bg-white border border-black/[0.06] text-[#1C1C1E] w-full py-3.5 rounded-2xl font-semibold shadow-sm active:scale-95 transition-transform tap-pressable text-[15px]"
                >
                  Start Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom Swipe Controls ── */}
      {currentIndex < projectData.length && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 pointer-events-none">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="w-14 h-14 bg-white rounded-full shadow-md border border-red-50 flex items-center justify-center text-[#FF3B30]"
          >
            <X size={26} strokeWidth={2.5} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="w-14 h-14 bg-white rounded-full shadow-md border border-green-50 flex items-center justify-center text-[#34C759]"
          >
            <Check size={26} strokeWidth={2.5} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="w-14 h-14 bg-white rounded-full shadow-md border border-blue-50 flex items-center justify-center text-[#007AFF]"
          >
            <ExternalLink size={22} strokeWidth={2} />
          </motion.div>
        </div>
      )}
    </div>
  );
}
