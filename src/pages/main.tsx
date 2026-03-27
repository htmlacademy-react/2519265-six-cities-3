import { useState } from 'react';
import LocationList from '../components/main/location-list';
import MainWithPlaces from '../components/main/main-with-places';
import { OfferForCardType } from '../mosks/types/offer';
import MainWithoutPlaces from '../components/main/main-without-places';
import { CityType } from '../mosks/types/city';
import { DEFAULT_CITY } from '../const';

type MainScreenProps = {
  offersCard: OfferForCardType[];
};

export default function MainWithElements({
  offersCard,
}: MainScreenProps): JSX.Element {
  const [city, setCity] = useState<CityType | string>(DEFAULT_CITY);
  const cityName = typeof city === 'string' ? city : city.name;
  const offersCardOfCity = offersCard.filter((offer) => offer.city.name === cityName);
  const isPlaces: boolean = offersCardOfCity.length > 0;

  return (
    <main className={`page__main page__main--index ${!isPlaces && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList onClick={setCity} activeCity={city} />
      </div>
      <div className="cities">
        {isPlaces && typeof city !== 'string' && <MainWithPlaces offersCard={offersCardOfCity} city={city} />}
        {typeof city === 'string' && <MainWithoutPlaces city={city}/>}

      </div>
    </main>
  );
}
