import { useState } from 'react';
import LocationList from '../components/main/location-list';
import MainWithPlaces from '../components/main/main-with-places';
import { OfferForCardType } from '../mosks/types/offer';
import MainWithoutPlaces from '../components/main/main-without-places';

type MainScreenProps = {
  offersCard: OfferForCardType[];
};

export default function MainWithElements({
  offersCard,
}: MainScreenProps): JSX.Element {
  const isPlaces: boolean = offersCard.length > 0;
  const [,setCurrentElement] = useState<string | null>(null);

  const handleMouseEnter = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    const cardId: string | null = target.closest('[data-id]')?.getAttribute('data-id') ?? null;
    setCurrentElement((prevId: string | null) => {
      if (prevId === cardId) {
        return prevId;
      }
      return cardId;
    });
  };

  return (
    <main className={`page__main page__main--index ${!isPlaces && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList />
      </div>
      <div className="cities" onMouseMove={handleMouseEnter}>
        {isPlaces && <MainWithPlaces offersCard={offersCard} />}
        {!isPlaces && <MainWithoutPlaces/>}
      </div>
    </main>
  );
}
