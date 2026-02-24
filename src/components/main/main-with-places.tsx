import Map from '../map';
import Card from './card';
import Sorting from './sorting';

type MainScreenProps = {
  placesCount: number;
  cardsCount: number;
};

export default function MainWithPlaces({
  placesCount,
  cardsCount,
}: MainScreenProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {placesCount} places to stay in Amsterdam
        </b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          {Array.from({ length: cardsCount }, (_, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>
      <Map />
    </div>
  );
}
