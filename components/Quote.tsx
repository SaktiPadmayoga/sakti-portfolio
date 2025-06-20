'use client';

import { useRef } from 'react';
import { useState, useEffect } from 'react';

import { motion, useInView } from 'framer-motion';
import VariableProximity from '@/components/VariableProximity';


export default function Quote({ darkMode = false }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 md:my-40 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className=" text-[10rem] md:text-[30rem] 2xl:text-[40rem] font-black opacity-5">
          QUOTE
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Opening Quote */}
          <div className="text-6xl md:text-9xl opacity-60">
            &quot;
          </div>

          {/* Interactive Quote Container */}
          <div
            ref={containerRef}
            className="relative -mb-12  md:mb-14"
            style={{ minHeight: '200px' }}
          >
            <VariableProximity
              label="AI can't replace me..."
              containerRef={containerRef}
              radius={100}
              className="text-3xl md:text-4xl lg:text-7xl  leading-tight"
            />
            <VariableProximity
              label="unless it learns to debug at 2AM with coffee and tears"
              containerRef={containerRef}
              radius={100}
              className="text-3xl md:text-4xl lg:text-7xl leading-tight"
            />
            
          </div>

          {/* Attribution */}
          <div className="text-lg md:text-xl md:font-semibold md:mt-20  tracking-widest uppercase opacity-70">
            — Sakti Padmayoga
          </div>
        </div>
      </div>

      
    </section>
  );
}