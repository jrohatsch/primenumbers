import React from 'react';

export default class DisplayNumber{
	static counter = 2;
	constructor(){
		this.value = DisplayNumber.counter;
		this.wasRead = false;
		this.isCrossedOut = false;
		DisplayNumber.counter++;	
	}

}
