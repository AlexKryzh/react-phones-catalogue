import { render, screen } from '@testing-library/react';
import Phone from './Phone';

test('renders phone page title', () => {
  render(<Phone />);
  const titleElement = screen.getByText(/Phone Page/i);
  expect(titleElement).toBeInTheDocument();
});
