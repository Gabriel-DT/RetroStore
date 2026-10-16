// El Exhibidor: Este es el componente presentacional puro. Es el encargado de la apariencia

import styles from './Equipo.module.css'

// Recibe las props usando destructuring
export function Equipo({ id, nombre, email, puesto, foto }) {


    return (
        <div className={styles.card}>
            <img src={foto} className={styles.imagen} alt="" />
            <div className={styles.cardTitle}>
                <h3>{nombre}</h3>
            </div>
            <p>{puesto}</p>
            <p>Email: {email}</p>
        </div>
    )
}