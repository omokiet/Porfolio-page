import { USER_INFO, CONTACT_DATA } from '../constants';
import { Typewriter } from './Typewriter';

export default function Hero() {
  const passionsList = USER_INFO.passions.split('|').map(p => p.trim());

  return (
    <section id="hero" className="w-full pt-16 md:pt-28 flex flex-col items-center text-center gap-10">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
        <span className="text-xs sm:text-sm text-emerald-300 font-medium tracking-wide">
          {USER_INFO.status}
        </span>
      </div>
      
      {/* Main Headline */}
      <div className="flex flex-col items-center gap-6 max-w-4xl px-4">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[6rem] font-bold tracking-tight text-white leading-[0.95] font-serif mt-2 text-center">
          {USER_INFO.headline} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-500 drop-shadow-[0_0_30px_rgba(46,168,112,0.3)]">{USER_INFO.name}</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light tracking-wide text-center">
          Hoặc bạn có thể gọi tôi là <span className="font-medium text-emerald-200">{USER_INFO.nickname}</span>
        </h2>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6 animate-fade-in-up delay-100">
        <a
          href="#projects"
          aria-label="Xem dự án của tôi"
          className="group inline-flex items-center justify-center gap-4 px-12 py-5 min-w-[180px] bg-emerald-500 hover:bg-emerald-400 text-[#050f05] rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] relative hover:-translate-y-1"
        >
          <span className="font-bold tech-font uppercase text-base tracking-widest">Xem Dự Án</span>
        </a>
        <a
          href={`mailto:${CONTACT_DATA.email}`}
          aria-label="Gửi email cho tôi"
          className="group inline-flex items-center justify-center gap-3 px-12 py-5 min-w-[180px] bg-transparent border-2 border-zinc-700 hover:border-emerald-500/50 hover:bg-zinc-800/50 text-zinc-300 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        >
          <span className="font-bold tech-font uppercase text-base tracking-widest">Liên Hệ</span>
        </a>
      </div>

      {/* Divider */}
      <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mt-8"></div>

      {/* Stats Strip */}
      <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6 mt-4 animate-fade-in-up delay-300 w-full max-w-4xl px-4">
        {/* GPA Box */}
        <div className="flex-1 flex flex-col items-center justify-center gap-1.5 min-w-[120px] max-w-[200px] py-4 px-6 rounded-2xl bg-[#0a140a]/80 backdrop-blur-md border border-emerald-900/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/50">
          <span className="text-3xl md:text-4xl font-bold text-emerald-400 font-serif drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform duration-300 group-hover:text-emerald-300">{USER_INFO.gpa}</span>
          <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium tech-font mt-1">GPA</span>
        </div>

        {/* Year Box */}
        <div className="flex-1 flex flex-col items-center justify-center gap-1.5 min-w-[120px] max-w-[200px] py-4 px-6 rounded-2xl bg-[#0a140a]/80 backdrop-blur-md border border-emerald-900/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/50">
          <span className="text-3xl md:text-4xl font-bold text-emerald-400 font-serif drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform duration-300 group-hover:text-emerald-300">{USER_INFO.year}</span>
          <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium tech-font mt-1">NĂM HỌC</span>
        </div>
        
        {/* Passions Box */}
        <div className="flex-[2] flex flex-col items-center justify-center gap-2 min-w-[240px] py-4 px-6 rounded-2xl bg-[#0a140a]/80 backdrop-blur-md border border-emerald-900/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/50">
          <div className="flex justify-center items-center h-[40px]">
            <span className="text-emerald-300 font-medium tech-font text-base md:text-lg tracking-wider whitespace-nowrap text-center flex items-center justify-center">
              <Typewriter words={passionsList} />
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium tech-font pt-2 border-t border-zinc-800/50 w-full text-center">ĐAM MÊ</span>
        </div>
      </div>
    </section>
  );
}
