import { useState, useEffect } from 'react';
import { PhonesListItem } from 'PhonesListItem';
import { PhoneModel, HttpService, HttpResponse } from 'shared';
import { useTranslation } from 'react-i18next';
import './PhonesList.scss';

function PhonesList() {
    const [ phonesData, setPhonesData ] = useState<PhoneModel[]>();
    const apiUrl = process.env.REACT_APP_API_URL;
    const { t } = useTranslation();

    useEffect(() => {
        const httpService = new HttpService();
        const init = async() => {
            const response: HttpResponse = await httpService.get(`/phones`);
            if (response.ok) {
                const responseData: PhoneModel[] = await response.json();
                setPhonesData(responseData);
            }
        }

        init();
    }, [apiUrl]);
    return (
        <section className="phones-list container-lg">
            <h1>{t('phone.title')}</h1>
            <ul className="phones-list__list row">
                { phonesData && phonesData.map((phone: PhoneModel) => {
                    return <li className="col-12 col-sm-6 col-md-4 col-lg-3" key={phone?.id}><PhonesListItem phone={phone}/></li>
                })
                }
            </ul>
        </section>
      );
}

export default PhonesList;
