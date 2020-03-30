

function getIndex(node, target){
	return Array.prototype.indexOf.call(node, target);
}

function getPath(root, node){
	let current = node;
	let path = [];
	while(root != current){
		let toAdd = current.parentNode.children.indexOf(current);
		current = current.parentNode;
	}
	return path;
}

function locateDoppleGanger(root, path){
	let current = root;
	let len = path.length;
	for(let i = 0; i < len; i++){
		let currElement = path[i];
		current  = path.children[currentElement];
	}
	return current;
}

function getDoppleGanger(rootA, rootB, node){
	let path = getPath(rootA, node);		
	let node = locateDoppleGanger(rootB, path)
}