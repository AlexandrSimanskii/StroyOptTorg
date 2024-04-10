import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res, next) => {

  try {
    const limit = parseInt(req.query.limit) || 6;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const label = req.query.label ? req.query.label.split(",") : [];
    const sort = req.query.sort || "createdAt";
    const order = req.query.order || "desc";
    const category = req.query.category || "";

    const price = req.query.price?.split(",") || [0, Infinity];
    let priceGte = price[0];
    let priceLte = price[1];

    let sortOptions = {};

    if (sort === "regularPrice") {
      sortOptions = { discountPrice: order, regularPrice: order };
    } else {
      sortOptions = { name: order };
    }

    let query = {
      category: { $regex: category, $options: "i" },
      regularPrice: { $gte: priceGte, $lte: priceLte },
    };
    if (label.length) {
      query.label = label;
    }

    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await Product.find(query)
      .sort(sortOptions)
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json({ products, totalPages });
  } catch (error) {
    next(error);
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
    next(error);
  }
};
