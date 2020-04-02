/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 // searching a 'rotated' array
 // any rotated array,one half must be ALWAYS sorted
var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while(lo <= hi){
        let mid = Math.floor(lo + (hi - lo) / 2);
        if(nums[mid] == target) return mid;
        
        // check the left half is sorted
        if(nums[lo] <= nums[mid]){
            // check if target is in left hand size
            if(nums[lo] <= target && target <= nums[mid]){
                hi = mid - 1
            // search righthand side
            } else{
                lo = mid + 1;
            }
        // right had is sorted
        } else {
            if(nums[mid] <= target && target <= nums[hi]){
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }
    }
    return -1;
    
};