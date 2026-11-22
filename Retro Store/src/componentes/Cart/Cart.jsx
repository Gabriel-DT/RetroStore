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
            {cart.map((item) => (
                <div key={item.id}>
                    <h2>{item.nombre}</h2>
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.quantity}</p>
                </div>
            ))}
            <hr />
            <p>Total de productos: {getCartQuantity()}</p>
            <p>Total a pagar: ${getCartTotal()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
    console.log(item);
};


export default Cart;