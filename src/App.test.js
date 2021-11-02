import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('app')[0]).toBeInTheDocument();
  expect(container.getElementsByTagName('header')[0]).toBeInTheDocument();
  expect(container.getElementsByTagName('footer')[0]).toBeInTheDocument();
});
