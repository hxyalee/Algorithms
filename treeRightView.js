

// Breadth first search where you search from the right side node the tree.
// Since youre traversing from the right hand side, only append the
// first node of the level of the tree.
let solution = (root) => {
	if (root == null){
		return []
	}
	let queue = new Array();
	queue.push(root);
	let result = new Array();
	
	while(Array.isArray(queue) && queue.length > 0){
		let levelLength = queue.length;
		for(let i = 0; i < levelLength; i++){
			let node = queue.shift();
			if(i == 0){
				result.push(node.val)
			}
			if(node.right != null){
				queue.push(node.right);
			}
			if(node.left != null){
				queue.push(node.left);
			}
		}
	}
	return result;
};
