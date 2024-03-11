import express, { Application } from "express";
import cors from "cors";
// import userRoutes from "./app/Modules/User/user.route";

const app: Application = express();

// using cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/user", userRoutes);

export default app;
