import { render } from '@testing-library/react';
import Phone from './Phone';
import { BrowserRouter } from 'react-router-dom';

test('renders phone page title', () => {
  const { container } = render(<BrowserRouter><Phone /></BrowserRouter>);
  expect(container.getElementsByClassName('phone')[0]).toBeInTheDocument();
});
