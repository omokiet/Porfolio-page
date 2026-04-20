import { SKILLS_DATA } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="w-full flex flex-col items-center gap-10 animate-fade-in-up delay-200 mt-20">
      <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] mb-6 font-serif text-center">
        Kỹ năng & Chuyên môn
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {SKILLS_DATA.map((skill) => {
          const Icon = skill.icon;
          return (
            <div 
              key={skill.id} 
              className="flex flex-col p-6 rounded-2xl bg-[#0a110a] border border-zinc-800/60 shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#050f05] border border-zinc-800 text-emerald-400 mb-6 shadow-inner group-hover:border-emerald-500/50 transition-colors">
                <Icon size={20} />
              </div>
              
              <h3 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 rounded-full border border-zinc-700/50 bg-[#0d1c10] text-xs text-zinc-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
