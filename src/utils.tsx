import { MIN_RATING, WIDTH_FOR_RATING } from './const';
import { CommentType } from './mosks/types/comment';

export const getWidthForRating = (rating: number) => (rating >= MIN_RATING) ? (rating * WIDTH_FOR_RATING) : 0;

export const sortByDate = (arr: CommentType[]) => [...arr].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
