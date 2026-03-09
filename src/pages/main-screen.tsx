import LocationList from '../components/main/location-list';
import MainWithPlaces from '../components/main/main-with-places';
import { CommentType } from '../mosks/types/comment';
import { OfferType } from '../mosks/types/offer';

type MainScreenProps = {
  placesCount: number;
  // cardsCount: number;
  offers: OfferType[];
  comments: CommentType[];
};

export default function MainPage({
  placesCount,
  // cardsCount,
  offers,
  comments
}: MainScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList />
      </div>
      <div className="cities">
        <MainWithPlaces placesCount={placesCount} offers={offers} comments={comments}/>
      </div>
    </main>
  );
}
