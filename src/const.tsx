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

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum APIRout {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

export const TIME_OUT_SHOW_ERROR = 2000;
