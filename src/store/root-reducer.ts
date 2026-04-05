import { combineReducers } from '@reduxjs/toolkit';
import { NAME_SPACE } from '../const';
import { userProcess } from './user-process/user-process';
import { offersProcess } from './offers/offers-process';
import { offerProcess } from './offer/offer-process';

export const rootReducer = combineReducers({
  [NAME_SPACE.User]: userProcess.reducer,
  [NAME_SPACE.Offers]: offersProcess.reducer,
  [NAME_SPACE.Offer]: offerProcess.reducer,
});
