import { CERTIFICATES_DATA } from '../constants';
import { Award, ChevronRight } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full flex flex-col items-center animate-fade-in-up delay-200">
      <div className="flex items-center gap-4 mb-12 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 drop-shadow-[0_0_15px_rgba(46,168,112,0.5)] font-serif tracking-tight py-2 leading-tight md:leading-normal">
          Chứng chỉ & Giải thưởng
        </h2>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-3">
        {CERTIFICATES_DATA.map((cert) => (
          <div
            key={cert.id}
            className="group relative flex items-center justify-between p-5 md:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 hover:bg-gradient-to-r hover:from-[#0a140a] hover:to-zinc-900 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden cursor-default shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-0.5"
          >
            {/* Left subtle glow on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-center gap-5 w-full z-10">
              <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border border-zinc-800 shadow-inner group-hover:bg-emerald-950 group-hover:border-emerald-800/60 group-hover:scale-110 transition-all duration-300 shrink-0">
                <Award className="text-zinc-600 group-hover:text-emerald-400 transition-colors" size={24} />
              </div>

              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-zinc-300 group-hover:text-emerald-300 transition-colors truncate">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-emerald-500 transition-colors shrink-0"></span>
                  <span className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-[0.15em] font-serif group-hover:text-zinc-400 transition-colors truncate">
                    {cert.organization}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="px-4 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/80 text-zinc-400 font-bold tech-font text-sm md:text-base group-hover:bg-emerald-500/15 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-all duration-300 shadow-inner">
                  NĂM {cert.year}
                </span>
                <ChevronRight className="text-zinc-700 group-hover:text-emerald-400 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 hidden md:block" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
