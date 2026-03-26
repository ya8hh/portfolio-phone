import { Code2 } from 'lucide-react';

export default function DevConnect() {
  return (
    <div className="min-h-full pb-20 bg-[#F9F9FB] text-gray-800">
      <div className="w-full h-72 bg-gradient-to-t from-gray-100 to-white relative flex flex-col items-center justify-center p-8 text-center border-b border-gray-200">
        <div className="w-24 h-24 rounded-[28px] bg-white flex items-center justify-center shadow-lg shadow-gray-200/50 border border-gray-100 mb-6">
          <Code2 size={42} strokeWidth={2.5} className="text-gray-800" />
        </div>
        <h1 className="text-[28px] font-black tracking-tight text-gray-900">DevConnect</h1>
      </div>
      
      <div className="px-6 py-6">
        <div className="bg-white border border-gray-100 rounded-3xl p-6 mb-8 mt-[-50px] relative z-10 shadow-xl shadow-gray-200/50">
          <h2 className="text-[19px] font-bold mb-2 text-gray-800">Connect with devs globally</h2>
          <p className="text-gray-500 text-[14px] leading-relaxed">
            A soft, minimalist social network focused entirely on developers sharing snippets, architectures, and finding mentorship.
          </p>
        </div>

        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 pl-2">Built With</h3>
        <div className="flex gap-2 flex-wrap mb-10 pl-1">
          {['Vue 3', 'Firebase', 'GraphQL', 'Tailwind'].map(tech => (
             <span key={tech} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-xl shadow-sm text-sm font-semibold">
               {tech}
             </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3.5 rounded-2xl font-semibold text-[16px] shadow-lg shadow-gray-300 active:scale-95 transition-transform">
            Demo
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3.5 shadow-sm rounded-2xl font-semibold text-[16px] active:scale-95 transition-transform">
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
