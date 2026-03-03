import { Link } from 'react-router-dom';

type LocationItemValue = {
  cityName: string;
}

export default function LocationItem({cityName}: LocationItemValue): JSX.Element {
  return (
    <li className="locations__item">
      <Link to='/' className="locations__item-link tabs__item">
        <span>{cityName}</span>
      </Link>
    </li>
  );
}
