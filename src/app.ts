import express, { Application, Request, Response } from "express";
import { productRoute } from "./modules/product/product.route";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/products", productRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Campers Shop App");
});

export default app;
