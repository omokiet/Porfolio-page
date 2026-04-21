import { Terminal } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ẩn thanh nav khi lướt xuống, hiện lại khi lướt lên
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? 'top-6 opacity-100' : '-top-20 opacity-0 pointer-events-none'
      }`}
    >
      <nav className="flex items-center gap-4 md:gap-6 px-5 md:px-6 py-3 rounded-full bg-[#050f05]/95 backdrop-blur-2xl border border-emerald-900/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-sm font-medium tech-font pointer-events-auto">
        <div className="flex items-center justify-center text-emerald-400 mr-2">
          <Terminal size={18} strokeWidth={2.5} />
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={activeSection === sectionId ? 'page' : undefined}
                className="text-zinc-300 transition-all duration-300 hover:text-emerald-400 hover:-translate-y-0.5 whitespace-nowrap"
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
