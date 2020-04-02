/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 // BFS find mode of all nodes in the tree
var findMode = function(root) {
    if(root == undefined){
        return [];
    }
    let queue = new Array();
    queue.push(root);
    let modes = new Object();
    while(Array.isArray(queue) && queue.length > 0){
        let node = queue.shift();
        if(node.val in modes){
            modes[node.val] ++;
        }else{
            modes[node.val] = 1;            
        }
        
        if(node.left != null){
            queue.push(node.left);
        }
        if(node.right != null){
            queue.push(node.right);
        }
    }
    
    
    mode = Math.max.apply(null, Object.values(modes))
    let ret = []
    for(i in modes){ 
        if(modes[i] == mode){
            ret.push(i);
        }
    }
    return ret;
};