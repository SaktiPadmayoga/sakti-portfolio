'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -window.innerHeight }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
    >

      {/* Main Content */}
      <div className="text-center relative z-10">
        
        {/* Loading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className=" mx-auto"
        >
          {/* Progress Counter */}
          <div className="mb-6">
            <motion.span
              key={progress}
              className="text-white text-2xl md:text-[10rem] font-mono font-bold"
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-white/20">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30" />
    </motion.div>
  );
}