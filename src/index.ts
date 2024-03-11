import app from "./app";
import mongoose from "mongoose";

const port = 3000;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/newHere");
    console.log(`🛢 Database connection successful`);
    app.listen(port, () => {
      console.log(`Server is  listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect database`, err);
  }
}
