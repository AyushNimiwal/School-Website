import React from 'react';
import { motion } from 'framer-motion';

const Students = () => (
  <motion.div
    className="students p-6 md:p-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <motion.h2
      className="text-3xl overflow-hidden md:text-4xl font-bold mb-6 text-blue-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Students
    </motion.h2>
    <motion.h3
      className="text-xl md:text-2xl font-bold mt-4 text-blue-700"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Life at Springdale
    </motion.h3>
    <motion.p
      className="text-lg text-gray-700 mt-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
    </motion.p>
    <motion.p
      className="text-lg text-gray-700 mt-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Clubs and Societies: Literary Society, Environmental Club, Astronomy Club, Coding Club
    </motion.p>
    <motion.h3
      className="text-xl md:text-2xl font-bold mt-4 text-blue-700"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      Achievements
    </motion.h3>
    <motion.ul
      className="list-disc pl-5 text-gray-700 mt-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <li>John Smith - National Level Math Olympiad Winner</li>
      <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
      <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
    </motion.ul>
    <motion.h3
      className="text-xl md:text-2xl font-bold mt-4 text-blue-700"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
    >
      Student Council
    </motion.h3>
    <motion.ul
      className="list-disc pl-5 text-gray-700 mt-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
    >
      <li>President: Amy Parker, Grade 12</li>
      <li>Vice President: Rajiv Mehta, Grade 11</li>
      <li>Secretary: Lisa Wong, Grade 10</li>
    </motion.ul>
  </motion.div>
);

export default Students;
