import { ProductRepository } from "../../repositories/productRepository";

interface IRequest {
    name: string;
    productClass: string;
    quantity: number;
}

export class CreateProductService {
    constructor(private productRepository: ProductRepository) {}

    async execute({ name, productClass, quantity }: IRequest): Promise<void> {
        if (!name || !productClass || !quantity) throw new Error("There is a body requisition problem");
        
        await this.productRepository.create({ name, productClass, quantity });
    }
}