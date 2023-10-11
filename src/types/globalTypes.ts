export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  price: string;
  bookPhotoUrl: string;
  publicationData: string;
  bookSummary: string;
  publisher: string;
  reviews: [];
}

export interface IBookProps {
  book: IBook;
}

export interface IReview {
  email: string;
  comment: string;
}
export interface IReviewProps {
  review: IReview;
}

export interface IName {
  firstName: string;
  lastName?: string;
}

export interface IUser {
  name: IName;
  email: string;
  phoneNumber?: number;
  photoUrl?: string;
  password?: string;
}
