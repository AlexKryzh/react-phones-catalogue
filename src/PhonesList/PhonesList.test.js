import { render, screen } from '@testing-library/react';
import PhonesList from './PhonesList';

test('renders phones list title', () => {
  render(<PhonesList />);
  const titleElement = screen.getByText(/Phones/i);
  expect(titleElement).toBeInTheDocument();
});
