'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from './context/DarkModeContext';

import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutHome from '@/components/AboutHome';
import ProjectsHome from '@/components/ProjectHome';
import ContactHome from '@/components/ContactHome';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import CursorFollower from '@/components/CursorFollower';
import TechStack from '@/components/TechStack';
import Quote from '@/components/Quote';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { darkMode, toggleDarkMode } = useDarkMode();

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div
      className="min-h-full transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? 'rgb(2 2 2)' : 'rgb(255 255 255)',
      }}
    >
      <CursorFollower />
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative"
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <AboutHome darkMode={darkMode} />
            <TechStack darkMode={darkMode} />
            <Quote darkMode={darkMode} />
            <ProjectsHome  />
            <ContactHome darkMode={darkMode} />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}