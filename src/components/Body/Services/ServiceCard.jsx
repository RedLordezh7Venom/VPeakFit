import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, icon, description, to, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link to={to} className="block h-full">
        <div className="p-6 h-full flex flex-col">
          <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl group-hover:rotate-6 transition-transform duration-300">
            <i className={icon}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 flex-grow">
            {description}
          </p>
          <div className="mt-4 flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
