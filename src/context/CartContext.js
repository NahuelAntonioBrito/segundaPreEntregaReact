import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
        if (existingItemIndex !== -1) {
          // Si el artículo ya está en el carrito, actualizamos su cantidad
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
    
            setCart(updatedCart);
        } else {
          // Si el artículo no está en el carrito, lo agregamos al carrito
            setCart(prev => [...prev, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    };

    const clearCart = () => {
        setCart([])
    };

    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const total = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.precio * item.quantity;
        });
        return totalPrice;
    };



    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart, totalQuantity, total}}>
            { children }
        </CartContext.Provider>
    )
}