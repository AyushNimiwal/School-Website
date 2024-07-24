// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const carouselItems = [
  { src: 'https://via.placeholder.com/800', alt: 'Annual Sports Day', description:'Celebrating Excellence in Sports' },
  { src: 'https://via.placeholder.com/800', alt: 'Science Exhibition', description:'Showcasing Student Innovations' },
  { src: 'https://via.placeholder.com/800', alt: 'Cultural Fest', description:'Embracing Diversity and Creativity' },
];

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const controls = useAnimation();

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    controls.start('center');
    controls.set('enter');
    controls.start('center');
  }, [currentIndex, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial="enter"
        animate={controls}
        variants={carouselVariants}
        custom={direction}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          src={carouselItems[currentIndex].src}
          alt={carouselItems[currentIndex].alt}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-start text-white bg-gradient-to-t from-black via-transparent to-transparent rounded-lg p-4">
          <motion.h2
            className="text-xl md:text-3xl lg:text-4xl font-medium overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {carouselItems[currentIndex].alt}
          </motion.h2>
          <motion.h3
            className="text-sm md:text-base lg:text-lg text-gray-300 font-normal mb-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {carouselItems[currentIndex].description}
          </motion.h3>
        </div>
      </motion.div>
      <button
        onClick={handlePrev}
        className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
