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
export const getMinMaxPrices = async (req, res) => {
  try {
    const minMaxPrices = await Product.aggregate([
      {
        $group: {
          _id: null,
          minPrice: { $min: "$regularPrice" },
          maxPrice: { $max: "$regularPrice" },
          minDiscountPrice: { $min: "$discountPrice" },
          maxPrice: { $max: "$regularPrice" },
        },
      },
    ]);

    const minPrice =
      (await minMaxPrices[0].minPrice) > minMaxPrices[0].minDiscountPrice
        ? minMaxPrices[0].minDiscountPrice
        : minMaxPrices[0].minPrice;
        
    const maxPrice = await minMaxPrices[0].maxPrice;

    const data = [minPrice, maxPrice];

    return res.status(200).json(data);
  } catch (error) {
    console.log(console.error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
