import Card from '../components/main/card';
import Header from '../components/header';
import LocationList from '../components/main/location-list';
import Map from '../components/map';
import Sorting from '../components/sorting';

type MainScreenProps = {
  placesCount: number;
  cardsCount: number;
};

export default function MainPage({
  placesCount,
  cardsCount,
}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        <div className="cities">
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
        </div>
      </main>
    </div>
  );
}
