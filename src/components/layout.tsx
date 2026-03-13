import { Outlet, useLocation } from 'react-router-dom';
import { THEME_MAP } from '../const';
import Header from './header/header';
import { User } from '../mosks/types/comment';
import { UserType } from '../mosks/types/user-type';

type AppPath = '/login' | '/favorites' | '/offer' | '/';

type Authorization = {
  user: User & UserType;
}

export default function Layout({user}: Authorization): JSX.Element {
  const { pathname } = useLocation();

  const getLayoutClass = (path: string): string =>
    THEME_MAP[path as AppPath] ?? '';

  const dynamicClass = getLayoutClass(pathname);
  return (
    <div className={`page ${dynamicClass}`}>
      <Header user={user}/>
      <main className="page__main page__main--index">
        <Outlet />
      </main>
    </div>
  );
}
