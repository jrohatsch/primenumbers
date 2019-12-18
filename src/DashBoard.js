import React, { useState } from 'react';
import DisplayNumber, { renderDisplayNumber } from './DisplayNumber.js';

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

			copyArray[index].wasClicked = true;

			for (let i = index + number.value; i < copyArray.length; i += number.value) {
				copyArray[i].isCrossedOut = true;
			}
		});
		setNumbers(copyArray);
	}

	function resetAnimation() {
		let copyArray = [...numbers];

		copyArray.forEach((number) => {
			number.wasClicked = false;
			number.isCrossedOut = false;
		});
		setNumbers(copyArray);
	}

	function crossOutMultiples(number) {
		let copyArray = [...numbers];
		let index = number.value - 2;

		copyArray[index].wasClicked = true;

		for (let i = index + number.value; i < copyArray.length; i += number.value) {
			copyArray[i].isCrossedOut = true;
		}

		setNumbers(copyArray);
	}

	const renderedNumbers = [];

	numbers.forEach((number) => {
		renderedNumbers.push(
			renderDisplayNumber(number, crossOutMultiples)
		);
	});

	return (
		<div style={{ maxWidth: '80vw', marginLeft: '10vw' }}>
			<h2>Sieve of Eratosthenes in Realtime JavaScript</h2>
			<h3>
				Click on the Numbers to cross out the multiples of it, or press START
				to do this for all numbers
			</h3>
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





