import express from "express";

import {
  getMinMaxPrices,
  getProducts,
  getProduct,
} from "../controllers/product.controller.js";

const router = express.Router();
router.get("/get", getProducts);
router.get("/get/:id", getProduct);
router.get("/prices", getMinMaxPrices);

export default router;
