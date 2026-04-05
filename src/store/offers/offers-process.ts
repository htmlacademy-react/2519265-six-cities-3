import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES_NAME, NAME_SPACE, SortType } from '../../const';
import { OffersProcessType } from '../../types/state';
import { fetchFavoriteOfferActions, fetchOffersActions } from '../api-actions';
import { sortingMap } from '../actions';

export const initialState: OffersProcessType = {
  offers: [],
  city: CITIES_NAME[0],
  offersOfCity: [],
  activeSortType: SortType.Popular,
  favoritesOffers: [],
  isOffersLoadingStatus: false,
};

export const offersProcess = createSlice({
  name: NAME_SPACE.Offers,
  initialState,
  reducers: {
    setCity:(state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.offersOfCity = state.offers.filter((offer) => offer.city.name === state.city);
      state.activeSortType = SortType.Popular;
    },
    setSortType:(state, action: PayloadAction<SortType>) => {
      state.activeSortType = action.payload;
      state.offersOfCity = sortingMap[action.payload](state.offersOfCity);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersActions.pending, (state) => {
        state.isOffersLoadingStatus = true;
      })
      .addCase(fetchOffersActions.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersOfCity = state.offers.filter((offer) => offer.city.name === state.city);
        state.isOffersLoadingStatus = false;
      })
      .addCase(fetchFavoriteOfferActions.pending, (state) => {
        state.isOffersLoadingStatus = true;
      })
      .addCase(fetchFavoriteOfferActions.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.isOffersLoadingStatus = false;
      });
  },
});

export const {setCity, setSortType} = offersProcess.actions;
