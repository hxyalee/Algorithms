
//Given input:
// could be potentially more than 3 keys in  the object above 
items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "phone", age: 4 },
  { color: "silver", type: "tv", age: 20 }
];
excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "phone" }
];

/*
function excludeItems(items, excludes) { 
	excludes.forEach(pair => { 						FIXED HERE
		items = items.filter(item => item[pair.k] !== pair.v); 
	}); 
	return items; 
}
*/
/*
function excludeItems(items, excludes) {
     let result = items.filter(item => {
        for(let e = 0; e < excludes.length; e++) {
            let pair = excludes[e];
            if((item[pair.k] === pair.v)) {
                return false;
                // moving to next item. no need to see next excluded element
            }
        }
        return true;
    });
    return result;
}
*/


excludes = new Map();
excludes.set('color', new Set())
excludes.set('type', new Set())
excludes.get('color').add('silver')
excludes.get('type').add('phone')

function excludeItems(items, excludes){
	newItems = new Array();
	items.forEach(item => {
		let isExcluded = false;
		for(let key in item){
			//console.log(item, key)
			//console.log(excludes[key])
			if(excludes.get(key) && excludes.get(key).has(item[key])){
				isExcluded = true;
				break
			}
		}
		if(!isExcluded) newItems.push(item)
	})
	return newItems
}
console.log(excludeItems(items, excludes))



excludes = {
	color:['silver'],
	type:['phone']
}

function excludeItems(items, excludes){
	newItems = new Array();
	items.forEach(item => {
		let isExcluded = false;
		for(let key in item){
			//console.log(item, key)
			//console.log(excludes[key])
			if(excludes[key] && excludes[key].indexOf(item[key]) !== -1){
				isExcluded = true;
				break
			}
		}
		if(!isExcluded) newItems.push(item)
	})
	return newItems
}





/*

1. Describe what this function is doing
	For each item (pair) in excludes:
		filter iterms where item[k of excludes] ==== item[v of excludes]

	the function filters elements in the items array
	such that for every item in the excludes array
	if property k, v's value in each element in the array is 
	a property in the items array AND value of these properties in 
	the items array are same

	the function is trying to return all items in which items
	filtering out items that have the same matching k and v in excludes

2. What is wrong with that function? 
	(O(N^2)) and its mutatable
3. How would you optimize it ?

*/

