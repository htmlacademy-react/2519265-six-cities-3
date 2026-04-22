import { CITIES_NAME, MIN_RATING, WIDTH_FOR_RATING } from './const';
import { CommentType } from './types/comment';
import {
  OfferForCardType,
  OfferFullType,
  OfferType,
} from './types/offer';

export const getWidthForRating = (rating: number) =>
  rating >= MIN_RATING ? (Math.round(rating) * WIDTH_FOR_RATING) : 0;

export const sortByDate = (arr: CommentType[]) =>
  [...arr].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const isOfferForCard = (offer: OfferType): offer is OfferForCardType =>
  'previewImage' in offer;

export const isOfferForOffer = (offer: OfferType): offer is OfferFullType =>
  'description' in offer;

export const getRandomCity = () => CITIES_NAME[Math.floor(Math.random() * CITIES_NAME.length)];
