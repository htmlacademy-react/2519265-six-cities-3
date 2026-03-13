// import { ChangeEvent } from 'react';
import { CommentType, User } from '../../mosks/types/comment';
import { OfferType } from '../../mosks/types/offer';
import { UserType } from '../../mosks/types/user-type';
import Map from '../map';
import Card from './card';
import Sorting from './sorting';

type MainScreenProps = {
  placesCount: number;
  // cardsCount: number;
  offers: OfferType[];
  comments: CommentType[];
  user: User & UserType;
};


export default function MainWithPlaces({
  placesCount,
  // cardsCount,
  offers,
  comments,
  user,
}: MainScreenProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {placesCount} places to stay in Amsterdam
        </b>
        <Sorting />
        <div
          className="cities__places-list places__list tabs__content"
        >
          {offers.map((offer) => (
            <Card key={offer.id} offer={offer} comments={comments} user={user}/>
          ))}
        </div>
      </section>
      <Map />
    </div>
  );
}
