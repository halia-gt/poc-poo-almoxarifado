import { Router } from "express";
import { createProductController } from "../useCases/createProduct";
import { getAllProductsController } from "../useCases/getAllProducts";

const productRouter = Router();

productRouter.post("/products", (req, res) => createProductController.handle(req, res));
productRouter.get("/products", (req, res) => getAllProductsController.handle(req, res));

export default productRouter;