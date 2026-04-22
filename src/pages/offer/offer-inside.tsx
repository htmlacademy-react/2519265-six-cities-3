import { memo } from 'react';

type OfferInsideProps = {
  goods: string[];
}

export const OfferInside = memo(({goods}: OfferInsideProps): JSX.Element => {
  const listElements = goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>);
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {listElements}
      </ul>
    </div>
  );
});

OfferInside.displayName = 'OfferInside';
