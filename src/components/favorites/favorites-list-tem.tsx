import FavoritesListCard from './favorites-list-card';

export default function FavoritesListItem(): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesListCard />
        <FavoritesListCard />
      </div>
    </li>
  );
}
