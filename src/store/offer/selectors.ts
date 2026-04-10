import { NameSpace } from '../../const';
import { CommentType } from '../../types/comment';
import { OfferForCardType, OfferFullType } from '../../types/offer';
import { State } from '../../types/state';

export const getOffer = (state: State): OfferFullType | null => state[NameSpace.Offer].offer;
export const getOffersNearby = (state: State): OfferForCardType[] => state[NameSpace.Offer].offersNearby;
export const getComments = (state: State): CommentType[] => state[NameSpace.Offer].comments;
export const getHasError = (state: State) : boolean => state[NameSpace.Offer].hasError;
export const getFavoritesOffers = (state: State): OfferForCardType[] => state[NameSpace.Offers].favoritesOffers;
