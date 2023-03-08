import { Product } from "../models/product";
import prisma from "../database/db";

export class ProductRepository {
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

    async update({ id, name, productClass, quantity }: Product): Promise<void> {
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