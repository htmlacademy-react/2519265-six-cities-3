import { useState } from 'react';
import Map from '../map/map';
import Card from './card';
import Sorting from './sorting';
import { useAppSelector } from '../../hooks';
import { getCity, getOffersOfCity } from '../../store/offers/selectors';

export default function MainWithPlaces(): JSX.Element {
  const [currentCardId, setCurrentCardId] = useState<string | null>(null);

  const offersCards = useAppSelector(getOffersOfCity);
  const cityName = useAppSelector(getCity);

  const city = offersCards[0].city;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersCards.length} places to stay in {cityName}
        </b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          {offersCards.map((offer) => (
            <Card key={offer.id} offer={offer} onHover={setCurrentCardId} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map offersCards={offersCards} city={city} currentCardId={currentCardId} className='cities__map map' />
      </div>
    </div>
  );
}
