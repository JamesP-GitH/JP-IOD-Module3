// TV.js
import Product from "./Product.js";

class TV extends Product {
    constructor(name, price, description, screenSize) {
        super(name, price, description);
        this._screenSize = screenSize;
    }

    static #salePrice = 499.99;

    get screenSize() {
        return this._screenSize;
    }

    set screenSize(newScreenSize) {
        if (newScreenSize > 0) {
            this._screenSize = newScreenSize;
        } else {
            throw new Error("Screen Size must be greater than 0");
        }
    }

    static getSalePrice() {
        return this.#salePrice;
    }
}

export default TV;
