import React from "react";
import { motion } from "framer-motion";

const Panel = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Take Your Fitness to the Next Level?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of others who have transformed their lives with VPeakFit
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Panel;
