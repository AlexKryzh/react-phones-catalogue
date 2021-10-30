import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders main title', () => {
  render(<Main />);
  const titleElement = screen.getByText(/Phones/i);
  expect(titleElement).toBeInTheDocument();
});
