import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const reviewSchema = new Scheme(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
