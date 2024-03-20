import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getProducts } from "../controllers/product.controller.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect with MongoDB");
  })
  .catch((err) => console.log("Не удалось подключиться к MongoDB", err));

const router = express.Router();
router.get("/get", getProducts);

export default router;
