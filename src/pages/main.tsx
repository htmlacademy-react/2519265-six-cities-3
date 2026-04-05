import LocationList from '../components/main/location-list';
import MainWithPlaces from '../components/main/main-with-places';
import MainWithoutPlaces from '../components/main/main-without-places';
import { useAppSelector } from '../hooks';
import { getCity, getOffersOfCity } from '../store/offers/selectors';

export default function MainWithElements(): JSX.Element {

  const offersCards = useAppSelector(getOffersOfCity);

  const city = useAppSelector(getCity);
  const isPlaces: boolean = offersCards.length > 0;

  return (
    <main className={`page__main page__main--index ${!isPlaces && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList activeCity={city} />
      </div>
      <div className="cities">
        {isPlaces && <MainWithPlaces />}
        {!isPlaces && <MainWithoutPlaces city={city}/>}

      </div>
    </main>
  );
}
