const intersection = (...arr) => {
	let map = new Map();
	let input = [...arr];
	for(let i = 0; i < input.length; i++){
		for (let j = 0; j < input[i].length; j ++){
			if(map.has(input[i][j])) map.set(input[i][j], map.get(input[i][j])+1);
			else map.set(input[i][j], 1)
		}
	}
	let output = new Array();
	map.forEach((val, key) => {
		if(val == input.length) output.push(key)
	})
	return output;
}


console.log(intersection([1, 2], [4, 2], [2, 1]))