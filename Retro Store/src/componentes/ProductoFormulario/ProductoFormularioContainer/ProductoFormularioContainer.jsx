import React, { useState } from 'react';
import { FormularioProducto } from '../ProductoFormulario/ProductoFormulario';

const imgbbapiKey = import.meta.env.VITE_IMGBB_API_KEY;

export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
    });

    // Estado para el archivo de imagen
    const [imagenFile, setImagenFile] = useState(null);

    const manejarCambio = (evento) => {
        const { name, value } = evento.target;

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

    // Función para manejar el cambio del input de tipo "file" (el botón de seleccionar archivo)
    const manejarCambioImagen = (evento) => {
        // En caso de que me pasen varios archivos, solo tomo el primero
        setImagenFile(evento.target.files[0]);
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault(); // Evito que se recargue la página al enviar el formulario
        // Validamos que el usuario haya seleccionado una imagen
        if (!imagenFile) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }
        // --- Lógica para subir la imagen a Imgbb ---
        
        const formData = new FormData();
        formData.append('image', imagenFile);
        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await
                fetch(`https://api.imgbb.com/1/upload?key=${imgbbapiKey}`, {
                    method: 'POST',
                    body: formData,
                });
            const datosImgbb = await respuestaImgbb.json();
            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
                // Unimos la URL de la imagen con el resto de los datos del formulario
                const productoCompleto = {
                    ...datosForm,
                    // Agregamos la URL obtenida
                    urlImagen: datosImgbb.data.url
                };
                // Por el momento hacemos un console.log
                console.log('Enviando los siguientes datos COMPLETOS a la API:',
                    productoCompleto);
            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        }
    };
    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            // Pasamos la nueva función como prop
            manejarCambioImagen={manejarCambioImagen}
        />
    );
} 
