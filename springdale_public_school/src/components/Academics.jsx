// src/components/Academics.js
import React from 'react';
import { motion } from 'framer-motion';

const Academics = () => (
  <motion.div
    className="academics p-6 md:p-12 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <motion.h2
      className="text-3xl overflow-hidden md:text-4xl font-bold mb-6 text-purple-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Academics
    </motion.h2>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Curriculum
    </motion.h3>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education
    </motion.p>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
    </motion.p>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      Senior Secondary (Grades 11-12):
    </motion.p>
    <motion.ul
      className="list-disc pl-5 text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <motion.li
        className="mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English
      </motion.li>
      <motion.li
        className="mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English
      </motion.li>
    </motion.ul>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
    >
      Teaching Methodologies
    </motion.h3>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      We use a blend of traditional and modern teaching techniques to cater to different learning styles.
    </motion.p>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2.2 }}
    >
      Educational Resources
    </motion.h3>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.4 }}
    >
      Digital classrooms, interactive learning modules, and access to online educational platforms.
    </motion.p>
  </motion.div>
);

export default Academics;
