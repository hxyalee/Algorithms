/*
	Given a function return a function that executed original function 1 second later.
*/

let func = (string) => console.log(string)

let second = 1000

let afterOneSecond = (func, second, arg) => {
		setTimeout(func, second, arg);
	
}


afterOneSecond(func, second, 'hello');

/*
function myFunc(arg) {
  console.log(`arg was => ${arg}`);
}

setTimeout(myFunc, 1500, 'funky');

*/