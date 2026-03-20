import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../../pages/login';
import Offer from '../../pages/offer';
import NotFound from '../../pages/notFound';
import PrivateRoute from '../privet-rout/privet-rout';
import Layout from '../layout';
import LayoutTools from '../layout-tools';
import { CommentType, User } from '../../mosks/types/comment';
import { UserType } from '../../mosks/types/user-type';
import { OfferForCardType, OfferFullType } from '../../mosks/types/offer';
import FavoriteSection from '../../pages/favorites/favorite-section';
import Main from '../../pages/main';

type AppScreenProps = {
  user: User & UserType;
  comments: CommentType[];
  offers: OfferFullType[] & OfferForCardType[];
  authorizationStatus: string;
};

export default function App({
  user,
  comments,
  offers,
  authorizationStatus,
}: AppScreenProps) {
  const favoritesPlaces = offers.filter(
    ({ isFavorite }) => isFavorite === true,
  );

  const favoritePlacesCount = favoritesPlaces.length;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              user={user}
              favoritePlacesCount={favoritePlacesCount}
              authorizationStatus={authorizationStatus}
            />
          }
        >
          <Route
            path={AppRoute.Main}
            element={<Main offersCard={offers} />}
          >
          </Route>
          {/* 2 */}
          <Route path={AppRoute.Favorites} element={<LayoutTools />}>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoriteSection
                    offersCard={offers}
                  />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          {/* 3 */}
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <Offer
                offers={offers}
                comments={comments}
                authorizationStatus={authorizationStatus}
              />
            }
          >
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>

        <Route path={AppRoute.Login} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
