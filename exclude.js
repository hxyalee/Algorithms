
//Given input:
// could be potentially more than 3 keys in  the object above 
excludes = [ 
	{k: 'color', v: 'silver'}, 
	{k: 'type', v: 'tv'}, 
	] 

items = [ 
	{color: 'red', type: 'tv', age: 18}, 
	{color: 'silver', type: 'phone', age: 20},
	{color: 'silver', silver:'silver'},
	] 

function excludeItems(items, excludes) { 
	excludes.forEach(pair => { 
		items = items.filter(item => item[pair.k] === item[pair.v]); 
	}); 
	return items; 
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

2. What is wrong with that function? 
	(O(N^2)) and its mutatable
3. How would you optimize it ?

*/