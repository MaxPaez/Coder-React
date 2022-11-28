import React from 'react';
import logo from '../logo.svg';
import Itemlist from './ItemList';

export default function ItemListContainer() {
	const productos = [
		{
			id: 100,
			name: 'Zapato Nike',
			precio: 200,
			srcImg:
				'https://gamarraecommerce.com/wp-content/uploads/2019/11/Air-Max-270-React-Bauhaus-3.jpg',
		},
		{
			id: 101,
			name: 'Zapato Adidas',
			precio: 180,
			srcImg:
				'https://assets.adidas.com/images/w_600,f_auto,q_auto/a09eb8e268064ca59756a8e800c6a771_9366/Zapatillas_Superstar_Blanco_B37277_01_standard.jpg',
		},
		{
			id: 102,
			name: 'Zapato Puma',
			precio: 150,
			srcImg:
				'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw838a11c6/products/PU_372602-13/PU_372602-13-1.JPG',
		},
		{
			id: 103,
			name: 'Zapato Reebook',
			precio: 170,
			srcImg:
				'https://reebokarg.vtexassets.com/arquivos/ids/160335/Imagen-1.jpg?v=638005367322500000#',
		},
		{
			id: 104,
			name: 'Zapato New Balance',
			precio: 190,
			srcImg:
				'https://www.zapatillasysneakers.com/sites/default/files/static/images/new_balance_574_colores_vintage_13_0.png#',
		},
	];

	return (
		<>
			<div>
				<h1>Bienvenidos</h1>
				<h2>Creando un app en React</h2>
				<h3>por Maximiliano Paez</h3>
				<img src={logo} className="App-logo" alt="logo" />
			</div>
			<Itemlist listaProductos={productos} />
		</>
	);
}
