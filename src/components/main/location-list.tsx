import { useAppDispatch } from '../../hooks';
import { CITIES_NAME } from '../../mosks/mock';
import { setCity } from '../../store/actions';
import LocationItem from './location-item';

type LocationListProps = {
  activeCity: string;
};

export default function LocationList({
  activeCity,
}: LocationListProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {/* элементы списка */}

        {CITIES_NAME.map((city) => (
          <LocationItem
            key={`${city}`}
            cityName={city}
            onClick={() => dispatch(setCity(city))}
            activeCity={activeCity}
          />
        ))}
      </ul>
    </section>
  );
}
