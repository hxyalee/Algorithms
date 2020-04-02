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
 // get the second minimum value from BST.
var findSecondMinimumValue = function(root) {
    if(root == null){
        return -1;
    }
    let s = new Set();
    
    let stack = new Array();
    stack.push(root);
    while(Array.isArray(stack) && stack.length > 0){
        let node = stack.pop();
        if(node.left != null){
            stack.push(node.left)
        }
        if(node.right != null){
            stack.push(node.right)
        }
        s.add(node.val);
    }
    if(s.size <= 1){
        return -1
    }
    let min = Math.min.apply(null, Array.from(s))
    s.delete(min)
    return Math.min.apply(null, Array.from(s))
};