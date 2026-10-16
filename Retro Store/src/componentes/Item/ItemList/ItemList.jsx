// El Organizador (List): Este componente es un intermediario. Recibe la lista completa de datos desde "El Cerebro" y su trabajo es organizar y preparar esa información.

import { Item } from "../Item/Item";
import styles from './ItemList.module.css'

export function ItemList({ productos, mensaje }) {
    return (
        <>
        <h2>{mensaje}</h2>
        <div className={styles.cardList}>
            {productos.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
        </>
    );
}
