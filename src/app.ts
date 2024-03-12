import express, { Application } from "express";
import cors from "cors";
import bookRoutes from "./app/modules/books/routes.book";

const app: Application = express();

// using cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/books", bookRoutes);

export default app;
