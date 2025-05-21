import Product from "./Product.js";

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

    displayCartContents() {
        console.log("Cart Contents:");

        let discountTotal = 1;
        this.#discountCodes.forEach((code) => {
            if (code.isApplied) {
                discountTotal *= (100 - code.discountPercentage) / 100;
            }
        });

        this.items.forEach((item) => {
            const product = item.product;
            const originalPrice = product.price;

            let salePrice =
                product.isOnSale && typeof product.constructor.getSalePrice === "function"
                    ? product.constructor.getSalePrice()
                    : originalPrice;

            let finalPrice = salePrice * discountTotal;

            const originalStr = `$${originalPrice.toFixed(2)}`;
            const saleStr = product.isOnSale ? `$${salePrice.toFixed(2)}` : "N/A";
            const finalStr = `$${finalPrice.toFixed(2)}`;

            console.log(
                `Product: ${product.name}, Quantity: ${item.quantity}, ` + `Original: ${originalStr}, Sale: ${saleStr}, Final: ${finalStr}`
            );
        });

        let discountPercent = ((1 - discountTotal) * 100).toFixed(2);
        console.log(`Total discount applied: ${discountPercent}%`);
        console.log(this.calculateTotal());
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

        return this.items
            .reduce((total, item) => {
                const productClass = item.product.constructor;
                let priceToUse = item.product.isOnSale ? productClass.getSalePrice() : item.product.price;
                priceToUse *= discountTotal;
                return total + priceToUse * item.quantity;
            }, 0)
            .toFixed(2);
    }
}

export default Cart;
