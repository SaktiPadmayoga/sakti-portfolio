'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';
import Aurora from '@/components/Aurora';
import { useDarkMode } from '../app/context/DarkModeContext';
import ScrollVelocity from './ScrollVelocity';

export default function Hero() {
  const { darkMode } = useDarkMode();
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const auroraColors = darkMode
    ? ["#3D3D3D", "#616161", "#292929"] // Dark mode colors
    : ["#DEDEDE", "#E6E6E6", "#C4C4C4"]; // Light mode colors
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Aurora Background */}
      <div className={`absolute inset-0 z-0 ${darkMode ? '-mt-10' : '-mt-80'}`}>
        <Aurora 
          colorStops={auroraColors}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Main Content */}
      <div className="relative -mt-5 z-10 mx-auto px-4 lg:px-0 text-center min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center flex-col gap-2 lg:gap-4"
        >
          {/* Logo and Name */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='py-5 text-2xl md:text-3xl font-extralight uppercase tracking-wider '
              >
                Sakti Padmayoga
              </motion.h1>
            </motion.div>
          </div>

          {/* Hero Text - Marquee */}
          <div className="w-full mx-auto">
            <ScrollVelocity
              texts={['SAKTI PADMAYOGA - FULLSTACK DEVELOPER - SOFTWARE ENGINEER - SAKTI PADMAYOGA - FULLSTACK DEVELOPER - SOFTWARE ENGINEER - ', 'CAFFEINE-FUELED CODER - DREAMER - LONG LIFE LEARNER - CAFFEINE-FUELED CODER - DREAMER - LONG LIFE LEARNER - ']} 
              velocity={60} 
              className="custom-scroll-text"
            />
            
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-lg md:text-xl max-w-sm md:max-w-2xl mx-auto leading-relaxed "
          >
            Crafting digital experiences with modern technologies and creative solutions
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600"
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}