import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Repeat, Shuffle, ChevronDown, MoreHorizontal, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Spotify() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio preview URL from iTunes for "Iss Tarah" by Chaar Diwaari & Sonu Nigam
  const trackPreviewUrl = 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b7/de/48/b7de48a1-8a9b-43aa-3ca3-e7fab488d5a5/mzaf_5928084297101240555.plus.aac.p.m4a';
  const trackArtworkUrl = 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7a/0d/a3/7a0da341-8769-4b81-b3d5-a85a5f630929/26UMGIM21264.rgb.jpg/600x600bb.jpg';

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

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
      audio.pause();
      setIsPlaying(false);
    };
  }, []);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-[#4a2e2a] to-[#121212] flex flex-col items-center pt-8 pb-10 px-6 text-white font-sanfrancisco">
      <audio ref={audioRef} src={trackPreviewUrl} preload="auto" />

      {/* Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <ChevronDown size={28} className="text-white/80" />
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/70">Playing from playlist</span>
          <span className="text-[13px] font-bold">FaVs 🎧</span>
        </div>
        <MoreHorizontal size={28} className="text-white/80" />
      </div>

      {/* Album Art */}
      <motion.div 
        className="w-full aspect-square bg-[#222] rounded-[16px] overflow-hidden shadow-2xl shadow-black/60 mb-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <img 
          src={trackArtworkUrl} 
          alt="Iss Tarah Album Art" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Song Info */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="flex flex-col overflow-hidden">
          <motion.h2 
            className="text-[24px] font-black truncate leading-tight tracking-tight mb-0.5"
            animate={isPlaying ? "scrolling" : "paused"}
          >
            Iss Tarah
          </motion.h2>
          <p className="text-[#b3b3b3] text-[15px] font-medium truncate">Chaar Diwaari, Sonu Nigam</p>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)} 
          className="p-2 active:scale-75 transition-transform"
        >
          <Heart size={26} fill={isLiked ? "#1ed760" : "transparent"} color={isLiked ? "#1ed760" : "white"} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full flex flex-col mb-4">
        <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden relative group cursor-pointer">
          <div 
            className="h-full bg-white group-hover:bg-[#1ed760] transition-all rounded-full" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="flex justify-between w-full text-[11px] text-[#b3b3b3] font-semibold mt-1.5">
          <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
          <span>{formatTime(audioRef.current?.duration || 0)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full flex justify-between items-center mb-8">
        <button className="text-white/70 hover:text-white transition-colors active:scale-95">
          <Shuffle size={20} />
        </button>
        <button className="text-white hover:text-white transition-colors active:scale-90">
          <SkipBack size={36} fill="currentColor" />
        </button>
        <button 
          onClick={togglePlay}
          className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center text-black active:scale-90 transition-transform hover:scale-105"
        >
          {isPlaying ? (
            <Pause size={28} fill="currentColor" />
          ) : (
            <Play size={28} fill="currentColor" className="ml-1" />
          )}
        </button>
        <button className="text-white hover:text-white transition-colors active:scale-90">
          <SkipForward size={36} fill="currentColor" />
        </button>
        <button className="text-white/70 hover:text-white transition-colors active:scale-95">
           <Repeat size={20} />
        </button>
      </div>
      
      {/* Device Connection / Bottom UI */}
      <div className="w-full flex justify-between items-center text-[#b3b3b3]">
        <div className="flex items-center gap-2">
            <Maximize2 size={16} />
            <span className="text-[12px] font-semibold">Devices Available</span>
        </div>
      </div>
    </div>
  );
}
