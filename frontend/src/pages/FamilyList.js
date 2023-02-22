import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function FamilyList() {
  const [families, setFamilies] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    async function fetchFamilies() {
      const response = await fetch(`http://localhost:3000/watches/all-family-by/brandname/${brandName}`);
      const data = await response.json();
      setFamilies(data);
    }
    fetchFamilies();
  }, [brandName]);

  return (
    <div className="container mt-5">
      <h2>Families for {brandName}</h2>
      <ul>
        {families.map(family => (
          <li key={family.familyName}>
            <Link to={`/all-family-by/brandname/${brandName}/family/${family.familyName}`}>
              {family.familyName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FamilyList;
