export class Product {
    public name: string;
    public productClass: string;
    public quantity: number;

    constructor (name: string, productClass: string, quantity: number) {
        this.name = name;
        this.productClass = productClass;
        this.quantity = quantity;
    }
}