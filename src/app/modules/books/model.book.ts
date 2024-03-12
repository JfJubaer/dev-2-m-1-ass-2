import { Model, Schema, model } from "mongoose";
import { IBook, IBookMethods } from "./interface.book";

type BookModel = Model<IBook, {}, IBookMethods>;

const BookSchema = new Schema<IBook, BookModel, IBookMethods>({
  title: { type: String, required: true },
  author: [String],
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [{ Book: String, comment: String }],
  rating: { type: Number, required: true },
  price: { type: String, required: true },
});

const Book = model<IBook, BookModel>("Book", BookSchema);

export default Book;
