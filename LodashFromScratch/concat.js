//Creates a new array concatenating array with any additional arrays and/or values.

let concat = (...args) => {
	let output = new Array();
	for(let arg of args){
		if (Array.isArray(arg)) output=output.concat(arg);
		else output.push(arg);
	}
	return output;
}

console.log(concat([1], 2, [3], [[4]]))