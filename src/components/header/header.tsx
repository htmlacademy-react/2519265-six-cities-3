import Logo from '../logo';
import HeaderNav from './header-nav';

type Authorization = {
  userName: string;
  favoritePlacesCount: number;
  authorizationStatus: string;
}

export default function Header({userName, favoritePlacesCount, authorizationStatus}: Authorization): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav userName={userName} favoritePlacesCount={favoritePlacesCount} authorizationStatus={authorizationStatus}/>
        </div>
      </div>
    </header>
  );
}
