/*
	Take 2 strings return index of char where is not the same.
	'a','b' => 0
	'abc','abd' => 2
*/

let solution = (s1, s2) => {
	s1 = s1.split('')
	s2 = s2.split('')
	let index;
	s1.forEach((c, idx) => {
		if(c !== s2[idx]){
			index = idx;
		}
	})

	return index;
}


console.log(solution('abc', 'abc'));