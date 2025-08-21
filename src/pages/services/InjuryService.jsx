import React from 'react';
import ServiceLayout from './ServiceLayout';

export const InjuryService = () => {
  const features = [
    {
      title: 'Injury Assessment',
      description: 'Get a comprehensive assessment of your injury risk factors and current condition.',
      image: '/images/assessment.png'
    },
    {
      title: 'Prevention Plans',
      description: 'Receive personalized plans to prevent injuries before they happen.',
      image: '/images/prevention.png'
    },
    {
      title: 'Recovery Tracking',
      description: 'Monitor your recovery progress with detailed tracking and adjustments.',
      image: '/images/recovery.png'
    },
    {
      title: 'Expert Guidance',
      description: 'Access professional advice for safe and effective injury management.',
      image: '/images/expert.png'
    }
  ];

  return (
    <ServiceLayout
      title="Injury Prevention & Management"
      description="Stay active and injury-free with our comprehensive injury prevention and management solutions."
      icon="fa-solid fa-user-injured"
    >
      <div className="p-6 md:p-10">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Path to Injury-Free Fitness</h2>
          <p className="text-gray-600 mb-8">
            Whether you're recovering from an injury or looking to prevent one, our specialized program provides 
            the tools and guidance you need to stay active and healthy. Our evidence-based approach helps you 
            understand and manage your injury risks effectively.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to take control of your injury prevention?</h3>
            <p className="text-gray-600 mb-6">
              Start your personalized injury prevention plan today and train with confidence.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
              Begin Assessment
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default InjuryService;
