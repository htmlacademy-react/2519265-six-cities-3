import { createReducer } from '@reduxjs/toolkit';
import { loadComments, loadOffer, loadOffers, loadOffersNearby, requireAutorization, setCity, setErrors, setOffersDataLoadingStatus, setSortType, sortingMap, userInfo } from './actions';
import { AuthorizationStatus, SortType } from '../const';
import { OfferForCardType, OfferFullType } from '../mosks/types/offer';
import { CommentType } from '../mosks/types/comment';
import { postReview } from './api-actions';
import { UserType } from '../mosks/types/user-type';

type InitialStateType = {
  city: string;
  offersOfCity: OfferForCardType[];
  activeSortType: SortType;
  offers: OfferForCardType[];
  authorizationStatus: AuthorizationStatus;
  isOffersLoadingStatus: boolean;
  errors: string | null;
  offer: OfferFullType | null;
  offersNearby: OfferForCardType [];
  comments: CommentType[];
  user: UserType | null;
};

const initialState: InitialStateType = {
  city: 'Paris',
  offersOfCity: [],
  activeSortType: SortType.Popular,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoadingStatus: false,
  errors: null,
  offer: null,
  offersNearby: [],
  comments: [],
  user: null,
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
      state.isOffersLoadingStatus = action.payload;
    })
    .addCase(requireAutorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userInfo, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setErrors, (state, action) => {
      state.errors = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postReview.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });
});
