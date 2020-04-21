const union = (...arr) => {
	let set = new Set();
	let input = [...arr];
	for(arr of input){
		for(n of arr){
			set.add(n);
		}
	}
	return Array.from(set.values());
}
console.log(union([1, 2], [4, 2], [2, 1]))