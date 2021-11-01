import { render, screen } from '@testing-library/react';
import Phone from './Phone';
import { BrowserRouter } from 'react-router-dom';

test('renders phone page title', () => {
  render(<BrowserRouter><Phone /></BrowserRouter>);
  const titleElement = screen.getByText(/Phone Page/i);
  expect(titleElement).toBeInTheDocument();
});
