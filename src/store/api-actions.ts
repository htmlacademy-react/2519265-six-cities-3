import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../mosks/types/state';
import { AxiosInstance } from 'axios';
import { APIRout, AuthorizationStatus, TIME_OUT_SHOW_ERROR } from '../const';
import { loadOffers, requireAutorization, setErrors, setOffersDataLoadingStatus } from './actions';
import { OfferForCardType } from '../mosks/types/offer';
import { AuthDataType } from '../mosks/types/auth-data';
import { dropToken, setToken } from '../services/token';
import { UserDataType } from '../mosks/types/user-data';

export const clearErrorsAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch}>(
  'offers/clearError',
  (_, {dispatch}) => {
    setTimeout(
      () => dispatch(setErrors(null)),
      TIME_OUT_SHOW_ERROR
    );
  },
);

export const fetchOffersActions = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferForCardType []>(APIRout.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const checkAuthActions = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async(_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRout.Login);
      dispatch(requireAutorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAutorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginUser = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserDataType>(APIRout.Login, {email, password});
    setToken(token);
    dispatch(requireAutorization(AuthorizationStatus.Auth));
  }
);

export const logoutUser = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(APIRout.Logout);
    dropToken();
    dispatch(requireAutorization(AuthorizationStatus.NoAuth));
  }
);
