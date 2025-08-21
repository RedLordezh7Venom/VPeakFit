import React from 'react';
import ServiceLayout from './ServiceLayout';

export const ExerciseService = () => {
  const features = [
    {
      title: 'Personalized Workouts',
      description: 'Get custom workout plans tailored to your fitness level and goals.',
      image: '/images/dumbbell.png'
    },
    {
      title: 'Exercise Library',
      description: 'Access hundreds of exercises with detailed instructions and videos.',
      image: '/images/library.png'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your strength gains and fitness improvements over time.',
      image: '/images/progress.png'
    },
    {
      title: 'Form Analysis',
      description: 'Get feedback on your exercise form to prevent injuries.',
      image: '/images/form-analysis.png'
    }
  ];

  return (
    <ServiceLayout
      title="Exercise Recommender"
      description="Discover the perfect workouts to achieve your fitness goals with our smart exercise recommendations."
      icon="fa-solid fa-dumbbell"
    >
      <div className="p-6 md:p-10">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Personalized Fitness Journey</h2>
          <p className="text-gray-600 mb-8">
            Whether you're a beginner or an experienced athlete, our exercise recommender creates 
            customized workout plans that match your fitness level, goals, and available equipment. 
            Get ready to transform your fitness with science-backed exercises.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to transform your workouts?</h3>
            <p className="text-gray-600 mb-6">
              Get started with a personalized exercise plan designed just for you.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
              Get My Workout Plan
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ExerciseService;
