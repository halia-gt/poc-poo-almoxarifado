import { Request, Response } from "express";
import { UpdateProductService } from "./updateProductService";

export class UpdateProductController {
    constructor(private updateProductService: UpdateProductService) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, productClass, quantity } = req.body;

        try {
            await this.updateProductService.execute({ id, name, productClass, quantity });
            
            return res.sendStatus(200);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}