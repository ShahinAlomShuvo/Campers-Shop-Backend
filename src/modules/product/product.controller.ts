import { Request, Response } from "express";
import { productService } from "./product.service";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error,
    });
  }
};

export const productController = {
  getAllProducts,
};
