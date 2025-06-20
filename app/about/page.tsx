'use client';
import { useDarkMode } from '../context/DarkModeContext';
import Header from '@/components/Header';
import About from '@/components/About';
import Particles from '@/components/Particles';

export default function AboutPage() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div
      className={`min-h-screen transition-colors duration-300 relative ${
        darkMode ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      {/* Particles as background - fixed positioning and z-index */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <Particles
          particleColors={darkMode ? ['#ffffff', '#ffffff', '#ffffff'] : ['#000000', '#000000', '#000000']} 
          particleCount={400}
          particleSpread={3}
          speed={0.05}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      {/* Main content with proper z-index */}
      <main className="relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} />
      </main>
    </div>
  );
}