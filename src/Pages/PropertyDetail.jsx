import React, { useEffect, useState, useContext } from 'react';
import './PropertyDetail.css';
import { useParams } from 'react-router-dom';
import properties from '../assets/propertiesData';
import { CartContext } from '../context/CartContext';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const propertyData = properties.find(prop => prop.id === parseInt(id));
    setProperty(propertyData);
    console.log('Property data:', propertyData); // Check if property data is correct
  }, [id]);

  const handleAddToCart = () => {
    if (property) {
      console.log('Adding to cart:', property); // Check the property being added
      addToCart(property);
      alert('Property added to cart successfully!');
    }
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-detail">
      <h1>{property.title}</h1>
      <img src={property.imageUrl} alt={property.title} />
      <p>{property.description}</p>
      <p><strong>Price:</strong> ${property.price} per month</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default PropertyDetail;
