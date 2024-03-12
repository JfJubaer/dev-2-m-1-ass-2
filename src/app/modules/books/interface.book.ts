import { HydratedDocument, Model } from "mongoose";

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

export interface BookModel extends Model<IBook, {}, IBookMethods> {
  getFeaturedBooks(): Promise<HydratedDocument<IBook, IBookMethods>>;
}
