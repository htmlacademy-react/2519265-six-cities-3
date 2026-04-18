import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { getFavoritesOffers } from '../../store/offers/selectors';
import Favorites from './favorites';
import FavoritesEmpty from './favorites-empty';

export const FavoriteSection = memo(() => {
  const favoriteOffers = useAppSelector(getFavoritesOffers);

  const isFavoriteOffers: boolean = favoriteOffers.length > 0;
  return (
    <>
      {isFavoriteOffers && <Favorites offerCards={favoriteOffers} />}
      {!isFavoriteOffers && <FavoritesEmpty />}
    </>
  );
});

FavoriteSection.displayName = 'FavoriteSection';
