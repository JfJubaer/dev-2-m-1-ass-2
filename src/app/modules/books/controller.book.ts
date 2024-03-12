import { NextFunction, Request, Response } from "express";
import {
  createBookToDB,
  getBooksByGenreFromDB,
  getBooksFromDB,
  getBooksWithQueryFromDB,
} from "./services.book";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const books = await getBooksFromDB();
  res.status(200).json({
    status: "success",
    data: books,
  });
};

export const getBookbyPublishser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { genre, publisher } = req.query;

  const query: any = {};
  if (genre) query.genre = genre;
  if (publisher) query.publisher = publisher;
  console.log(query);
  const books = await getBooksWithQueryFromDB(query.genre, query.publisher);
  res.status(200).json({
    status: "success",
    data: books,
  });
};

export const getBooksByGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const books = await getBooksByGenreFromDB(id);
  res.status(200).json({
    status: "success",
    data: books,
  });
};

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  console.log(data);
  const book = await createBookToDB(data);
  res.status(200).json({
    status: "success",
    data: book,
  });
};
