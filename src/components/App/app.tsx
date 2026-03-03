import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/notFound';
import PrivateRoute from '../privet-rout/privet-rout';

type AppScreenProps = {
  placesCount: number;
  cardsCount: number;
};

export default function App({
  placesCount,
  cardsCount,
}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage placesCount={placesCount} cardsCount={cardsCount} />
          }
        >
        </Route>

        <Route path={AppRoute.Login} element={<Login />}></Route>

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Offer} element={<Offer />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
