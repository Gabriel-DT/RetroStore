import './App.css';
import { Layout } from './componentes/layout/Layout';
import { ItemListContainer } from './componentes/Item/ItemListContainer/ItemListContainer';
import Productos from './componentes/productos';

function App() {
  return (
    <Layout>
      {/* Todo lo que pongamos acá adentro irá donde estaba {children} */}
      <br></br>
      <ItemListContainer/>
    </Layout>
  );
}
export default App;
