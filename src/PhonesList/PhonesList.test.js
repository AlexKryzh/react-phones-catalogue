import { render, cleanup, waitFor } from '@testing-library/react';
import PhonesList from './PhonesList';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';

const phones = [{
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
},
{
    id: 1,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: '1905-realme-c11-2021-2-32gb-gris-libre.jpg',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
},
{
    id: 2,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: '1905-realme-c11-2021-2-32gb-gris-libre.jpg',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
}];

describe('PhoneList Component', () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.doMock();
    });

    afterEach(cleanup);

    test('has .phone-list class', () => {
        const { container } = render(<BrowserRouter><PhonesList /></BrowserRouter>);
        expect(container.getElementsByClassName('phones-list')[0]).toBeInTheDocument();
    });

    test('phones list is rendered with 3 items', async () => {
        fetch.mockResponseOnce(JSON.stringify(phones));
        const { container } = render(<BrowserRouter><PhonesList /></BrowserRouter>);        
        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
        await waitFor(() => expect(container.getElementsByClassName('phones-list__list')[0]).toBeInTheDocument());
        await waitFor(() => expect(container.getElementsByClassName('phones-list__item').length).toEqual(3));
    });
});