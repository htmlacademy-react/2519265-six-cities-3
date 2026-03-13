import { Link } from 'react-router-dom';
import { User } from '../../mosks/types/comment';
import { UserType } from '../../mosks/types/user-type';

type Authorization = {
  user: User & UserType;
}

export default function HeaderNav({user}: Authorization): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {user.token && (
          <li className="header__nav-item user">
            <Link
              to="/favorites"
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                {user.email}
              </span>
              <span className="header__favorite-count">3</span>
            </Link>
          </li>
        )}

        <li className="header__nav-item">
          <Link to="/login" className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
