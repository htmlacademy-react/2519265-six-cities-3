import { cities } from '../../mock';
import LocationItem from './location-item';

export default function LocationList(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {/* элементы списка */}

        {Array.from({ length: cities.length }, (_, i) => (
          <LocationItem key={i} cityName={cities[i]} />
        ))}
      </ul>
    </section>
  );
}
