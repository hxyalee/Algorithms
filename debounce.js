const input = document.querySelector('button');


const debounce = (func, timer) => {
	let timeId = null;
	return (...args) => {
		if(timeId){
			clearTimeout(timeId);
		}
		timeId = setTimeout(() => {
			func(...args)
		}, timer)
	}	
}

/*
const debounce = (func, timer) => {
	let wait = true;
	return(...args) => {
		if(wait){
			wait = false;
			setTimeout(() => {
				func(...args);
				wait = true;
			}, timer)
		}
	}
}
*/

input.addEventListener('click', debounce((e) => {
	console.log(e); 
}, 10000));
