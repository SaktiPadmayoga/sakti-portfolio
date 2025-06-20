'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';
import { ArrowRight } from 'lucide-react';
import { useDarkMode } from '../app/context/DarkModeContext';

interface ProjectItem {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export default function Project() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { darkMode } = useDarkMode();

  const projects: ProjectItem[] = [
    {
      title: 'PharmaCare Pharmacy',
      description: 'A web application for managing pharmacy operations, including inventory, sales, and customer management, built with Laravel and MySQL.',
      imageUrl: 'assets/pharmacare.png',
      link: '/projects',
    },
    {
      title: 'Atma Travel',
      description: 'An Android-based application for booking and managing travel plans, leveraging Laravel and Flutter for seamless performance.',
      imageUrl: '/assets/atmatravel.png',
      link: '/projects',
    },
    {
      title: 'ReuseMart',
      description: 'A web and Android platform for trading second-hand goods, promoting sustainability using Laravel, React JS, and Flutter.',
      imageUrl: 'assets/reusemart.png',
      link: '/projects',
    },
    {
      title: 'Jambu Kristal Payangan',
      description: 'A modern web app for promoting agribusiness, focusing on crystal guava products, built with Next.js and TypeScript.',
      imageUrl: 'assets/jambu.png',
      link: '/projects',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 px-4 sm:px-6 md:my-30"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className={`text-[30vw] sm:text-[20vw] md:text-[20rem] 2xl:text-[30rem] font-black select-none leading-none ${
            darkMode ? 'text-zinc-900' : 'text-gray-100'
          }`}
        >
          MY WORK
        </h1>
      </div>

      <motion.div
        className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 max-w-6xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          variants={textVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            variants={textVariants}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg mb-6 max-w-md sm:max-w-lg"
            variants={textVariants}
          >
            Explore some of the exciting projects I've worked on. Each project showcases a unique blend of creativity, technology, and problem-solving, built with modern tools and frameworks to deliver impactful solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
          variants={cardContainerVariants}
        >
          {/* Mobile View: Simple Card List */}
          <div className="w-full max-w-md sm:max-w-lg md:hidden flex flex-col gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg shadow-md"
                variants={cardVariants}
                style={{
                  backgroundColor: darkMode ? '#020202' : '#ffffff',
                  color: darkMode ? '#e5e7eb' : '#1f2937',
                  border: darkMode ? '1px solid #9ca3af' : '1px solid #6b7280',
                }}
              >
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                )}
                <h3 className="text-base font-semibold mb-1 text-center">
                  {project.title}
                </h3>
                <p
                  className="mb-4 text-xs text-center flex-grow"
                  style={{
                    color: darkMode ? '#9ca3af' : '#6b7280',
                  }}
                >
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="flex items-center hover:underline text-xs transition-colors duration-200"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop View: CardSwap */}
          <div className="hidden md:block w-full max-w-md" style={{ height: '500px' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              {projects.map((project, index) => (
                <Card key={index}>
                  <motion.div
                    className="flex flex-col items-center justify-between h-full p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundColor: darkMode ? '#020202' : '#ffffff',
                      color: darkMode ? '#e5e7eb' : '#1f2937',
                      border: darkMode ? '1px solid #9ca3af' : '1px solid #6b7280',
                    }}
                  >
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        className="w-full h-80 object-cover rounded mb-4"
                      />
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-center">
                      {project.title}
                    </h3>
                    <p
                      className="mb-4 text-sm sm:text-base text-center flex-grow"
                      style={{
                        color: darkMode ? '#9ca3af' : '#6b7280',
                      }}
                    >
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex items-center hover:underline text-sm sm:text-base transition-colors duration-200"
                      >
                        Learn More <ArrowRight size={18} className="ml-2" />
                      </a>
                    )}
                  </motion.div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}