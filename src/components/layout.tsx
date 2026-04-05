import { Outlet, useLocation } from 'react-router-dom';
import { THEME_MAP } from '../const';
import Header from './header/header';
import { useAppSelector } from '../hooks';
import { getUser } from '../store/user-process/selectors';

type AppPath = '/login' | '/favorites' | '/offer' | '/';

type Authorization = {
  favoritePlacesCount: number;
  authorizationStatus: string;
}

export default function Layout({favoritePlacesCount, authorizationStatus}: Authorization): JSX.Element {

  const user = useAppSelector(getUser);
  const { pathname } = useLocation();

  const getLayoutClass = (path: string): string =>
    THEME_MAP[path as AppPath] ?? '';

  const dynamicClass = getLayoutClass(pathname);
  // console.log(user)
  return (
    <div className={`page ${dynamicClass}`}>
      <Header user={user} favoritePlacesCount={favoritePlacesCount} authorizationStatus={authorizationStatus}/>
      <main className="page__main page__main--index">
        <Outlet />
      </main>
    </div>
  );
}
