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
export const deleteAllFavorites = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const currentUser = await User.findById(req.params.id);
    if (!currentUser) {
      return next(errorHandler(403, "Такого пользователя не существует!"));
    }

    currentUser.favorite = [];
    await currentUser.save();
    res.status(200).json({ message: "Delete all favorites successfully" });
  } catch (error) {
    next(error);
  }
};
export const addInCartProduct = async (req, res, next) => {
  const userId = req.params.id;
  const product = req.body.currentProduct;

  try {
    const currentUser = await User.findById(userId);

    if (!currentUser) {
      next(errorHandler(401, "Пользователь не найден"));
    }
    const existingIndex = currentUser.cart.findIndex(
      (item) => item._id === product._id
    );
    if (existingIndex === -1) {
      currentUser.cart.push(product);
    } else {
      currentUser.cart[existingIndex] = product;
    }

    await currentUser.save();
    res.status(200).json({ message: "Added to favorites successfully" });
  } catch (error) {
    next(error);
  }
};
export const addInCartProducts = async (req, res, next) => {
  const userId = req.params.id;
  let bodyProducts = req.body.products;
  bodyProducts = bodyProducts.map((item) => ({ _id: item, count: 1 }));

  console.log(bodyProducts);
  try {
    const currentUser = await User.findById(userId);

    if (!currentUser) {
      next(errorHandler(401, "Пользователь не найден"));
    }
    currentUser.cart.push(...bodyProducts);

    await currentUser.save();
    res.status(200).json({ message: "Added to favorites successfully" });
  } catch (error) {
    next(error);
  }
};
export const deleteFromCart = async (req, res, next) => {
  const userId = req.params.id;
  const productId = req.body.productId;
  console.log(productId, userId);

  try {
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      next(errorHandler(401, "Пользователь не найден"));
    }
    currentUser.cart = currentUser.cart.filter(
      (item) => item._id !== productId
    );

    await currentUser.save();
    res.status(200).json({ message: "Delete From favorites successfully" });
  } catch (error) {
    next(error);
  }
};
