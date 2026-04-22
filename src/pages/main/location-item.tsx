import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { memo } from 'react';

type LocationItemValue = {
  cityName: string;
  onClick: () => void;
  activeCity: string;
};

export const LocationItem = memo(
  ({ cityName, onClick, activeCity }: LocationItemValue): JSX.Element => (
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
  ),
);

LocationItem.displayName = 'LocationItem';
