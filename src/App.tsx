import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0b] text-zinc-400 selection:bg-emerald-500/20 selection:text-emerald-400 relative overflow-x-hidden flex flex-col items-center font-sans">
      {/* Tech Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#2ea8700d_1px,transparent_1px),linear-gradient(to_bottom,#2ea8700d_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)]"></div>

      {/* Subtle Background Glows */}
      <div className="pointer-events-none fixed top-[-20%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-emerald-900/15 blur-[150px] animate-float opacity-70" />
      <div className="pointer-events-none fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vh] rounded-full bg-emerald-900/15 blur-[120px] animate-float delay-1000 opacity-60" />
      <div className="pointer-events-none fixed top-[40%] left-[20%] w-[30vw] h-[30vh] rounded-full bg-emerald-800/10 blur-[150px] animate-float delay-700 opacity-50" />
      
      <Header />
      
      {/* Spacious Main Container for Grid Layouts */}
      <main className="w-full max-w-6xl px-6 sm:px-12 pt-32 pb-40 flex flex-col gap-24 md:gap-32 z-10 animate-fade-in-up">
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <Projects />
        <Certificates />
      </main>
    </div>
  );
}

export default App;
