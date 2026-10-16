import { EquipoListContainer } from "../Equipo/EquipoListContainer/EquipoListContainer";
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <EquipoListContainer></EquipoListContainer>
            <p>&copy; 2025 - Mi Aplicación React</p>
        </footer>
    );
}
export default Footer;