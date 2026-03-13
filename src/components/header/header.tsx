import { User } from '../../mosks/types/comment';
import { UserType } from '../../mosks/types/user-type';
import Logo from '../logo';
import HeaderNav from './header-nav';

type Authorization = {
  user: User & UserType;
}

export default function Header({user}: Authorization): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav user={user}/>
        </div>
      </div>
    </header>
  );
}
