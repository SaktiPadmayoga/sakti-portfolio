'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Zap } from 'lucide-react';
import { 
  SiExpress, SiFramer,
  SiReact, SiNextdotjs, SiPostgresql, SiTailwindcss,
  SiMysql, SiMongodb, SiFlutter,
} from 'react-icons/si';
import { FaJava, FaLaravel } from 'react-icons/fa';
import { useState } from 'react';
import Cobe from './Cobe';

export default function About({ darkMode = false }) {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const skills = [
    { name: 'Frontend Development', icon: Code2, color: 'blue' },
    { name: 'Problem Solving', icon: Brain, color: 'green' },
    { name: 'Quick Learning', icon: Zap, color: 'yellow' },
    { name: 'Academic Excellence', icon: GraduationCap, color: 'purple' },
  ];

  const technologies = [
    { name: 'Java', icon: FaJava },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Laravel', icon: FaLaravel },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const profileVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut",
        delay: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateY: -90
    },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.2 + (i * 0.1)
      }
    })
  };

  const techVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 1.2 + (i * 0.05)
      }
    })
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 md:pt-28 min-h-screen z-20 mx-5 lg:mx-0">
      <div className="max-w-5xl mx-auto">
        {/* Section 1 & 2: Side by Side */}
        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* Section 1: Photo and Intro */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="space-y-6 rounded-2xl card group overflow-hidden shadow-lg shadow-gray-300/20 bg-white dark:bg-gray-900 border border-gray-200 flex flex-col h-full justify-center"
          >
            <div className="space-y-4 flex flex-col items-center justify-center">
              <div className="flex justify-center items-center">
                <motion.img 
                  src="assets/profile.jpeg" 
                  className="w-32 h-32 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                  variants={profileVariants}
                  initial="hidden"
                  animate="visible"
                />
                
                <motion.div 
                  className='flex flex-col justify-center ml-4 leading-1'
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="leading-relaxed text-2xl">
                    Hi, I'm Sakti Padmayoga.
                    <span className='block'>
                      Eat, <span className="line-through">Sleep</span>, Code, Repeat
                    </span>
                  </p>
                  <motion.a
                    href="/assets/CV ANAK AGUNG GEDE SAKTI PADMAYOGA.pdf"
                    download
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center text-center p-2 border rounded-2xl bg-white/10 backdrop-blur-2xl cursor-pointer mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <GraduationCap className="w-6 h-6 text-purple-400 mr-1 md:mr-4" />
                    <h4 className="font-semibold">Download CV</h4>
                  </motion.a>
                </motion.div>
              </div>        
            </div>
          </motion.div>

          {/* Section 2: Skills Cards (2x2 Grid) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 h-full"
          >
            {/* Availability */}
            <motion.div
              variants={skillCardVariants}
              custom={0}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center justify-center text-center p-4 card group overflow-hidden shadow-lg shadow-gray-300/20 bg-white dark:bg-gray-900 border border-gray-200 rounded-2xl"
            >
              <Zap className="w-6 h-6 mb-2 text-green-400" />
              <h4 className="font-semibold">Availability</h4>
              <p className="text-sm text-green-400 px-2 py-1 mt-2 rounded-2xl border border/50">Open to Internship</p>
            </motion.div>
            
            {/* Globe (Cobe) */}
            <motion.div
              variants={skillCardVariants}
              custom={1}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center justify-center text-center p-4 rounded-2xl card group overflow-hidden shadow-lg shadow-gray-300/20 bg-white dark:bg-gray-900 border border-gray-200"
            >
              <Cobe />
            </motion.div>
          </motion.div>
        </div>

        {/* Description Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={descriptionVariants}
          className="mt-5"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-wrap justify-center gap-6 p-5 rounded-2xl card group overflow-hidden shadow-lg shadow-gray-300/20 bg-white dark:bg-gray-900 border border-gray-200"
          >
            <p className='md:text-xl 2xl:text-2xl text-justify'>
              I'm a third-year Informatics student at Atma Jaya University Yogyakarta, with a strong focus on Web and Software Development. My journey into tech started from a creative background—having spent years involved in video production as a videographer and editor. Over time, my passion evolved into building digital solutions through clean, functional code and intuitive design.
              I enjoy learning through challenges—whether it's refining user interfaces, writing better code, or understanding new paradigms in tech. My goal is to keep growing as a developer who builds with both creativity and logic.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Section 3: Technologies */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
          className="mt-5 card group shadow-lg shadow-gray-300/20 bg-white dark:bg-gray-900 border border-gray-200 rounded-2xl"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={techVariants}
                  custom={index}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                  animate={
                    hoveredTech === index
                      ? { scale: 1.1, rotate: 2 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="relative flex flex-col items-center p-2 md:p-4 dark:bg-gray-800 rounded-lg hover:bg-gray-100/30 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {/* Tooltip on hover */}
                  {hoveredTech === index && (
                    <motion.span
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1.1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-gray-200 text-black rounded whitespace-nowrap z-10"
                    >
                      {tech.name}
                    </motion.span>
                  )}

                  <Icon size={32} className="text-inherit" />
                </motion.div>


              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}