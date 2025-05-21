import Product from "./Product.js";

class Shirt extends Product {
    constructor(name, price, description, shirtSize) {
        super(name, price, description);
        this._shirtSize = shirtSize;
    }

    static #salePrice = 11.99;

    get shirtSize() {
        return this._shirtSize;
    }
    set shirtSize(newShirtSize) {
        if (newShirtSize > 0) {
            this._shirtSize = newShirtSize;
        } else {
            throw new Error("Shirt Size must be greater than 0");
        }
    }

    // EX8.5
    static getSalePrice() {
        return this.#salePrice;
    }
}

export default Shirt;
