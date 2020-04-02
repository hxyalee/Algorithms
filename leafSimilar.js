/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 // check if leaves are equal in two trees using DFS since level order is buggy
var leafSimilar = function(root1, root2) {
    if(root1 == null)
        return root2 == null

    if(root2 == null)
        return root1 == null

    let stack = new Array();
    let leaves = new Array();
    stack.push(root1);
    
    while(Array.isArray(stack) && stack.length > 0){
        let node = stack.pop();
        // is leaf node
        if(node.left == null && node.right == null)
            leaves.push(node.val);
        
        if(node.right != null)
            stack.push(node.right);
        
        if(node.left != null)
            stack.push(node.left);
    }
    
    stack = [];
    stack.push(root2);
    while(Array.isArray(stack) && stack.length > 0){
        let node = stack.pop();
        if(node.left == null && node.right == null){
            let v = leaves.shift();
            if(v != node.val)
                return false
        }
        if(node.right != null)
            stack.push(node.right)
        if(node.left != null)
            stack.push(node.left)        
    }
    return true  
};