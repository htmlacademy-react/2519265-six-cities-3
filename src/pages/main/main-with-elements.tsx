import LocationList from '../../components/main/location-list';
import MainWithPlaces from '../../components/main/main-with-places';
import { OfferForCardType } from '../../mosks/types/offer';

type MainScreenProps = {
  offersCard: OfferForCardType[];
};

export default function Main({
  offersCard,
}: MainScreenProps): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationList />
      </div>
      <div className="cities">
        <MainWithPlaces
          offersCard={offersCard}
        />
      </div>
    </main>
  );
}
