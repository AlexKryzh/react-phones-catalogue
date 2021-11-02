import { useState, useEffect } from 'react';
import PhonesListItem from '../PhonesListItem/PhonesListItem';
import { PhoneModel, HttpResponse } from '../shared';
import './PhonesList.scss';

function PhonesList() {
    const [ phonesData, setPhonesData ] = useState<PhoneModel[]>();
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {

        const init = async() => {
            const response: HttpResponse = await fetch(`${apiUrl}/phones`);
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const responseData: PhoneModel[] = await response.json();
            setPhonesData(responseData);
        }

        init();
    }, [apiUrl]);
    return (
        <section className="phones-list">
            <h1>Phones</h1>
            <ul className="phones-list__list">
                { phonesData && phonesData.map((phone: PhoneModel) => {
                    return <li key={phone?.id}><PhonesListItem phone={phone}/></li>
                })
                }
            </ul>
        </section>
      );
}

export default PhonesList;
