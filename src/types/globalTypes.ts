export interface IBookProps {
  book: IBook;
}

export interface IReview {
  name: {
    firstName: string;
    lastName: string;
  };
  photoUrl: string /*  */;
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

export interface IBook {
  _id: Key | null | undefined;
  title: string;
  author: string;
  genre:
    | "Comedy"
    | "Fiction"
    | "Non-Fiction"
    | "Romance"
    | "Mystery"
    | "Thriller"
    | "Horror"
    | "Science Fiction"
    | "Fantasy"
    | "Historical fiction"
    | "Young adult";
  price: string;
  bookPhotoUrl: string;
  publicationData: string;
  bookSummary: string;
  publisher: string;
  reviews?: [];
}
