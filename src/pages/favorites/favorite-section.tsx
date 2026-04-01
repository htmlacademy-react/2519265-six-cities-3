import { useAppSelector } from '../../hooks';
import Favorites from './favorites';
import FavoritesEmpty from './favorites-empty';

export default function FavoritesSection() {

  const offersCards = useAppSelector((state) => state.offers);
  const favoriteOffers = offersCards.filter((offer) => offer.isFavorite === true);
  const isFavoriteOffers: boolean = favoriteOffers.length > 0;
  return (
    <>
      {isFavoriteOffers && <Favorites offersCard={favoriteOffers} />}
      {!isFavoriteOffers && <FavoritesEmpty />}
    </>
  );
}
