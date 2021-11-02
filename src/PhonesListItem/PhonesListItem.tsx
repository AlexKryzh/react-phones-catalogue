import './PhonesListItem.scss';
import { Link } from 'react-router-dom';
import { PhoneModel } from '../shared';

type PhonesListItemProps = {
    phone: PhoneModel;
}

function PhonesListItem(props: PhonesListItemProps) {
    const { phone } = props;
  return (
    <Link className="phones-list-item" to={`/phone/${phone?.id}`}>
        <h1 className="phones-list-item__title p-2">{phone?.name}</h1>
        <img 
            className="phone__image img-thumbnail"
            src={`/phones/${phone?.imageFileName}`} 
            alt={phone?.name} 
        />
    </Link>
  );
}

export default PhonesListItem;
