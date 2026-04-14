import { AuthorizationStatus, SortType } from '../const.tsx';
import {store} from '../store/index.ts';
import { CommentType } from './comment.ts';
import { OfferForCardType, OfferFullType } from './offer.ts';
import { UserDataType } from './user-data.ts';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
  user: UserDataType | null;
  error: string | null;
}

export type OffersProcessType = {
  offers: OfferForCardType [];
  city: string;
  activeSortType: SortType;
  favoritesOffers: OfferForCardType[];
  isOffersLoadingStatus: boolean;
  hasError: boolean;
  isFavoritesLoading: boolean;
}

export type OfferProcessType = {
  offer: OfferFullType | null;
  offersNearby: OfferForCardType [];
  comments: CommentType[];
  hasError: boolean;
  isCommentLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
