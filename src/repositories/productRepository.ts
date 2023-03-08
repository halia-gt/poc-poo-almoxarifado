import { Product } from "../models/product";

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

    create({ name, productClass, quantity}) {
        const product: Product = new Product(name, productClass, quantity);
        
    }
}