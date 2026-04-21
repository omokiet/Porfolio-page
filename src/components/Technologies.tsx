import { TECH_STACK } from '../constants';
import { useState } from 'react';

export default function Technologies() {
  const [failedIcons, setFailedIcons] = useState<Set<string>>(new Set());

  const handleImageError = (slug: string) => {
    setFailedIcons(prev => new Set(prev).add(slug));
  };

  return (
    <section id="technologies" className="w-full flex flex-col items-center gap-12 mt-16 animate-fade-in-up delay-300">
      <h2 className="text-2xl md:text-4xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(46,168,112,0.6)] tech-font tracking-[0.2em] uppercase text-center">
        Technologies I work with
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
        {TECH_STACK.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center gap-3 min-w-[110px] min-h-[100px] p-4 rounded-2xl bg-[#0a110a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(46,168,112,0.15)] hover:bg-[#0d1c10] cursor-default"
          >
            <div className="w-8 h-8 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              {failedIcons.has(tech.slug) ? (
                <span className="text-emerald-400 font-bold text-lg">{tech.name.charAt(0)}</span>
              ) : (
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={() => handleImageError(tech.slug)}
                />
              )}
            </div>
            <span className="text-xs font-medium text-zinc-300 tracking-wide text-center group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
