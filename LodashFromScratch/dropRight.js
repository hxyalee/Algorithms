//Creates a slice of array with n elements dropped from the end.


const dropRight = (arr, idx = 1) => {	
	return arr.slice(0,arr.length - idx)
}
console.log(dropRight([1, 2, 3], 2))