// recursive
let flatten_recursive = (arr) => {
	let res = arr.reduce((flatten, current) => {
		if(Array.isArray(current)){
			return flatten.concat(flatten_recursive(current))
		}
		flatten.push(current);
		return flatten;
	}, []);
	return res
}



// iterative method
let flatten_array = (arr) => {
	let original = [...arr];
	let flatten = []

	while(original.length > 0){
		let element = original.shift();
		if(Array.isArray(element)){
			// to print in hierarchy
			// original = original.concat(element);
			// to print in order
			original = element.concat(original);
		} else {
			flatten.push(element)
		}
	}
	return flatten;
}
console.log(flatten_array([1,2,3,[1,2],4,5,[6,[7,8,9],7]]))
console.log(flatten_recursive([1,2,3,[1,2],4,5,[6,[7,8,9],7]]))

