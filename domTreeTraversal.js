// iterative method
/*
let getIndex = (list, target) =>{
	// Array.from(list).indexOf(target);
    Array.prototype.indexOf.call(list, target);
}
*/
let getPath = (root, target) => {
    let path = new Array();
    let curr = target;
    while(curr != root){
        idx = Array.from(curr.parentNode.children).indexOf(curr)
        path.unshift(getIndex(curr.parentNode.children, curr));   // push also works
        curr = curr.parentNode;
    }
    return path;
}

let traverseTree = (root, path) => {
    let curr = root;
    let pathLen = path.length;
    for(let i = 0; i < pathLen; i ++){    // start from last index if push
        let currIdx = path[i];
        curr = curr.children[currIdx];
    }
    return curr;
}


let DOMDoppleGanger = (rootA, rootB, target) => {
    let path = getPath(rootA, target);
    return traverseTree(rootB, path);
}


// recursive

let DOMDoppleGangerRec = (rootA, rootB, target) => {
    let path = new Array();

    let getPath  = (root, target) => {
        it(target === root){
            return;
        }
        let idx = getIndex(target.parentNode.children, target);
        path.unshift(idx);
        getPath(root, target.parentNode);
    }

    let traverseTree = (root, path) => {
        if(path.length === 0){
            return root;
        } else{
        	let idx = path.shift()
            traverseTree(root.children[idx], path);
        }
    }
    getPath(rootA, target);
    return traverseTree(rootB, target)
}