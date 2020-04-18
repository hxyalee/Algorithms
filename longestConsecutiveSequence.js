/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set()
    for(num of nums) set.add(num)
    let length = 0;
    for(num of nums){
        if(!(num-1 in set)){
            let currLen = 1;
            let currNum = num
            while(set.has(currNum+1)) {
                currLen ++;
                currNum ++;
            }
            length = Math.max(currLen, length)
        }    
    }
    return length;
};