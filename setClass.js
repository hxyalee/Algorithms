/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.valueIdx = {};
    this.values = [];
    
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(val in this.valueIdx){
        return false;
    }else{
        this.values.push(val);
        this.valueIdx[val] = this.values.length - 1;
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {

    if(val in this.valueIdx){
        
        let index = this.valueIdx[val];
        let toSwap = this.values[this.values.length - 1];
        
        this.valueIdx[toSwap] = index;
        this.values[index] = toSwap;
        this.values[this.values.length - 1] = val;
        
        delete this.valueIdx[val];
        this.values.pop()
        return true;        
    }else{
        return false;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let rand = Math.floor(Math.random() * (this.values.length))
    console.log(this.values[rand])
    return(this.values[rand])
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */