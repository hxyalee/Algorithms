/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// recursively create a BST with a sorted array.
// since BST is technically a sorted array
// this should be easy
var sortedArrayToBST = function(nums) {
   return helper(nums, 0, nums.length - 1)
};


let helper = function(nums, lo, hi) {
     if(lo > hi){
        return null;
    }
    var mid = Math.floor(lo + (hi - lo) / 2 );
    var node = new TreeNode(nums[mid]);
    
    node.left = helper(nums, lo, mid - 1);
    node.right = helper(nums, mid + 1, hi);
    return node
}