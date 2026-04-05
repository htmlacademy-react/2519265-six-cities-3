import { createAction } from '@reduxjs/toolkit';
import { OfferForCardType } from '../types/offer';
import { AppRoute, SortType } from '../const';

// export const setCity = createAction<string>('city/setCity');

// export const setSortType = createAction<SortType>('sort/sortType');

type SortFunction = (offers: OfferForCardType[]) => OfferForCardType[];

export const sortingMap: Record<string, SortFunction> = {
  [SortType.LowToHigh]: (offers) => [...offers].sort((a, b) => a.price - b.price),
  [SortType.HighToLow]: (offers) => [...offers].sort((a, b) => b.price - a.price),
  [SortType.TopRated]: (offers) => [...offers].sort((a, b) => b.rating - a.rating),
  [SortType.Popular]: (offers) => offers,
};

// export const loadOffers = createAction<OfferForCardType []>('data/loadOffers');

// export const loadOffer = createAction<OfferFullType>('data/loadOffer');

// export const loadOffersNearby = createAction<OfferForCardType []>('data/loadOffersNearby');

// export const requireAutorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setErrors = createAction<string | null>('offers/setErrors');

// export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

// export const loadComments = createAction<CommentType [] | []>('data/loadComments');

// export const userInfo = createAction<UserType | null>('data/userInfo');

// export const loadFavoritesOffers = createAction<OfferForCardType []>('data/loadFavoritesOffers');
