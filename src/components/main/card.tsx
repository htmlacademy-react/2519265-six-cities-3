import { Link } from 'react-router-dom';
import { OfferType } from '../../mosks/types/offer';
import { getWidthForRating } from '../../const';
import { CommentType, User } from '../../mosks/types/comment';
import { UserType } from '../../mosks/types/user-type';

export type CardProps = {
  offer: OfferType;
  comments: CommentType[];
  user: User & UserType;
}

export default function Card({offer, comments, user}: CardProps): JSX.Element {
  // const ratingWidth = (offer.rating >= MIN_RATING) ? (offer.rating * WIDTH_FOR_RATING) : 0;
  return (
    <article className="cities__card place-card" data-id={offer.id}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/:${offer.id}`} state={{offer: offer, comments: comments, user: user}}>
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
