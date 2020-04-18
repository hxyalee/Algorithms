class PriorityQueue {
	constructor(){
		this.elements = new Array()
	}
	enqueue(item){
		let end = true;
		for(let i = 0; i < this.elements.length; i++){
			// change the sign accordingly if max/min 
			if(this.elements[i] <= item){
				this.elements.splice(i, 0, item);
				end = false;
				break;
			}
		}
		if(end) this.elements.push(item)
	}
	dequeue(){
		return this.elements.shift();
	}
	front(){
		return this.elements[0];
	}
	rear(){
		return this.elements[this.elements.length - 1];
	}
}

