import { z } from "zod";
import { Category } from "../../enum/category.enum";

const CreateProductValidationSchema = z.object({
  name: z.string().min(1, "Product name is required."),
  price: z.number().min(0, "Price must be a non-negative number."),
  quantity: z.number().int().min(0, "Quantity must be a non-negative integer."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long."),
  category: z.enum([
    Category.Tents,
    Category.Shelter,
    Category.CampCooking,
    Category.Dining,
    Category.Backpacks,
  ]),
  ratings: z.number().min(0).max(5, "Ratings must be between 0 and 5."),
  image: z.string().url("Must be a valid URL for the image."),
});

const UpdateProductValidationSchema = CreateProductValidationSchema.partial();

export const ProductValidation = {
  CreateProductValidationSchema,
  UpdateProductValidationSchema,
};
