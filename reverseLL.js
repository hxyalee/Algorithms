
class node{
	constructor(value){
		this.val = value;
		this.next = null
	}
}

let reverseLLIter = (head) => {
	let curr = head;
	let prev = null;
	while(curr != null){
		let tmp = curr.next;
		curr = prev;
		prev = curr;
		curr.next = tmp;
	}
	return prev;
}

let reverseRec = (head) => {
	let helper = (node) => {
		if(node.next == null){
			head = node;
			return
		}
		helper(node.next);
		let save = node.next;
		save.next = node;
		node.next = null;
	}
}