import express, { Application, Request, Response } from "express";
import { productRoute } from "./modules/product/product.route";
import cors from "cors";
import notFound from "./middleware/notFound.middleware";
import globalErrorHandler from "./middleware/globalErrorHandler.middleware";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://campers-shop-sepia.vercel.app"],
    credentials: true,
  })
);

app.use("/api/products", productRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Campers Shop App");
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
