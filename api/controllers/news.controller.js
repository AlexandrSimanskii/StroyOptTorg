import mongoose from "mongoose";
import News from "../models/news.model.js";

export const getNews = async (req, res) => {
  try {
    const news = await News.find({ category: "Обзоры" });

    res.json(news);
  } catch (error) {
    console.log(error);
  }
};
