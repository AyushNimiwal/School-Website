import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { src: 'https://via.placeholder.com/400', alt: 'Sports Day', caption: 'Students participating in various sports events.' },
  { src: 'https://via.placeholder.com/400', alt: 'Science Exhibition', caption: 'Students presenting their science projects.' },
  { src: 'https://via.placeholder.com/400', alt: 'Cultural Fest', caption: 'Students performing in the cultural fest.' },
  { src: 'https://via.placeholder.com/400', alt: 'Classroom', caption: 'A glimpse of our interactive classrooms.' },
  { src: 'https://via.placeholder.com/400', alt: 'Library', caption: 'Students reading and studying in the school library.' },
  { src: 'https://via.placeholder.com/800x450.png?text=Video+Placeholder', alt: 'School Tour', caption: 'Virtual tour of Springdale Public School.', isVideo: true },
  { src: 'https://via.placeholder.com/800x450.png?text=Video+Placeholder', alt: 'Annual Function Highlights', caption: 'Highlights from the Annual Function 2023.', isVideo: true },
];

const Gallery = () => (
  <motion.div
    className="p-6 md:p-12 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 rounded-lg shadow-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.h2
      className="text-3xl md:text-4xl py-2 overflow-hidden font-bold mb-6 text-pink-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Gallery
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <motion.div
          key={index}
          className="gallery-item relative overflow-hidden rounded-lg shadow-md h-60"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {item.isVideo ? (
            <motion.video
              src={item.src}
              alt={item.alt}
              className="w-full h-60 object-cover"
              controls
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-cover"
              initial={{ scale: 1.1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <motion.p
            className="absolute bottom-0 text-sm md:text-lg left-0 right-0 bg-gradient-to-t from-black/10 via-transparent to-transparent text-white text-center p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {item.caption}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Gallery;
