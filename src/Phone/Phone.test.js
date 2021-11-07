import { render } from '@testing-library/react';
import Phone from './Phone';
import { BrowserRouter } from 'react-router-dom';

describe('Phone Component', () => {
    test('has .phone class', () => {
        const { container } = render(<BrowserRouter><Phone /></BrowserRouter>);
        expect(container.getElementsByClassName('phone')[0]).toBeInTheDocument();
    });
});