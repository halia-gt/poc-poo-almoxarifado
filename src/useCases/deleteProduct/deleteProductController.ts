import { Request, Response } from "express";
import { DeleteProductService } from "./deleteProductService";

export class DeleteProductController {
    constructor(private deleteProductService: DeleteProductService) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;

        try {
            await this.deleteProductService.execute(id);
            
            return res.sendStatus(204);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}