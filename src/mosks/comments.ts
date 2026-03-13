import { CommentType } from './types/comment';

export const comments: CommentType[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-11-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'Absolutely breathtaking views and impeccable service. Everything exceeded my expectations!',
    rating: 4,
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62b',
    date: '2019-01-08T14:13:56.569Z',
    user: {
      name: 'Natali Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment:
      'The perfect escape from the hustle and bustle. I enjoyed every single second of this trip.',
    rating: 1,
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62c',
    date: '2020-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Rod',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'Collecting memories in the most beautiful place on Earth. I’m not ready to leave yet!',
    rating: 5,
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62d',
    date: '2022-05-08T14:13:56.569Z',
    user: {
      name: 'Sam',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment:
      'An unforgettable experience! The hospitality was amazing, and the atmosphere was just pure magic.',
    rating: 3,
  },
];
