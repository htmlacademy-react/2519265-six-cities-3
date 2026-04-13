import { createAction } from '@reduxjs/toolkit';
import { OfferForCardType } from '../types/offer';
import { AppRoute, SortType } from '../const';

type SortFunction = (offers: OfferForCardType[]) => OfferForCardType[];

export const sortingMap: Record<string, SortFunction> = {
  [SortType.LowToHigh]: (offers) => [...offers].sort((a, b) => a.price - b.price),
  [SortType.HighToLow]: (offers) => [...offers].sort((a, b) => b.price - a.price),
  [SortType.TopRated]: (offers) => [...offers].sort((a, b) => b.rating - a.rating),
  [SortType.Popular]: (offers) => offers,
};

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

