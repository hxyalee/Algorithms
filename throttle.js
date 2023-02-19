const input = document.querySelector('button');


/*
	Another way using date:
*/
/*
	const throttle = (func, timer) => {
		let last = 0;
		return(...args) => {
			const now = new Date().getTime();
			if(now - last < timer){
				return
			}
			last = now;
			return func(...args)
		};
	}
*/

function throttle (callback, limit) {
    var wait = false;                  // Initially, we're not waiting
    return function () {               // We return a throttled function
        if (!wait) {                   // If we're not waiting
            callback.call();           // Execute users function
            wait = true;               // Prevent future invocations
            setTimeout(() => {  	   // After a period of time
                wait = false;          //O And allow future invocations
            }, limit);
        }
    }
}


function throttle (callback, time) {
	let shouldWait = false;
	let waitingArguments;
	const timeoutFunc = () => {
		if(waitingArguments) {
			callback(waitingArguments);
			waitingArguments = null;
			setTimout(timeoutFunc, time);
		} else {
			shouldWait = false;
		}
	}
	
	return (...args) => {
		if(shouldWait) {
			waitingArguments = args;
			return
		}
		callback(...args);
		shouldWait = true;
		setTimeout(timeoutFunc, delay)		
	}


}

input.addEventListener('click',throttle(() => console.log('clicked'), 10000))
