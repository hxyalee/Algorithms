/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
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


var findKthLargest = function(nums, k) {
    let s = new PriorityQueue();
    for(let i = 0; i < nums.length; i++){
        s.enqueue(nums[i])
    }
    console.log(s)
    for(let i = 1; i < k; i++){
        s.dequeue()
    }
    return s.front()
};