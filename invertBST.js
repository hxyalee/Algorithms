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
 // invert a tree in a way that left is right and right is left
var invertTree = function(root) {
    
    if(root == null)
        return root;

    
    let queue = [];
    queue.push(root)
    
    while(Array.isArray(queue) && queue.length > 0){
            let node = queue.shift()
            let tmp = node.left;
            node.left = node.right;
            node.right = tmp;

            if(node.left != null){
                queue.push(node.left);
            }       
            if(node.right != null){
                queue.push(node.right)
            }
    }
    return root
};

var invertTreeRec = (root) => {
    if(root == null){
        return root;
    }
    let l = invertTreeRec(root.left);
    let r = invertTreeRec(root.right);
    root.left = r;
    root.right = l;
    return root
}