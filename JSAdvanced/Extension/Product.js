class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    #stockCount;
    _isOnSale = false;

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        // EX5
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            throw new Error("Price must be a positive number.");
        }
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
    }

    // EX8.5
    get isOnSale() {
        return this._isOnSale;
    }
    set isOnSale(isSale) {
        if (isSale === true || isSale === false) {
            this._isOnSale = isSale;
        } else {
            throw new Error("Please enter valid sale condition: true / false");
        }
    }

    // EX4
    static Compare(product1, product2) {
        if (product1.price < product2.price) {
            return -1;
        } else if (product1.price > product2.price) {
            return 1;
        } else {
            return 0;
        }
    }

    // EX6
    updateStock(newStock) {
        if (newStock >= 0) {
            this.#stockCount = newStock;
        } else {
            throw new Error("Stock count must be a positive number.");
        }
    }

    //8.6
    applyDiscount(percentage) {
        const reduction = (100 - percentage) / 100;
        this.price = this.price * reduction;
    }
}

export default Product;
