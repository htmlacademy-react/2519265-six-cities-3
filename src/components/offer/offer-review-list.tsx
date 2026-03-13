import { CommentType } from '../../mosks/types/comment';
import OfferReviewsItem from './offer-review-item';

type ReviewsProps = {
  comments: CommentType[];
}

export default function OfferReviewsList({comments}: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <OfferReviewsItem key={comment.id} comment={comment}/>)}
    </ul>
  );
}
