// El Cerebro (ProductoDetalleListContainer): Es el componente contenedor. Su única misión es tener la lógica y conseguir los datos.

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductoDetalle } from "../ProductoDetalle/ProductoDetalle";

export function ProductoDetalleListContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // Para el useEffect si no pongo dependencias se ejecuta cada vez. 
    // Si pongo las dependencias vacías se ejecuta la primera vez que se renderiza el componente.
    // Si pongo una dependencia puntual se ejecuta cuando se actualiza esa dependencia.

    useEffect(() => {
        async function obtenerProducto() {
            try {
                const respuesta = await fetch('/data/productos.json')

                if (!respuesta.ok) {
                    throw new Error(
                        'No se pudo cargar la información de los productos'
                    );
                }

                const datos = await respuesta.json();
                setProducto(datos.find((p) => String(p.id) === String(id)));

            } catch (error) {
                setError(error.message);

            } finally {
                setCargando(false);
            }
        }

        obtenerProducto();
    }, []);
    // como la dependencia está vacia sólo se ejecuta una vez

    if (cargando) {
        return <p>Cargando producto, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    if (producto === null) {
        return <p>No hay producto disponibles.</p>;
    }

    return (
        <ProductoDetalle
            producto={producto}
            mensaje="Detalle del producto"
        />
    );
}
