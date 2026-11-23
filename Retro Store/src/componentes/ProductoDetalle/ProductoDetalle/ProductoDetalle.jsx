import styles from './ProductoDetalle.module.css'
import { Link } from 'react-router-dom';

export function ProductoDetalle({ producto, mensaje }) {

    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h3>{producto?.nombre}</h3>
            </div>
            <p>Precio: ${producto?.precio}</p>
            <p>Stock disponible: {producto?.stock}</p>
            <img src={producto?.imagen} className={styles.imagen} alt="" />
            <div className={styles.contador}>
                <p style={{ margin: '0 10px' }}>{producto?.cantidad}</p>
            </div>
            <p>{producto?.descripcion}</p>
            <br></br>
           <button>
                <Link to={`/productos/`}>Volver</Link>
            </button>
        </div>
    );
};
