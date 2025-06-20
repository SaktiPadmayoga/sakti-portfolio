'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Magnet from './Magnet';
import Link from 'next/link';

export default function About({ darkMode = false }) {
  const sectionRef = useRef(null);

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)' },
    hover: { 
      scale: 1.05, 
      boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <section
      id='about'
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-40 mb-[300px] relative overflow-hidden"
    >
      {/* Background big text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className={`text-[10rem] md:text-[30rem] 2xl:text-[40rem] font-black select-none leading-none ${
            darkMode ? 'text-zinc-900' : 'text-gray-100'
          }`}
        >
          ABOUT
        </h1>
      </div>

      {/* Animated Text */}
      <div className="relative z-10 max-w-7xl text-center mb-12 px-4 sm:px-6">
        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.2}
          baseRotation={0}
          blurStrength={3}
          containerClassName="my-8"
          textClassName={`${
            darkMode ? 'text-white' : 'text-black'
          } leading-relaxed text-xs sm:text-lg md:text-2xl lg:text-3xl`}
          rotationEnd="bottom center"
          wordAnimationEnd="bottom center+=20%"
        >
          Hi, I'm Sakti Padmayoga — a passionate Computer Science student and tech enthusiast. Currently, I'm diving deep into Web & Mobile Development. I love turning ideas into intuitive and visually appealing digital experiences like this. Driven by curiosity and creativity, I enjoy building projects that solve real problems through technology. Thanks for stopping by!
        </ScrollReveal>
      </div>

      {/* Animated Button */}
      <div className="relative z-10 mt-20">
        <Magnet>
          <Link href="/about">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`px-8 py-4 rounded-full font-semibold text-lg ${
                darkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              } transition-colors duration-300`}
            >
              About Me
            </motion.button>
          </Link>
        </Magnet>
      </div>
    </section>
  );
}