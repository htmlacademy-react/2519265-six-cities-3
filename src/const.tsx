export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '*',
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

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Offer = '/offer',
  Comments = '/comments',
  offersNearby = '/nearby',
  Favorites = '/favorite',
}

export const TIME_OUT_SHOW_ERROR = 2000;

export const MAX_LENGHT_COMMENT = 300;

export const MIN_LENGHT_COMMENT = 50;

export const MIN_RATING_COMMENT = 0;

export enum NameSpace {
  User = 'USER',
  Offer = 'OFFER',
  Offers = 'OFFERS',
}

export const CITIES_NAME: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
