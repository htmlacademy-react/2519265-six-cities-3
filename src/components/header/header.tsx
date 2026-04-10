import { UserDataType } from '../../types/user-data';
import Logo from '../logo';
import HeaderNav from './header-nav';

type Authorization = {
  user: UserDataType | null;
  favoritePlacesCount: number;
  authorizationStatus: string;
}

export default function Header({user, favoritePlacesCount, authorizationStatus}: Authorization): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav user={user} favoritePlacesCount={favoritePlacesCount} authorizationStatus={authorizationStatus}/>
        </div>
      </div>
    </header>
  );
}
