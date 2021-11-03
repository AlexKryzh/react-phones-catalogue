import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CatchClause } from 'typescript';
import { PhoneModel, HttpResponse } from '../shared';
import { StoreHelper } from '../store';
import './Phone.scss';

interface RouteParams {
    id: string;
};

function Phone() {
    const [ phoneData, setPhoneData ] = useState<PhoneModel>();
    const { id } = useParams<RouteParams>();
    const apiUrl = process.env.REACT_APP_API_URL;
    

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
                }
            }
            catch (e: unknown) {
                console.error('error:', e);
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
                            <figcaption>{phoneData?.name}</figcaption>
                        </figure>
                    </div>
                    <div className="phone__info col-12 col-md-6">
                        <div className="phone__price">{phoneData?.price}</div>
                        
                        <div className="phone__description">{phoneData?.description}</div>

                        <div className="phone__details">
                            <h2 className="phone__subtitle">Details</h2>
                            <div><span className="phone__label">manufacturer:</span> {phoneData?.manufacturer}</div>
                            <div><span className="phone__label">color:</span> {phoneData?.color}</div>
                            <div><span className="phone__label">screen:</span> {phoneData?.screen}</div>
                            <div><span className="phone__label">processor:</span> {phoneData?.processor}</div>
                            <div><span className="phone__label">ram:</span> {phoneData?.ram}GB</div>
                        </div>
                    </div>
                </div>
            </section>}
        </main>
    );
}

export default Phone;
