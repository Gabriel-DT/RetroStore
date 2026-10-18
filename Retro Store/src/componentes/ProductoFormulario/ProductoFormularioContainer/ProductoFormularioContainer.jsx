import React, { useState } from 'react';
import { FormularioProducto } from '../ProductoFormulario/ProductoFormulario';

export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
        urlImagen: ''
    });
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;

        console.log(`Cambio en el campo ${name}:`, value);

        if (name === 'precio' || name === 'stock') {
            // Validar que el valor sea un número positivo
            if (value < 0) {
                return; // No actualizar el estado si es negativo
            }
        }

        setDatosForm({
            ...datosForm,
            [name]: value
        });
    };
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log('Enviando los siguientes datos a la API:', datosForm);
    };
    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
        />
    );
} 
