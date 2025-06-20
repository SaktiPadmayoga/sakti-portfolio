'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ShinyText from './ShinyText';

export default function Contact({ darkMode = false }) {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background big text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className={`text-[6rem] md:text-[25rem] 2xl:text-[30rem] font-black select-none leading-none ${
            darkMode ? 'text-zinc-900' : 'text-gray-100'
          }`}
        >
          CONTACT
        </h1>
      </div>

      {/* Animated Text */}
      <div className="relative z-10 max-w-7xl w-full text-center px-4 sm:px-6">
        <div className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed tracking-wider font-bold">
            <motion.span >
                <p className='text-2xl md:text-7xl'>LET'S MAKE SOMETHING GREAT</p>
                <a href="/contact" className='text-2xl md:text-7xl '>
                    <ShinyText text="CONTACT ME" disabled={false} speed={2} className='custom-class hover:scale-105 transition-transform duration-300' />
                </a>
            </motion.span>
        </div>
      </div>

    
    </section>
  );
}