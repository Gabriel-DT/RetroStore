import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".


// Esta exportación permite más de una función por archivo
export function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>);
}