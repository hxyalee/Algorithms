/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) time and constant space when since res is OK
var productExceptSelf = function(nums) {
    let sz = nums.length
    let res = new Array(sz)
    res[0] = 1
    
    for(let i = 1; i < sz; i++){
        res[i] = res[i - 1] * nums[i - 1]
    }
    let r = 1
    for(let i = sz - 1; i >= 0; i--){
        res[i] = res[i] * r
        r = r * nums[i]
    }
    return res
    
};

 // O(n) time and O(N) space
var productExceptSelf = function(nums) {
    let sz = nums.length
    let lr = new Array(sz);
    let rl = new Array(sz);
    let res = new Array()
    lr[0] = 1
    rl[sz - 1] = 1
    
    
    for(let i = 1; i < sz; i++){
        lr[i] = lr[i - 1] * nums[i - 1]
    }
    for(let i = sz - 2; i >= 0; i--){
        rl[i] = rl[i + 1] * nums[i + 1]
    }
    for(let i = 0; i < sz; i++)
        res.push(rl[i]*lr[i])
    
    return res
    
};