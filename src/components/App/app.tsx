import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/notFound';
import PrivateRoute from '../privet-rout/privet-rout';
import Layout from '../layout';
import LayoutTools from '../layout-tools';
// import { useState } from 'react';
import { CommentType, User } from '../../mosks/types/comment';
import { UserType } from '../../mosks/types/user-type';
import { OfferType } from '../../mosks/types/offer';

type AppScreenProps = {
  placesCount: number;
  user: User & UserType;
  comments: CommentType[];
  offers: OfferType[];
};

export default function App({
  placesCount,
  user,
  comments,
  offers,
}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout user={user} />}>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                placesCount={placesCount}
                offers={offers}
                comments={comments}
              />
            }
          >
          </Route>
          {/* 2 */}
          <Route path={AppRoute.Favorites} element={<LayoutTools />}>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <Favorites offers={offers} comments={comments} />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          {/* 3 */}
          <Route
            path={AppRoute.Offer}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                {
                  <Offer user={user}/>
                }
              </PrivateRoute>
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
