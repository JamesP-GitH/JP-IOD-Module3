import Cart from "./Cart.js";
import Shirt from "./Shirt.js";
import TV from "./TV.js";
import Book from "./Book.js";

const cart = new Cart();
const tv1 = new TV('Samsung 50" 4K TV', 599.99, "A smart 4K TV", 50);

const shirt1 = new Shirt("Cotton T-Shirt", 19.99, "Soft cotton shirt", "M");

cart.addItem(tv1, 3);
cart.addItem(shirt1, 1);

console.log("Cart Total before sorting and discount:");
cart.displayCartContents();

cart.sortCart();
console.log("Cart after sorting:");
cart.displayCartContents();

try {
    cart.applyDiscountCode("Cold46");
} catch (error) {
    console.error(error.message);
}
console.log("Cart after applying discount:");
cart.displayCartContents();

const book1 = new Book("JavaScript for Beginners", 29.99, "A beginner's guide to JS.", "John Doe");

book1.isOnSale = true;

cart.addItem(book1, 4);

console.log("Cart after adding books:");
cart.displayCartContents();

cart.updateQuantity(tv1, 1);

console.log("Cart after removing TVs:");
cart.displayCartContents();

cart.sortCart();
console.log("Cart after sorting again:");
cart.displayCartContents();
