import express from "express";
import {
  addInFavorite,
  addInCartProduct,
  addInCartProducts,
  deleteFromFavorite,
  deleteAllFavorites,
  deleteFromCart,
} from "../controllers/user.controller.js";

const router = express.Router();

router.patch("/favorite/add", addInFavorite);
router.delete("/favorite/delete", deleteFromFavorite);
router.patch("/:id/favorites/delete", deleteAllFavorites);
router.post("/:id/cart/add", addInCartProduct);
router.post("/:id/cart/addall", addInCartProducts);
router.delete("/:id/cart/delete", deleteFromCart);


export default router;
