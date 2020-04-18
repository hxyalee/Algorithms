const flatten = (arr) => {
	let output = new Array()
	for(val of arr){
		if(Array.isArray(val)) output=output.concat(val)
		else output.push(val)
	}
	return output
}

const flattenDepth = (arr, depth=1) => {
	let output = arr;
	while(depth > 0){
		output = flatten(output)
		depth--;
	}
	return output;
}
console.log(flattenDepth([1, [2, [3, [4]], 5]], 2))