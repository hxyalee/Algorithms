const pull = (arr, ...indices) => {
	
	let bad = [...indices]
	return  arr.filter(val => !bad.includes(val))
}
console.log(pull([1, 2, 3, 1, 2, 3], 2, 3))