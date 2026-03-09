import { Link } from 'react-router-dom';
import { OfferType } from '../../mosks/types/offer';
import { getWidthForRating } from '../../const';
import { CommentType } from '../../mosks/types/comment';

export type CardProps = {
  offer: OfferType;
  comments: CommentType[];
  // onOffer: (offer:OfferType) => void;
}

export default function Card({offer, comments}: CardProps): JSX.Element {
  // const ratingWidth = (offer.rating >= MIN_RATING) ? (offer.rating * WIDTH_FOR_RATING) : 0;
  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/:${offer.id}`} state={{offer: offer, comments: comments}}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {offer.isFavorite && <use xlinkHref="#icon-bookmark"></use>}
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getWidthForRating(offer.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} state={offer}>Wood and stone place</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
