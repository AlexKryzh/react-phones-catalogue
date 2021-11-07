import { render } from '@testing-library/react';
import PhonesList from './PhonesList';
import { BrowserRouter } from 'react-router-dom';

describe('PhoneList Component', () => {
    test('has .phone-list class', () => {
        const { container } = render(<BrowserRouter><PhonesList /></BrowserRouter>);
        expect(container.getElementsByClassName('phones-list')[0]).toBeInTheDocument();
    });
});