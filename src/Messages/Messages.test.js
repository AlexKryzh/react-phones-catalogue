import { render } from '@testing-library/react';
import Messages from './Messages';

test('renders aside tagname', () => {
  const { container } = render(<Messages />);
  expect(container.getElementsByTagName('aside')[0]).toBeInTheDocument();
});
