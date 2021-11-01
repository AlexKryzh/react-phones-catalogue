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
			const response: HttpResponse<PhoneModel> = await fetch(`${apiUrl}/phones/${id}`);
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
		<main className="phone">
			<h1>Phone Page</h1>
			{ phoneData && <p>{phoneData.name}</p> }
		</main>
	);
}

export default Phone;
