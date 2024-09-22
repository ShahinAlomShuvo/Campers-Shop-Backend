import { TProduct, TQuery } from "./product.interface";
import Product from "./product.model";

const createProduct = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

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

const updateProduct = async (id: string, product: Partial<TProduct>) => {
  await getProductById(id);

  const updatedProduct = await Product.findByIdAndUpdate(id, product, {
    new: true,
  });

  return updatedProduct;
};

const deleteProduct = async (id: string) => {
  await getProductById(id);
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
