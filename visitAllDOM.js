let root = document.querySelector('html');

// Will return depth just for sake of testing
// Simple BFS where all elements are just nodes.
let visitAllNodes = (root) => {
	if(root == null){
		return 0;
	}
	let queue = [];
	let depth = 0;
	queue.push(root);
	while(Array.isArray(queue) && queue.length > 0){
		let len = queue.length;
		for(let i = 0; i < len; i++){
			let node = queue.shift();
			if(node.children){
				queue.push(...node.children)
			}
		}
		depth ++;
	}
	return depth;
}