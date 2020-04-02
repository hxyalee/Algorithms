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
 // sum of the deepest num of the nodes;
var deepestLeavesSum = function(root) {
    if(root == null){
        return 0;
    }
    let queue = new Array();
    queue.push(root);
    let deepest = new Array();
    
    while(Array.isArray(queue) && queue.length > 0){
        let levelLen = queue.length;
        deepest = [];
        
        for(let i = 0; i < levelLen; i++){
            let node = queue.shift();
            if(node.left == null && node.right == null){
                deepest.push(node.val);
            }
            if(node.left != null){
                queue.push(node.left);
            }
            if(node.right != null){
                queue.push(node.right)
            }
        }
    }
    return deepest.reduce((total, e) => total + e, 0)   
};