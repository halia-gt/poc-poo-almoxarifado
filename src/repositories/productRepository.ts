import { Product } from "../models/product";
import prisma from "../database/db";

export class ProductRepository {
    private products: Product[];
    protected static INSTANCE: ProductRepository;

    constructor() {
        this.products = [];
    }

    public static getInstance(): ProductRepository {
        if (!this.INSTANCE) this.INSTANCE = new ProductRepository();
        return this.INSTANCE;
    }

    async create({ name, productClass, quantity }): Promise<void> {
        await prisma.products.create({
            data: {
                name,
                productClass,
                quantity
            }
        });
    }

    async getAll(): Promise<Product[]> {
        return await prisma.products.findMany();
    }

    async update({ id, name, productClass, quantity }): Promise<void> {
        await prisma.products.update({
            where: {
              id,  
            },
            data: {
                id,
                name,
                productClass,
                quantity,
            }
        });
    }

    async delete(id: number): Promise<void> {
        await prisma.products.delete({
            where: {
              id,  
            },
        });
    }
}