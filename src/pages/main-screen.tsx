import { useState } from 'react';
import LocationList from '../components/main/location-list';
import MainWithPlaces from '../components/main/main-with-places';
import { CommentType } from '../mosks/types/comment';
import { OfferType } from '../mosks/types/offer';

type MainScreenProps = {
  placesCount: number;
  // cardsCount: number;
  offers: OfferType[];
  comments: CommentType[];
  // onHover: (evt: React.MouseEvent<HTMLElement>) => void;
};

export default function MainPage({
  placesCount,
  // cardsCount,
  offers,
  comments,
  // onHover
}: MainScreenProps): JSX.Element {
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
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList />
      </div>
      <div className="cities" onMouseMove={handleMouseEnter}>
        <MainWithPlaces
          placesCount={placesCount}
          offers={offers}
          comments={comments}
        />
      </div>
    </main>
  );
}
