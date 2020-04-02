/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 // permutation using backtracking
var permute = function(nums) {
  let res = [];
    
    let permutations = (curr, remaining) => {
        if(remaining.length === 0){
            // res.push([...curr]);
            res.push(curr.slice());
            
        }else{
            // loop through each remaining elements
            for(let i = 0; i < remaining.length; i++){
                // insert the ith element to the end of current
                curr.push(remaining[i]);
                // recurse with intersed element removed
                permutations(curr, remaining.slice(0,i).concat(remaining.slice(i+1)))
                curr.pop();
            }
        }
    }
    permutations([], nums)
    return res
};

