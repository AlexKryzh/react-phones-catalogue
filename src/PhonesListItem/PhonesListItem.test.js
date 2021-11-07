import { render } from '@testing-library/react';
import PhonesListItem from './PhonesListItem';
import { BrowserRouter } from 'react-router-dom';

describe('PhoneListItem Component', () => {
    test('has .phone-list-item class', () => {
        const { container } = render(<BrowserRouter><PhonesListItem /></BrowserRouter>);
        expect(container.getElementsByClassName('phones-list-item')[0]).toBeInTheDocument();
    });
    test('show correct title and price', () => {
        const phone = {
            id: 0,
            name: 'iPhone 7',
            manufacturer: 'Apple',
            description: 'lorem ipsum dolor sit amet consectetur.',
            color: 'black',
            price: 769,
            imageFileName: '1905-realme-c11-2021-2-32gb-gris-libre.jpg',
            screen: '4,7 inch IPS',
            processor: 'A10 Fusion',
            ram: 2
        };
        const { container } = render(<BrowserRouter><PhonesListItem phone={phone}/></BrowserRouter>);
        expect(container.getElementsByClassName('phones-list-item__title')[0].textContent).toEqual(phone.name);
        expect(container.getElementsByClassName('phones-list-item__price')[0].textContent).toEqual(expect.stringContaining(phone.price.toString()));
    });
});