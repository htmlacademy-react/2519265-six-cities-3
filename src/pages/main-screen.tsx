import Header from '../components/header/header';
import LocationList from '../components/main/location-list';
import MainWithPlaces from '../components/main/main-with-places';

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
          <MainWithPlaces placesCount={placesCount} cardsCount={cardsCount} />
        </div>
      </main>
    </div>
  );
}
