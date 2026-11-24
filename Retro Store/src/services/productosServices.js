import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore/config";

const productosdb = collection(db, 'productos');

// Read - Obtener todos los documentos de la colección

export const readProductos = async () => {
    const resp = await getDocs(productosdb);

    return resp.docs.map((doc) => ({
        ...doc.data(), id: doc.id
    }));
};