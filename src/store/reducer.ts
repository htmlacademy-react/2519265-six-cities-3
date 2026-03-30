import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, requireAutorization, setCity, setErrors, setOffersDataLoadingStatus, setSortType, sortingMap } from './actions';
import { AuthorizationStatus, SortType } from '../const';
import { OfferForCardType } from '../mosks/types/offer';

type InitialStateType = {
  city: string;
  offersOfCity: OfferForCardType[];
  activeSortType: SortType;
  offers: OfferForCardType[];
  authorizationStatus: AuthorizationStatus;
  isOffersLosdingStatus: boolean;
  errors: string | null;
};

const initialState: InitialStateType = {
  city: 'Paris',
  offersOfCity: [],
  activeSortType: SortType.Popular,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLosdingStatus: false,
  errors: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      state.offersOfCity = state.offers.filter((offer) => offer.city.name === state.city);
      state.activeSortType = SortType.Popular;
    })
    .addCase(setSortType, (state, action) => {
      state.activeSortType = action.payload;
      state.offersOfCity = sortingMap[action.payload](state.offersOfCity);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload || [];
      state.offersOfCity = state.offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersLosdingStatus = action.payload;
    })
    .addCase(requireAutorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setErrors, (state, action) => {
      state.errors = action.payload;
    });
});
