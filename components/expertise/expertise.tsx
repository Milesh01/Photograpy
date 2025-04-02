'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState('Landscape');

  const content: Record<string, string> = {
    Landscape: "Capturing the breathtaking beauty of nature, from majestic mountains to serene sunsets.",
    Wildlife: "Bringing the wild to life, showcasing the raw beauty and behavior of animals in their natural habitat.",
    Architectural: "Highlighting the elegance of structures, from modern skyscrapers to historic monuments.",
    Travel: "Telling stories of exploration and adventure through mesmerizing travel photography.",
    Portrait: "Reflecting personality and emotion through beautifully composed portrait photography."
  };

  return (
    <section className="container mx-auto text-white py-16">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
        <div className="text-gray-400 text-sm md:col-span-2">
          <p className="mb-2">(02)</p>
          <h3 className="text-lg font-medium">Our Expertise</h3>
          <div className="mt-4">
            <AnimatePresence mode='wait'>
              <motion.h2
                key={selectedCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}  //fade in effect
                // initial={{ opacity: 0, x: -20 }}
                // animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="text-3xl text-white lg:text-5xl font-light leading-tight"
              >
                {content[selectedCategory]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-right text-gray-300">
        <ul className="space-y-2">
        {Object.keys(content).map((category) => (
        <li key={category} className="relative">
              <motion.span
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1 }}
                onClick={() => setSelectedCategory(category)}
                className={`
                  relative inline-block py-1 px-2 cursor-pointer
                  transition-all duration-300
                  ${selectedCategory === category 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-200'}
                `}
              >
                {category}
              </motion.span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Expertise;