import "./App.css";
import Bienvenida from "./components/Bienvenida";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Producto from "./components/Producto";

function App() {
  let producto1 = { id: 100, name: "Zapato Nike", price: 100 };
  let producto2 = { id: 101, name: "Zapato Adidas", price: 150 };
  let producto3 = { id: 102, name: "Zapato Lola", price: 300 };

  return (
    <div className="App">
      <NavBar />

      <Bienvenida />

      <Producto item={producto1} color={"coral"} />
      <Producto item={producto2} color={"lightgray"} />
      <Producto item={producto3} color={"lightblue"} />

      <Footer />
    </div>
  );
}

export default App;
