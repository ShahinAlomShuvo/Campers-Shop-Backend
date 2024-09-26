import { Request, Response } from "express";
import { productService } from "./product.service";
import { TQuery } from "./product.interface";
import { Category } from "../../enum/category.enum";
import noDataFound from "../../utils/noDataFound.utils";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const query: TQuery = {
      category: req.query.category as Category,
      price: Number(req.query.price),
      sorting: req.query.sorting as string,
      search: req.query.search as string,
    };
    const products = await productService.getAllProducts(query);
    if (!products) {
      noDataFound(res, "No products found");
    }
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

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
