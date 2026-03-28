import { useAppSelector } from '../../hooks';
// import { OfferForCardType } from '../../mosks/types/offer';
import Favorites from './favorites';
import FavoritesEmpty from './favorites-empty';

// type FavoriteSectionProps = {
//   offersCard: OfferForCardType[];
// };

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
