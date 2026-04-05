import { NAME_SPACE, SortType } from '../../const';
import { OfferForCardType } from '../../types/offer';
import { State } from '../../types/state';

export const getOffers = (state: State): OfferForCardType[] => state[NAME_SPACE.Offers].offers;
export const getCity = (state: State): string => state[NAME_SPACE.Offers].city;
export const getOffersOfCity = (state: State): OfferForCardType[] => state[NAME_SPACE.Offers].offersOfCity;
export const getActiveSortType = (state: State): SortType => state[NAME_SPACE.Offers].activeSortType;
export const getFavoritesOffers = (state: State): OfferForCardType[] => state[NAME_SPACE.Offers].favoritesOffers;
export const getIsOffersLoadingStatus = (state: State): boolean => state[NAME_SPACE.Offers].isOffersLoadingStatus;
