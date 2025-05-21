// === Exercise 1 === Basic Object with Getters and Setters
// Objective: Create a class `Product` with properties `name`, `price`, and `description`, using getters
// and setters.

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

// === Exercise 2 === Exercise 2: Prototypal Inheritance
// Objective: Create classes `TV` and `Shirt` that inherit from `Product`. Add specific properties like
// `screenSize` for `TV` and `size` for `Shirt`.

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

    // EX8.5
    static getSalePrice() {
        return this.#salePrice;
    }
}

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

// === Exercise 3 === Using Constructor Functions
// Objective: Create a new class `Book` using a constructor function, not ES6 classes, with properties
// and a prototype method to display its info.

/* Commented out for 8.7
function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}

Book.prototype.displayInfo = function () {
    console.log(`${this.title} by ${this.author} costs $${this.price}`);
};
*/

// === Exercise 4 === Static Methods in Class
// Objective: Add a static method ‘Compare’ to `Product` that compares two products based on price.
const fruit = [
    new Product("Apple", 1.5, "A juicy red apple"),
    new Product("Banana", 0.8, "A ripe banana"),
    new Product("Orange", 2.0, "A fresh orange"),
    new Product("Pineapple", 3.0, "A tropical pineapple"),
];

fruit.sort(Product.Compare);
console.log(fruit);

// === Exercise 5 === Implementing Validation Logic
// Objective: In the `Product` class, add validation logic to ensure that the price is always a positive
// number.

// const violin = new Product("Violin", -503.54, "Musical Instrument");
// console.log(violin);

// === Exercise 6 === Private Members
// Objective: Add a private field `stockCount` to `Product` and a method to update it safely.

// === Exercise 7 === Cart Class for Managing Products
// Objective 7.1: Create a `Cart` class to manage a collection `Product` instances.
// Objective 7.2: Add a Sort method to the Cart, which sorts the Products by using the Compare
// method from Exercise 4

class Cart {
    constructor() {
        this.items = [];
    }

    #discountCodes = [
        { code: "Hot32", isApplied: false, discountPercentage: 30 },
        { code: "Cold46", isApplied: false, discountPercentage: 15 },
        { code: "North52", isApplied: false, discountPercentage: 20 },
        { code: "South18", isApplied: false, discountPercentage: 40 },
        { code: "West97", isApplied: false, discountPercentage: 10 },
        { code: "East59", isApplied: false, discountPercentage: 50 },
    ];

    // EX8.1
    addItem(product, quantity) {
        // EX8.4
        if (!(product instanceof Product)) {
            console.log("Please input valid Product.");
            return;
        }
        if (quantity <= 0) {
            console.log("Quantity must be greater than zero.");
            return;
        }
        const inCart = this.items.find((item) => item.product === product);
        if (inCart) {
            inCart.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }
    // EX8.2
    removeItem(product) {
        const cartIndex = this.items.findIndex((item) => item.product === product);
        if (cartIndex !== -1) {
            this.items.splice(cartIndex, 1);
        } else {
            console.log(`Product: ${product} not found in cart`);
        }
    }

    // EX8.3
    updateQuantity(product, quantity) {
        if (quantity <= 0) {
            console.log("Quantity must be greater than zero.");
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
    // EX8.6
    applyDiscountCode(codeInput) {
        const foundCode = this.#discountCodes.find((code1) => code1.code === codeInput);
        if (foundCode) {
            foundCode.isApplied = true;
        } else {
            console.log("Invalid discount code.");
        }
    }

    // EX8.5
    calculateTotal() {
        // EX8.6
        let discountTotal = 1;
        this.#discountCodes.forEach((code) => {
            if (code.isApplied === true) {
                discountTotal *= (100 - code.discountPercentage) / 100; // multiplying percentages to avoid absurd discount numbers
            }
        });

        let finalDiscount = (1 - discountTotal) * 100;
        console.log(`Total discount applied: ${finalDiscount.toFixed(2)}%`);

        return this.items.reduce((total, item) => {
            let priceToUse = item.product.isOnSale ? item.product.getSalePrice() : item.product.price;
            // EX8.6
            priceToUse *= discountTotal;
            return total + priceToUse * item.quantity;
        }, 0);
    }
}

