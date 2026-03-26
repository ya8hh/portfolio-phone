import { ExternalLink, Code as Github } from 'lucide-react';

export default function ShareNow() {
  return (
    <div className="min-h-full pb-20 bg-[#F9F9FB] text-[#2C2C2E]">
      <div className="w-full h-64 bg-gradient-to-br from-yellow-100 to-orange-200 relative flex items-center justify-center">
        <h1 className="text-5xl font-extrabold italic text-orange-600 drop-shadow-sm">ShareNow</h1>
      </div>
      
      <div className="p-6">
        <h2 className="text-[24px] font-bold mb-2 tracking-tight">Photo Sharing, Softened.</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
          A lightning-fast, highly aesthetic photo sharing platform built for speed and seamless user experiences. Contains beautiful WebGL filters.
        </p>

        <div className="flex gap-2 flex-wrap mb-8">
          {['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Redis'].map(tech => (
             <span key={tech} className="px-3 py-1 bg-white border border-gray-100 shadow-sm rounded-full text-xs font-semibold text-gray-500">
               {tech}
             </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <a href="#" className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-rose-400 text-white shadow-lg shadow-orange-200 py-3.5 rounded-[18px] font-semibold text-[17px] active:scale-[0.98] transition-all">
             <ExternalLink size={20} />
             Live Demo
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-100 shadow-sm py-3.5 rounded-[18px] font-semibold text-[17px] active:scale-[0.98] transition-all">
             <Github size={20} />
             View Code
          </a>
        </div>
      </div>
    </div>
  );
}
