import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";

    const product = await Product.find().limit(limit).skip(startIndex);
    console.log(req.query);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
