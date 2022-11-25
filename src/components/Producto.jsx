import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

let render = 0;

export default function Producto({ id, item, color }) {
  console.log('render producto');

  // let contador = 0;
  const [contador, setContador] = useState(0);

  return (
    <Container style={{ backgroundColor: color, marginTop: '20px', paddingTop: '1rem', maxWidth: '40%' }}>
      <h1>contador: {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
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
