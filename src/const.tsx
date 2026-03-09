export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

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

export const getWidthForRating = (rating: number) => (rating >= MIN_RATING) ? (rating * WIDTH_FOR_RATING) : 0;
