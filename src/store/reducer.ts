import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mosks/offers';
import { isOfferForCard } from '../utils';
import { setCity, setSortType, sortingMap } from './actions';
import { SortType } from '../const';


const offersForCards = offers.filter(isOfferForCard);

const initialState = {
  city: 'Paris',
  offersOfCity: offersForCards.filter((offer) => offer.city.name === 'Paris'),
  activeSortType: SortType.Popular,
  offers: offersForCards,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      state.offersOfCity = offersForCards.filter((offer) => offer.city.name === state.city);
      state.activeSortType = SortType.Popular;
    })
    .addCase(setSortType, (state, action) => {
      state.activeSortType = action.payload;
      state.offersOfCity = sortingMap[action.payload](state.offersOfCity);
    });
});
