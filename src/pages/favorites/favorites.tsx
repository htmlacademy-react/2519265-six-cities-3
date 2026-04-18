import FavoritesList from '../../components/favorites/favorites-list';
import { OfferForCardType } from '../../types/offer';

export type FavoritesProps = {
  offerCards: OfferForCardType[];
};

export default function Favorites({offerCards}: FavoritesProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offerCards={offerCards} />
        </section>
      </div>
    </main>
  );
}
