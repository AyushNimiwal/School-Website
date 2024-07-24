import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => (
  <motion.div
    className="admissions p-6 md:p-12 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <motion.h2
      className="text-3xl overflow-hidden md:text-4xl font-bold mb-6 text-purple-700"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Admissions
    </motion.h2>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-600"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      Process
    </motion.h3>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      Admission forms are available for download. Submit the completed form along with required documents at the school office.
    </motion.p>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-600"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Criteria
    </motion.h3>
    <motion.p
      className="text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
    </motion.p>
    <motion.h3
      className="text-2xl font-semibold mt-6 text-purple-600"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      Important Dates
    </motion.h3>
    <motion.ul
      className="list-disc pl-5 text-lg text-gray-800 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
    >
      <motion.li
        className="mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        Admission Form Availability: March 1st
      </motion.li>
      <motion.li
        className="mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        Last Date for Submission: March 31st
      </motion.li>
      <motion.li
        className="mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        Entrance Test: April 15th
      </motion.li>
      <motion.li
        className="mb-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        Announcement of Results: April 30th
      </motion.li>
    </motion.ul>
  </motion.div>
);

export default Admissions;
