import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutUser } from '../../store/api-actions';
import { UserDataType } from '../../types/user-data';

type Authorization = {
  user: UserDataType | null;
  favoritePlacesCount: number;
  authorizationStatus: string;
};

export default function HeaderNav({
  user,
  favoritePlacesCount,
  authorizationStatus,
}: Authorization): JSX.Element {
  const isAuth = authorizationStatus === String(AuthorizationStatus.Auth);
  const dispatch = useAppDispatch();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth && (
          <>
            <li className="header__nav-item user">
              <Link
                to="/favorites"
                className="header__nav-link header__nav-link--profile"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img src={user?.avatarUrl} alt={user?.name} />
                </div>
                <span className="header__user-name user__name">
                  {user?.name}
                </span>
                <span className="header__favorite-count">
                  {favoritePlacesCount}
                </span>
              </Link>
            </li>

            <li className="header__nav-item">
              <Link
                to="/"
                className="header__nav-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutUser());
                }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        )}
        {!isAuth && (
          <li className="header__nav-item user">
            <Link
              to="/login"
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
