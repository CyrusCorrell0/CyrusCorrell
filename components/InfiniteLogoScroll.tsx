"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const CompanyLogoData: Array<{ src: string; alt: string; title: string; className?: string }> = [
  { src: '/marin-logo.png', alt: 'Marin Logo', title: 'Marin', className: 'h-8 w-auto' },
  { src: '/gv-logo.png', alt: 'GetVirtual Logo', title: 'GetVirtual', className: 'h-8 w-auto' },
  { src: '/Overture-KV-colour-logo.webp', alt: 'Overture Maps Logo', title: 'Overture Maps', className: 'h-8 w-auto' },
  { src: '/streamlit-logo-png_seeklogo-441815.webp', alt: 'Streamlit Logo', title: 'Streamlit', className: 'h-8 w-auto' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python', title: 'Python', className: 'h-8 w-auto' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React', title: 'React', className: 'h-8 w-auto' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js', title: 'Node.js', className: 'h-8 w-auto' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', alt: 'Next.js', title: 'Next.js', className: 'h-8 w-auto invert dark:invert-0' },
  { src: '/dspy-logo.png', alt: 'DSPy', title: 'DSPy', className: 'h-8 w-auto' },
];

const InfiniteLogoScroll = () => {
  return (
    <div className="py-10 bg-white/5 dark:bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-lg text-gray-600 dark:text-gray-400 mb-6 font-medium">
          Trusted by innovative organizations and powered by cutting-edge technologies
        </h2>
        
        {/* Logo scroll container */}
        <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white dark:before:from-gray-900 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-20 after:bg-gradient-to-l after:from-white dark:after:from-gray-900 after:to-transparent after:content-['']">
          <motion.div
            transition={{
              duration: 15,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {CompanyLogoData.map(({ src, alt, title, className }) => (
                  <div key={`${alt}-${index}`} className="flex items-center gap-3 group">
                    <Image
                      src={src}
                      alt={alt}
                      width={32}
                      height={32}
                      className={`${className} opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0`}
                      style={{ filter: 'brightness(0.8)' }}
                    />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {title}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;