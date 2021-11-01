import { render, screen } from '@testing-library/react';
import PhonesList from './PhonesList';
import { BrowserRouter } from 'react-router-dom';

test('renders phones list title', () => {
  render(<BrowserRouter><PhonesList /></BrowserRouter>);
  const titleElement = screen.getByText(/Phones/i);
  expect(titleElement).toBeInTheDocument();
});
