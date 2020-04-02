/**
 * @param {number[]} nums
 * @return {number}
 */

// turtle rabbit algorithm
// turtle moves once at a time
// rabbit moves twice 
// move to the index value of the array
var findDuplicate = function(nums) {
    let val = 0;
    if(nums == null){
        return 0;
    }
    let turtle = index;
    let rabbit = index;
    
    while(true){
        rabbit = nums[rabbit];
        rabbit = nums[rabbit];
        turtle = nums[turtle];

        if(turtle === rabbit){
            break
        }
    }
    // Find the "entrance" to the cycle.
    let ptr1 = nums[0];
    let ptr2 = turtle;
    while (ptr1 != ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
};
