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
var sumOfLeftLeaves = function(root) {
    if(root == null) return 0;
    let queue = new Array();
    let sum = 0;
    queue.push(root);
    while(Array.isArray(queue) && queue.length > 0){
        let node = queue.shift();
        if(node.left != null){
            if(node.left.left == null && node.left.right == null)
                sum += node.left.val
            else{
                queue.push(node.left)
            }
        }
        if(node.right != null) queue.push(node.right)
    }
    return sum
};