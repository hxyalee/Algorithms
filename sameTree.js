/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p == null){
        return q == null;
    } 
    if(q == null){
        return p == null;
    }
    
    let queue1 = new Array();
    let queue2 = new Array();
    
    queue1.push(p);
    queue2.push(q);
    
    while(Array.isArray(queue1) && queue1.length > 0){
        let node1 = queue1.shift();
        let node2 = queue2.shift();
        
        if(node1 == null && node2 == null){
            continue;
        } else {
            if(node1 == null || node2 == null){
                return false;
            }
            if(node1.val != node2.val){
                return false;
            }
            queue1.push(node1.left);
            queue1.push(node1.right);
            queue2.push(node2.left);
            queue2.push(node2.right)            
        }
    }
    
    return queue1.length == 0
    
    
};