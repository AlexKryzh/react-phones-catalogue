import './PhonesListItem.scss';
import { Link } from 'react-router-dom';
import { PhoneModel } from '../shared';

type PhonesListItemProps = {
    phone: PhoneModel;
}

function PhonesListItem(props: PhonesListItemProps) {
    const { phone } = props;
  return (
      <span className="phones-list-item">
        <Link to={`/phone/${phone.id}`}>
            <h1>{phone.name}</h1>
        </Link>
    </span>
  );
}

export default PhonesListItem;
