import express from "express";

import {
  getMinMaxPrices,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();
router.get("/get", getProducts);
router.get("/prices", getMinMaxPrices);

export default router;
