import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders header title', () => {
  const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
  expect(container.getElementsByTagName('header')[0]).toBeInTheDocument();
});
