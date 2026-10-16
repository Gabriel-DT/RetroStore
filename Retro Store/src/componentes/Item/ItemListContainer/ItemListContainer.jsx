// El Cerebro (ItemListContainer): Es el componente contenedor. Su única misión es tener la lógica y conseguir los datos.

import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";


export function ItemListContainer({ }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    // Para el useEffect si no pongo dependencias se ejecuta cada vez. 
    // Si pongo las dependencias vacías se ejecuta la primera vez que se renderiza el componente.
    // Si pongo una dependencia puntual se ejecuta cuando se actualiza esa dependencia.

    useEffect(() => {
        async function obtenerProductos() {
            try {
                const respuesta = await fetch('/data/productos.json')

                if (!respuesta.ok) {
                    throw new Error(
                        'No se pudo cargar la información de los productos'
                    );
                }
                const datos = await respuesta.json();
                setProductos(datos);

            } catch (error) {
                setError(error.message);

            } finally {
                setCargando(false);
            }
        }

        obtenerProductos();
    }, []);
    // como la dependencia está vacia sólo se ejecuta una vez

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    if (productos.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    return (
        <ItemList
            productos={productos}
            mensaje="Nuestros productos destacados"
        />
    );
}
