type LocationItemValue = {
  cityName: string;
}

export default function LocationItem({cityName}: LocationItemValue): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}
