import { Link, useNavigate } from 'react-router-dom';
import { OfferForCardType } from '../../types/offer';
import { AppRoute, AuthorizationStatus, BookmarkClassName } from '../../const';
import { getWidthForRating } from '../../utils';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { memo } from 'react';

export type CardProps = {
  offer: OfferForCardType;
  onClick: (data: {id: string; status: boolean}) => void;
  onHover?: (id: string | null) => void;
  className: string;
};

export const Card = memo(({ offer, onClick, onHover, className }: CardProps): JSX.Element => {

  const {id, title, isFavorite, isPremium, type } = offer;
  const auth = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if(auth === AuthorizationStatus.Auth) {
      onClick({id, status: !isFavorite});
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <article className={`${className} place-card`}
      onMouseEnter={() => onHover?.(id)}
      onMouseLeave={() => onHover?.(null)}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
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
            className={`place-card__bookmark-button button ${isFavorite && BookmarkClassName.PlaceCardActive}`}
            type="button"
            onClick={handleFavoriteClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{ width: `${getWidthForRating(Math.round(offer.rating))}%` }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} state={offer}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
});

Card.displayName = 'Card';

