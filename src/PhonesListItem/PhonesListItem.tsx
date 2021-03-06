import './PhonesListItem.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PhoneModel } from 'shared';

type PhonesListItemProps = {
    phone: PhoneModel;
}

function PhonesListItem(props: PhonesListItemProps) {
    const { phone } = props;
    const { t } = useTranslation();

    return (
        <Link 
            className="phones-list-item"
            title={t('phone.seeInfo', { phone: phone?.name})}
            data-cy="phone-link"
            to={`/phone/${phone?.id}`}>
            <h1 className="phones-list-item__title p-2 text-truncate">{phone?.name}</h1>
            <div>
                <img 
                    className="phone__image img-thumbnail"
                    src={`/phones/${phone?.imageFileName}`} 
                    alt={phone?.name} 
                />
            </div>
            <div className="phones-list-item__price p-2 text-end">{ new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(phone?.price)}</div>
        </Link>
    );
}

export default PhonesListItem;
