import { render, screen } from '@testing-library/react';
import PhonesListItem from './PhonesListItem';

test('renders phones list item title', () => {
  render(<PhonesListItem />);
  const titleElement = screen.getByText(/Phone/i);
  expect(titleElement).toBeInTheDocument();
});
