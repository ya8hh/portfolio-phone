import { ExternalLink, Code as Github, Link as LinkIcon } from 'lucide-react';

export default function Shortener() {
  return (
    <div className="min-h-full pb-20 bg-[#F9F9FB] text-[#2C2C2E]">
      <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 relative flex flex-col items-center justify-center p-8 text-center border-b border-indigo-50">
        <div className="bg-white p-4 rounded-3xl shadow-sm mb-4">
           <LinkIcon size={48} className="text-indigo-400" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-indigo-900">ShortLink</h1>
      </div>
      
      <div className="px-6 py-8">
        <h2 className="text-[22px] font-bold mb-3 tracking-tight text-gray-800">Friendly URL Management</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
          A lightning-fast URL shortener with advanced analytics and custom edge configurations. Cute on the outside, powerful on the inside.
        </p>

        <div className="flex gap-2 flex-wrap mb-10">
          {['Next.js', 'Tailwind', 'Prisma', 'Vercel Edge'].map(tech => (
             <span key={tech} className="px-3.5 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[13px] font-bold">
               {tech}
             </span>
          ))}
        </div>

        <div className="space-y-4">
          <a href="#" className="flex items-center justify-center gap-2 bg-indigo-500 text-white shadow-lg shadow-indigo-200 py-4 rounded-2xl font-bold text-[17px] active:scale-[0.98] transition-transform">
             <ExternalLink size={20} />
             Visit Website
          </a>
          <a href="#" className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 shadow-sm py-4 rounded-2xl font-semibold text-[17px] active:scale-[0.98] transition-transform">
             <Github size={20} />
             Source Repository
          </a>
        </div>
      </div>
    </div>
  );
}
