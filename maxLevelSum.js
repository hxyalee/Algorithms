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
var maxLevelSum = function(root) {
    if(root == null) return 0;
    let maxSum = -1000000
    let queue = new Array();
    let maxLevel = 0;;
    let level = 1;
    queue.push(root);
    while(Array.isArray(queue) && queue.length > 0){
        let levelLength = queue.length;
        let curSum = 0;
        for(let i = 0; i < levelLength; i++){
            let node = queue.shift();
            curSum += node.val;
            if(node.left != null) queue.push(node.left)
            if(node.right != null) queue.push(node.right)            
        }
        if(curSum > maxSum){
            maxSum = curSum;
            maxLevel = level;
        }
        level += 1;
    }
    
    return maxLevel
};