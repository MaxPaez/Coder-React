import React, { useState, useEffect } from 'react';

export default function Promesas() {
	const [pago, setPago] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	let pagara = new Promise((res, rej) => {
		setTimeout(() => {
			// res(40);
			rej('NO PAGÓ');
		}, 3000);
	});

	pagara
		.then((res) => {
			setPago(res);
		})

		.catch((err) => {
			setError(err);
		})

		.finally(() => {
			setLoading(false);
		});

	return (
		<div>
			<p>Loading: {loading ? 'Loading...' : 'fin'}</p>
			<p>Pago: {pago ? pago : null}</p>
			<p>Error: {error ? error : null}</p>
		</div>
	);
}
