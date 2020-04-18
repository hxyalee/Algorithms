// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.
const chunk = (arr, size=1) => {
	let output = new Array();
	let length = arr.length;
	output.push(arr.slice(0,size))
	output.push(arr.slice(size))
	return output
}


console.log(chunk(['a', 'b', 'c', 'd'], 2));