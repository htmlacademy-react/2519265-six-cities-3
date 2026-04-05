import { createSlice } from '@reduxjs/toolkit';
// import { OfferFullType } from '../../types/offer';
import { NAME_SPACE } from '../../const';
// import { loadOffer } from '../actions';
import { OfferProcessType } from '../../types/state';
import { fetchCommentsActions, fetchOfferActions, fetchOffersNearbyActions, postReview } from '../api-actions';

const initialState: OfferProcessType = {
  offer: null,
  offersNearby: [],
  comments: [],
  hasError: false,
};

export const offerProcess = createSlice({
  name: NAME_SPACE.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferActions.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.hasError = false;
      })
      .addCase(fetchOfferActions.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchCommentsActions.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchOffersNearbyActions.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});
