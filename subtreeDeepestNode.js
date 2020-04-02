/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 // the deepest <= 3 nodes subtree.
var subtreeWithAllDeepest = function(root) {
   
    let isParentLeaf = (l, r) => {
        if(l.left == null && l.right == null && r.left == null && r.right == null){
            return true        
        }
        return false
    }
    
    if(root == null){
        return null;
    } if(root.left == null && root.right == null) return root
    let queue = new Array();
    queue.push(root);
    let subtree = null;
    
    

    
    while(Array.isArray(queue) && queue.length > 0){
        let qlen = queue.length;
        for(let i = 0; i < qlen; i++){
            let node = queue.shift()
            if(node.left != null && node.right != null){
                if(isParentLeaf(node.left, node.right)){
                    subtree = node;
                }
            }
            if(node.left != null){
                queue.push(node.left)
            }
            if(node.right != null){
                queue.push(node.right)
            }
        }
    }
    return subtree;
};