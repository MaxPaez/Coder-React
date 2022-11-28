import React, { useState, useEffect } from 'react';

export default function Promesas() {
	const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		let promesaProductos = new Promise((res, rej) => {
			setTimeout(() => {
				res([
					{ id: 100, name: 'Zapato Nike', precio: 200 },
					{ id: 101, name: 'Zapato Adidas', precio: 180 },
					{ id: 102, name: 'Zapato Puma', precio: 150 },
					{ id: 103, name: 'Zapato Reebook', precio: 170 },
					{ id: 104, name: 'Zapato New Balance', precio: 190 },
				]);
			}, 2000);
		});

		promesaProductos
			.then((res) => {
				setProductos(res);
			})

			.catch((err) => {
				setError(err);
			})

			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<p>{loading ? 'Loading...' : 'fin'}</p>
			<p>{error ? error : null}</p>

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
