import { CITIES_NAME } from '../../mosks/mock';
import { CityType } from '../../mosks/types/city';
import LocationItem from './location-item';

type LocationListProps = {
  onClick: (city: CityType | string) => void;
  activeCity: CityType | string;
};

export default function LocationList({
  onClick,
  activeCity,
}: LocationListProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {/* элементы списка */}

        {CITIES_NAME.map((city) => (
          <LocationItem
            key={`${city}`}
            cityName={city}
            onClick={onClick}
            activeCity={activeCity}
          />
        ))}
      </ul>
    </section>
  );
}
