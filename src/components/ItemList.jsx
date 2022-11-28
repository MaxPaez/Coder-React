import React, { useState, useEffect } from 'react';

export default function Itemlist(listaProductos) {
	// console.log(listaProductos);

	const [productos, setProductos] = useState([]);

	useEffect(() => {
		let promesaProductos = new Promise((res) => {
			setTimeout(() => {
				res(listaProductos);
			}, 2000);
		});

		promesaProductos.then((res) => {
			setProductos(res);
			// console.log(res);
		});
	}, []);

	return (
		<div>
			{productos.map((item) => (
				<div>
					<p>{item.id}</p>
					<p>{item.name}</p>
					<p>{item.precio}</p>
				</div>
			))}
		</div>
	);
}
