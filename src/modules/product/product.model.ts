import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSChema = new Schema<TProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  ratings: { type: Number, required: true },
  image: { type: String, required: true },
});

const Product = model<TProduct>("Product", productSChema);
export default Product;
