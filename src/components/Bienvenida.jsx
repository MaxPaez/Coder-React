import logo from "../logo.svg";
import React from "react";

export default function Bienvenida() {
    return (
        <div>
            <h1>Creando un app en React</h1>
            <h2>Hola mundo</h2>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Creado por Maximiliano Paez</p>
        </div>
    );
}
