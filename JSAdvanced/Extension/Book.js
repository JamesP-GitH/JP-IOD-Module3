import Product from "./Product.js";

class Book extends Product {
    constructor(name, price, description, author) {
        super(name, price, description);
        this._author = author;
    }

    static #salePrice = 9.99;

    get author() {
        return this._author;
    }
    // No set author, author doesnt change

    static getSalePrice() {
        return this.#salePrice;
    }
}

export default Book;
