import { CommentType } from '../../mosks/types/comment';
import { OfferType } from '../../mosks/types/offer';
import FavoritesListItem from './favorites-list-tem';

export type FavoritesListProps = {
  offers: OfferType[];
  comments: CommentType[];
};

export default function FavoritesList({
  offers,
  comments
}: FavoritesListProps): JSX.Element {
  const currentCitys = offers.map((offer) => offer.isFavorite === true ? offer.city.name : '').filter(Boolean);

  return (
    <ul className="favorites__list">
      {currentCitys.map((city) => {
        const currentOffersOfCity = offers.filter(
          (offer) => offer.isFavorite === true && offer.city.name === city,
        );
        return <FavoritesListItem key={city} city={city} offers={currentOffersOfCity} comments={comments}/>;
      })}
    </ul>
  );
}
