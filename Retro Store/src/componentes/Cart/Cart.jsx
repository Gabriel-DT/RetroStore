import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart, clearCart, getCartQuantity, getCartTotal } = useCart(); // Obtengo las funciones del contexto para manejar el carrito


    if (cart.length === 0) {
        return (
            <div>
                <h1>Carrito de Compras</h1>
                <p>El carrito está vacío.</p>
            </div>
        );
    }



    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <p>Cantidad: {producto.quantity}</p>
                </div>
            ))}
            <hr />
            <p>Total de productos: {getCartQuantity()}</p>
            <p>Total a pagar: ${getCartTotal()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
    console.log(producto);
};


export default Cart;