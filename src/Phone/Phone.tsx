import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PhoneModel, HttpResponse } from '../shared';
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

        const init = async() => {
            const response: HttpResponse = await fetch(`${apiUrl}/phones/${id}`);
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const responseData: PhoneModel = await response.json();
            setPhoneData(responseData);
        }

        init();
    }, [id, apiUrl]);

    return (
        <main className="phone container-lg">
            { phoneData && <section>
                <header>
                    <h1>{phoneData?.name}</h1>
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
                    <div className="col-12 col-md-6">
                        content
                    </div>
                </div>
            </section>}
        </main>
    );
}

export default Phone;
