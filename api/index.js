import express from "express";
import productRouter from "./routes/product.router.js";
const app = express();

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
 
app.use(express.json()); 
app.use("/api/products", productRouter); 
  