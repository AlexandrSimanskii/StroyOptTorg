import Review from "../models/product.model.js";
import mongoose from "mongoose";

export const getReview = async (req, res, next) => {
  try {
    const sort = req.query.sort || "createAt";
    const limit = req.query.limit || 10;
    const startIndex = req.query.startIndex || 0;

    const review = await Review.find().sort(sort).limit(limit).skip(startIndex);

    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    return res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};
