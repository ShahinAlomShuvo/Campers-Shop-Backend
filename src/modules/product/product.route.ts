import { Router } from "express";
import { productController } from "./product.controller";

const route = Router();

route.get("/", productController.getAllProducts);

export const productRoute = route;
