import { Link } from 'react-router-dom';
import FavoritesListCard from './favorites-list-card';
import { OfferForCardType } from '../../types/offer';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/offers/offers-process';
// import { setCity } from '../../store/actions';

export type FavoriteItemProps = {
  city: string;
  offers: OfferForCardType[];
}

export default function FavoritesListItem({city, offers}: FavoriteItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to='/' className="locations__item-link" onClick={() => dispatch(setCity(city))}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesListCard key={offer.id} offer={offer} />)}
      </div>
    </li>
  );
}
