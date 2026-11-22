import styles from './Header.module.css'
import { useCart } from '../../context/CartContext';

function Header() {

const { getCartQuantity } = useCart(); // Obtengo la función del contexto para obtener la cantidad de productos en el carrito

const totalItems = getCartQuantity(); // Obtengo la cantidad total de productos en el carrito

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Retro Store</h1>

        <nav className={styles.navbar} aria-label="Navegación principal">
          <button className={styles.navButton}>Productos</button>
          <button className={styles.navButton}>Equipo</button>
          <button className={styles.navButton}>Contacto</button>
          <button className={styles.navButton}>Carrito ({ totalItems > 0 && <span>{totalItems}</span> })</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;