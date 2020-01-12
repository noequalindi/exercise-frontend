import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render title of filters', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Filtros/i);
  const filterStars = getByText(/Todas las estrellas/i)
  expect(titleElement).toBeInTheDocument();
  expect(filterStars).toBeInTheDocument();
});

test('At the first time, 10 pages of hotels', () => {
  //const { getByDisplayValue } = render(<App/>);
  //const initialPages = getByDisplayValue(/10/i);
  //expect(initialPages).toBeInTheDocument();
})
