import { useState, useEffect } from 'react';
import PhonesListItem from '../PhonesListItem/PhonesListItem';
import { PhoneModel, HttpResponse, MessageType } from '../shared';
import { useTranslation } from 'react-i18next';
import { StoreHelper } from '../store';
import './PhonesList.scss';

function PhonesList() {
    const [ phonesData, setPhonesData ] = useState<PhoneModel[]>();
    const apiUrl = process.env.REACT_APP_API_URL;
    const { t } = useTranslation();

    useEffect(() => {
        const storeHelper = new StoreHelper();
        const init = async() => {
            try {
                storeHelper.setIsLoading(true);
                const response: HttpResponse = await fetch(`${apiUrl}/phones`);
                if (response.ok) {
                    const responseData: PhoneModel[] = await response.json();
                    setPhonesData(responseData);
                } else {
                    storeHelper.pushMessage({id: '', type: MessageType.warning, text: 'phone.notFound'});
                }
            }
            catch (e: unknown) {
                storeHelper.pushMessage({id: '', type: MessageType.danger, text: 'page.serverError'});
            }
            finally {
                storeHelper.setIsLoading(false);
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
