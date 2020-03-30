/* Given a grid of characters output a decoded message. 
 *The  message for the following would be IROCKA. (diagonally down right and diagonally up right if you can't go further .. you continue doing this) 
 * I B C A L K A
 * D R F C A E A
 * G H O E L A D
*/


let solution = ((arr) => {
	for(let i = 0; i < arr.length; i++){
		arr[i] = arr[i].split('')
	}
	let length = arr.length;
	let xLength = arr[0].length;
	let i = 0;
	let j = 0;
	let isDec = true;
	let result = ''
	for(j; j < xLength; j++){

		if(i == 0){
			isDec = true;
		} else if(i == length - 1){
			isDec = false;
		}
		result += arr[i][j];
		if(isDec) i ++;
		else i --
	}
	return result;
});
var arr = [
			['I','B','C','A','K','L','A'],
			['D','R','F','C','A','E','A'],
			['G','H','O','E','L','A','D']
		]
console.log(solution(arr));
