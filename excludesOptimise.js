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
/*
{
  color: Map { 'red' => [ 0 ], 'silver' => [ 1, 3 ], 'blue' => [ 2 ] },
  type: Map { 'tv' => [ 0, 3 ], 'phone' => [ 1, 2 ] },
  age: Map { 18 => [ 0 ], 20 => [ 1, 3 ], 4 => [ 2 ] }
}

*/
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