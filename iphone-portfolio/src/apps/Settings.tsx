import { Terminal, Cpu, Layers, Box, Database, Cloud } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';

export default function Settings() {
  const { isDark } = useAppContext();

  const sections = [
    {
      title: 'Languages',
      icon: Terminal,
      color: 'bg-blue-600',
      skills: ['Java', 'C++', 'Python', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Core Concepts',
      icon: Cpu,
      color: 'bg-gray-700',
      skills: ['OOP', 'DSA', 'DBMS', 'CN']
    },
    {
      title: 'Libraries & Frameworks',
      icon: Layers,
      color: 'bg-indigo-500',
      skills: ['React.js', 'React Native', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: Box,
      color: 'bg-green-600',
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'bg-red-500',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools',
      icon: Cloud,
      color: 'bg-gray-500',
      skills: ['Git', 'VS Code', 'Postman', 'Canva', 'Firebase']
    }
  ];

  return (
    <div className={`min-h-full pb-20 ${isDark ? 'bg-[#1C1C1E] text-white' : 'bg-[#f4f4f5] text-gray-800'}`}>
      <div className="pt-6 px-6 mb-4">
        <p className={`text-[12px] font-black uppercase tracking-widest leading-none mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Portfolio</p>
        <h1 className={`text-[34px] font-black tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>My Skills</h1>
      </div>

      <div className="px-5 space-y-8">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className={`text-[13px] font-bold uppercase tracking-[0.15em] ml-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{section.title}</h2>
            <div className={`rounded-[24px] overflow-hidden shadow-sm divide-y ${isDark ? 'bg-white/5 border border-white/10 divide-white/5' : 'bg-white border border-gray-100 divide-gray-50'}`}>
              {section.skills.map((skill, sIdx) => (
                <div key={sIdx} className={`flex items-center gap-4 px-4 py-3.5 transition-colors group ${isDark ? 'active:bg-white/5' : 'active:bg-gray-50'}`}>
                  <div className={`p-2 rounded-[12px] text-white shadow-sm group-active:scale-95 transition-transform ${section.color}`}>
                    <section.icon size={18} strokeWidth={2.5} />
                  </div>
                  <span className={`font-bold text-[17px] tracking-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 px-6 text-center">
         <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Always Expanding My Toolkit</p>
         <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
      </div>
    </div>
  );
}
