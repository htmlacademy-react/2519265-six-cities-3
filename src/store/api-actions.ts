import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../mosks/types/state';
import axios, { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus, TIME_OUT_SHOW_ERROR } from '../const';
import { loadComments, loadOffer, loadOffers, loadOffersNearby, redirectToRoute, requireAutorization, setErrors, setOffersDataLoadingStatus, userInfo } from './actions';
import { OfferForCardType, OfferFullType } from '../mosks/types/offer';
import { AuthDataType } from '../mosks/types/auth-data';
import { dropToken, setToken } from '../services/token';
import { UserDataType } from '../mosks/types/user-data';
import { CommentType } from '../mosks/types/comment';
import { ReviewDataType } from '../mosks/types/review-data-type';

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
    const {data} = await api.get<OfferForCardType []>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchOfferActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async(id, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<OfferFullType>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOffer(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  }
);

export const fetchOffersNearbyActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async(id, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferForCardType []>(`${APIRoute.Offers}/${id}${APIRoute.offersNearby}`);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffersNearby(data));
  }
);

export const fetchCommentsActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async(id, {dispatch, extra: api}) => {
    try {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<CommentType []>(`${APIRoute.Comments}/${id}`);
      dispatch(loadComments(data));
    } catch {
      dispatch(loadComments([]));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
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
      const {data} = await api.get<UserDataType>(APIRoute.Login);
      dispatch(userInfo(data));

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
  rejectValue: string;
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<UserDataType>(APIRoute.Login, {email, password});
      setToken(data.token);
      dispatch(userInfo(data));

      dispatch(requireAutorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch(err) {
      let errorMessage = 'Произошла ошибка';

      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.statusText ?? err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      dispatch(setErrors('Ошибка авторизации'));
      return rejectWithValue(errorMessage);
    }
  }
);

export const logoutUser = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(userInfo(null));
    dispatch(requireAutorization(AuthorizationStatus.NoAuth));
  }
);

export const postReview = createAsyncThunk<CommentType, { data: ReviewDataType; id: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: string;
}>(
  'user/login',
  async({id, data}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const response = await api.post<CommentType>(`${APIRoute.Comments}/${id}`, data);
      return response.data;
    } catch(err) {
      let errorMessage = 'Произошла ошибка';

      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.statusText ?? err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      dispatch(setErrors('Ошибка авторизации'));
      return rejectWithValue(errorMessage);
    }
  }
);
