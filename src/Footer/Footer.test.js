import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {

    test('renders <footer> tagname', () => {
        const { container } = render(<Footer />);
        expect(container.getElementsByTagName('footer')[0]).toBeInTheDocument();
    });

    test('has .footer class', () => {
        const { container } = render(<Footer />);
        expect(container.getElementsByClassName('footer')[0]).toBeInTheDocument();
    });

    test('has current year', () => {
        const { container } = render(<Footer />);
        const today = new Date();
        const currentYear = today.getFullYear().toString();
        expect(container.getElementsByClassName('footer__year')[0].textContent).toEqual(expect.stringContaining(currentYear));
    });
});
