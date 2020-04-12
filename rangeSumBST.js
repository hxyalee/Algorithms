/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if(root == null) return 0;
    let sum = 0;
    let queue = new Array();
    queue.push(root)
    while(Array.isArray(queue) && queue.length > 0){
        let curr = queue.pop();
        if(L <= curr.val && curr.val <= R){
            sum += curr.val
        }
        if(curr.left != null){
            queue.push(curr.left)
        }
        if(curr.right != null){
            queue.push(curr.right)
        }
    }
    return sum;
};