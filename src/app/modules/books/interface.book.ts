export interface IBook {
  title: string;
  author: Array<string>;
  genre: string;
  publicationYear: number;
  publisher: { name: string; location: string };
  reviews: { user: string; comment: string }[];
  rating: number;
  price: string;
}

export interface IBookMethods {}
