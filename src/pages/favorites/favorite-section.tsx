import { OfferForCardType } from '../../types/offer';
import Favorites from './favorites';
import FavoritesEmpty from './favorites-empty';

type FavoritesSectionProp = {
  favoritesOffers: OfferForCardType [];
}

export default function FavoritesSection({favoritesOffers}: FavoritesSectionProp) {

  const isFavoriteOffers: boolean = favoritesOffers.length > 0;
  return (
    <>
      {isFavoriteOffers && <Favorites offersCard={favoritesOffers} />}
      {!isFavoriteOffers && <FavoritesEmpty />}
    </>
  );
}
