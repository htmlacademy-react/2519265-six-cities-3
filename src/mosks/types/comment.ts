export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type CommentType = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
