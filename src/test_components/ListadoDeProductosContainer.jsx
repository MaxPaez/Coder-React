import React from 'react';
import ListadoDeProductosLayout from './ListadoDeProductosLayout';

export default function ListadoDeProductos() {
  const productos = [
    { id: 100, name: 'Zapato Nike', precio: 200 },
    { id: 101, name: 'Zapato Adidas', precio: 180 },
    { id: 102, name: 'Zapato Puma', precio: 150 },
    { id: 103, name: 'Zapato Reebook', precio: 170 },
    { id: 104, name: 'Zapato New Balance', precio: 190 },
  ];

  return <ListadoDeProductosLayout productos={productos} />;
}
