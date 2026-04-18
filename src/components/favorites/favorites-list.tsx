import { useAppDispatch } from '../../hooks';
import { toggleFavoriteOffer } from '../../store/api-actions';
import { OfferForCardType } from '../../types/offer';
import {FavoritesListItem} from './favorites-list-item';

export type FavoritesListProps = {
  offerCards: OfferForCardType[];
};

export default function FavoritesList({offerCards}: FavoritesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = (data: {id: string; status: boolean}) => {
    dispatch(toggleFavoriteOffer(data));
  };

  const currentCitys = new Set(
    offerCards
      .map((offer) => (offer.city.name))
      .filter(Boolean),
  );

  return (
    <ul className="favorites__list">
      {[...currentCitys].map((city) => {
        const currentOffersOfCity = offerCards.filter(
          (offer) => offer.city.name === city,
        );
        return (
          <FavoritesListItem
            key={city}
            city={city}
            offers={currentOffersOfCity}
            clickHandler={handleFavoriteClick}
          />
        );
      })}
    </ul>
  );
}
