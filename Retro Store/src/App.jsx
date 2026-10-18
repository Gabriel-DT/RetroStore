import './App.css';
import { Layout } from './componentes/Layout/Layout';
import { ItemListContainer } from './componentes/Item/ItemListContainer/ItemListContainer';
import { FormularioProducto } from './componentes/ProductoFormulario/ProductoFormulario/ProductoFormulario';
import Productos from './componentes/productos';
import { FormularioContainer } from './componentes/ProductoFormulario/ProductoFormularioContainer/ProductoFormularioContainer';


function App() {
  return (
    <Layout>
      {/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
      <br></br>
      <ItemListContainer/>
      <FormularioContainer/>
    </Layout>
  );
}
export default App;
