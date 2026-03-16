import { CommentType } from '../../mosks/types/comment';
import { OfferForCardType } from '../../mosks/types/offer';
import FavoritesListItem from './favorites-list-tem';

export type FavoritesListProps = {
  offersCard: OfferForCardType[];
  comments: CommentType[];
};

export default function FavoritesList({
  offersCard,
  comments
}: FavoritesListProps): JSX.Element {
  const currentCitys = offersCard.map((offer) => offer.isFavorite === true ? offer.city.name : '').filter(Boolean);

  return (
    <ul className="favorites__list">
      {currentCitys.map((city) => {
        const currentOffersOfCity = offersCard.filter(
          (offer) => offer.isFavorite === true && offer.city.name === city,
        );
        return <FavoritesListItem key={city} city={city} offers={currentOffersOfCity} comments={comments}/>;
      })}
    </ul>
  );
}
