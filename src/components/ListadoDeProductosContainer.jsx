import React from "react";
import ListadoDeProductosLayout from "./ListadoDeProductos.Layout";

export default function ListadoDeProductos() {
  const productos = [
    { id: 100, name: "Zapato Nike", precio: 100 },
    { id: 101, name: "Zapato Nike", precio: 100 },
    { id: 102, name: "Zapato Nike", precio: 100 },
    { id: 103, name: "Zapato Nike", precio: 100 },
    { id: 104, name: "Zapato Nike", precio: 100 },
  ];

  return <ListadoDeProductosLayout productos={productos} />;
}
