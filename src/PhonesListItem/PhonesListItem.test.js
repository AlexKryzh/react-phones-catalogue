import { render, screen } from '@testing-library/react';
import PhonesListItem from './PhonesListItem';
import { BrowserRouter } from 'react-router-dom';

test('renders phones list item title', () => {
  const { container } = render(<BrowserRouter><PhonesListItem /></BrowserRouter>);
  expect(container.getElementsByClassName('phones-list-item__title').length).toBeTruthy();
});
