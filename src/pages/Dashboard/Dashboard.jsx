import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from '../../components/Body/Carousel/Carousel';
import Panel from '../../components/Body/Panel/Panel';
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Fitness Dashboard</h1>
          <p className="text-xl text-gray-600">Track your progress and stay motivated</p>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Activity Panel */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Activity Summary</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">This Week</p>
                <p className="text-2xl font-bold">5/7 days active</p>
              </div>
              <div>
                <p className="text-gray-600">Total Workouts</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/userexercise')}
                className="w-full text-left p-3 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors"
              >
                Start New Workout
              </button>
              <button 
                onClick={() => navigate('/diet')}
                className="w-full text-left p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
              >
                Plan Today's Meals
              </button>
              <button 
                onClick={() => navigate('/posture')}
                className="w-full text-left p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
              >
                Check Posture
              </button>
            </div>
          </motion.div>

          {/* Progress */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Weekly Goal</span>
                  <span className="text-sm font-medium">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Monthly Challenge</span>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Completed Full Body Workout</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carousel Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Recommended For You</h2>
          <Carousel />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
