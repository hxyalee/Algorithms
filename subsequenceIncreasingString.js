/**
 * @param {number[]} nums
 * @return {number}
 * Given an unsorted array of integers, 
 * find the length of longest continuous increasing subsequence (subarray).
 *
 */
var findLengthOfLCIS = function(nums) {
    let result = 0;
    let restart = 0;
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i - 1]>= nums[i]){
            restart = i;
        }
        result = Math.max(result, i - restart + 1)
    }
    return result
};