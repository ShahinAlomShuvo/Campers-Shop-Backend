import { Category } from "../../enum/category.enum";

export type TProduct = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: Category;
  ratings: number;
  image: string;
};
