import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Header() {

const { getCartQuantity } = useCart(); // Obtengo la función del contexto para obtener la cantidad de productos en el carrito
const totalItems = getCartQuantity(); // Obtengo la cantidad total de productos en el carrito

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Retro Store</h1>

        <nav className={styles.navbar} aria-label="Navegación principal">
          <Link to="/productos" className={styles.navButton}>
            Productos
          </Link>
          <Link to="/nosotros" className={styles.navButton}>
            Equipo
          </Link>
          <Link to="/nuevo" className={styles.navButton}>
            Nuevo Producto
          </Link>
          <Link to="/cart" className={styles.navButton}>
            Carrito ({ totalItems > 0 && <span>{totalItems}</span> })
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;