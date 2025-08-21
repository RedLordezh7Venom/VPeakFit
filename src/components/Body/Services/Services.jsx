import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Diet Planner',
      icon: 'fa-solid fa-bowl-food',
      description: 'Get personalized diet plans tailored to your fitness goals and dietary preferences.',
      path: '/diet'
    },
    {
      id: 2,
      title: 'Posture Corrector',
      icon: 'fa-solid fa-person',
      description: 'Improve your posture with our AI-powered analysis and corrective exercises.',
      path: '/posture'
    },
    {
      id: 3,
      title: 'Injury And Risk Manager',
      icon: 'fa-solid fa-user-injured',
      description: 'Identify potential injury risks and get personalized prevention strategies.',
      path: '/injury'
    },
    {
      id: 4,
      title: 'Exercise Recommender',
      icon: 'fa-solid fa-person-walking',
      description: 'Discover the perfect workouts based on your fitness level and goals.',
      path: '/userexercise'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              to={service.path}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
