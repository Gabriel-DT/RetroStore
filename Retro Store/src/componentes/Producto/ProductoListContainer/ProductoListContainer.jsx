// El Cerebro (ProductoListContainer): Es el componente contenedor. Su única misión es tener la lógica y conseguir los datos.

import { ProductoList } from "../ProductoList/ProductoList";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firestore/config";


export function ProductoListContainer({ }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    // Para el useEffect si no pongo dependencias se ejecuta cada vez. 
    // Si pongo las dependencias vacías se ejecuta la primera vez que se renderiza el componente.
    // Si pongo una dependencia puntual se ejecuta cuando se actualiza esa dependencia.

    useEffect(() => {
        async function obtenerProductos() {
            try {
                // const respuesta = await fetch('/data/productos.json')

                // if (!respuesta.ok) {
                //     throw new Error(
                //         'No se pudo cargar la información de los productos'
                //     );
                // }
                // const datos = await respuesta.json();
                // setProductos(datos);

                const productosdb = collection(db, 'productos');
                getDocs(productosdb).then((res) => {
                    setProductos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                });

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
        <ProductoList
            productos={productos}
            mensaje="Nuestros productos destacados"
        />
    );
}