// === Exercise 8 === Simulating Transactions and Handling Errors
// Substep 8.1: Adding Products to Cart
// Objective: Implement a method in the Cart class to add products.
// Tip: Create an addItem method which takes a Product instance and quantity as arguments. Check if
// the product is already in the cart and update the quantity accordingly.
// Tip: Each ‘item’ in the Cart should be an object with two properties: the Product & the Quantity
// Adding a Product would like this:
// items.push({ product, quantity });
// Substep 8.2: Removing Products from Cart
// Objective: Implement a method to remove a specific product from the cart.
// Substep 8.3: Updating Quantities in Cart
// Objective: Allow updating the quantity of a specific item in the cart.
// Substep 8.4: Add validation to the Cart
// Objective: Add validation to the Cart so that:
// 1) Nothing except an object of type ‘Product’ can be added.
// Tip: using the built in ‘instanceof’ operator to check a parameter’s type
// 2) The quantity of the Product being added must be greater than 0
// Substep 8.5: Handle Sales
// Objective: Implement functionality to apply sales to an instance of a product, BUT in a way where all
// instances of a particular product type (e.g., all TVs) will have the same sale price.
// Tips:
// Add a Boolean getter/setter isOnSale to the Product class.
// In each child class of Product, add a static property ‘salePrice’ which is private
// Add a method getSalePrice that returns a standard SalePrice for that type of product.
// Create a CalculateTotal method in the Cart class. It should check if each Product is on sale (isOnSale is
// true). If so, use the SalePrice from the corresponding child class; otherwise, use the standard Price.
// Substep 8.6: Handle Discounts
// Objective: Implement functionality to apply discount codes to the Cart i.e. all Products in the Cart
// need to have the Discount Code applied.
// Tips:
// In the Product class, add a method applyDiscount which takes a discount percentage and calculates
// the discounted price.
// In the Cart class, add a private collection of predefined DiscountCodes. Each code object should
// include a code string (e.g., "Hot32"), a Boolean flag indicating if the code is applied (e.g., isApplied),
// and a DiscountPercentage (e.g., 10%).
// Add a method applyDiscountCode in the Cart class. This method should take a code and check
// against the predefined discount codes. If it matches, set the isApplied flag to true for that discount
// code.
// Modify the CalculateTotal method in the Cart class. It should check which discount codes are applied
// and calculate the total price considering these discounts. If a discount code is applied, apply its
// discount percentage to every product in the cart.
// Substep 8.7: Create a Main Program use case
// Objective: Write a ‘main’ program which uses all the classes above to simulate the following
// scenario:
// User adds 3 TVs, and 1 Tshirt to the Cart
// Display the Cart total (print it contents and total to the console).
// User clicks ‘Sort’ on the Cart
// Display the Cart total (print it contents and total to the console).
// The user then enters a valid discount code, which results in the whole order being 15% discounted.
// Display the Cart total (print it contents and total to the console).
// The user then adds 4 books to their Cart. The books are on sale.
// NOTE: You will most likely get a error here because we can’t add anything to Cart unless it’s a
// Product. See TIP#1 below to fix the error
// Display the Cart total (print it contents and total to the console).
// The user removes 2 TVs from their Cart.
// Display the Cart total (print it contents and total to the console).
// User clicks ‘Sort’ on the Cart again to see if that changes the order of the products…
// Display the Cart total (print it contents and total to the console).
// Make sure the total prints out what you expect each time.
// TIP#1: The error you encountered is because we're trying to use ES6 class-based inheritance
// (Product) with the older function-based approach (Book). To resolve this, we should also convert
// Book into an ES6 class, which aligns with the ES6 class structure of Product i.e. use ‘extends’ in
// book.js like we’ve done with tv.js and shirt.js – including giving the book a sale price and a static
// getSalePrice method!
// Also – be careful about the order of parameters in your constructor functions.

// 