
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

/*
excludes = {
	color:{'silver'},
	type:{'phone'}
}
*/

// O(N)
function convert(excludes){
	if (excludes == null) return;
	let mapSet = new Map();
	for(let i = 0; i < excludes.length; i++){
		if(mapSet.has(excludes[i].k)){
			mapSet.get(excludes[i].k).add(excludes[i].v)
		} else {
			mapSet.set(excludes[i].k, new Set())
			mapSet.get(excludes[i].k).add(excludes[i].v)
		}
	}
	return mapSet
}
excludes = convert(excludes)


function excludeItems(items, excludes){
	newItems = new Array();
	items.forEach(item => {
		let isExcluded = false;
		for(let key in item){
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

  a) "filter" returns anything that is true in the conditional. 
  This is doing the opposite. 
  (b) it's checking item[pair.v],
  which will never return a value. It should be "item[pair.k] !== pair.v"

3. How would you optimize it ?

*/


/* {color: 'red', type: 'tv', age: 18}, 
   {color: 'silver', type: 'phone', age: 20} ... ] 
    excludes = [ {k: 'color', v: 'silver'}, {k: 'type', v: 'tv'}, .... ] 
    function excludeItems(items, excludes) { 
      excludes.forEach(pair => { 
        items = items.filter(item => item[pair.k] === item[pair.v]); 
      }); 
      return items; 
    } 
    1. Describe what this function is doing...
      Excludes items according to the excludes array 
    2. What is wrong with that function ? 
      Its O(n^2). 
    3. How would you optimize it ?

*/
/*
const items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "phone", age: 4 },
  { color: "silver", type: "tv", age: 20 }
];
const excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "phone" }
];
*/
/*
{
  color: Map { 'red' => [ 0 ], 'silver' => [ 1, 3 ], 'blue' => [ 2 ] },
  type: Map { 'tv' => [ 0, 3 ], 'phone' => [ 1, 2 ] },
  age: Map { 18 => [ 0 ], 20 => [ 1, 3 ], 4 => [ 2 ] }
}

*/
/*
// search indexes for each key
const maps = items.reduce((acc, item, index) => {
  Object.keys(item).forEach(key => {
    if (!acc[key]) {
      acc[key] = new Map();
    }
    if (!acc[key].get(item[key])) {
      acc[key].set(item[key], []);
    }
    acc[key].get(item[key]).push(index);
  });
  return acc;
}, {});

// O(n) overall instead of O(n ^ 2)
function excludeItems(items, excludes, maps) {
  const excludeIndexes = new Set();
  
  // O(n)
  excludes.forEach(exclude => {
    const key = exclude.k;
    const value = exclude.v;
    
    // ~ O(1) for get
    for (let i of maps[key].get(value)) {
      excludeIndexes.add(i);
    }
  });
  console.log(excludeIndexes)
  // O(n)
  return items.reduce((acc, item, index) => {
    if (!excludeIndexes.has(index)) {
      acc.push(item);
    }
    return acc;
  }, []);
}
console.log(maps)
console.log(excludeItems(items, excludes, maps));
*/