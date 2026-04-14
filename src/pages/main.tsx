import { ErrorUploadData } from '../components/errors/error-upload-data';
import {LocationList} from '../components/main/location-list';
import {MainWithPlaces} from '../components/main/main-with-places';
import MainWithoutPlaces from '../components/main/main-without-places';
import { useAppSelector } from '../hooks';
import { getCity, getOffers, getOffersError } from '../store/offers/selectors';

export default function MainWithElements(): JSX.Element {

  const offers = useAppSelector(getOffers);
  const cityName = useAppSelector(getCity);
  const offersCards = offers.filter((offer) => offer.city.name === cityName);
  const city = offersCards[0]?.city;

  const isErrorOfUpload = useAppSelector(getOffersError);

  const isPlaces: boolean = offersCards.length > 0;

  return (
    <main className={`page__main page__main--index ${!isPlaces ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList activeCity={cityName} />
      </div>
      <div className="cities">
        {isPlaces && <MainWithPlaces offersOfCity={offersCards} city={city} />}
        {!isPlaces && !isErrorOfUpload && <MainWithoutPlaces city={cityName}/>}
        {!isPlaces && isErrorOfUpload && <ErrorUploadData/>}
      </div>
    </main>
  );
}
