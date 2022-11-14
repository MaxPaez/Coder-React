import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  /*Spread operator */

  // let myobj = { id: 100, nombre: "maxi"};
  // // myobj.edad = 40;

  // myobj = {...myobj, edad: 40};

  // console.log(myobj)

  //   let myarray = [1, 2, 3, 4 ,5];
  //   // myarray.push(6) NO SE UTILIZA EN REACT
  // myarray = [...myarray, 6];


  //   console.log(myarray)

  // desestructuración
  // const persona = {id:100, name: "maxi", edad: 43};

  //   const {name, id} = persona;

  //   console.log(name);
  //   console.log(id);
  //   console.log(persona);


  function suma(a, b) {
    return a + b;
  }
 let resultado = suma(1,3);

 console.log(resultado);
 





  return (
    <ChakraProvider>
      <div className="App">
        <h1>Creando un app en React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Creado por Maximiliano Paez</p>

      </div>
    </ChakraProvider>
  );
}

export default App;
