import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    test('have .app class', () => {
        const { container } = render(<App />);
        expect(container.getElementsByClassName('app')[0]).toBeInTheDocument();
    });
});