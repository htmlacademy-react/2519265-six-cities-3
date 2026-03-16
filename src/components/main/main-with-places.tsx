import { useState } from 'react';
import { OfferForCardType } from '../../mosks/types/offer';
import Map from '../map';
import Card from './card';
import Sorting from './sorting';

type MainScreenProps = {
  offersCard: OfferForCardType[];
};

export default function MainWithPlaces({
  offersCard,
}: MainScreenProps): JSX.Element {
  const [, setCurrentCard] = useState<string | null>(null);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offersCard.length} places to stay in Amsterdam
        </b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          {offersCard.map((offer) => (
            <Card
              key={offer.id}
              offer={offer}
              onHover={setCurrentCard}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}
