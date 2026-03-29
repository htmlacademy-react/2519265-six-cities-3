import { createAction } from '@reduxjs/toolkit';
import { OfferForCardType } from '../mosks/types/offer';
import { AuthorizationStatus, SortType } from '../const';

export const setCity = createAction<string>('city/setCity');

export const setSortType = createAction<SortType>('sort/sortType');

type SortFunction = (offers: OfferForCardType[]) => OfferForCardType[];

export const sortingMap: Record<string, SortFunction> = {
  [SortType.LowToHigh]: (offers) => [...offers].sort((a, b) => a.price - b.price),
  [SortType.HighToLow]: (offers) => [...offers].sort((a, b) => b.price - a.price),
  [SortType.TopRated]: (offers) => [...offers].sort((a, b) => b.rating - a.rating),
  [SortType.Popular]: (offers) => offers,
};

export const loadOffers = createAction<OfferForCardType []>('data/loadOffers');

export const requireAutorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setErrors = createAction<string | null>('offers/setErrors');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
