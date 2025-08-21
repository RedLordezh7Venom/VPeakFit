import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "../Body/Carousel/Carousel";
import Hero from "../Body/Hero/Hero";
import Features from "../Body/Features/Features";
import Panel from "../Body/Panel/Panel";
import Services from "../Body/Services/Services";

const HomePage = () => {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <Carousel />
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* User Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">JD</div>
                <div>
                  <h4 className="font-semibold text-lg">John D.</h4>
                  <p className="text-gray-600">Lost 25 lbs in 3 months</p>
                </div>
              </div>
              <p className="text-gray-700">"VPeakFit completely transformed my approach to fitness. The personalized workout plans and nutrition guidance helped me lose 25 pounds and gain so much confidence!"</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">SP</div>
                <div>
                  <h4 className="font-semibold text-lg">Sarah P.</h4>
                  <p className="text-gray-600">Gained 15lbs of muscle</p>
                </div>
              </div>
              <p className="text-gray-700">"As a busy professional, I struggled to find time for fitness. VPeakFit's efficient workouts and meal plans helped me gain 15 pounds of muscle while working full-time."</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">MR</div>
                <div>
                  <h4 className="font-semibold text-lg">Mike R.</h4>
                  <p className="text-gray-600">Ran first marathon at 45</p>
                </div>
              </div>
              <p className="text-gray-700">"At 45, I never thought I could run a marathon. Thanks to VPeakFit's training program and community support, I crossed the finish line with a smile!"</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Panel */}
      <Panel />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of others who have transformed their lives with VPeakFit
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
