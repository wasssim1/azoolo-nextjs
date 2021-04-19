import React, {createContext, useEffect, useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState(["1", "2"]);

    useEffect(() => {
        // const items = JSON.parse(localStorage.getItem('cartItems'));
        // setCartItems(items);
    }, []);

    const addToCart = (item) => {
        if (!cartItems.includes(item)) {
            setCartItems([...cartItems, item]);
            localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
        }
    };

    const removeFromCart = (item, addToast) => {
        if (cartItems.includes(item)) {
            const updatedItems = cartItems.filter(x => x !== item);
            setCartItems(updatedItems);
            addToast("Removed From Cart", { appearance: "error", autoDismiss: true });
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        }
    };

    return (
        <CartContext.Provider value={{
            ...props,
            cartItems,
            addToCart,
            removeFromCart,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
