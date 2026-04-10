import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES_NAME, NameSpace, SortType } from '../../const';
import { OffersProcessType } from '../../types/state';
import { fetchFavoriteOfferActions, fetchOffersActions, toggleFavoriteOffer } from '../api-actions';

export const initialState: OffersProcessType = {
  offers: [],
  city: CITIES_NAME[0],
  activeSortType: SortType.Popular,
  favoritesOffers: [],
  isOffersLoadingStatus: false,
  hasError: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity:(state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.activeSortType = SortType.Popular;
    },
    setSortType:(state, action: PayloadAction<SortType>) => {
      state.activeSortType = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersActions.pending, (state) => {
        state.isOffersLoadingStatus = true;
        state.hasError = false;
      })
      .addCase(fetchOffersActions.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoadingStatus = false;
      })
      .addCase(fetchOffersActions.rejected, (state) => {
        state.isOffersLoadingStatus = false;
        state.hasError = true;
      })
      .addCase(fetchFavoriteOfferActions.pending, (state) => {
        state.isOffersLoadingStatus = true;
      })
      .addCase(toggleFavoriteOffer.fulfilled, (state, action) => {
        const updateOffer = action.payload;
        const currentOffer = state.offers.find((offer) => offer.id === updateOffer.id);

        if(currentOffer) {
          currentOffer.isFavorite = updateOffer.isFavorite;

          if(updateOffer.isFavorite) {
            state.favoritesOffers.push(currentOffer);
          }else {
            state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== updateOffer.id);
          }
        }
      })
      .addCase(fetchFavoriteOfferActions.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isOffersLoadingStatus = false;
      });
  },
});

export const {setCity, setSortType} = offersProcess.actions;
