import { CommentType } from '../../mosks/types/comment';
import OfferForm from './offer-form';
import OfferReviewsList from './offer-review-list';

export type ReviewsProps = {
  comments: CommentType[];
  authorizationStatus: string;
}

export default function OfferReviews({comments, authorizationStatus}: ReviewsProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <OfferReviewsList comments={comments} />
      {(authorizationStatus === 'AUTH') && <OfferForm />}
    </section>
  );
}
