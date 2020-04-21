/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.map = new Map();		//{val:[idx1,idx2,idx3]...}
    this.arr = new Array();		// [[val, 0], [val, 1]///]
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    if(this.map.has(val)){
        this.map.get(val).push(this.arr.length)
        this.arr.push([val, this.map.get(val).length-1])
        return false;
    } else {
        this.map.set(val, [this.arr.length]);
        this.arr.push([val, this.map.get(val).length-1]) 
        return true;
    }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if(!this.map.has(val)) return false;
    
    let idx = this.map.get(val).pop();
    let endIdx = this.arr.length - 1;
    if(this.map.get(val).length == 0) this.map.delete(val);
    if(idx == endIdx){
        this.arr.pop();
        return true
    }
    let tmp = this.arr[idx];
    this.arr[idx] = this.arr[endIdx];
    this.arr[endIdx] = tmp;
    this.arr.pop()
    let key = this.arr[idx][0];
    let i = this.arr[idx][1];
    this.map.get(key)[i] = idx;
    return true
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)][0]
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */