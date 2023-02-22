import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BrandList() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function fetchBrands() {
      const response = await fetch("http://localhost:3000/watches/all-brands");
      const data = await response.json();
      setBrands(data);
    }
    fetchBrands();
  }, []);

  return (
    <div className="container mt-5">
      <h2>All Brands</h2>
      <ul>
        {brands.map(brand => (
          <li key={brand.brandName}>
            <Link to={`/all-family-by/brandname/${brand.brandName}`}>{brand.brandName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandList;
