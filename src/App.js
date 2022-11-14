import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  let x = "Hola mundo";  
    return (
    <div style={{color: "#ff0000"}} className="App">
      <NavBar />

      <div>
      <h1>Creando un app en React</h1>
      <h2>{x}</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Creado por Maximiliano Paez</p>
      </div>
      
      <div>
        Footer
      </div>
    </div>
  );
}



export default App;
