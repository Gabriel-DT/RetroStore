import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Retro Store</h1>

        <nav className={styles.navbar} aria-label="Navegación principal">
          <button className={styles.navButton}>Productos</button>
          <button className={styles.navButton}>Equipo</button>
          <button className={styles.navButton}>Contacto</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;