import { useEffect, useState } from 'react';
import { SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
// import { setSortType } from '../../store/actions';
import { getActiveSortType, getCity } from '../../store/offers/selectors';
import { setSortType } from '../../store/offers/offers-process';

export default function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSortType = useAppSelector(getActiveSortType);
  const cityName = useAppSelector(getCity);
  const [sorting, setSorting] = useState<boolean>(false);

  useEffect(() => {
    setSorting(false);
  }, [cityName]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSorting(!sorting)}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${sorting && 'places__options--opened'}`}
      >
        {Object.values(SortType).map((type) => (
          <li
            key={type}
            className={`places__option ${type === activeSortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              dispatch(setSortType(type));
              setSorting(false);
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}
