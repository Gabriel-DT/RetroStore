// El Organizador (List): Este componente es un intermediario. Recibe la lista completa de datos desde "El Cerebro" y su trabajo es organizar y preparar esa información.

import { Equipo } from "../Equipo/Equipo";
import styles from './EquipoList.module.css';

export function EquipoList({ equipo, mensaje }) {

    if (!Array.isArray(equipo)) {
        return <p>Error: no se recibió un array en la propiedad equipo.</p>;
    }

    return (
        <>
            <h2>{mensaje}</h2>

            <div className={styles.cardList}>
                {equipo.map(integrante => (
                    <Equipo key={integrante.id} {...integrante} />
                ))}
            </div>
        </>
    );
}