const originalSetTimeout = window.setTimeout

const originalClearTimeout = window.clearTimeout


const map = {}


window.setTimeout = function (callback, delay) {
console.log('setting time out...')
const id = originalSetTimeout(callback, delay)
map[id] = callback
return id
}


window.clearTimeout = function(id) {
if (map.hasOwnProperty(id)) {
originalClearTimeout(id)
delete map[id]
console.log('cleared timeout...', map, id)
}
}


window.clearAllTimeout = function () {
Object.keys(map).forEach(id => clearTimeout(id))
}