import { useLocation } from 'react-router-dom';
import OfferGallery from '../components/offer/offer-gallery';
import OfferInside from '../components/offer/offer-inside';
import { OfferForCardType, OfferFullType } from '../mosks/types/offer';
import { BookmarkClassName } from '../const';
import { CommentType } from '../mosks/types/comment';
import OfferReviews from '../components/offer/offer-reviews';
import { getWidthForRating } from '../utils';
import Map from '../components/map/map';
import Card from '../components/main/card';

type OfferProps = {
  offers: OfferFullType[];
  offersForCards: OfferForCardType[];
  comments: CommentType[];
  authorizationStatus: string;
};

export default function Offer({
  offers,
  offersForCards,
  comments,
  authorizationStatus,
}: OfferProps): JSX.Element | null {
  const location = useLocation();
  const offerId = location.pathname.split('/').filter(Boolean).at(-1) ?? null;

  const currentOffer = offers.find(({ id }) => id === offerId);

  if (!currentOffer) {
    return null;
  }

  const { title, rating, price, type, isPremium, isFavorite, bedrooms, maxAdults, goods, host, description, images, city } = currentOffer;

  const offersCard = offersForCards.filter((offer) => offer.city.name === city.name).slice(0, 2);
  const {name, avatarUrl, isPro} = host;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <button
                className={`offer__bookmark-button button ${isFavorite ? BookmarkClassName.PlaceCardActive : ''}`}
                type="button"
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span
                  style={{
                    width: `${rating ? getWidthForRating(rating) : 0}%`,
                  }}
                >
                </span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {rating}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{type.charAt(0).toUpperCase() + type.slice(1)}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} {(bedrooms > 1) ? 'Bedrooms' : 'Bedroom'}
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} {(maxAdults > 1) ? 'adults' : 'adult'}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            {goods.length > 0 ? <OfferInside goods={goods}/> : ''}
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper user__avatar-wrapper ${isPro ? 'offer__avatar-wrapper--pro' : ''}`}>
                  <img
                    className="offer__avatar user__avatar"
                    src={avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{name}</span>
                <span className="offer__user-status">{isPro ? 'Pro' : ''}</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <OfferReviews comments={comments} authorizationStatus={authorizationStatus} />
          </div>
        </div>
        {/* <section className="offer__map map"></section> */}
        <Map offersCard={offersCard} city={city} currentCardId={offerId} className='offer__map map' />
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
            {offersCard.map((offer) => <Card key={offer.id} offer={offer} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
