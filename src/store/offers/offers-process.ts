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
  isFavoritesLoading: false,
  isFavoritesLoaded: false,
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
    },
    resetFavoritesOffer: (state) => {
      state.offers.map((offer) => {
        offer.isFavorite = false;
      });
    },
    clearFavoriteOffers:(state) => {
      state.favoritesOffers = [];
      state.isFavoritesLoading = false;
      state.isFavoritesLoaded = false;

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
      .addCase(toggleFavoriteOffer.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const currentOffer = state.offers.find((offer) => offer.id === updatedOffer.id);

        if(currentOffer) {
          currentOffer.isFavorite = updatedOffer.isFavorite;

          if(updatedOffer.isFavorite) {
            const checkOffer = state.favoritesOffers.some((offer) => offer.id === updatedOffer.id);
            if(!checkOffer) {
              state.favoritesOffers.push(currentOffer);
            }
          }
        } else {
          state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== updatedOffer.id);
        }
      })
      .addCase(fetchFavoriteOfferActions.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isFavoritesLoading = false;
        state.isFavoritesLoaded = true;

        state.offers.forEach((offer) => {
          offer.isFavorite = state.favoritesOffers.some((favorite) => favorite.id === offer.id);
        });
      })
      .addCase(fetchFavoriteOfferActions.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoriteOfferActions.rejected, (state) => {
        state.isFavoritesLoading = false;
        state.isFavoritesLoaded = false;
      });
  },
});

export const {setCity, setSortType, clearFavoriteOffers, resetFavoritesOffer} = offersProcess.actions;
