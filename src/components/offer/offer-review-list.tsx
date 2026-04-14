import { CommentType } from '../../types/comment';
import { sortByDate } from '../../utils';
import OfferReviewsItem from './offer-review-item';

type ReviewsProps = {
  comments: CommentType[];
}

export default function OfferReviewsList({comments}: ReviewsProps): JSX.Element {
  const sortedByDateComments = sortByDate(comments).slice(0, 10);
  return (
    <ul className="reviews__list">
      {sortedByDateComments.map((comment) => <OfferReviewsItem key={comment.id} comment={comment}/>)}
    </ul>
  );
}
