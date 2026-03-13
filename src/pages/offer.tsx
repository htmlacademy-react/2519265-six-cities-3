import { useLocation } from 'react-router-dom';
import OfferGallery from '../components/offer/offer-gallery';
import OfferInside from '../components/offer/offer-inside';
import OfferReviews from '../components/offer/offer-reviews';
import { OfferType } from '../mosks/types/offer';
import { getWidthForRating } from '../const';
import { CommentType, User } from '../mosks/types/comment';
import { UserType } from '../mosks/types/user-type';

type OfferProps = {
  user: User & UserType;
}

type LocationStateOffer = {
  offer: OfferType;
  comments: CommentType[];
}

export default function Offer({user}: OfferProps): JSX.Element {
  const location = useLocation();
  const cardData = location.state as LocationStateOffer;
  const {offer, comments} = cardData;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery />
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer?.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${offer?.rating ? getWidthForRating(offer?.rating) : 0}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offer?.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer?.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer?.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <OfferInside />
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src="img/avatar-angelina.jpg"
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">Angelina</span>
                <span className="offer__user-status">Pro</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by
                  the unique lightness of Amsterdam. The building is green and
                  from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <OfferReviews comments={comments} user={user}/>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {/* <Card />
            <Card />
            <Card /> */}
          </div>
        </section>
      </div>
    </main>
  );
}
