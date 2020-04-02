/**
 * @param {number[]} nums
 * @return {number}
 * Given an unsorted array of integers, 
 * find the length of longest continuous increasing subsequence (subarray).
 *
 */
 // Sliding window approach
 // see if previous is bigger than curremt
 // then its not increasing.
 // set the result to be there 
var findLengthOfLCIS = function(nums) {
    let result = 0;
    let anchor = 0;
    for(let i = 0; i < nums.length; i++){
    	// prev is greater than curr
        if(i > 0 && nums[i - 1]>= nums[i]){
            anchor = i;
        }
        // +1 since were gettig the postion not index
        result = Math.max(result, i - anchor + 1)
    }
    return result
};