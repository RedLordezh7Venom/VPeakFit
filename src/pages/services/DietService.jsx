import React from 'react';
import ServiceLayout from './ServiceLayout';

export const DietService = () => {
  const features = [
    {
      title: 'Personalized Meal Plans',
      description: 'Get custom meal plans tailored to your dietary preferences and fitness goals.',
      image: '/images/meal-plans.png'
    },
    {
      title: 'Macro Tracking',
      description: 'Easily track your macronutrients to ensure you meet your daily goals.',
      image: '/images/macro-tracking.png'
    },
    {
      title: 'Recipe Library',
      description: 'Access hundreds of healthy recipes that fit your diet plan.',
      image: '/images/recipe-library.png'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your progress and adjust your plan as needed.',
      image: '/images/nutrition-progress.png'
    }
  ];

  return (
    <ServiceLayout
      title="Diet & Nutrition"
      description="Achieve your fitness goals with our personalized diet plans and nutrition guidance."
      icon="fa-solid fa-bowl-food"
    >
      <div className="p-6 md:p-10">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Personalized Nutrition Plan</h2>
          <p className="text-gray-600 mb-8">
            Our diet planning service helps you achieve your fitness goals through science-based nutrition. 
            Whether you want to lose weight, build muscle, or maintain a healthy lifestyle, we've got you covered.
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to transform your diet?</h3>
            <p className="text-gray-600 mb-6">
              Get started with a personalized nutrition plan today and take the first step towards a healthier you.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors">
              Get Your Custom Plan
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default DietService;
