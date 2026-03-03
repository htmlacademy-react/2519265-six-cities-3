import { Link } from 'react-router-dom';
import FavoritesListCard from './favorites-list-card';

export default function FavoritesListItem(): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to='/' className="locations__item-link">
            <span>Amsterdam</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesListCard />
        <FavoritesListCard />
      </div>
    </li>
  );
}
