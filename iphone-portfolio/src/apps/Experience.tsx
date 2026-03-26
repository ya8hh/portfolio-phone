import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';
import resumePdf from '../assets/Yash_Pal_Resume.pdf';

const experiences = [
  {
    company: 'Bytive Technologies',
    role: 'React Native Developer',
    period: 'Sept 2025 – Present',
    location: 'On-Site',
    type: 'Full-time (since March 2026)',
    description: 'Developed and optimized mobile applications across diverse industries, including insurance, social media, and investment.',
    highlights: [
      'Enhanced app performance by reducing unnecessary API calls, leading to a 30% faster workflow in the insurance platform.',
      'Improved UX/UI for investment applications, making them more intuitive and user-friendly.',
      'Debugged and resolved critical production issues, ensuring stable releases and smoother performance.',
      'Collaborated with cross-functional teams to integrate APIs efficiently and deliver features under tight deadlines.'
    ],
    color: 'from-blue-600 to-blue-800'
  },
  {
    company: 'AeoLogic Technologies',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 – Sept 2025',
    location: 'On-Site',
    type: 'Internship',
    description: 'Built cross-platform mobile apps using React Native with optimized navigation and real-time features.',
    highlights: [
      'Integrated Firebase Authentication, Firestore, and push notifications for real-time user interaction.',
      'Utilized Appwrite for user management, cloud functions, and secure backend services.',
      'Developed backend APIs using Node.js and integrated them with proper state management.',
      'Contributed to sprint planning and participated in regular code reviews.'
    ],
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    company: 'LoginAtSolutions',
    role: 'Full Stack Developer Intern',
    period: 'Remote',
    type: 'Internship',
    description: 'Actively supported both frontend and backend development tasks in a fast-paced environment.',
    highlights: [
      'Completed 6+ complex frontend/backend tasks, contributing to timely sprint delivery.',
      'Demonstrated high adaptability and quick learning in a collaborative team.',
      'Recognized for sensitivity to project urgency and consistent involvement in workflows.'
    ],
    color: 'from-gray-700 to-gray-900'
  }
];

export default function Experience() {
  const { isDark } = useAppContext();

  return (
    <div className={`min-h-full ${isDark ? 'bg-[#1C1C1E] text-white' : 'bg-white text-[#1D1D1F]'}`}>
      <div className="pt-4 px-6 pb-6">
        <h1 className={`text-[34px] font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-[#1D1D1F]'}`}>Work History</h1>
        <p className={`text-[17px] leading-snug font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>My professional journey and key contributions across different roles.</p>
      </div>

      <div className="px-5 space-y-6 pb-24">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`group relative overflow-hidden rounded-[32px] p-6 transition-all active:scale-[0.98] border ${isDark ? 'bg-white/5 border-white/10 hover:border-blue-500/30' : 'bg-[#F5F5F7] border-transparent hover:border-blue-100'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/10`}>
                  <Briefcase size={28} />
                </div>
                <div>
                  <h2 className={`text-[19px] font-bold tracking-tight leading-tight ${isDark ? 'text-white' : ''}`}>{exp.role}</h2>
                  <h3 className="text-[16px] font-bold text-blue-600 mt-0.5">{exp.company}</h3>
                </div>
              </div>
              <div className={`p-2 rounded-full ${isDark ? 'bg-white/10 text-gray-500' : 'bg-white/50 text-gray-300'}`}>
                <ExternalLink size={16} />
              </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
              <div className={`flex items-center gap-1.5 text-[13px] font-bold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                <Calendar size={13} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
                <span>{exp.period}</span>
              </div>
              {exp.location && (
                <div className={`flex items-center gap-1.5 text-[13px] font-bold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  <MapPin size={13} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
                  <span>{exp.location}</span>
                </div>
              )}
              {exp.type && (
                 <div className="flex items-center gap-1.5 text-blue-500 text-[13px] font-bold bg-blue-50/80 dark:bg-blue-500/10 px-2 py-0.5 rounded-full">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                   <span>{exp.type}</span>
                 </div>
              )}
            </div>

            <p className={`text-[15px] leading-relaxed mb-6 font-medium ${isDark ? 'text-gray-400' : 'text-[#424245]'}`}>
              {exp.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-1">
                <div className={`h-[1px] flex-1 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
                <span className={`text-[11px] font-black uppercase tracking-widest px-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Impact & Achievements</span>
                <div className={`h-[1px] flex-1 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
              </div>
              <div className="grid gap-2.5">
                {exp.highlights.map((h, i) => (
                  <div key={i} className={`flex gap-3 items-start p-3.5 rounded-2xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-white/40 border-white/60'}`}>
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <span className={`text-[14px] leading-snug font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`mt-6 pt-5 flex items-center justify-between text-blue-600 font-bold text-[15px]`}>
              <span className="hover:underline cursor-pointer">View project details</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        ))}
        
        {/* Footer - Resume Download (WORKING) */}
        <div className={`mt-4 rounded-[32px] p-8 relative overflow-hidden shadow-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-900'}`}>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
               <Briefcase size={32} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Looking for more details?</h3>
            <p className="text-gray-400 text-[16px] mb-8 font-medium max-w-[280px]">Download my full resume for a deep dive into my professional background.</p>
            <a 
              href={resumePdf} 
              download="Yash_Pal_Resume.pdf"
              className="w-full bg-white text-gray-900 py-4 rounded-2xl font-black text-[17px] shadow-lg active:scale-95 transition-all text-center block"
            >
              Download CV
            </a>
          </div>
          
          {/* Decorative gradients */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full" />
        </div>
      </div>
    </div>
  );
}
