import { CityType } from './mosks/types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const getOfferPath = (id: string | number) =>`${AppRoute.Offer}/${id}`;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const THEME_MAP = {
  '/': 'page--gray page--main',
  '/login': 'page--gray page--login',
  '/favorites': ' ',
  '/offer': ' ',
};


export const WIDTH_FOR_RATING: number = 20;

export const MIN_RATING: number = 1;

export enum DateFormat {
  CommentDate = 'MMMM DD',
}

export enum BookmarkClassName {
  Offer = 'offer',
  OfferActive = 'offer__bookmark-button button--active',
  PlaceCard = 'place-card',
  PlaceCardActive = 'place-card__bookmark-button--active',
}

export enum Markers {
  URL_MARKER_DEFAULT = '/markup/img/pin.svg',
  URL_MARKER_CURRENT = '/markup/img/pin-active.svg',
}

export const DEFAULT_CITY: CityType = {
  name: 'Amsterdam',
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 11,
  },
};


