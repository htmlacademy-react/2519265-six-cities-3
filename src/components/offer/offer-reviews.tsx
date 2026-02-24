import OfferForm from './offer-form';
import OfferReviewsList from './offer-review-list';

export default function OfferReviews(): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <OfferReviewsList />
      <OfferForm />
    </section>
  );
}
