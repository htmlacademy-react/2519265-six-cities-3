import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferProcessType } from '../../types/state';
import { fetchCommentsActions, fetchOfferActions, fetchOffersNearbyActions, postReview, toggleFavoriteOffer } from '../api-actions';

const initialState: OfferProcessType = {
  offer: null,
  offersNearby: [],
  comments: [],
  hasError: false,
  isCommentLoading: false,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
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
      .addCase(toggleFavoriteOffer.fulfilled, (state, action) => {
        const currentOffer = action.payload;
        if(currentOffer.id === state.offer?.id) {
          state.offer.isFavorite = currentOffer.isFavorite;
        }
        const offerOfList = state.offersNearby.find((offer) => offer.id === currentOffer.id);
        if(offerOfList) {
          offerOfList.isFavorite = currentOffer.isFavorite;
        }
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isCommentLoading = false;
      })
      .addCase(postReview.pending, (state) => {
        state.isCommentLoading = true;
      });
  },
});
