import Product from "./product.model";

const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const productService = {
  getAllProducts,
};
