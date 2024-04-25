import express from "express";
import {
  addInFavorite,
  deleteFromFavorite,
} from "../controllers/user.controller.js";

const router = express.Router();

router.patch("/favorite/add", addInFavorite);
router.delete("/favorite/delete", deleteFromFavorite);

export default router;
