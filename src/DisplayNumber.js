
export default class DisplayNumber {
	static counter = 2;

	constructor() {
		this.value = DisplayNumber.counter;
		this.isCrossedOut = false;
		DisplayNumber.counter++;
	}
}
