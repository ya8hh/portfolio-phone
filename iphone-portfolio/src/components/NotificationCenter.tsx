import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../hooks/useAppContext';
import { FileDown } from 'lucide-react';
import resumePdf from '../assets/Yash_Pal_Resume.pdf';

export default function NotificationCenter() {
  const { isNotificationCenterOpen, setNotificationCenterOpen } = useAppContext();

  return (
    <AnimatePresence>
      {isNotificationCenterOpen && (
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="absolute inset-x-0 top-0 bottom-0 z-[60] pt-24 px-4 bg-black/20 backdrop-blur-3xl rounded-[36px] overflow-hidden"
        >
          <div 
             className="absolute inset-0 z-[-1]" 
             onClick={() => setNotificationCenterOpen(false)} 
          />
          
          <h2 className="text-white text-[32px] font-black mb-6 px-1 drop-shadow-md tracking-tight">Notification Center</h2>
          
          {/* Notification Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="w-full bg-white/80 backdrop-blur-xl rounded-[24px] p-4 shadow-[0_20px_40px_-10px_rgb(0,0,0,0.15)] border border-white/50 cursor-pointer active:scale-95 transition-transform"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-red-500 w-6 h-6 rounded-lg flex items-center justify-center shadow-sm">
                   <FileDown size={14} className="text-white" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] text-gray-800 font-bold uppercase tracking-wider">Résumé</span>
              </div>
              <span className="text-[13px] text-gray-500 font-semibold">Just now</span>
            </div>
            
            <p className="text-[17px] font-bold text-gray-900 leading-tight mb-1 tracking-tight">Your Resume is ready.</p>
            <p className="text-[15px] text-gray-600 leading-snug mb-4">Tap below to download a PDF copy of my latest software engineering experience!</p>
            
            {/* The actual download link */}
            <a 
              href={resumePdf} 
              download="Yash_Pal_Resume.pdf"
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-50 text-red-600 rounded-[16px] font-bold active:bg-red-100 transition-colors"
            >
              <FileDown size={18} />
              Download Yash_Pal_Resume.pdf
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
