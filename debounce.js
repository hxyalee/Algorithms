// Use debounce just to prevent the filling of the callback queue
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// if immediate is false - debounce
// if immediate is true - throttle
function debounce(func, wait, immediate=false) {
  let timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any
    // parameters passed to executedFunction
    let context = this;
    let args = Array.from(arguments);
    
    // The function to be called after 
    // the debounce time has elapsed
    let later = function() {
      // null timeout to indicate the debounce ended
      timeout = null;
	    
      // Call function now if you did not on the leading end
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    let callNow = immediate && !timeout;
	
    // This will reset the waiting every function execution.
    // This is the step that prevents the function from
    // being executed because it will never reach the 
    // inside of the previous setTimeout  
    clearTimeout(timeout);
	
    // Restart the debounce waiting period.
    // setTimeout returns a truthy value (it differs in web vs node)
    timeout = setTimeout(later, wait);
	
    // Call immediately if you're dong a leading
    // end execution
    if (callNow) func.apply(context, args);
  };
};


const input = document.querySelector('button');

/*
const debounce = (func, timer) => {
	let timeId = null;
	return (...args) => {
		let context = this;

		if(timeId){
			clearTimeout(timeId);
		}
		console.log(argumnets)
		timeId = setTimeout(() => {
			func.apply(context, ...args)
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
	console.log(e.target); 
}, 1000));
