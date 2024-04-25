import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/product.router.js";
import newsRouter from "./routes/news.router.js";
import reviewRouter from "./routes/review.router.js";
import authRouter from "./routes/auth.router.js";
import usersRouter from "./routes/users.router.js";

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect with MongoDB");
  })
  .catch((err) => console.log("Не удалось подключиться к MongoDB", err));

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});

app.use(express.json());
app.use("/api", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productRouter);
app.use("/api/news", newsRouter);
app.use("/api/review", reviewRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
