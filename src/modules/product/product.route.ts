import { Router } from "express";
import { productController } from "./product.controller";

const route = Router();

route.get("/", productController.getAllProducts);

route.get("/:id", productController.getProductById);

route.put("/:id", productController.updateProduct);

export const productRoute = route;
