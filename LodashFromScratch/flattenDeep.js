const flattenDeep = (arr) => {
	let original = [...arr];
	let output = new Array();
	while(original.length > 0){
		let curr = original.shift()
		if(Array.isArray(curr)) original = curr.concat(original)
		else output.push(curr)
	}
	return output
}

console.log(flattenDeep([1, [2, [3, [4]], 5]]))