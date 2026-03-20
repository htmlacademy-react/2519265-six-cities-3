import { CityType } from './city';
import { HostType } from './host';
import { LocationType } from './location';

export type OfferTemplateType = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferForCardType = OfferTemplateType & {
  previewImage: string;
}

export type OfferFullType = OfferTemplateType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
  previewImage?: string;
};

export type OfferType = OfferForCardType | OfferFullType;
