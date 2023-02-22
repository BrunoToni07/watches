import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ModelList() {
  const [models, setModels] = useState([]);
  const { brandName, familyName } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/watches/all-models-by/brandname/${brandName}/family/${familyName}`);
      const data = await response.json();
      setModels(data);
    }

    fetchData();
  }, [brandName, familyName]);

  return (
    <div>
      <h2>Lista de modelos</h2>
      <ul>
        {models.map(model => (
          <li key={model.modelName}>
            <Link to={`/watch-media-links-by-id/${model.modelName}`}>
              {model.modelName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModelList;
