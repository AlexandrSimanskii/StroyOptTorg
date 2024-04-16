import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const productsSchema = new Scheme(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    label: { type: String, required: true },
    article: { type: String, required: true },
    regularPrice: { type: Number, required: true },
    discountPrice: { type: Number, required: false },
    sale: { type: Number, required: false },
    characteristics: { type: Object },
    "additional photos": { type: Array },
  },
  { timestamps: true }
);

const Products = mongoose.model("products", productsSchema);

export default Products;
