import { render, screen } from '@testing-library/react';
import PhonesListItem from './PhonesListItem';
import { BrowserRouter } from 'react-router-dom';

test('renders phones list item title', () => {
  render(<BrowserRouter><PhonesListItem /></BrowserRouter>);
  const titleElement = screen.getByText(/Phone/i);
  expect(titleElement).toBeInTheDocument();
});
