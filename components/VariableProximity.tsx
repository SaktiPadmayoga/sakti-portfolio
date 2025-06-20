import {
  forwardRef,
  useMemo,

  MutableRefObject,
  CSSProperties,
  HTMLAttributes,
} from "react";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from 'react';
import { useDarkMode } from '../app/context/DarkModeContext';

// Simplified Variable Proximity Component
const VariableProximity = ({ 
  label, 
  containerRef, 
  radius = 120,
  className = ""
}) => {
  const { darkMode } = useDarkMode();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const letterRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    const handleTouchMove = (e) => {
      if (containerRef?.current && e.touches[0]) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ 
          x: e.touches[0].clientX - rect.left, 
          y: e.touches[0].clientY - rect.top 
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  useEffect(() => {
    if (!containerRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterEl) => {
      if (!letterEl) return;

      const letterRect = letterEl.getBoundingClientRect();
      const letterCenterX = letterRect.left + letterRect.width / 2 - containerRect.left;
      const letterCenterY = letterRect.top + letterRect.height / 2 - containerRect.top;

      const distance = Math.sqrt(
        Math.pow(mousePos.x - letterCenterX, 2) + 
        Math.pow(mousePos.y - letterCenterY, 2)
      );

      const proximity = Math.max(0, Math.min(1, 1 - distance / radius));
      const weight = 400 + (500 * proximity);
      const scale = 1 + (0.3 * proximity);

      // Dynamic colors based on theme
      const baseColor = darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(17, 24, 39, 0.8)';
      const hoverColor = darkMode 
        ? `rgba( 255, 255, 255, ${0.8 + 0.2 * proximity})`
        : `rgba(0, 0, 0, ${0.8 + 0.2 * proximity})`;

      letterEl.style.fontWeight = Math.round(weight).toString();
      letterEl.style.transform = `scale(${scale})`;
      letterEl.style.color = proximity > 0.1 ? hoverColor : baseColor;
      letterEl.style.textShadow = proximity > 0.3 
        ? `0 0 ${10 * proximity}px ${darkMode ? 'rgba(147, 51, 234, 0.5)' : 'rgba(147, 51, 234, 0.5)'}` 
        : 'none';
    });
  }, [mousePos, radius, containerRef, darkMode]);

  return (
    <div className={className}>
      {label.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => letterRefs.current[index] = el}
          style={{
            display: 'inline-block',
            fontWeight: '400',
            transition: 'all 0.15s ease-out',
            transformOrigin: 'center',
            cursor: 'default'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
