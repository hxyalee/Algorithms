/*
For the given binary tree find the distance or number of hop required to move from one node to another.
Number of hops is equal to the number of nodes in between them so we only have to get rid of the indices

*/


class node{
	constructor(val){
		this.val = val;
		this.left = this.right = null;
	}
}

let solution = (root, origin, to) => {
	if (root == undefined){
		return;
	}
	let queue = [];
	let fromIdx;
	let toIdx;
	queue.push(root);
	while(Array.isArray(queue) && queue.length > 0){
		let len = queue.length;
		for(let i = 0; i < len; i++){
			let node = queue.shift();
			
			if(node.left != undefined){
				queue.push(node.left);
				val = node.left.val;
				if(val === origin){
					fromIdx = i;
				}else if(val === to){
					toIdx = i;
				}
			}
			if(node.right != undefined){
				queue.push(node.right);
				val = node.right.val;
				if(val === origin){
					fromIdx = i;
				}else if(val === to){
					toIdx = i;
				}
			}
		}
		if(fromIdx && toIdx){
			break;
		}
	}
	return toIdx - fromIdx;

}