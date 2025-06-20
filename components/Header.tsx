'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link'; // Import Link from next/link

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { name: 'Home', href: '/', icon: Home }, // Update href to route paths
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-3 sm:top-4 md:top-6 left-2 right-2 sm:left-4 sm:right-4 md:left-0 md:right-0 z-40 max-w-fit mx-auto"
    >
      <motion.div
        className="backdrop-blur-xl rounded-2xl md:rounded-full shadow-lg shadow-gray-300/20 dark:shadow-gray-900/30 border border-gray-200/50 dark:border-gray-700/50"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-3 sm:px-4 md:px-6 py-1">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.name}
                  className="relative"
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link href={item.href} passHref>
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-full hover:text-black dark:hover:text-white transition-colors duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Hover Background */}
                      <motion.div
                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: hoveredItem === item.name ? 1 : 0,
                          opacity: hoveredItem === item.name ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      {/* Icon */}
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: hoveredItem === item.name ? -2 : 0,
                          rotate: hoveredItem === item.name ? 5 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent size={20} />
                      </motion.div>
                    </motion.div>
                  </Link>
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{
                      opacity: hoveredItem === item.name ? 1 : 0,
                      y: hoveredItem === item.name ? 0 : 10,
                      scale: hoveredItem === item.name ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  >
                    <div className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap">
                      {item.name}
                      <motion.div
                        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45"
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredItem === item.name ? 1 : 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
            {/* Separator */}
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-2" />
            {/* Dark Mode Toggle */}
            <motion.div
              className="relative"
              onHoverStart={() => setHoveredItem('theme')}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.button
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-12 h-12 rounded-full hover:text-black dark:hover:text-white transition-colors duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hover Background */}
                <motion.div
                  className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredItem === 'theme' ? 1 : 0,
                    opacity: hoveredItem === 'theme' ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                {/* Icon with Rotation */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotate: darkMode ? 180 : 0,
                    y: hoveredItem === 'theme' ? -2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </motion.button>
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{
                  opacity: hoveredItem === 'theme' ? 1 : 0,
                  y: hoveredItem === 'theme' ? 0 : 10,
                  scale: hoveredItem === 'theme' ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 pointer-events-none"
              >
                <div className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45"
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredItem === 'theme' ? 1 : 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between w-full min-w-0 my-1">
            {/* Logo/Brand - Mobile Only */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-sm mr-2 sm:text-base font-medium truncate">
                Sakti Padmayoga
              </span>
            </motion.div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Dark Mode Toggle Mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: darkMode ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
                </motion.div>
              </motion.button>
              {/* Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Menu size={16} className="sm:w-[18px] sm:h-[18px]" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden border-t border-gray-200/50 dark:border-gray-700/50 "
        >
          <nav className="p-3 sm:p-4 space-y-1 sm:space-y-2 ">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.name} href={item.href} passHref>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isMenuOpen ? 1 : 0,
                      x: isMenuOpen ? 0 : -20,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: isMenuOpen ? index * 0.1 : 0,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 p-2 sm:p-3 rounded-xl  hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100/50 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-300 flex-shrink-0"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <IconComponent size={14} className="sm:w-4 sm:h-4" />
                    </motion.div>
                    <span className="font-medium text-sm sm:text-base truncate">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}