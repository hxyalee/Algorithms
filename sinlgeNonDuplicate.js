/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let set = new Set();
    for(number of nums){
        if(set.has(number))
            set.delete(number)
        else
            set.add(number)
    }
    
    return (Array.from(set.values())[0])
};