import { memo } from 'react';
import { CommentType } from '../../types/comment';
import { sortByDate } from '../../utils';
import {OfferReviewItem} from './offer-review-item';

type ReviewsProps = {
  comments: CommentType[];
}

export const OfferReviewsList = memo(({comments}: ReviewsProps): JSX.Element => {
  const sortedByDateComments = sortByDate(comments).slice(0, 10);
  return (
    <ul className="reviews__list">
      {sortedByDateComments.map((comment) => <OfferReviewItem key={comment.id} comment={comment}/>)}
    </ul>
  );
});

OfferReviewsList.displayName = 'OfferReviewsList';
