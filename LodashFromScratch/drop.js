// Creates a slice of array with n elements dropped from the beginning.

const drop = (arr, idx=1) => {
	return arr.slice(idx)
}

console.log(drop([1, 2, 3]))