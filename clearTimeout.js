const originalSetTimeout = window.setTimeout

const originalClearTimeout = window.clearTimeout


const map = new Map();


window.setTimeout = function (callback, delay) {
console.log('setting time out...')
const id = originalSetTimeout(callback, delay)
map.set(id, callback)
return id
}


window.clearTimeout = function(id) {
if (map.has(id)) {
originalClearTimeout(id)
map.delete(id)
console.log('cleared timeout...', map, id)
}
}


window.clearAllTimeout = function () {
	map.clear()
}