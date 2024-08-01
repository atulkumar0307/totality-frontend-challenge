import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-item">
      <img src={property.imageUrl} alt={property.title} className="property-image" />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <div className="price">${property.price}</div>
        <Link to={`/property/${property.id}`} className="buy-now-btn">Book Now</Link>
      </div>
    </div>
  );
};

export default PropertyCard;
