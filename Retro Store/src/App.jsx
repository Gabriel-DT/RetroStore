import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/Layout/Layout';
import { ProductoListContainer } from './componentes/Producto/ProductoListContainer/ProductoListContainer';
import { FormularioProducto } from './componentes/ProductoFormulario/ProductoFormulario/ProductoFormulario';
import { Productos } from './componentes/productos';
import { ProductoDetalleListContainer } from './componentes/ProductoDetalle/ProductoDetalleListContainer/ProductoDetalleListContainer';
import { FormularioContainer } from './componentes/ProductoFormulario/ProductoFormularioContainer/ProductoFormularioContainer';
import { Gestion } from './componentes/Gestion/Gestion';
import { EquipoListContainer } from './componentes/Equipo/EquipoListContainer/EquipoListContainer';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 

      <Route path="/" element={<h1>Inicio</h1>} />
      <Route path="/productos" element={<ProductoListContainer/>} />
      <Route path="/nosotros" element={<EquipoListContainer/>} />
      <Route path="/gestion" element={<Gestion/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/producto/:id" element={<ProductoDetalleListContainer />} />

      <Route path="*" element={<> <h1>404 - Página no encontrada</h1> <br /> <a href="/">Volver al inicio</a> </> } />

      </Route>
    </Routes>
  );
}
export default App;
