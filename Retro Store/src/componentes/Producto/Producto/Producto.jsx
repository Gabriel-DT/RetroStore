// El Exhibidor (Producto): Este es el componente presentacional puro. Es el encargado de la apariencia

import { useState, useEffect } from "react";
import styles from './Producto.module.css'
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";

// Recibe las props usando destructuring
export function Producto({ id, nombre, precio, stock, imagen }) {
    const [cantidad, setCantidad] = useState(0);
    const [esFavorito, setEsFavorito] = useState(false)

    const { addToCart } = useCart(); // Obtengo la función del contexto para agregar al carrito

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const CompraClick = () => {// Quiero que se ejecute cuando le doy clic
        alert(`¡Agregaste ${cantidad} unidades de ${nombre} al carrito!`);
    };

    const handleAddToCart = () => {
        addToCart({ id, nombre, precio, stock, imagen }, cantidad); // Agrego el producto al carrito usando la función del contexto
        
        alert(`¡Agregaste ${cantidad} unidades de ${nombre} al carrito!`);
    };

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h3>{nombre}</h3>
                <span className={styles.favorito} onClick={marcarComoFavorito}>
                    {esFavorito ? '⭐' : '☆'}
                </span>
            </div>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <img src={imagen} className={styles.imagen} alt="" />
           <button>
                <Link to={`/producto/${id}`}>Más información</Link>
            </button>
            <div className={styles.contador}>
                <button onClick={decrementar}>-</button>
                <p style={{ margin: '0 10px' }}>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>

            {/* Cuando le boton detecta un clic (onClick), se ejecuta la función */}
            <button onClick={handleAddToCart}>Comprar</button>
        </div>
    )
}