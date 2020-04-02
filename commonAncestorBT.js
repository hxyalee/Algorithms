/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * NOT WORKING!!!!!!!!!!!!!!!!!!!!!
 */
var lowestCommonAncestor = function(root, p, q) {

    let stack = new Array();
    stack.push(root);
    let track = new Object();
    track[root] = null
    // iterate until we found p and q in the tree
    while(stack.length > 0){
        let node = stack.pop();
        if(node.left != null){
            track[node.left] = node;
            stack.push(node.left);
        }
        if(node.right != null){
            track[node.right] = node;
            stack.push(node.right)
        }
    }

    // backtrack until root
    let ancestors = new Set();
    while(p){
        ancestors.add(p);
        p = track[p];
    }
    console.log('here')
    console.log(ancestors)
    while(!ancestors.has(q)){
        q = track[q]
    }
    return q;
};