import React from 'react';
import styles from './ProductoFormulario.module.css';

export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio }) {

    return (
        <form className={styles.form} onSubmit={manejarEnvio}>
            <div className={styles.headerForm}>
                <h3 className={styles.title}>Agregar Nuevo Producto</h3>
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Nombre del Producto</label>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre" // Atributo clave para identificar el input
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Precio</label>
                <input
                    className={styles.input}
                    type="number"
                    placeholder="Ej: 95"
                    name="precio" // Atributo clave
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Stock</label>
                <input
                    className={styles.input}
                    type="number"
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Imagen</label>
                <input
                    className={styles.fileInput}
                    type="file"
                    name="imagen"
                    onChange={manejarCambio}
                />
            </div>

            <button className={styles.submitButton} type="submit">
                Guardar Producto
            </button>
        </form>
    );
}