import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Phones Catalogue/i);
  expect(titleElement).toBeInTheDocument();
});
