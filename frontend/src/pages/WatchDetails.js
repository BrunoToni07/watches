import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function WatchDetails() {
  const [models, setModelDetail] = useState([]);
  const { brandName, familyName, modelName } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/watches/all-models-by/brandname/${brandName}/family/${familyName}/model/${modelName}`);
      const data = await response.json();
      console.log(data)
      setModelDetail(data);
    }

    fetchData();
  }, [brandName, familyName, modelName]);

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

export default WatchDetails;
