import { Phone as PhoneIcon, Mail, MessageSquare, Code as Github, ExternalLink as Linkedin, MapPin } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';

export default function Phone() {
  const { isDark } = useAppContext();

  const contactInfo = {
    name: 'Yash Pal',
    role: 'React Native Developer',
    phone: '+91 7303917737',
    email: 'pyash3137@gmail.com',
    github: 'https://github.com/ya8hh',
    linkedin: 'https://www.linkedin.com/in/yashpal06/',
    githubUsername: 'ya8hh',
    linkedinUsername: 'yashpal06',
    location: 'Delhi, India'
  };

  return (
    <div className={`min-h-full pb-10 flex flex-col items-center pt-8 ${isDark ? 'bg-[#1C1C1E] text-white' : 'bg-[#f4f4f5] text-gray-900'}`}>
      {/* Contact Graphic */}
      <div className="relative mb-6">
        <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-blue-200/50 border-[4px] border-white z-10 transition-transform active:rotate-12 duration-500" aria-label="Profile picture">
          <span className="drop-shadow-md">👨‍💻</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-[3px] border-white flex items-center justify-center text-white shadow-lg">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
      
      <h1 className={`text-[30px] font-black tracking-tight mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>{contactInfo.name}</h1>
      <p className="text-blue-600 text-[16px] mb-8 font-bold uppercase tracking-widest">{contactInfo.role}</p>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-10 w-full px-6 justify-center">
        {[
          { i: MessageSquare, t: 'Message', action: `sms:${contactInfo.phone}`, label: 'Send SMS' },
          { i: PhoneIcon, t: 'Call', action: `tel:${contactInfo.phone}`, label: 'Make a call' },
          { i: Mail, t: 'Mail', action: `mailto:${contactInfo.email}`, label: 'Send email' }
        ].map((btn, idx) => (
           <a 
             key={idx} 
             href={btn.action}
             aria-label={btn.label}
             className={`w-[84px] h-[78px] shadow-md border rounded-[22px] flex flex-col items-center justify-center gap-1.5 active:scale-90 transition-all group ${isDark ? 'bg-white/5 border-white/10 shadow-none' : 'bg-white border-gray-100 shadow-gray-200/50'}`}
           >
             <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <btn.i size={18} strokeWidth={2.5} className="text-blue-500 group-hover:text-white" />
             </div>
             <span className={`text-[11px] font-bold tracking-wide uppercase group-hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{btn.t}</span>
           </a>
        ))}
      </div>

      <div className="w-full px-5 space-y-4">
        <div className={`rounded-[28px] overflow-hidden shadow-md border divide-y ${isDark ? 'bg-white/5 border-white/10 divide-white/5 shadow-none' : 'bg-white border-gray-100 divide-gray-50 shadow-gray-200/40'}`}>
          <div className="px-6 py-4 group active:bg-gray-50/5">
             <div className="flex items-center gap-4 py-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-blue-500 transition-colors ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-0.5 leading-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>email</p>
                  <a href={`mailto:${contactInfo.email}`} className={`text-[16px] font-bold hover:text-blue-600 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>{contactInfo.email}</a>
                </div>
             </div>
          </div>

          <div className="px-6 py-4 group active:bg-gray-50/5">
             <div className="flex items-center gap-4 py-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDark ? 'bg-white/5 text-white' : 'bg-gray-50 text-gray-700'}`}>
                  <Github size={20} />
                </div>
                <div className="flex-1">
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-0.5 leading-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>github</p>
                  <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className={`text-[16px] font-bold hover:underline ${isDark ? 'text-white' : 'text-gray-800'}`}>{contactInfo.githubUsername}</a>
                </div>
             </div>
          </div>

          <div className="px-6 py-4 group active:bg-gray-50/5">
             <div className="flex items-center gap-4 py-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDark ? 'bg-white/5 text-blue-400' : 'bg-gray-50 text-blue-700'}`}>
                  <Linkedin size={20} />
                </div>
                <div className="flex-1">
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-0.5 leading-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>linkedin</p>
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`text-[16px] font-bold hover:underline ${isDark ? 'text-white' : 'text-gray-800'}`}>{contactInfo.linkedinUsername}</a>
                </div>
             </div>
          </div>

          <div className="px-6 py-4 group active:bg-gray-50/5">
             <div className="flex items-center gap-4 py-1">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-red-500 transition-colors ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <p className={`text-[12px] font-bold uppercase tracking-widest mb-0.5 leading-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>location</p>
                  <p className={`text-[16px] font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{contactInfo.location}</p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="text-center pt-4">
           <button className="text-blue-500 font-bold text-[15px] active:opacity-50" aria-label="Add to contacts">Add to Contacts</button>
        </div>
      </div>
    </div>
  );
}
