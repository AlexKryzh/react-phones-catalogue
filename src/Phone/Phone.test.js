import { render, cleanup, waitFor } from '@testing-library/react';
import Phone from './Phone';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        id: '0'
    }),
    useRouteMatch: () => ({ url: '/phone/0' }),
}));

const phone = {
    ok: true,
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

describe('Phone Component', () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.doMock();
    });

    afterEach(cleanup);

    test('has .phone class', () => {
        const { container } = render(<BrowserRouter><Phone /></BrowserRouter>);
        expect(container.getElementsByClassName('phone')[0]).toBeInTheDocument();
    });
    test('show correct title and price', async () => {
        fetch.mockResponseOnce(JSON.stringify(phone));
        const { container } = render(<BrowserRouter><Phone /></BrowserRouter>);
        await waitFor(() => expect(container.getElementsByClassName('phone__title')[0].textContent).toEqual(phone.name));
        await waitFor(() => expect(container.getElementsByClassName('phone__price')[0].textContent).toEqual(expect.stringContaining(phone.price.toString())));
    });
});