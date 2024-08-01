import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Step 1',
      description: 'Search for properties that match your criteria.',
      icon: '🔍', // You can replace this with an image or an icon from a library like FontAwesome
    },
    {
      id: 2,
      title: 'Step 2',
      description: 'Select a property and view its details.',
      icon: '🏡',
    },
    {
      id: 3,
      title: 'Step 3',
      description: 'Book the property for your desired dates.',
      icon: '🗓️',
    },
    {
      id: 4,
      title: 'Step 4',
      description: 'Enjoy your stay!',
      icon: '🎉',
    },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step">
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
