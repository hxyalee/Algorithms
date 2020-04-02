/*
	Given a function return a function that executed original function 1 second later.
*/

let func = (string) => console.log(string)

let seconds = 1000

let afterOneSecond = (func, seconds, arg) => {
		setTimeout(func, seconds, arg);	
}


afterOneSecond(func, seconds, 'hello');

/*
function myFunc(arg) {
  console.log(`arg was => ${arg}`);
}

setTimeout(myFunc, 1500, 'funky');

*/