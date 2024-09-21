import { TQuery } from "./product.interface";
import Product from "./product.model";

const getAllProducts = async ({ category, price, sorting, search }: TQuery) => {
  const filter: Record<string, any> = {};

  let sort: number = -1;

  if (category) {
    filter["category"] = category;
  }
  if (price) {
    filter["price"] = { $gte: price - 100, $lte: price };
  }
  if (search) {
    filter["name"] = { $regex: search, $options: "i" };
    filter["description"] = { $regex: search, $options: "i" };
  }

  if (sorting === "asc") {
    sort = 1;
  } else if (sorting === "desc") {
    sort = -1;
  }
  const products = await Product.find(filter).sort({ price: sort });
  return products;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export const productService = {
  getAllProducts,
  getProductById,
};
