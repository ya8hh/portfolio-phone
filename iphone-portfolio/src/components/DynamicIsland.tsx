import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';

export default function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const trackPreviewUrl = 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b7/de/48/b7de48a1-8a9b-43aa-3ca3-e7fab488d5a5/mzaf_5928084297101240555.plus.aac.p.m4a';
  const trackArtworkUrl = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7a/0d/a3/7a0da341-8769-4b81-b3d5-a85a5f630929/26UMGIM21264.rgb.jpg/600x600bb.jpg';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("DynamicIsland audio error: ", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center flex-1 h-full items-center pointer-events-auto shrink-0 relative z-[60]">
      <audio ref={audioRef} src={trackPreviewUrl} preload="auto" />
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-black rounded-[24px] text-white overflow-hidden shadow-xl cursor-pointer flex flex-col items-center justify-center border border-white/10"
        initial={{ width: 120, height: 34, borderRadius: 17 }}
        animate={{
          width: isExpanded ? 340 : 120,
          height: isExpanded ? 200 : 34,
          borderRadius: isExpanded ? 44 : 17,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        style={{ originY: 0 }}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            // Collapsed state
            <motion.div
              key="collapsed"
              className="flex items-center justify-between w-full h-full px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="w-3 h-3 rounded-full bg-white/10 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]" />
              <div className="flex items-center gap-0.5 h-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-[#1ed760] rounded-full"
                    animate={{ height: isPlaying ? [3, 8, 3] : 3 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            // Expanded state
            <motion.div
              key="expanded"
              className="w-full h-full flex flex-col p-5 pt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <img src={trackArtworkUrl} alt="Album Art" className="w-16 h-16 rounded-[14px] flex-shrink-0 shadow-inner object-cover" />
                <div className="flex-1 overflow-hidden">
                  <p className="text-[12px] text-[#1ed760] font-bold mb-0.5 tracking-widest uppercase">Spotify</p>
                  <p className="text-[18px] font-bold truncate leading-tight tracking-tight">Iss Tarah</p>
                  <p className="text-[15px] text-white/50 truncate tracking-tight">Chaar Diwaari, Sonu Nigam</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 flex-shrink-0 self-start mt-1">
                  <div className="flex items-end gap-1 w-3 h-3">
                     {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-[#1ed760] rounded-t-sm"
                        animate={{ height: isPlaying ? [4, 10, 4] : 4 }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold text-white/50">
                <span className="w-6 text-right">{formatTime(audioRef.current?.currentTime || 0)}</span>
                <div className="flex-1 h-1.5 bg-[rgba(255,255,255,0.2)] rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" style={{ width: `${progress}%` }} />
                </div>
                <span className="w-6 text-left">{formatTime(audioRef.current?.duration || 0)}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-8 mt-5 pointer-events-auto">
                <button className="text-white/80 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                  <SkipBack size={24} fill="currentColor" />
                </button>
                <button
                  onClick={togglePlay}
                  className="text-white hover:scale-105 active:scale-95 transition-all"
                >
                  {isPlaying ? (
                    <Pause size={36} fill="currentColor" />
                  ) : (
                    <Play size={36} fill="currentColor" className="ml-0.5" />
                  )}
                </button>
                <button className="text-white/80 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                  <SkipForward size={24} fill="currentColor" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
