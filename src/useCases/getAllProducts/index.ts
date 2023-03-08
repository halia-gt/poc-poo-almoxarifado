import { ProductRepository } from "../../repositories/productRepository";
import { GetAllProductsController } from "./getAllProductsController";
import { GetAllProductService } from "./getAllProductsService";

const createProductRepository = new ProductRepository;
const getAllProductsService = new GetAllProductService(createProductRepository);
export const getAllProductsController = new GetAllProductsController(
    getAllProductsService
);