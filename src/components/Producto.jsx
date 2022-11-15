import React from "react";

export default function Producto({ item, color, alertHolaMundo }) {

  return (
    <div style={{backgroundColor: color, marginTop: "20px"}}>
      
      <h2>{item.name}</h2>
      <h2>{item.price}</h2>
      <br />
    </div>
  );
}
