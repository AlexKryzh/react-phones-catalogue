import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders header title', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
