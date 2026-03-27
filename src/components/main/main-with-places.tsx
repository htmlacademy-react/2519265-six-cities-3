import { useState } from 'react';
import { OfferForCardType } from '../../mosks/types/offer';
import Map from '../map/map';
import Card from './card';
import Sorting from './sorting';
import { CityType } from '../../mosks/types/city';
import { DEFAULT_CITY } from '../../const';

type MainScreenProps = {
  offersCard: OfferForCardType[];
  city: CityType | null;
};

export default function MainWithPlaces({
  offersCard,
  city
}: MainScreenProps): JSX.Element {
  const [currentCardId, setCurrentCardId] = useState<string | null>(null);
  const [sorting, setSorting] = useState(false);

  if(!city) {
    city = DEFAULT_CITY;
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersCard.length} places to stay in {city.name}
        </b>
        <Sorting sorting={sorting} onClick={setSorting} />
        <div className="cities__places-list places__list tabs__content">
          {offersCard.map((offer) => (
            <Card key={offer.id} offer={offer} onHover={setCurrentCardId} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map offersCard={offersCard} city={city} currentCardId={currentCardId} className='cities__map map' />
      </div>
    </div>
  );
}
