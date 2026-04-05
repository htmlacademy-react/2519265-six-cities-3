import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Offer from '../../pages/offer';
import NotFound from '../not-found/notFound';
import PrivateRoute from '../privet-rout/privet-rout';
import Layout from '../layout';
import LayoutTools from '../layout-tools';
import FavoriteSection from '../../pages/favorites/favorite-section';
import Main from '../../pages/main';
import { useAppSelector } from '../../hooks';
import Loader from '../loader/loader';
import HistoryRouter from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFavoritesOffers, getIsOffersLoadingStatus } from '../../store/offers/selectors';

export default function App() {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoadingOffers = useAppSelector(getIsOffersLoadingStatus);
  // const offers = useAppSelector((state) => state.offers);
  const favoritesOffers = useAppSelector(getFavoritesOffers);

  if(authorizationStatus === AuthorizationStatus.Unknown || isLoadingOffers) {
    return <Loader/>;
  }

  const favoritePlacesCount = favoritesOffers.length;
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          element={
            <Layout
              favoritePlacesCount={favoritePlacesCount}
              authorizationStatus={authorizationStatus}
            />
          }
        >
          <Route
            path={AppRoute.Main}
            element={<Main />}
          >
          </Route>
          <Route path={AppRoute.Favorites} element={<LayoutTools />}>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute >
                  <FavoriteSection favoritesOffers={favoritesOffers} />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <Offer />
            }
          >
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>

        <Route path={AppRoute.Login} element={<Login />}></Route>
      </Routes>
    </HistoryRouter>
  );
}
