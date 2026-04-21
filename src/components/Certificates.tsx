import { CERTIFICATES_DATA } from '../constants';
import { ShieldAlert } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="w-full flex flex-col items-center animate-fade-in-up delay-200 mt-20">
      <div className="flex items-center gap-4 mb-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(46,168,112,0.5)] font-serif tracking-tight">
          Certificates & Awards
        </h2>
      </div>

      <div className="flex flex-col w-full gap-6">
        {CERTIFICATES_DATA.map((cert) => (
          <div
            key={cert.id}
            className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl bg-[#0d1c10] shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">
              <span className="flex items-center justify-center p-4 rounded-xl bg-[#0a110a] text-emerald-400 shadow-inner">
                <ShieldAlert size={28} />
              </span>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors mb-1">
                  {cert.title}
                </h3>
                <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-widest font-serif">
                  {cert.organization}
                </h4>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
              <span className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold tech-font text-lg shadow-[0_0_10px_rgba(52,211,153,0.1)] inline-block w-fit">
                {cert.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
