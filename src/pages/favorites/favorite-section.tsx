import { CommentType } from '../../mosks/types/comment';
import { OfferForCardType } from '../../mosks/types/offer';
import Favorites from './favorites';
import FavoritesEmpty from './favorites-empty';

type FavoriteSectionProps = {
  offersCard: OfferForCardType[];
  comments: CommentType[];
};

export default function FavoritesSection({
  offersCard,
  comments,
}: FavoriteSectionProps) {
  const favoriteOffers: boolean = offersCard.some(
    ({ isFavorite }) => isFavorite === true,
  );
  return (
    <>
      {favoriteOffers && <Favorites offersCard={offersCard} comments={comments}/>}
      {!favoriteOffers && <FavoritesEmpty />}
    </>
  );
}
