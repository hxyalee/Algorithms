/*
 Given a node from a DOM tree find the node in the same position from an identical DOM tree. 
Assume:
	input = rootA, rootB, target
*/
// iterative
function getIndex(node, target){
	// Array.from(node).indexof(target) -- valid ES6 Syntax
	return Array.prototype.indexOf.call(node, target);
}

function getPath(root, target){
	let current = target;
	let path = [];
	while(root !== current){
		// since parentNode.childNodes is not an array (HTML NODE), use helper
		path.unshift(current.parentNode.childNodes, current);
		current = current.parentNode;
	}
	return path;
}

function locatePath(root, path){
	let current = root;
	let pathLen = path.length;
	for(let i = 0; i < pathLen; i++){
		let currE = path[i]
		current = current.childNodes[currE];
	}
	return current;
}

function getNodeSamePos(rootA, rootB, target){
	let path = getPath(rootA, target);
	let node = locatePath(rootB, path)
}


// recursive
var rootA, rootB;

function findNodeB(target) {
    // Variable to store path up the DOM tree
    var travelPath = [];

    // Method to travel up the DOM tree and store path to exact node
    var establishPath = function(travelNode) {
        // If we have reached the top level node we want to return
        // otherwise we travel up another level on the tree
        if (travelNode === rootA) {
            return;
        } else {
            establishPath(travelNode.parentNode);
        }

        // We store the index of current child in our path
        var index = travelNode.parentNode.childNodes.indexOf(travelNode);
        travelPath.push(index);     
    }

    var traverseTree = function(root, path) {
        if(path.length === 0) {
            return root;
        } else {
            traverseTree(root.childNodes[path.pop()], path);
        }
    }

    establishPath(rootB, target);

    return traverseTree(rootB, travelPath);
} 