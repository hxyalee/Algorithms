let rearrange = (arr1, arr2) => {
	let visited = new Set();
	arr2.forEach((newIdx, i) => {
		let tmp;
		visited.add(newIdx);
		if(!visited.has(i)){
			tmp = arr1[i]
			arr1[i] = arr1[newIdx];
			arr1[newIdx] = tmp
		}
	});
	return arr1;
}
// Keep track of visited indices and make sure youre not perorming unnecessary replacements
// O(n) as index of is a constant time operation since arrays are objects in js
let rearrangeNEW = (arr1, arr2) => {
	return arr1 = arr2.map((item, idx) => arr1[arr2.indexOf(idx)])
}
console.log(rearrange(['C','D','E','F','G'], [3,0,4,1,2]))