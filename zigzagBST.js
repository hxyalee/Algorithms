/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 // Breadth first search where I have a flag
 // First level (root) will start at from right, then left, then right.
 // For every level, I want to see if I'm coming from left or right
 // then I want to append the values in normal or reverse order accordingly.

var zigzagLevelOrder = function(root) {
    if(root == null){
        return [];
    };
    let result = new Array();
    result.push([root.val].slice())
    let fromLeft = false;
    let queue = new Array();
    queue.push(root);
    
    while(Array.isArray(queue) && queue.length > 0){
        let levelNodes = queue.length;
        let values = new Array();
        for(let i = 0; i < levelNodes; i ++){
            let node = queue.shift();
            
            if(node.left != null){
                queue.push(node.left);
                values.push(node.left.val)
            }
            if(node.right != null){
                queue.push(node.right)
                values.push(node.right.val)
                
            }
        }
        // not leaf
        if(queue.length > 0){
            if(fromLeft){
                result.push(values.slice())
                fromLeft = !fromLeft
            } else{
                result.push(values.reverse().slice())
                fromLeft = !fromLeft
            }    
        }
        
    }
    return result
    
};