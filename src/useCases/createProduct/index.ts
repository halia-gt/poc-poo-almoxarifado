import { ProductRepository } from "../../repositories/productRepository";
import { CreateProductController } from "./createProductController";
import { CreateProductService } from "./createProductService";

const createProductRepository = new ProductRepository;
const createProductService = new CreateProductService(createProductRepository);
export const createProductController = new CreateProductController(
    createProductService
);