import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import { Offer } from '../../pages/offer/offer';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../privet-route/privet-route';
import Layout from '../layout';
import LayoutTools from '../layout-tools';
import {FavoriteSection} from '../../pages/favorites/favorite-section';
import Main from '../../pages/main/main';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Loader from '../loader/loader';
import HistoryRoute from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import {
  getFavoritesOffers,
  getIsFavoritesLoaded,
  getIsFavoritesLoading,
  getIsOffersLoadingStatus,
} from '../../store/offers/selectors';
import { useEffect } from 'react';
import { fetchFavoriteOfferActions } from '../../store/api-actions';
import { clearFavoriteOffers, resetFavoritesOffer } from '../../store/offers/offers-process';

export default function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoadingOffers = useAppSelector(getIsOffersLoadingStatus);
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoritesOffers);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);


  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Unknown || isFavoritesLoading) {
      return;
    }
    if (authorizationStatus === AuthorizationStatus.Auth && !isFavoritesLoaded) {
      dispatch(fetchFavoriteOfferActions());
    } else if (authorizationStatus === AuthorizationStatus.NoAuth) {
      dispatch(clearFavoriteOffers());
      dispatch(resetFavoritesOffer());
    }
  }, [authorizationStatus, dispatch, isFavoritesLoaded, isFavoritesLoading]);

  if (authorizationStatus === AuthorizationStatus.Unknown || isLoadingOffers) {
    return <Loader />;
  }

  const favoritePlacesCount = favoriteOffers.length;

  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route
          element={
            <Layout
              favoritePlacesCount={favoritePlacesCount}
              authorizationStatus={authorizationStatus}
            />
          }
        >
          <Route path={AppRoute.Main} element={<Main />}></Route>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <LayoutTools />
            </PrivateRoute>

          }
          >
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoriteSection />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          <Route path={`${AppRoute.Offer}/:id`} element={<Offer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>

        <Route path={AppRoute.Login} element={
          <Login />
        }
        >
        </Route>
      </Routes>
    </HistoryRoute>
  );
}
