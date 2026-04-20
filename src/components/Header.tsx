import { Terminal } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Ẩn thanh nav khi lướt xuống, hiện lại khi lướt lên
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-300 transition-all duration-300 hover:text-emerald-400 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
