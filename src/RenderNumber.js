import React from 'react';

export default function renderNumbers(array) {
	let output = [];

	array.forEach((number)=>{
                let classNumber = 'number';
		let out = number.value;

		if(number.wasRead && number.isCrossedOut){
		  classNumber = 'number notPrime';
		  //out = <strike>{number.value}</strike>;
		}
		else if(number.wasRead && !number.isCrossedOut){
		  classNumber = 'number prime';
		  //console.log('Found ',number.value);
		}

		output.push(
		  <div key={number.value} className={classNumber}>
			{out}
		  </div>);	
	});	

	return output;
}
