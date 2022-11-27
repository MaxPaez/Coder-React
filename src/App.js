import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ListadoDeProductosLayout from './components/ListadoDeProductosLayout';
import NavBar from './components/NavBar';
import Producto from './components/Producto';
import Promesas from './test_components/Promesas';

function App() {
  let producto1 = { id: 100, name: 'Zapatilla Nike', price: 180 };
  let producto2 = { id: 101, name: 'Zapatilla Adidas', price: 150 };
  let producto3 = { id: 102, name: 'Zapatilla Puma', price: 130 };

  return (
    <div className="App">
      <NavBar />

      <ItemListContainer />

      <Promesas />

      <ListadoDeProductosLayout />

      {/* <Producto item={producto1} color={'coral'} cant={0} /> */}
      {/* <Producto item={producto2} color={'lightblue'} cant={0} /> */}
      {/* <Producto item={producto3} color={'coral'} cant={0} />   */}

      <Footer />
    </div>
  );
}

export default App;
