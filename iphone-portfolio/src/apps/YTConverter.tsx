import { Headphones } from 'lucide-react';

export default function YTConverter() {
  return (
    <div className="min-h-full pb-20 bg-[#FAFAFA] text-gray-800">
      <div className="w-full h-80 bg-green-50 flex flex-col items-center justify-center relative overflow-hidden border-b border-green-100">
        <div className="absolute inset-0 bg-white blur-[80px] rounded-full scale-150 transform -translate-y-1/2 opacity-50"></div>
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shadow-green-200/50 z-10 mb-6">
           <Headphones size={42} strokeWidth={2.5} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-black tracking-tighter z-10 text-gray-900">YT <span className="text-green-500">→</span> SPOT</h1>
      </div>
      
      <div className="px-6 py-6">
        <div className="mb-8 pl-1">
          <h2 className="text-[26px] font-bold tracking-tight mb-2 text-gray-900">Sync Your Beats</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Automatically and safely converts YouTube playlists into Spotify libraries via clever matching algorithms.
          </p>
        </div>

        <div className="space-y-3 mb-10">
          {['SvelteKit', 'Spotify API', 'Python Microservice'].map(tech => (
             <div key={tech} className="flex items-center px-4 py-3.5 bg-white border border-gray-100 shadow-sm rounded-2xl text-[15px] font-semibold text-gray-700">
               <div className="w-2.5 h-2.5 rounded-full bg-green-400 mr-3 shadow-sm"></div>
               {tech}
             </div>
          ))}
        </div>

        <button className="w-full bg-green-500 text-white shadow-lg shadow-green-200 py-4 rounded-2xl font-bold text-[17px] mb-4 active:scale-[0.98] transition-all">
          Launch App
        </button>
      </div>
    </div>
  );
}
