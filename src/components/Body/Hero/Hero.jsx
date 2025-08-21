import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaDumbbell, FaHeartbeat, FaChartLine } from 'react-icons/fa';
import heroImage from '../../../assets/logo.jpeg'; // Using logo as a temporary fallback
import './Hero.css';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600/20 text-blue-100 mb-6 border border-blue-500/30"
            >
              <span className="flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Transform your fitness journey today
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Transform Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Fitness Journey</span> with AI
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get personalized workout plans, nutrition guidance, and expert coaching powered by AI. Whether you're a beginner or a fitness enthusiast, we'll help you achieve your goals faster and more effectively.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                to="/signup" 
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-blue-900 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <span>Get Started</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  <FaArrowRight />
                </span>
              </Link>
              
              <Link 
                to="/#features" 
                className="flex items-center justify-center px-6 py-4 text-blue-100 hover:text-white font-medium rounded-lg border-2 border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
              >
                Learn More
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: <FaDumbbell className="text-2xl text-blue-300" />, text: 'Personalized Plans' },
                { icon: <FaHeartbeat className="text-2xl text-blue-300" />, text: 'Expert Guidance' },
                { icon: <FaChartLine className="text-2xl text-blue-300" />, text: 'Track Progress' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2 text-blue-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/30">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl -z-10"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10">
                <img 
                  src={heroImage} 
                  alt="Fitness App Screenshot" 
                  className="w-full h-auto object-cover"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              
              {/* Floating element */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg z-20 w-4/5"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-3">
                      <FaDumbbell className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Daily Workout</div>
                      <div className="text-xs text-gray-600">45 min • Full Body</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <FaPlay className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '10K+', label: 'Active Users', color: 'from-blue-400 to-cyan-400' },
              { number: '50+', label: 'Expert Trainers', color: 'from-purple-400 to-pink-400' },
              { number: '95%', label: 'Success Rate', color: 'from-green-400 to-emerald-400' },
              { number: '24/7', label: 'Support', color: 'from-amber-400 to-orange-400' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                <div className={`text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-sm text-blue-100/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
