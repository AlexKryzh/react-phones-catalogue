import './PhonesList.scss';
import PhonesListItem from '../PhonesListItem/PhonesListItem';

function PhonesList() {
	return (
	  	<section className="phones-list">
		  	<h1>Phones</h1>
			<ul className="phones-list__list">
				<li><PhonesListItem /></li>
				<li><PhonesListItem /></li>
				<li><PhonesListItem /></li>
				<li><PhonesListItem /></li>
			</ul>
	  	</section>
  	);
}

export default PhonesList;
