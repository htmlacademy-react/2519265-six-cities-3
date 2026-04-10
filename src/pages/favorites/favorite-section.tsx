import { useAppSelector } from '../../hooks';
import { getFavoritesOffers } from '../../store/offers/selectors';
import Favorites from './favorites';
import FavoritesEmpty from './favorites-empty';

export default function FavoritesSection() {
  const favoritesOffers = useAppSelector(getFavoritesOffers);

  const isFavoriteOffers: boolean = favoritesOffers.length > 0;
  return (
    <>
      {isFavoriteOffers && <Favorites offersCard={favoritesOffers} />}
      {!isFavoriteOffers && <FavoritesEmpty />}
    </>
  );
}
