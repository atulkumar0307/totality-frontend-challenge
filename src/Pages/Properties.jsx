import React, { useState } from 'react';
import './Properties.css';
import PropertyCard from '../components/property/PropertyCard';
import properties from '../assets/propertiesData.js';
import useCart from '../hooks/useCart';

function Properties() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [bedrooms, setBedrooms] = useState('');
  const [location, setLocation] = useState('');

  const { addToCart } = useCart(); // Get the addToCart function from the hook

  const handleMinPriceChange = (e) => setMinPrice(Number(e.target.value));
  const handleMaxPriceChange = (e) => setMaxPrice(Number(e.target.value));
  const handleBedroomsChange = (e) => setBedrooms(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const filteredProperties = properties.filter((property) => {
    return (
      property.price >= minPrice &&
      property.price <= maxPrice &&
      (bedrooms ? property.bedrooms === Number(bedrooms) : true) &&
      (location ? property.location === location : true)
    );
  });

  return (
    <div className="properties-page">
      <h1>Property Listings</h1>
      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="min-price">Min Price:</label>
          <input
            id="min-price"
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            min="0"
            placeholder="Min Price"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="max-price">Max Price:</label>
          <input
            id="max-price"
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            min="0"
            placeholder="Max Price"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="bedrooms">Bedrooms:</label>
          <select
            id="bedrooms"
            value={bedrooms}
            onChange={handleBedroomsChange}
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Any</option>
            <option value="City Center">City Center</option>
            <option value="Suburbs">Suburbs</option>
          </select>
        </div>
      </div>
      <div className="property-list">
        {filteredProperties.map((property) => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Properties;
