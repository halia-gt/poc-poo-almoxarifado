import { Request, Response } from "express";
import { CreateProductService } from "./createProductService";

export class CreateProductController {
    constructor(private createProductService: CreateProductService) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, productClass, quantity } = req.body;

        try {
            await this.createProductService.execute({ name, productClass, quantity });
            
            return res.sendStatus(201);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}