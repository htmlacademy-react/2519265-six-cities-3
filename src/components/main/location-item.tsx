import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CityType } from '../../mosks/types/city';
import { offers } from '../../mosks/offers';

type LocationItemValue = {
  cityName: string;
  onClick: (city: CityType | string) => void;
  activeCity: CityType | string;
};

export default function LocationItem({
  cityName,
  onClick,
  activeCity,
}: LocationItemValue): JSX.Element {
  const activeCityName = typeof activeCity === 'string' ? activeCity : activeCity.name;
  return (
    <li className="locations__item">
      <Link
        to={AppRoute.Main}
        className={`locations__item-link tabs__item ${activeCityName && activeCityName === cityName ? 'tabs__item--active' : ''}`}
        onClick={(evt) => {
          evt.preventDefault();
          const cityObject = offers.find(
            (offer) => offer.city.name === cityName
          );

          if (!cityObject) {
            onClick(cityName);
            return;
          }
          onClick(cityObject.city);

        }}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
