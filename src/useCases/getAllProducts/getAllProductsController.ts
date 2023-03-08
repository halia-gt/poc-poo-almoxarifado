import { Request, Response } from "express";
import { Product } from "../../models/product";
import { GetAllProductService } from "./getAllProductsService";

export class GetAllProductsController {
    constructor(private getAllProductService: GetAllProductService) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const products: Product[] = await this.getAllProductService.execute();
            
            return res.send(products);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}