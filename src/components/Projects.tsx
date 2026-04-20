import { PROJECTS_DATA } from '../constants';

export default function Projects() {
  const tabs = ['Tất cả', 'Web', 'Software/App', 'Game'];
  
  return (
    <section id="projects" className="w-full flex flex-col items-center gap-8 mt-20 animate-fade-in-up delay-400">
      <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] mb-2 font-serif text-center">
        Projects
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
        {tabs.map((tab, idx) => (
          <button 
            key={tab} 
            type="button"
            className={`whitespace-nowrap inline-flex items-center justify-center px-6 md:px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 min-w-[100px] ${idx === 0 ? 'bg-emerald-500 text-[#050f05] shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-400/50' : 'bg-[#0a110a] border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-emerald-500/50'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {PROJECTS_DATA.map((project) => (
          <article 
            key={project.id}
            className="relative flex flex-col justify-end h-80 md:h-[380px] group rounded-3xl overflow-hidden bg-[#0d1c10] border border-zinc-800/60 shadow-xl hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:border-emerald-500/50"
          >
            {/* Immersive Image Background */}
            <div className="absolute inset-0 w-full h-full bg-[#050f05]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-50 group-hover:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050f05] via-[#050f05]/60 to-transparent"></div>
              {/* Highlight overlay */}
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            </div>
            
            {/* Content Container - Slide up on hover */}
            <div className="relative z-10 flex flex-col items-start text-left w-full p-6 lg:p-8 translate-y-6 md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,1,0.2,1)]">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-2 tech-font drop-shadow-md shadow-emerald-500/20">
                {project.subtitle}
              </span>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors drop-shadow-lg">
                {project.title}
              </h3>
              
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5 font-light opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                {project.description}
              </p>

              {/* Tags wrapper */}
              <div className="flex flex-wrap justify-center w-full gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-[#050f05]/70 backdrop-blur-md text-[10px] text-emerald-200 transition-colors cursor-default font-semibold tracking-wider shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
