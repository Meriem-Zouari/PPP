import React, { useState } from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
import './Shop.css';

const Shop = () => {
  const [priceFilter, setPriceFilter] = useState(0); // State for price filter

  // Function to handle price filter change
  const handlePriceFilterChange = (event) => {
    setPriceFilter(parseFloat(event.target.value)); // Convert the value to a float
  };

  // Filter products based on the price filter
  const filteredProducts = PRODUCTS.filter((product) => product.cost <= priceFilter);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Recommended Destinations</h1>
      </div>
      <div className="shopTitle">
        <input
          type="range"
          min="0"
          max="5000" // Assuming the maximum price is 5000, you can adjust this value accordingly
          value={priceFilter}
          onChange={handlePriceFilterChange}
        />
        <span>Price: ${priceFilter}</span>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;