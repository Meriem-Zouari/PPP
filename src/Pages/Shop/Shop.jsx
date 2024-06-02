


import React, { useState } from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
import './Shop.css';

const Shop = () => {
  const [priceFilter, setPriceFilter] = useState(5000);

  const handlePriceFilterChange = (event) => {
    setPriceFilter(parseFloat(event.target.value));
  };

  const filteredProducts = PRODUCTS.filter((product) => product.cost <= priceFilter);

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Recommended Destinations</h1>
        <p>Discover your perfect getaway with our curated selection of stunning locations.</p>
      </div>
      <div className="price-filter">
        <h3>Budget Filter</h3>
        <div className="filter-control">
          <span>$0</span>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceFilter}
            onChange={handlePriceFilterChange}
          />
          <span>${priceFilter}</span>
        </div>
      </div>
      <div className="destinations">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
