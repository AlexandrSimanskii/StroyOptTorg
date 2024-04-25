import express from "express";

import {
  getMinMaxPrices,
  getProducts,
  getProduct,
  getFavorite,
} from "../controllers/product.controller.js";

const router = express.Router();
router.get("/get", getProducts);
router.get("/get/:id", getProduct);
router.get("/prices", getMinMaxPrices);
router.post("/favorite/get", getFavorite);

export default router;
