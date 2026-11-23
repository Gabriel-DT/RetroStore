// El Organizador (List): Este componente es un intermediario. Recibe la lista completa de datos desde "El Cerebro" y su trabajo es organizar y preparar esa información.

import { Producto } from "../Producto/Producto";
import styles from './ProductoList.module.css'

export function ProductoList({ productos, mensaje }) {
    return (
        <>
        <h2>{mensaje}</h2>
        <br></br>
        <div className={styles.cardList}>
            {productos.map(prod => (
                <Producto key={prod.id} {...prod} />
            ))}
        </div>
        </>
    );
}
