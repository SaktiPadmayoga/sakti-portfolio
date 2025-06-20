'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// TiltedCard component
function TiltedCard({ children, rotateAmplitude = 12, scaleOnHover = 1.05 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / rect.height) * rotateAmplitude * -1;
      const rotateY = (mouseX / rect.width) * rotateAmplitude;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered, rotateAmplitude, scaleOnHover]);

  return (
    <div
      ref={cardRef}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
}

export default function Projects({darkMode = false}) {
  const projects = [
    {
      id: 1,
      title: 'ReuseMart',
      description: 'A web and Android-based platform for buying and selling second-hand goods, promoting sustainable consumption with an intuitive interface.',
      image: 'assets/reusemart.png',
      technologies: ['Laravel', 'MySQL', 'phpMyAdmin', 'React JS', 'Flutter'],
      github: 'https://github.com/SaktiPadmayoga',
      demo: '#',
      date: '2025'
    },
    {
      id: 2,
      title: 'Jambu Kristal Payangan',
      description: 'A modern web application for promoting and managing agribusiness activities, focusing on crystal guava products with a sleek design.',
      image: 'assets/jambu.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/SaktiPadmayoga',
      demo: '#',
      date: '2025'
    },
    {
      id: 3,
      title: 'PharmaCare Pharmacy',
      description: 'A web application for managing pharmacy operations, including inventory, sales, and customer management, with a user-friendly interface.',
      image: 'assets/pharmacare.png',
      technologies: ['Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL'],
      github: 'https://github.com/SaktiPadmayoga',
      demo: '#',
      date: '2024'
    },
    {
      id: 4,
      title: 'Atma Travel',
      description: 'An Android-based application for booking, travel packages and vehicles, offering seamless user experiences with real-time updates.',
      image: 'assets/atmatravel.png',
      technologies: ['Laravel', 'MySQL', 'phpMyAdmin', 'Flutter'],
      github: 'https://github.com/SaktiPadmayoga',
      demo: '#',
      date: '2024'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1] 
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.1, 
      boxShadow: '0px 8px 24px rgba(59, 130, 246, 0.3)',
      transition: { 
        duration: 0.3, 
        ease: [0.4, 0, 0.2, 1] 
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl mb-4"
          >
            My Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Here are some of my recent projects that showcase my skills in 
            web development, software development, and creative thinking.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <TiltedCard rotateAmplitude={15} scaleOnHover={1.05}>
                <div className="card group overflow-hidden shadow-lg shadow-gray-300/20 border border-gray-300 rounded-2xl p-6 h-full">
                  {/* Project Image */}
                  <motion.div 
                    className="relative h-48 rounded-lg mb-6 overflow-hidden"
                    variants={imageVariants}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                      <motion.div 
                        className="mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </motion.div>
                    </div>
                    
                    {/* Overlay with links */}
                    <motion.div 
                      className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <motion.a
                        href={project.github}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="p-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200 text-white"
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="p-4 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors duration-200 text-white"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <motion.h3 
                        className="text-xl font-bold"
                        whileHover={{ color: '#3b82f6', x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div 
                        className="flex items-center text-sm"
                        whileHover={{ color: '#3b82f6' }}
                      >
                        <Calendar size={16} className="mr-1" />
                        {project.date}
                      </motion.div>
                    </div>

                    <motion.p 
                      className="leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={itemVariants}
                    >
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 border border-gray-200/50  backdrop-blur-xl rounded-full text-sm font-medium"
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: '#303030',
                            color: '#ffffff'
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex space-x-4 pt-2"
                      variants={itemVariants}
                    >
                      <motion.a
                        href={project.github}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex items-center space-x-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex items-center space-x-2 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/SaktiPadmayoga"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center space-x-2 btn-primary px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}