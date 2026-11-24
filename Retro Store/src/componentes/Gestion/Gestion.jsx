import { useEffect, useState } from "react";
import { readProductos } from "../../services/productosServices";
import { ListadoProductos } from "../ListadoProductos/ListadoProductos";
import styles from "./Gestion.module.css";

export function Gestion() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const datos = await readProductos();
                setProductos(datos);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();
    }, []);

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.container}>
            <h2>Gestión de productos</h2>

            <ListadoProductos productos={productos} />
        </div>
    );
}
