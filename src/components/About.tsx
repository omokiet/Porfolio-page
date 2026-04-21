import { USER_INFO } from '../constants';
import { GraduationCap, Code2, Calendar, MonitorPlay } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full flex flex-col items-center gap-8 animate-fade-in-up delay-100 mt-10">
      <div className="flex flex-col items-center mb-2">
        <h2 className="text-4xl md:text-6xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(46,168,112,0.5)] mb-4 font-serif text-center tracking-tight">
          Giới thiệu
        </h2>
        <p className="text-zinc-400 text-sm tracking-widest uppercase tech-font">{USER_INFO.role_desc}</p>
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl">
        
        {/* Avatar Box (Span 1 col, 2 rows) */}
        <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden shadow-xl group sm:aspect-square lg:aspect-auto min-h-[300px]">
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
          <img src={USER_INFO.avatar} alt={`Portrait of ${USER_INFO.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-90 z-10 pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-center">
             <span className="text-xs text-emerald-300 font-bold tracking-[0.2em] uppercase bg-[#0a0a0b]/60 px-4 py-2 rounded-xl backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
               GPA: <span className="text-emerald-400">{USER_INFO.gpa}</span>
             </span>
          </div>
        </div>

        {/* Info Box (Span 4 cols, 1 row) */}
        <div className="sm:col-span-2 lg:col-span-4 rounded-3xl bg-[#0a140a]/60 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center shadow-lg group hover:bg-[#0d1610]/60 transition-colors">
          <h4 className="text-xl md:text-2xl text-white font-bold mb-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            Về phần tôi
          </h4>
          <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-4">
            {USER_INFO.about_text}
          </p>
          <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed">
             <span className="font-semibold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">Điểm mạnh:</span> {USER_INFO.about_strengths.replace('Điểm mạnh:', '')}
          </p>
        </div>

        {/* Bento Small 1: Học vấn */}
        <div className="sm:col-span-1 lg:col-span-1 rounded-3xl bg-[#0a140a]/60 backdrop-blur-xl p-6 flex flex-col items-start gap-4 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(46,168,112,0.1)] transition-all group">
          <div className="p-3 bg-zinc-900/50 rounded-2xl group-hover:bg-emerald-900/20 transition-colors">
            <GraduationCap className="text-zinc-400 group-hover:text-emerald-400 transition-colors" size={24} />
          </div>
          <div>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider tech-font mb-1.5">Học vấn</span>
            <span className="text-sm font-semibold text-zinc-200">{USER_INFO.education}</span>
          </div>
        </div>

        {/* Bento Small 2: Chuyên môn */}
        <div className="sm:col-span-1 lg:col-span-1 rounded-3xl bg-[#0a140a]/60 backdrop-blur-xl p-6 flex flex-col items-start gap-4 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(46,168,112,0.1)] transition-all group">
          <div className="p-3 bg-zinc-900/50 rounded-2xl group-hover:bg-emerald-900/20 transition-colors">
            <Code2 className="text-zinc-400 group-hover:text-emerald-400 transition-colors" size={24} />
          </div>
          <div>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider tech-font mb-1.5">Chuyên môn</span>
            <span className="text-sm font-semibold text-zinc-200">{USER_INFO.major}</span>
          </div>
        </div>

        {/* Bento Small 3: Trạng thái */}
        <div className="sm:col-span-1 lg:col-span-1 rounded-3xl bg-[#0a140a]/60 backdrop-blur-xl p-6 flex flex-col items-start gap-4 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(46,168,112,0.1)] transition-all group">
          <div className="p-3 bg-zinc-900/50 rounded-2xl group-hover:bg-emerald-900/20 transition-colors">
            <Calendar className="text-zinc-400 group-hover:text-emerald-400 transition-colors" size={24} />
          </div>
          <div>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider tech-font mb-1.5">Trạng thái</span>
            <span className="text-sm font-semibold text-zinc-200">Sinh viên năm {USER_INFO.year}</span>
          </div>
        </div>

        {/* Bento Small 4: Ngôn ngữ */}
        <div className="sm:col-span-1 lg:col-span-1 rounded-3xl bg-[#0a140a]/60 backdrop-blur-xl p-6 flex flex-col items-start gap-4 shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(46,168,112,0.1)] transition-all group">
          <div className="p-3 bg-zinc-900/50 rounded-2xl group-hover:bg-emerald-900/20 transition-colors">
            <MonitorPlay className="text-zinc-400 group-hover:text-emerald-400 transition-colors" size={24} />
          </div>
          <div>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-wider tech-font mb-1.5">Ngôn ngữ</span>
            <span className="text-sm font-semibold text-zinc-200">{USER_INFO.languages}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
