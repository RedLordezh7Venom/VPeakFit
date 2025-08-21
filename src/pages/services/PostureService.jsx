import React from 'react';
import ServiceLayout from './ServiceLayout';

export const PostureService = () => {
  const features = [
    {
      title: 'Posture Analysis',
      description: 'Get a detailed analysis of your posture using our advanced computer vision technology.',
      image: '/images/posture-analysis.png'
    },
    {
      title: 'Real-time Feedback',
      description: 'Receive instant feedback on your posture throughout the day with our monitoring system.',
      image: '/images/feedback.png'
    },
    {
      title: 'Corrective Exercises',
      description: 'Access personalized exercises to improve your posture and prevent pain.',
      image: '/images/exercises.png'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your posture improvement over time with detailed analytics.',
      image: '/images/progress-tracking.png'
    }
  ];

  return (
    <ServiceLayout
      title="Posture Correction"
      description="Improve your posture, reduce pain, and enhance your overall well-being with our personalized posture correction program."
      icon="fa-solid fa-person-walking"
    >
      <div className="p-6 md:p-10">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Transform Your Posture</h2>
          <p className="text-gray-600 mb-8">
            Poor posture can lead to back pain, reduced mobility, and decreased energy levels. Our posture correction 
            program uses cutting-edge technology to analyze and improve your posture, helping you stand taller and feel better.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-indigo-50 transition-colors">
                <div className="w-16 h-16 mb-4">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to improve your posture?</h3>
            <p className="text-gray-600 mb-6">
              Start your journey to better posture today and experience the benefits of proper alignment.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
              Start Posture Analysis
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default PostureService;
