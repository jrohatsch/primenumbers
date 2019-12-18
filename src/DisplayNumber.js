import React from 'react';

export default class DisplayNumber {
	static counter = 2;

	constructor() {
		this.value = DisplayNumber.counter;
		this.isCrossedOut = false;
		this.wasClicked = false;
		DisplayNumber.counter++;
	}
}

export function renderDisplayNumber(number, onClick) {
	let displayNumber = number.isCrossedOut ? <strike>{number.value}</strike> : number.value;
	let classStyle = number.isCrossedOut ? 'number notPrime ' : 'number prime ';

	if (number.wasClicked) classStyle += 'wasClicked ';

	return (
		<div
			key={number.value}
			className={classStyle}
			onClick={() => onClick(number)}
		>
			{displayNumber}
		</div>
	);
}
