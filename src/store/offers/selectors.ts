import { NameSpace, SortType } from '../../const';
import { OfferForCardType } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): OfferForCardType[] => state[NameSpace.Offers].offers;
export const getCity = (state: State): string => state[NameSpace.Offers].city;
export const getActiveSortType = (state: State): SortType => state[NameSpace.Offers].activeSortType;
export const getFavoritesOffers = (state: State): OfferForCardType[] => state[NameSpace.Offers].favoritesOffers;
export const getIsOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoadingStatus;
export const getOffersError = (state: State): boolean => state[NameSpace.Offers].hasError;
