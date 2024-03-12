import { Model, Schema, model } from "mongoose";
import { BookModel, IBook, IBookMethods } from "./interface.book";

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

BookSchema.static("getFeaturedBooks", async function getFeaturedBooks() {
  const books: any = await this.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
      $addFields: {
        featured: {
          $cond: {
            if: { $gte: ["$rating", 4.5] },
            then: "BestSeller",
            else: "Popular",
          },
        },
      },
    },
  ]);
  console.log(books);
  return books;
});

const Book = model<IBook, BookModel>("Book", BookSchema);

export default Book;
