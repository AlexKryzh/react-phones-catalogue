import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { PhoneModel, HttpResponse, MessageType } from '../shared';
import { StoreHelper } from '../store';
import { useTranslation } from 'react-i18next';
import './Phone.scss';

interface RouteParams {
    id: string;
};

function Phone() {
    const [ phoneData, setPhoneData ] = useState<PhoneModel>();
    const { id } = useParams<RouteParams>();
    const apiUrl = process.env.REACT_APP_API_URL;
    const { t } = useTranslation();
    const addToShopcart = useCallback(
        () => {
            const storeHelper = new StoreHelper();
            storeHelper.pushMessage({id: '', type: MessageType.warning, text: 'phone.shoppingcartInfo'});
        }, []);

    useEffect(() => {
        if (!id) {
            return;
        }
        const storeHelper = new StoreHelper();
        const init = async() => {
            try {
                storeHelper.setIsLoading(true);
                const response: HttpResponse = await fetch(`${apiUrl}/phones/${id}`);
                if (response.ok) {
                    const responseData: PhoneModel = await response.json();
                    setPhoneData(responseData);
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
    }, [id, apiUrl]);

    return (
        <main className="phone container-lg">
            { phoneData && <section>
                <header>
                    <h1 className="phone__title">{phoneData?.name}</h1>
                </header>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <figure className="phone__figure">
                            <img 
                                className="phone__image"
                                src={`/phones/${phoneData?.imageFileName}`} 
                                alt={phoneData?.name}
                            />   
                            <figcaption>{t('phone.figCaption', { phone: phoneData?.name })}</figcaption>
                        </figure>
                    </div>
                    <div className="phone__info col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center text-sm-start mb-2">
                                <button 
                                    type="button" 
                                    className="btn btn-danger btn-lg"
                                    onClick={() => addToShopcart()}
                                    >{t('phone.addToShoppingcart')}</button>
                            </div>

                            <div className="phone__price col-12 col-sm-6 text-center text-sm-end">
                            { new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(phoneData?.price)}
                            </div>
                        </div>
                        
                        <div className="phone__description">{phoneData?.description}</div>

                        <div className="phone__details">
                            <h2 className="phone__subtitle">{t('phone.details')}</h2>
                            <div><span className="phone__label">{t('phone.manufacturer')}:</span> {phoneData?.manufacturer}</div>
                            <div><span className="phone__label">{t('phone.color')}:</span> {phoneData?.color}</div>
                            <div><span className="phone__label">{t('phone.screen')}:</span> {phoneData?.screen}</div>
                            <div><span className="phone__label">{t('phone.processor')}:</span> {phoneData?.processor}</div>
                            <div><span className="phone__label">{t('phone.ram')}:</span> {phoneData?.ram}GB</div>
                        </div>
                    </div>
                </div>
            </section>}
        </main>
    );
}

export default Phone;
