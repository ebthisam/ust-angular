export class Product{

    productId: string;
    brand: string;
    description: string;
    qty: number;
    price: number;

    constructor(
        productId: string,
        brand: string,
        description: string,
        qty: number,
        price: number
        ){
        this.productId=productId;
        this.brand=brand;
        this.description=description;
        this.qty=qty;
        this.price=price;
    }


}