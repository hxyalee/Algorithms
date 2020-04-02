/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
 // removing root nodes
var removeLeafNodes = function(root, target){
    if(root == null){
        return;
    }
    
    if(root.left != null){
        root.left = removeLeafNodes(root.left, target);
    }
    if(root.right != null){
        root.right = removeLeafNodes(root.right, target);
    }
    
    if(root.left == root.right && root.val === target){
        return null;
    }else{
        return root;
    }
    
};