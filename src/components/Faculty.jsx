import React from 'react';
import { motion } from 'framer-motion';

const facultyMembers = [
  { name: 'John Doe', title: 'Principal', description: 'M.Ed, 20 years of experience in educational administration.' },
  { name: 'Jane Smith', title: 'Vice Principal', description: 'M.Sc. in Physics, 15 years of teaching experience.' },
  { name: 'Emily Johnson', title: 'English Teacher', description: 'M.A. in English, 10 years of teaching experience.' },
  { name: 'Michael Brown', title: 'Mathematics Teacher', description: 'M.Sc. in Mathematics, 8 years of teaching experience.' },
  { name: 'Sophia Davis', title: 'Science Teacher', description: 'M.Sc. in Chemistry, 12 years of teaching experience.' },
  { name: 'David Wilson', title: 'Computer Science Teacher', description: 'B.Tech in Computer Science, 5 years of teaching experience.' },
];

const Faculty = () => (
  <motion.div
    className="faculty p-6 md:p-12 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <motion.h2
      className="text-3xl py-2 overflow-hidden md:text-4xl font-bold mb-6 text-blue-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Faculty
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {facultyMembers.map((member, index) => (
        <motion.div
          key={index}
          className="faculty-member bg-white shadow-lg p-4 mb-5 rounded-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 * index }}
        >
          <motion.h3
            className="text-xl font-bold text-blue-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {member.name}
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {member.title}, {member.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Faculty;
