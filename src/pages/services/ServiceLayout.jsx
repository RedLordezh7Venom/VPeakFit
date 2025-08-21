import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceLayout = ({ title, description, children, icon = 'default' }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <img 
                src={`/images/service-icons/${icon}.png`} 
                alt={title} 
                className="w-10 h-10 object-contain" 
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 text-xl text-indigo-100 max-w-3xl">
            {description}
          </p>
          <Link 
            to="/services" 
            className="mt-6 inline-flex items-center text-indigo-100 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all services
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceLayout;
