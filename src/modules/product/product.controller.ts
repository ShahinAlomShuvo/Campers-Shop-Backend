import { Request, Response } from "express";
import { productService } from "./product.service";
import { TQuery } from "./product.interface";
import { Category } from "../../enum/category.enum";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const query: TQuery = {
      category: req.query.category as Category,
      price: Number(req.query.price),
      sorting: req.query.sorting as string,
      search: req.query.search as string,
    };
    const products = await productService.getAllProducts(query);
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
