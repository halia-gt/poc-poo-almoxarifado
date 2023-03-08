export class Product {
    public id: number;
    public name: string;
    public productClass: string;
    public quantity: number;

    constructor ({ name, productClass, quantity, id }) {
        this.id = id;
        this.name = name;
        this.productClass = productClass;
        this.quantity = quantity;
    }
}