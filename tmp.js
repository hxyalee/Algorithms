

let element = document.querySelector('div');

let debounce = (func, msec) => {
    let time = null;
    return(...args) => {
        if(time){
            clearTimeout(time)
        }
        time = setTimeout((...args) => {
            func(...args)
        }, msec)
    }
}