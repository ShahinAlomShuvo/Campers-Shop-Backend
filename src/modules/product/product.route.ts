import { Router } from "express";
import { productController } from "./product.controller";
import validateRequest from "../../middleware/validation.middleware";
import { ProductValidation } from "./product.validation";

const route = Router();

route.post(
  "/",
  validateRequest(ProductValidation.CreateProductValidationSchema),
  productController.createProduct
);

route.get("/", productController.getAllProducts);

route.get("/:id", productController.getProductById);

route.put(
  "/:id",
  validateRequest(ProductValidation.UpdateProductValidationSchema),
  productController.updateProduct
);

route.delete("/:id", productController.deleteProduct);

export const productRoute = route;
