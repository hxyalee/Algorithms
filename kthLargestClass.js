/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    nums.sort((a,b) => b - a)
    this.arr = nums;
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    for(let i = 0; i < this.arr.length; i++){
        if(this.arr[i] < val) {
            this.arr.splice(i, 0, val);
            return this.arr[this.k-1]
        }
    }
    this.arr.push(val)
    return this.arr[this.k - 1]

};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */