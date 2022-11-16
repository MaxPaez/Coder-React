import React from "react";

export default function Producto({ id, item, color }) {

  return (
    <div style={{backgroundColor: color, marginTop: "20px", paddingTop: "1rem", maxWidth: "40%",}}>
      
      <h2>Cod: {item.id}</h2>
      <h2>{item.name}</h2>
      <h2>Precio ${item.price}</h2>
      <br />
    </div>
  );
}
