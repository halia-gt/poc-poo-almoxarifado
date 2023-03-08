import { ProductRepository } from "../../repositories/productRepository";
import { DeleteProductController } from "./deleteProductController";
import { DeleteProductService } from "./deleteProductService";

const deleteProductRepository = new ProductRepository;
const deleteProductService = new DeleteProductService(deleteProductRepository);
export const deleteProductController = new DeleteProductController(
    deleteProductService
);