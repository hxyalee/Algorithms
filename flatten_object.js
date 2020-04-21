function flatten_object_recursive(ob){
	let answer = new Object();
	for(let key in ob){
		// The hasOwnProperty() method returns a boolean 
		// indicating whether the object has the specified property 
		// as its own property (as opposed to inheriting it).
		// in returns a boolean if the thing can be found in the obj or in prototypical chain
		if(!ob.hasOwnProperty(key)) continue;

		if (typeof(ob[key]) == 'object' && ob[key] != null){
			let flatten = flatten_object_recursive(ob[key]);
			for(let x in flatten){
				if(!flatten.hasOwnProperty(x)) continue;
				answer[key + '.' + x] = flatten[x]
			}
		} else {
			answer[key] = ob[key]
		}
	}
	return answer
}

function object_to_array(obj){
	let res = Object.keys(obj).reduce((tot, key) => {

		return tot.concat(key ,obj[key])
	}, [])
	return res;
}

let obj = {
    name: "test",
    address: 'here',
    personal: "abc", 
    nested:{
    	hi:'hello'
    }

}

console.log(object_to_array(obj))