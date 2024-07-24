import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-white p-4 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Link className="text-2xl font-bold hover:text-yellow-400 transition-colors duration-300" to="/">
            Springdale Public School
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="hidden w-fit md:flex space-x-6 overflow-y-clip"
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
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <X className="text-white w-6 h-6 transition-transform duration-300" />
            ) : (
              <Menu className="text-white w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="md:hidden bg-white text-black p-4 rounded-lg shadow-lg mt-2 backdrop-blur-sm"
        >
          <div className="flex flex-col space-y-2">
            {['Home', 'About Us', 'Academics', 'Admissions', 'Faculty', 'Students', 'Gallery', 'Contact Us'].map((text, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: '#2196f3' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link to={`/${text.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400 transition-colors duration-300">
                  {text}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
