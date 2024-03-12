import express from "express";
import {
  UpdateBook,
  createBook,
  getBookbyPublishser,
  getBooks,
  getBooksByGenre,
  getFeaturedBooks,
} from "./controller.book";

const router = express.Router();

router.get("/", getBooks);
router.get("/book", getBookbyPublishser);
router.get("/FeaturedBook", getFeaturedBooks);
router.get("/:id", getBooksByGenre);
router.post("/create-book", createBook);
router.patch("/update-books", UpdateBook);

export default router;
