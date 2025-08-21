import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUtensils, FaChartLine } from 'react-icons/fa';
import './Features.css';

const features = [
  {
    icon: <FaDumbbell className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Personalized Workouts",
    description: "Customized exercise plans tailored to your fitness level and goals, with AI-powered adjustments."
  },
  {
    icon: <FaHeartbeat className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Injury Prevention",
    description: "Smart recommendations to help you train safely and avoid common workout injuries."
  },
  {
    icon: <FaUtensils className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Nutrition Plans",
    description: "Personalized meal plans designed to fuel your workouts and accelerate your results."
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Progress Tracking",
    description: "Monitor your fitness journey with detailed analytics and progress reports."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose VPeakFit?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to fitness combines cutting-edge technology with expert knowledge to help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="inline-block p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
