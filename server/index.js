import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./db/database.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(port, async () => {
  connectToDatabase();
  console.log(`Server is running on port ${port}`);
});
