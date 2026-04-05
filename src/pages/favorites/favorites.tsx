import FavoritesList from '../../components/favorites/favorites-list';
import { OfferForCardType } from '../../types/offer';

export type FavoritesProps = {
  offersCard: OfferForCardType[];
}

export default function Favorites({offersCard}: FavoritesProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offersCard={offersCard}/>
        </section>
      </div>
    </main>
  );
}
