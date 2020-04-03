
let swap = (arr, i, j) => {
	tmp = arr[i]
	arr[i] = arr[j];
	arr[j] = tmp
}

let shade = (arr, n) => {
	arr.sort((a,b) => b - a);
	let blocks = 0;
	let lastIdx = n - 1
	while(lastIdx > 0){
		let count = 0;

		for(let i = 0; i < n; i++){
			if(arr[i] > 0) count ++
		}

		// case where we want to remove the lowest level
		if(count >= arr[0]){
			blocks++;
			for(let i = 0; i < count; i++) arr[i] --;
		// case where we want to remove the horizontal
		} else {
			blocks++;
			arr[0] = 0;
			swap(arr, 0, lastIdx);
			lastIdx --;
		}
		let max = 0;
		for(let i = 0; i < n; i++){
			max += arr[i]
		}
		if(max === 0){
			break
		}
	}

	return blocks
}

console.log(shade([2, 1, 2, 5, 1, 2], 6))