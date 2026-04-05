import { OfferForCardType } from '../../types/offer';
import FavoritesListItem from './favorites-list-item';

export type FavoritesListProps = {
  offersCard: OfferForCardType[];
};

export default function FavoritesList({
  offersCard,
}: FavoritesListProps): JSX.Element {
  const currentCitys = offersCard.map((offer) => offer.isFavorite === true ? offer.city.name : '').filter(Boolean);

  return (
    <ul className="favorites__list">
      {currentCitys.map((city) => {
        const currentOffersOfCity = offersCard.filter(
          (offer) => offer.isFavorite === true && offer.city.name === city,
        );
        return <FavoritesListItem key={city} city={city} offers={currentOffersOfCity}/>;
      })}
    </ul>
  );
}
