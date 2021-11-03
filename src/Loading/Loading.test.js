import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders header title', () => {
  const { container } = render(<Footer />);
  expect(container.getElementsByTagName('aside')[0]).toBeInTheDocument();
});
