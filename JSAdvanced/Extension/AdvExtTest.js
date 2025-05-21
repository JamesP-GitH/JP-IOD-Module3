class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    #stockCount;

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

    static Compare(product1, product2) {
        if (product1.price < product2.price) {
            return -1;
        } else if (product1.price > product2.price) {
            return 1;
        } else {
            return 0;
        }
    }

    updateStock(newStock) {
        if (newStock >= 0) {
            this.#stockCount = newStock;
        } else {
            throw new Error("Stock count must be a positive number.");
        }
    }
}

const product1 = new Product("Phone", 999.99, "A high-performance smart phone");
console.log(product1.name);
console.log(product1.price);
console.log(product1.description);

product1.price = 888.99;
console.log(product1.price);

class TV extends Product {
    constructor(name, price, description, screenSize) {
        super(name, price, description);
        this._screenSize = screenSize;
    }

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
}

class Shirt extends Product {
    constructor(name, price, description, shirtSize) {
        super(name, price, description);
        this._shirtSize = shirtSize;
    }

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
}
const tv1 = new TV("Samsung", 890.0, "Large TV made by Samsung", 54);
console.log(tv1.name);
console.log(tv1.screenSize);

const shirt1 = new Shirt("Orng T M", 67.5, "Large Orange T-Shirt for Men", 12);
console.log(shirt1.price);
console.log(shirt1.shirtSize);

function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

Book.prototype.displayInfo = function () {
    console.log(`${this.title} by ${this.author} costs $${this.price}`);
};
const book1 = new Book("1984", "George Orwell", 15.99);
book1.displayInfo();

// const violin = new Product("Violin", -503.54, "Musical Instrument");
// console.log(violin);

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        if (quantity < 0) {
            console.log("Quantity must be greater than or equal to zero.");
            return;
        }
        const inCart = this.items.find((item) => item.product === product);
        if (inCart) {
            inCart.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeItem(product) {
        const cartIndex = this.items.findIndex((item) => item.product === product);
        if (cartIndex !== -1) {
            this.items.splice(cartIndex, 1);
        }
    }

    updateQuantity(product, quantity) {
        if (quantity < 0) {
            console.log("Quantity must be greater than or equal to zero.");
            return;
        }
        const inCart = this.items.find((item) => item.product === product);
        if (inCart) {
            inCart.quantity = quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    sortCart() {
        this.items.sort((item1, item2) => Product.Compare(item1.product, item2.product));
    }
}

const cart = new Cart();
cart.addItem(book1, 5);
console.log(cart.items);
cart.removeItem(book1);
console.log(cart.items);
