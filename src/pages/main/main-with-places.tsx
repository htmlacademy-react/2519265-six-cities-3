import { memo, useCallback, useMemo, useState } from 'react';
import Map from '../../components/map/map';
import {Card} from './card';
import {Sorting} from './sorting';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveSortType, getCity } from '../../store/offers/selectors';
import { toggleFavoriteOffer } from '../../store/api-actions';
import { sortingMap } from '../../store/actions';
import { OfferForCardType } from '../../types/offer';
import { CityType } from '../../types/city';
import { ClassNameForCard } from '../../const';

type MainWithPlacesProps = {
  offersOfCity: OfferForCardType[];
  city: CityType;
}

export const MainWithPlaces = memo(({offersOfCity, city}: MainWithPlacesProps): JSX.Element => {

  const dispatch = useAppDispatch();

  const handleFavoriteClick = useCallback((data: {id: string; status: boolean}) => {
    dispatch(toggleFavoriteOffer(data));
  }, [dispatch]);

  const [currentCardId, setCurrentCardId] = useState<string | null>(null);

  const handleCardHover = useCallback((id: string | null) => {
    setCurrentCardId(id);
  }, []);

  const cityName = useAppSelector(getCity);
  const sortType = useAppSelector(getActiveSortType);

  const offersCards = useMemo(()=> sortingMap[sortType](offersOfCity), [offersOfCity, sortType]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersCards.length} {offersCards.length <= 1 ? 'place' : 'places'} to stay in {cityName}
        </b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          {offersCards.map((offer) => (
            <Card key={offer.id} offer={offer} onClick={handleFavoriteClick} onHover={handleCardHover} className={ClassNameForCard.Main} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map offersCards={offersCards} city={city} currentCardId={currentCardId} className='cities__map map' />
      </div>
    </div>
  );
});

MainWithPlaces.displayName = 'MainWithPlaces';
