import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    static #allCarts = []
    #cartItems = [];
    constructor(){
        this.id = getId();
        ShoppingCart.#allCarts.push(this)
    }

    createItem(itemName, itemPrice){
        const newItem = new CartItem(itemName, itemPrice);
        this.#cartItems.push(newItem);
        return newItem;
    }
    getItems(){
        return [...this.#cartItems]
    }
    getTotal(){
        let sum = 0
        this.#cartItems.forEach(x => {
            sum += x.price
        })
        return sum;
    }
    removeItem(id){
        this.#cartItems = this.#cartItems.filter(item => item.id !== id)
    }
    static findBy(id) {
        let foundCart = {}
        ShoppingCart.#allCarts.forEach(cart => {
            if (cart.id === id){
                foundCart = cart
            }
        })
        return foundCart
    }
    static listAll(){
        return [...ShoppingCart.#allCarts]
    }
}

export default ShoppingCart;