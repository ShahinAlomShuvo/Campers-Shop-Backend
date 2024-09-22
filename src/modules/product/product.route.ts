import { Router } from "express";
import { productController } from "./product.controller";

const route = Router();

route.post("/", productController.createProduct);

route.get("/", productController.getAllProducts);

route.get("/:id", productController.getProductById);

route.put("/:id", productController.updateProduct);

route.delete("/:id", productController.deleteProduct);

export const productRoute = route;
