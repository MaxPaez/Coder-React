import logo from "../logo.svg";
import React from "react";

export default function ItemListContainer() {
  return (
    <div>
      <h1>Bienvenidos</h1>
      <h2>Creando un app en React</h2>
      <h3>por Maximiliano Paez</h3>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
