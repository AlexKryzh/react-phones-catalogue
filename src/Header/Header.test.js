import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders header title', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);
  const titleElement = screen.getByText(/Phones Catalogue/i);
  expect(titleElement).toBeInTheDocument();
});
