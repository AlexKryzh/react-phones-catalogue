import './PhonesListItem.scss';
import { Link } from 'react-router-dom';

function PhonesListItem() {
  return (
  	<span className="phones-list-item">
		  <Link to="/phone">
			  <h1>Phone</h1>
		  </Link>
	</span>
  );
}

export default PhonesListItem;
