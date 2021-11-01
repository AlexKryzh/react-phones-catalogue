import { useParams } from 'react-router-dom';
import './Phone.scss';

type RouteParams = {
	id: string;
};

function Phone() {
	const { id } = useParams<RouteParams>();

	return (
		<main className="phone">
			<h1>Phone Page</h1>
			<p>Phone ID: {id}</p>
		</main>
	);
}

export default Phone;
