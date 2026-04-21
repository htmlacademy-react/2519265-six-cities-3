import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, TIME_OUT_SHOW_ERROR } from '../const';
import { OfferForCardType, OfferFullType } from '../types/offer';
import { AuthDataType } from '../types/auth-data';
import { dropToken, setToken } from '../services/token';
import { UserDataType } from '../types/user-data';
import { CommentType } from '../types/comment';
import { ReviewDataType } from '../types/review-data-type';

export const clearErrorsAction = createAsyncThunk(
  'user/clearError',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, TIME_OUT_SHOW_ERROR));
  }
);

export const fetchOffersActions = createAsyncThunk<
  OfferForCardType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferForCardType[]>(APIRoute.Offers);
  return data;
});

export const fetchOfferActions = createAsyncThunk<
  OfferFullType,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffer', async (id, { extra: api }) => {
  const { data } = await api.get<OfferFullType>(`${APIRoute.Offers}/${id}`);
  return data;
});

export const toggleFavoriteOffer = createAsyncThunk<
OfferFullType & OfferForCardType,
{id: string; status: boolean},
{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/toggleOffer', async ({id, status}, {extra: api}) => {
  const { data } = await api.post<OfferFullType & OfferForCardType>(`${APIRoute.Favorites}/${id}/${status ? 1 : 0}`);
  return data;
});

export const fetchFavoriteOfferActions = createAsyncThunk<
  OfferForCardType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchFavoriteOffer', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferForCardType[]>(`${APIRoute.Favorites}`);
  return data;
});

export const fetchOffersNearbyActions = createAsyncThunk<
  OfferForCardType[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchOffersNearby', async (id, { extra: api }) => {
  const { data } = await api.get<OfferForCardType[]>(
    `${APIRoute.Offers}/${id}${APIRoute.offersNearby}`,
  );
  return data;
});

export const fetchCommentsActions = createAsyncThunk<
  CommentType[],
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchCommets', async (id, { extra: api }) => {
  const { data } = await api.get<CommentType[]>(`${APIRoute.Comments}/${id}`);
  return data;
});

export const checkAuthActions = createAsyncThunk<
  UserDataType,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserDataType>(APIRoute.Login);
  return data;
});

export const loginUser = createAsyncThunk<
  UserDataType,
  AuthDataType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    rejectValue: string;
  }
>(
  'user/login',
  async (
    { login: email, password },
    { extra: api },
  ) => {
    const { data } = await api.post<UserDataType>(APIRoute.Login, {
      email,
      password,
    });
    setToken(data.token);
    return data;
  },
);

export const logoutUser = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const postReview = createAsyncThunk<
  CommentType,
  { data: ReviewDataType; id: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/postReview', async ({ id, data }, { extra: api }) => {
  const response = await api.post<CommentType>(
    `${APIRoute.Comments}/${id}`,
    data,
  );
  return response.data;
});
