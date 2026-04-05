import { NAME_SPACE } from '../../const';
import { CommentType } from '../../types/comment';
import { OfferForCardType, OfferFullType } from '../../types/offer';
import { State } from '../../types/state';

export const getOffer = (state: State): OfferFullType | null => state[NAME_SPACE.Offer].offer;
export const getOffersNearby = (state: State): OfferForCardType[] | [] => state[NAME_SPACE.Offer].offersNearby;
export const getComments = (state: State): CommentType[] => state[NAME_SPACE.Offer].comments;
export const getHasError = (state: State) : boolean => state[NAME_SPACE.Offer].hasError;
