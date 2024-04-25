import User from "../models/user.model.js";
import mongoose from "mongoose";
import { errorHandler } from "../utils/error.js";

export const addInFavorite = async (req, res, next) => {
  const { user_id, product_id } = req.body;
  try {
    const currentUser = await User.findById(user_id);
    currentUser.favorite.push(product_id);
    await currentUser.save();
    res.status(200).json({ message: "Added to favorites successfully" });
  } catch (error) {
    next(error);
  }
};
export const deleteFromFavorite = async (req, res, next) => {
  const { user_id, product_id } = req.body;
  console.log(req.body.product_id);
  try {
    const currentUser = await User.findById(user_id);
    console.log(currentUser);
    currentUser.favorite = currentUser.favorite.filter(
      (item) => item !== product_id
    );
    console.log(currentUser);
    await currentUser.save();
    res.status(200).json({ message: "Delete from favorites successfully" });
  } catch (error) {
    next(error);
  }
};
