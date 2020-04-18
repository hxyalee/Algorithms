/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // zeros (first part of the arr)
    let z = 0;
    // twos (last part of the array)
    let t = nums.length - 1;
    let i = 0;
    
    while(z <= t && i <= t){
        if(nums[i] == 0){
            nums[i] = nums[z];
            nums[z] = 0;
            i ++;
            z ++;
        } else if(nums[i] == 2){
            nums[i] = nums[t];
            nums[t] = 2;
            t --;
        } else{
            i ++
        }
    }
};