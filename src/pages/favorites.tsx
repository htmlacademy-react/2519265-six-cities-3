import FavoritesList from '../components/favorites/favorites-list';
import { CommentType } from '../mosks/types/comment';
import { OfferType } from '../mosks/types/offer';


export type FavoritesProps = {
  offers: OfferType[];
  comments: CommentType[];
}

export default function Favorites({offers, comments}: FavoritesProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offers={offers} comments={comments}/>
        </section>
      </div>
    </main>
  );
}
