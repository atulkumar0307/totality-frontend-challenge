import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'This platform is amazing! Found the perfect property within minutes.',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image, replace with actual image URLs
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'The booking process was smooth and easy. Highly recommend!',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Michael Brown',
    feedback: 'Excellent customer service and a great selection of properties.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
