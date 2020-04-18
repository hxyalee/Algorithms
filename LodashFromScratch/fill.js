//Fills elements of array with value from start up to, but not including, end.

const fill = (arr, val, start=0, end) => {
	if(end == undefined) end = arr.length;
	for(let i = 0; i < arr.length; i++){
		if(start <= i && i < end) {
			arr[i] = val
		}
	}
	return arr;
}

console.log(fill([4, 6, 8, 10], '*', 1, 3))