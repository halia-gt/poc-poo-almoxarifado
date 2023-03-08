import { Router } from "express";
import { createProductController } from "../useCases/createProduct";
import { getAllProductsController } from "../useCases/getAllProducts";
import { updateProductController } from "../useCases/updateProduct";

const productRouter = Router();

productRouter.post("/products", (req, res) => createProductController.handle(req, res));
productRouter.get("/products", (req, res) => getAllProductsController.handle(req, res));
productRouter.put("/products", (req, res) => updateProductController.handle(req, res));

export default productRouter;