import React from 'react';
import properties from '../../assets/propertiesData';
import './FeaturedProperties.css';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const featuredProperties = properties.slice(0, 6);

  return (
    <section className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="properties-list">
        {featuredProperties.map((property) => (
          <div key={property.id} className="property-item">
            <img src={property.imageUrl} alt={property.title} className="property-image" />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p className="price">${property.price} per night</p>
            <Link to={`/property/${property.id}`} className="buy-now-btn">Book Now</Link> {/* Updated Link */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
