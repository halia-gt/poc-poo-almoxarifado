import { Product } from "../../models/product";
import { ProductRepository } from "../../repositories/productRepository";

export class GetAllProductService {
    constructor(private productRepository: ProductRepository) {}

    async execute(): Promise<Product[]> {
        return await this.productRepository.getAll();
    }
}