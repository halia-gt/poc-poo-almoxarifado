export class Product {
    public id: number;
    public name: string;
    public productClass: string;
    public quantity: number;

    constructor (name: string, productClass: string, quantity: number, id: number = -1) {
        this.id = id;
        this.name = name;
        this.productClass = productClass;
        this.quantity = quantity;
    }
}