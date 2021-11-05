import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer tagname', () => {
  const { container } = render(<Footer />);
  expect(container.getElementsByTagName('footer')[0]).toBeInTheDocument();
});
