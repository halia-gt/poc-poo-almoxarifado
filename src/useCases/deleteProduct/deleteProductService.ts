import { ProductRepository } from "../../repositories/productRepository";

export class DeleteProductService {
    constructor(private productRepository: ProductRepository) {}

    async execute(id: number): Promise<void> {
        if (!id) throw new Error("Id is necessary");
        
        await this.productRepository.delete(id);
    }
}