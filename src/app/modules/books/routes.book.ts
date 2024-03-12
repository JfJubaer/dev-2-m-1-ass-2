import express from "express";
import {
  createBook,
  getBookbyPublishser,
  getBooks,
  getBooksByGenre,
} from "./controller.book";

const router = express.Router();

router.get("/", getBooks);
router.get("/book", getBookbyPublishser);
router.get("/:id", getBooksByGenre);
router.post("/create-book", createBook);

export default router;
