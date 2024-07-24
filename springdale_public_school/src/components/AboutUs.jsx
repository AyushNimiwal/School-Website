// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => (
  <motion.div
    className="about-us p-6 md:p-12 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-lg shadow-lg"
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
      About Us
    </motion.h2>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
    </motion.p>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Vision
    </motion.h3>
    <motion.p
      className="text-lg text-gray-700 mb-4"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
    </motion.p>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      Mission
    </motion.h3>
    <motion.p
      className="text-lg text-gray-700 mb-4"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
    </motion.p>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
    >
      Principal's Message
    </motion.h3>
    <motion.p
      className="text-lg text-gray-700 mb-4"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
    >
      At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
    </motion.p>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-700"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
    >
      Infrastructure and Facilities
    </motion.h3>
    <motion.ul
      className="list-disc pl-5 text-lg text-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <li>State-of-the-art science and computer labs</li>
      <li>Spacious and well-equipped classrooms</li>
      <li>Library with a vast collection of books and digital resources</li>
      <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
    </motion.ul>
  </motion.div>
);

export default AboutUs;
