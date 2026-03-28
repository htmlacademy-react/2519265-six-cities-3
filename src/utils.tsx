import { MIN_RATING, WIDTH_FOR_RATING } from './const';
import { CommentType } from './mosks/types/comment';
import {
  OfferForCardType,
  OfferFullType,
  OfferType,
} from './mosks/types/offer';

export const getWidthForRating = (rating: number) =>
  rating >= MIN_RATING ? rating * WIDTH_FOR_RATING : 0;

export const sortByDate = (arr: CommentType[]) =>
  [...arr].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const isOfferForCard = (offer: OfferType): offer is OfferForCardType =>
  'previewImage' in offer;

export const isOfferForOffer = (offer: OfferType): offer is OfferFullType =>
  'description' in offer;

