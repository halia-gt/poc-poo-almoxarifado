import { ProductRepository } from "../../repositories/productRepository";
import { UpdateProductController } from "./updateProductController";
import { UpdateProductService } from "./updateProductService";

const createProductRepository = new ProductRepository;
const updateProductService = new UpdateProductService(createProductRepository);
export const updateProductController = new UpdateProductController(
    updateProductService
);