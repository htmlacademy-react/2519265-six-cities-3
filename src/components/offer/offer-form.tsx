import { FormEvent, Fragment, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReview } from '../../store/api-actions';
import {
  MAX_LENGHT_COMMENT,
  MIN_LENGHT_COMMENT,
  MIN_RATING_COMMENT,
} from '../../const';
import { getOffer } from '../../store/offer/selectors';

const ratingStars = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

export default function OfferForm() {
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);

  const reviewRef = useRef<HTMLTextAreaElement | null>(null);

  const [newComment, setNewComment] = useState<number>(0);
  const [newRating, setNewRating] = useState<string>('0');
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsFormDisabled(true);
    const sendReview = async () => {
      if (reviewRef.current !== null && Number(newRating) !== 0 && offer?.id) {
        try {
          await dispatch(
            postReview({
              data: {
                rating: Number(newRating),
                comment: reviewRef.current.value,
              },
              id: offer.id,
            })
          ).unwrap();

          setNewRating('0');
          if (reviewRef.current) {
            reviewRef.current.value = '';
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log('ошибка отправки');
        } finally {
          setIsFormDisabled(false);
        }
      }
    };

    sendReview();
  };

  const isDisabled =
    Number(newComment) < MIN_LENGHT_COMMENT ||
    Number(newRating) === MIN_RATING_COMMENT ||
    Number(newComment) > MAX_LENGHT_COMMENT;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={newRating === String(value)}
              onChange={() => setNewRating(String(value))}
              disabled={isFormDisabled}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={reviewRef}
        onChange={() => setNewComment(reviewRef.current?.value.length ?? 0)}
        disabled={isFormDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled || isFormDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
