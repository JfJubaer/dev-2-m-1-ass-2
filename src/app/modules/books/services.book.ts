import { IBook } from "./interface.book";
import Book from "./model.book";

export const getBooksFromDB = async (): Promise<IBook[]> => {
  const books = await Book.find();
  return books;
};

export const getBooksWithQueryFromDB = async (
  genre: string,
  publisher: string
): Promise<IBook[]> => {
  console.log(genre, publisher);
  const books = await Book.find({
    genre: genre,
    "publisher.name": publisher,
  });
  return books;
};
export const getBooksByGenreFromDB = async (
  genre: string
): Promise<IBook[]> => {
  const books = await Book.find({
    genre: genre,
  });
  return books;
};

export const createBookToDB = async (payload: IBook): Promise<IBook> => {
  const book = new Book(payload);
  await book.save();
  return book;
};
