'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code, Sparkles, Zap, Rocket, Brain, Target } from 'lucide-react';

export default function AnimatedBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const icons = [
    { Icon: Code, color: 'text-blue-500', delay: 0 },
    { Icon: Sparkles, color: 'text-yellow-500', delay: 0.5 },
    { Icon: Zap, color: 'text-purple-500', delay: 1 },
    { Icon: Rocket, color: 'text-red-500', delay: 1.5 },
    { Icon: Brain, color: 'text-green-500', delay: 2 },
    { Icon: Target, color: 'text-pink-500', delay: 2.5 },
  ];

  if (windowSize.width === 0) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      {icons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-10 dark:opacity-5`}
            initial={{ 
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
                Math.random() * windowSize.width
              ],
              y: [
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
                Math.random() * windowSize.height
              ],
              scale: [0, 1, 0.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          >
            <Icon size={24 + Math.random() * 16} />
          </motion.div>
        );
      })}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          x: [-50, 50, -50],
          y: [-30, 30, -30]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
          x: [50, -50, 50],
          y: [30, -30, 30]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -360],
          x: [-100, 100, -100],
          y: [50, -50, 50]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particle System */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-400/30 dark:bg-gray-600/30 rounded-full"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

