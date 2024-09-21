import { Router } from "express";
import { productController } from "./product.controller";

const route = Router();

route.get("/", productController.getAllProducts);

route.get("/:id", productController.getProductById);

export const productRoute = route;
