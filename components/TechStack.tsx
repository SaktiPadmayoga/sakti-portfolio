'use client';

import InfiniteMenu from './InfiniteMenu'
import { motion } from 'framer-motion';
import { DiGithub } from 'react-icons/di';

const items = [
  {
    image: '/assets/tailwindcss-mark.d52e9897.svg',
    link: 'https://tailwindcss.com/',
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for styling websites'
  },
  {
    image: '/assets/flutter.png',
    link: 'https://flutter.dev/',
    title: 'Flutter',
    description: 'UI toolkit for building cross-platform apps'
  },
  {
    image: '/assets/Git-Icon-1788C.png',
    link: 'https://git-scm.com/',
    title: 'Git',
    description: 'Version control system for tracking code changes'
  },
  {
    image: '/assets/html.png',
    link: 'https://html.spec.whatwg.org/',
    title: 'HTML5',
    description: 'Standard markup language for web pages'
  },
  {
    image: '/assets/css.png',
    link: 'https://www.w3.org/Style/CSS/',
    title: 'CSS3',
    description: 'Style sheet language for designing web pages'
  },
  {
    image: '/assets/icons8-javascript-500.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    title: 'JavaScript',
    description: 'Programming language for interactive web features'
  },
  {
    image: '/assets/react.png',
    link: 'https://react.dev/',
    title: 'React',
    description: 'JavaScript library for building user interfaces'
  },
  {
    image: '/assets/mongo.png',
    link: 'https://www.mongodb.com/',
    title: 'MongoDB',
    description: 'NoSQL database for flexible, document-based storage'
  },
  {
    image: '/assets/Java-Logo-scaled.jpg',
    link: 'https://www.java.com/',
    title: 'Java',
    description: 'Object-oriented language for robust applications'
  },
  {
    image: '/assets/next.png',
    link: 'https://nextjs.org/',
    title: 'Next.js',
    description: 'React framework for server-rendered web apps'
  },
  {
    image: '/assets/laravel.png',
    link: 'https://laravel.com/',
    title: 'Laravel',
    description: 'PHP framework for web application development'
  },
  {
    image: '/assets/mysql.png',
    link: 'https://www.mysql.com/',
    title: 'MySQL',
    description: 'Relational database management system'
  },
  {
    image: '/assets/github.webp',
    link: 'https://github.com/',
    title: 'GitHub',
    description: 'Platform for hosting and collaborating on code'
  },
  {
    image: '/assets/figma.png',
    link: 'https://www.figma.com/',
    title: 'Figma',
    description: 'Collaborative tool for interface design and prototyping'
  },
  {
    image: '/assets/gsap.png',
    link: 'https://gsap.com/',
    title: 'GSAP',
    description: 'JavaScript library for high-performance animations'
  },
  {
    image: '/assets/framer-motion.webp',
    link: 'https://www.framer.com/motion/',
    title: 'Framer Motion',
    description: 'React animation library for smooth UI transitions'
  },
  {
    image: '/assets/docker.jpg',
    link: 'https://www.docker.com/',
    title: 'Docker',
    description: 'Tool for containerizing and deploying applications'
  },
  {
    image: '/assets/postgre.png',
    link: 'https://www.postgresql.org/',
    title: 'PostgreSQL',
    description: 'Advanced open-source relational database system'
  },
];



const TechStack = ({ darkMode = false }) => {
  
  return (
    <motion.div
      className="md:pt-20 md:mb-80 px-6 md:px-16 lg:px-24"
      initial="hidden"
      animate="visible"
    >
      <div className="inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className={`text-[5rem] text-center md:text-[10-rem] lg:text-[10rem] font-black select-none leading-none ${
            darkMode ? 'text-zinc-900' : 'text-gray-100'
          }`}
        >
          TECH STACK
        </h1>
      </div>
      <div style={{ height: '600px', position: 'relative', zIndex: '10' }}>
        <InfiniteMenu items={items}/>
      </div>
    </motion.div>
  );
};

export default TechStack;