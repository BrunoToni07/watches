import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MostExpensiveWatches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios.get('/most-expensive-watches')
      .then(response => {
        setWatches(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Relógios mais caros do mundo</h1>
      <ul>
        {watches.map(watch => (
          <li key={watch.id}>{watch.nome} - {watch.preco}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostExpensiveWatches;
