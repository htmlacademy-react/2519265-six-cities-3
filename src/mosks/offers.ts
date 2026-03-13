import { OfferType } from './types/offer';

export const offers: OfferType[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'house',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 9,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f55',
    title: 'A change of scenery is the best medicine for a tired soul.',
    type: 'hotel',
    price: 7500,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 3,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f66',
    title: 'Collecting moments, not things.',
    type: 'apartment',
    price: 380,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27760',
    title: 'The goal is to die with memories, not just dreams',
    type: 'room',
    price: 120,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
];
