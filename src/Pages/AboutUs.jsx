import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Discover Our Journey and Values</p>
      </header>
      <section className="about-us-content">
        <div className="about-us-section">
          <h2>Who We Are</h2>
          <p>
            At RentEase, we are dedicated to transforming the property rental experience. Our team of real estate experts and tech enthusiasts work together to provide innovative solutions for renters and property owners alike.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make property rental straightforward and transparent. We aim to connect tenants with their ideal homes while providing property owners with efficient management tools.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Vision</h2>
          <p>
            We envision a future where finding and managing rental properties is seamless and hassle-free. Through technology and customer-centric services, we strive to make this vision a reality.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need support? <a href="/contact">Get in touch with us</a> anytime. We are here to assist you!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
