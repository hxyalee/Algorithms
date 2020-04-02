/*
Given an input array and another array
that describes a new index for each element,
mutate the input array so that each element ends up in their new index.
Discuss the runtime of the algorithm 
and how you can be sure there won't be any infinite loops.
*/
let mutate = (input, newIndexArr) => {
    let visited = new Array();
    newIndexArr.forEach((newIdx, i) => {
        vistied.push(newIdx);
        // not vistied yet
        if(vistied.indexOf(i) < 0){
            let tmp = input[i];
            input[i] = input[newIdx];
            input[newIdx] = tmp
        }
    });
}

function reposition(arr, indices){
    var newArr = []; // I'm not sure if extra space is allowed. If it is, the solution should be this simple.

    for(var i = 0; i < arr.length; ++i) {
        var newIndex = indices[i];
        newArr[newIndex] = arr[i];
    }
    return newArr;
}
arr = indices.map(function (item, index) {
    return arr[indices.indexOf(index)];
});

// you know there aren't infinite loops because the algorithm reduces the number of misplaced elements at each step