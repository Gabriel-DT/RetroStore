import { createContext, useContext } from 'react';
import { useState } from 'react';

// Exporto la variable para que otros componente puedan usarla.

// Contexto para el carrito de compras
export const CartContext = createContext();

// Consumer con hook personalizado

// Como son muchas funciones uso el export y no el default.
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        // Me aseguro que el componente tenga acceso al provider. Si no lo tiene, lanzo un error.
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
}

// Provider

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {

        const itemInCart = cart.find(item => item.id === product.id); // Verifico si el producto ya está en el carrito

        if (itemInCart) { // Si el producto ya está en el carrito, actualizo la cantidad
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
            setCart(updatedCart); // Actualizo el producto con la nueva cantidad
        } else {  // Si el producto no está en el carrito, lo agrego con la cantidad especificada
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }
    };

    const clearCart = () => {
        setCart([]); // Vacío el carrito
    }

    const getCartQuantity = () => {
        // reduce me permite iterar sobre el array y acumular un valor. En este caso, acumulo la cantidad de productos en el carrito.
        return cart.reduce((total, item) => total + item.quantity, 0); // Retorno la cantidad total de productos en el carrito. Si no tengo nada cero.
    }

    const getCartTotal = () => {
        // reduce me permite iterar sobre el array y acumular un valor. En este caso, acumulo el total del carrito.
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0); // Retorno el total del carrito. Si no tengo nada cero.
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
}