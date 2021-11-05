import { render } from '@testing-library/react';
import Loading from './Loading';

test('renders aside tagname', () => {
  const { container } = render(<Loading />);
  expect(container.getElementsByTagName('aside')[0]).toBeInTheDocument();
});
