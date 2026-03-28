import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LocationItemValue = {
  cityName: string;
  onClick: () => void;
  activeCity: string;
};

export default function LocationItem({
  cityName,
  onClick,
  activeCity,
}: LocationItemValue): JSX.Element {
  return (
    <li className="locations__item">
      <Link
        to={AppRoute.Main}
        className={`locations__item-link tabs__item ${activeCity && activeCity === cityName ? 'tabs__item--active' : ''}`}
        onClick={(evt) => {
          evt.preventDefault();
          onClick();
        }}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
