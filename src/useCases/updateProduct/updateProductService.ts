import { Product } from "../../models/product";
import { ProductRepository } from "../../repositories/productRepository";

export class UpdateProductService {
    constructor(private productRepository: ProductRepository) {}

    async execute({ id, name, productClass, quantity }: Product): Promise<void> {
        if (!id || !name || !productClass || !quantity) throw new Error("There is a body requisition problem");
        
        await this.productRepository.update({ id, name, productClass, quantity });
    }
}