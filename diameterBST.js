/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    if(root == null){
            return 0;
        }
    
    let helper = (root) => {
        if(root == null){
            return 0;
        }
        let l = helper(root.left);
        let r = helper(root.right);
        res = Math.max(res, l + r + 1);
        return Math.max(l,r) + 1
    }
    helper(root)
    return res - 1
    
};