import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function Producto({ id, item, color, cant }) {
  console.log('render producto', color, cant);

  // let contador = 0;
  const [contador, setContador] = useState(cant);
  const [contador2, setContador2] = useState(cant);

  // montaje / nacimiento
  useEffect(() => {
    // todas las lineas que quiero que se hagan cuando nace un componente
    console.log('se montó el componente por primera vez');
  }, []);

  //mientras viva el componente
  useEffect(() => {
    // todas las lineas que quiero que se hagan cuando nace un componente
    console.log('siempre que hay un render');
  });

  // cuando se usa contador 1
  useEffect(() => {
    // todas las lineas que quiero que se hagan cuando nace un componente
    console.log('siempre que se use el contador 1');
  }, [contador]);

  // cuando se usa contador 2
  useEffect(() => {
    // todas las lineas que quiero que se hagan cuando nace un componente
    console.log('siempre que se use el contador 2');
  }, [contador2]);

  //cuando muere / desmonta el componente
  useEffect(() => {
    return () => {
      console.log('cuando muere el componente');
    };
  }, []);

  return (
    <Container style={{ backgroundColor: color, marginTop: '20px', paddingTop: '1rem', maxWidth: '40%' }}>
      <h1>Contador: {contador}</h1>
      <button
        onClick={() => {
          //contador = contador + 1;
          setContador(contador + 1);
        }}
      >
        Sumar contador
      </button>
      <button
        onClick={() => {
          //contador = contador + 1;
          setContador2(contador2 + 1);
        }}
      >
        Sumar contador
      </button>
      <h2>Cod: {item.id}</h2>
      <h2>{item.name}</h2>
      <h2>Precio ${item.price}</h2>

      <br />
    </Container>
  );
}
