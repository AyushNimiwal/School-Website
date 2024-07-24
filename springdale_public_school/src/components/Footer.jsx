// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-white p-6 backdrop-blur-md"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="text-center md:text-left mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-2">Springdale Public School</h1>
          <p className="text-sm">123 Education Lane, Cityville, State, ZIP Code</p>
          <p className="text-sm">© 2024 Springdale Public School. All rights reserved.</p>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          {['Home', 'About Us', 'Academics', 'Admissions', 'Faculty', 'Students', 'Gallery', 'Contact Us'].map((text, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: '#ffeb3b' }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to={`/${text.toLowerCase().replace(/\s+/g, '-')==="home"?'':text.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-yellow-400 transition-colors duration-300">
                {text}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
