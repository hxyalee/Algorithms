/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 // recursively look for k'th element in order search
var kthSmallest = function(root, k) {
    
    let ans;
    
    let helper = (root) => {
        if(root == null){
            return
        }
        helper(root.left)
        if(k == 1){
            ans = root.val
        }
        k --;
        helper(root.right)
    }
    
    helper(root);
    return ans
};