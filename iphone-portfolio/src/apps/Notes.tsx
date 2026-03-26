import { useState, useEffect } from 'react';
import { GraduationCap, School, MapPin, Calendar, Star } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';

const education = [
  {
    institution: 'ABES Institute Of Technology',
    degree: 'B.TECH (Computer Science and Engineering)',
    gpa: '7.5',
    period: 'Oct 2021 - Aug 2025',
    location: 'Ghaziabad, India',
    icon: GraduationCap,
    color: 'bg-orange-500'
  },
  {
    institution: 'Queen Global International School',
    degree: 'Secondary Education (Class 12th)',
    period: '2021',
    location: 'Delhi, India',
    icon: School,
    color: 'bg-blue-500'
  },
  {
    institution: 'Siddharth International Public School',
    degree: 'High School (Class 10th)',
    period: '2019',
    location: 'Delhi, India',
    icon: School,
    color: 'bg-green-600'
  }
];

function useTypingEffect(text: string, speed: number = 40) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
}

export default function Notes() {
  const { isDark } = useAppContext();
  const { displayedText, isComplete } = useTypingEffect("Hi, I'm Yash Pal 👋", 60);

  return (
    <div className={`min-h-full pb-20 ${isDark ? 'bg-[#1C1C1E] text-white' : 'bg-[#FCFBF8] text-gray-800'}`}>
      {/* iOS style sticky header */}
      <div className={`pt-2 px-6 pb-4 border-b sticky top-0 z-10 flex justify-between items-end ${isDark ? 'border-white/10 bg-[#1C1C1E]/90 backdrop-blur-xl' : 'border-gray-100 bg-white/70 backdrop-blur-xl'}`}>
        <div>
           <p className="text-[14px] font-black text-[#d4a017] uppercase tracking-[0.2em] mb-1">Portfolio</p>
           <h1 className={`text-[34px] font-black tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-black'}`}>About Me</h1>
        </div>
        <div className="p-2.5 bg-[#fef5d9] rounded-full text-[#d4a017] mb-1 shadow-sm">
           <Star size={24} fill="currentColor" />
        </div>
      </div>

      <div className="px-6 py-6 space-y-8">
        {/* Intro with typing effect */}
        <section className="relative">
          <div className="absolute -left-1.5 top-0 bottom-0 w-1.5 bg-[#d4a017] rounded-full opacity-20" />
          <div className="pl-6 space-y-4">
            <p className={`text-[20px] font-bold tracking-tight leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-[#d4a017]">{displayedText}</span>
              {!isComplete && <span className="inline-block w-0.5 h-5 bg-[#d4a017] ml-0.5 animate-pulse" />}
            </p>
            <p className={`text-[17px] font-bold leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I am a <span className={isDark ? 'text-white' : 'text-gray-900'}>React Native Developer</span> at Bytive Technologies, having transitioned to a full-time role in March 2026 after my internship. 
            </p>
            <p className={`text-[17px] font-medium leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              I specialize in creating smooth, scalable, and user-focused applications using React Native and the MERN stack. I enjoy turning ideas into real products and crafting mobile-first experiences that feel fast and intuitive.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3 mb-6">
            <h2 className={`text-[22px] font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h2>
            <div className={`h-[2px] flex-1 ${isDark ? 'bg-white/10' : 'bg-gray-100'}`} />
          </div>
          
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-3xl p-5 shadow-sm active:scale-[0.98] transition-all ${isDark ? 'bg-white/5 border border-white/10 hover:border-[#d4a017]/30' : 'bg-white border border-gray-100 hover:shadow-md hover:border-[#d4a017]/20'}`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-2xl ${edu.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <edu.icon size={24} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-[17px] font-black tracking-tight leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.institution}</h3>
                    <p className="text-[14px] font-bold text-[#d4a017] mt-0.5">{edu.degree}</p>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3">
                      <div className={`flex items-center gap-1.5 text-[12px] font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        <Calendar size={13} strokeWidth={3} />
                        <span className="uppercase tracking-wider">{edu.period}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 text-[12px] font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        <MapPin size={13} strokeWidth={3} />
                        <span className="uppercase tracking-wider">{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-1.5 text-[11px] font-black bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full border border-orange-200 uppercase tracking-widest">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8">
           <div className={`rounded-[32px] p-8 relative overflow-hidden shadow-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-gray-900 to-black text-white'}`}>
              <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                    <MapPin size={28} className="text-white" />
                 </div>
                 <h3 className="text-xl font-black mb-2 tracking-tight text-white">Based in Delhi, India</h3>
                 <p className="text-gray-400 text-[15px] font-bold mb-8 tracking-wide">Ready for global opportunities and remote collaboration.</p>
                 <button className={`font-black px-10 py-4 rounded-2xl text-[16px] shadow-xl hover:scale-105 transition-transform active:scale-95 ${isDark ? 'bg-white text-black' : 'bg-white text-black'}`}>
                    Let's Connect
                 </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
           </div>
        </div>
      </div>
    </div>
  );
}
