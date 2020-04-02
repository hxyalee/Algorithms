class MaxStack{
	constructor(){
		this.elements = [];
	}
	/** 
	 * @param {number} x
	 * @return {void}
	 */
	push(num){
		// since stack, only care about max on the left hand side
		let val = {
			value: num,
			max: this.elements.length === 0 ? num : Math.max(num,this.getMax())
		}
		this.elements.push(val);
	}
	/**
	 * @return {void}
	 */
	pop(){
		this.elements.pop();
	}

	/**
	 * @return {number}
	 */
	top(){
		return this.elements[this.elements.length - 1].value;
	}
	/**
	 * @return {number}
	 */
	getMax(){
		return Math.max(this.elements[this.elements.length - 1].max)
	}

}