// El Cerebro (ListContainer): Es el componente contenedor. Su única misión es tener la lógica y conseguir los datos.

import { EquipoList } from "../EquipoList/EquipoList"
import { useState, useEffect } from "react";


export function EquipoListContainer() {
    const [equipo, setEquipo] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    // Para el useEffect si no pongo dependencias se ejecuta cada vez. 
    // Si pongo las dependencias vacías se ejecuta la primera vez que se renderiza el componente.
    // Si pongo una dependencia puntual se ejecuta cuando se actualiza esa dependencia.

    useEffect(() => {
        async function obtenerEquipo() {
            try {
                const respuesta = await fetch('/data/equipo.json');

                if (!respuesta.ok) {
                    throw new Error(
                        'No se pudo cargar la información del equipo'
                    );
                }

                const datos = await respuesta.json();
                setEquipo(datos);

            } catch (error) {
                setError(error.message);

            } finally {
                setCargando(false);
            }
        }

        obtenerEquipo();
    }, []);

    if (cargando) {
        return <p>Cargando equipo, por favor espere...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (equipo.length === 0) {
        return <p>No hay equipo disponible.</p>;
    }

    return (
        <EquipoList
            equipo={equipo}
            mensaje="Nuestro equipo"
        />
    );
}