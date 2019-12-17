import React, { useState } from 'react';
import DisplayNumber from './DisplayNumber.js';

export default function DashBoard(props) {
	let initArray = [];

	for (let i = 0; i < props.MAX; ++i) {
		initArray.push(new DisplayNumber());
	}

	const [numbers, setNumbers] = useState(initArray);

	function startAnimation() {
		let copyArray = [...numbers];

		copyArray.forEach((number, index) => {
			if (number.isCrossedOut) return;

			for (let i = index + number.value; i < copyArray.length; i += number.value) {
				copyArray[i].isCrossedOut = true;
			}
		});
		setNumbers(copyArray);
	}

	function resetAnimation() {
		let copyArray = [...numbers];

		copyArray.forEach((number) => {
			number.isCrossedOut = false;
		});
		setNumbers(copyArray);
	}

	const renderedNumbers = numbers.map((number, index) => (
		<div key={index} className={number.isCrossedOut ? 'number notPrime' : 'number prime'}>
			{number.value}
		</div>));

	return (
		<div style={{ maxWidth: '80vw', marginLeft: '10vw' }}>
			<h2>Sieve of Eratosthenes in Realtime JavaScript</h2>
			<div onClick={() => startAnimation()} className='startButton Button'>
				Start
			</div>
			<div onClick={() => resetAnimation()} className='resetButton Button'>
				Reset
			</div>

			{renderedNumbers}
		</div>
	);
}





